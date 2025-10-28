#!/usr/bin/env bun

import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

const BASE_URL = "https://shopify.dev/docs/api/app-home/polaris-web-components";
const COMPONENTS_DIR = join(process.cwd(), "src", "components");
const CURSOR_API_BASE = "https://api.cursor.com/v0";

// Get API key and repository info from environment
const CURSOR_API_KEY = process.env.CURSOR_API_KEY;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const GITHUB_REF = process.env.GITHUB_REF || "main";

// Parse command line arguments
const args = process.argv.slice(2);
const componentsFilter = args
  .find((arg) => arg.startsWith("--components="))
  ?.split("=")[1];

interface ComponentDefinition {
  name: string;
  category: string;
  url: string;
  markdownUrl: string;
}

/**
 * Sleep for a specified number of milliseconds
 */
async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Rate limiter to ensure we don't exceed API rate limits
 *
 * Implements a sliding window rate limiter that tracks all requests
 * and enforces a maximum number of requests per time window.
 */
class RateLimiter {
  private requestTimestamps: number[] = [];
  private maxRequests: number;
  private windowMs: number;

  /**
   * @param maxRequests - Maximum number of requests allowed in the time window
   * @param windowMs - Time window in milliseconds (default: 60000ms = 1 minute)
   */
  constructor(maxRequests: number, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  /**
   * Wait until a request can be made without exceeding the rate limit
   */
  async waitForSlot(): Promise<void> {
    const now = Date.now();

    // Remove timestamps outside the current window
    this.requestTimestamps = this.requestTimestamps.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    // If we're at the limit, wait until the oldest request expires
    if (this.requestTimestamps.length >= this.maxRequests) {
      const oldestRequest = this.requestTimestamps[0];
      const waitTime = this.windowMs - (now - oldestRequest) + 100; // Add 100ms buffer

      console.log(
        `  ⏱️  Rate limit: ${this.requestTimestamps.length}/${
          this.maxRequests
        } requests in window. Waiting ${Math.ceil(waitTime / 1000)}s...`
      );

      await sleep(waitTime);

      // Recursively check again after waiting
      return this.waitForSlot();
    }

    // Record this request
    this.requestTimestamps.push(Date.now());
  }

  /**
   * Get current request count in the window
   */
  getRequestCount(): number {
    const now = Date.now();
    this.requestTimestamps = this.requestTimestamps.filter(
      (timestamp) => now - timestamp < this.windowMs
    );
    return this.requestTimestamps.length;
  }
}

// Create a global rate limiter for Cursor API calls: 20 requests per minute
const cursorApiRateLimiter = new RateLimiter(20, 60000);

/**
 * Fetch with retry logic and proactive rate limiting
 *
 * For Cursor API calls, enforces a rate limit of 20 requests per minute.
 * Also handles 429 (Rate Limit Exceeded) responses by:
 * - Checking the Retry-After header if present
 * - Using exponential backoff if no header
 * - Retrying up to maxRetries times
 *
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @param maxRetries - Maximum number of retries (default: 3)
 * @returns The fetch Response
 * @throws Error if max retries exceeded
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3
): Promise<Response> {
  // Check if this is a Cursor API call and apply rate limiting
  const isCursorApi = url.startsWith(CURSOR_API_BASE);

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    // Wait for rate limiter before making Cursor API calls
    if (isCursorApi) {
      await cursorApiRateLimiter.waitForSlot();
    }

    const response = await fetch(url, options);

    // If rate limited, wait and retry
    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      const waitTime = retryAfter
        ? parseInt(retryAfter) * 1000
        : Math.pow(2, attempt) * 1000; // Exponential backoff

      console.log(
        `  ⚠️  Rate limited by API. Waiting ${waitTime / 1000}s before retry...`
      );
      await sleep(waitTime);
      continue;
    }

    return response;
  }

  throw new Error("Max retries exceeded due to rate limiting");
}

/**
 * Fetch and parse the main Polaris Web Components documentation
 */
async function fetchComponentsList(): Promise<ComponentDefinition[]> {
  console.log("Fetching main Polaris Web Components documentation...");

  const response = await fetch(`${BASE_URL}.md`);
  const markdown = await response.text();

  const components: ComponentDefinition[] = [];

  // Parse markdown to find component links
  // Pattern: https://shopify.dev/docs/api/app-home/polaris-web-components/[category]/[name]
  const linkPattern =
    /(https:\/\/shopify.dev\/docs\/api\/app-home\/polaris-web-components\/)([\w+-]+)\/([\w+-]+)/g;

  let match;
  while ((match = linkPattern.exec(markdown)) !== null) {
    const [, , category, name] = match;

    components.push({
      name,
      category,
      url: `${BASE_URL}/${category}/${name}`,
      markdownUrl: `${BASE_URL}/${category}/${name}.md`,
    });
  }

  console.log(`Found ${components.length} components`);
  return components;
}

/**
 * Fetch component markdown documentation
 */
async function fetchComponentMarkdown(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return await response.text();
}

/**
 * Create a Cursor Background Agent task to generate component files
 *
 * This function:
 * 1. Creates a detailed prompt with component requirements
 * 2. Launches a background agent via POST /v0/agents
 * 3. Returns the agent ID immediately without waiting for completion
 *
 * @see https://docs.cursor.com/context/api-keys
 */
async function generateWithCursorAgent(
  componentName: string,
  category: string,
  markdown: string
): Promise<string> {
  if (!CURSOR_API_KEY) {
    throw new Error(
      "CURSOR_API_KEY environment variable is not set. Please set it to use the Cursor Agent API."
    );
  }

  const pascalName = `S${componentName.replace(/\s+/g, "")}`;
  const kebabName = componentName.toLowerCase().replace(/\s+/g, "-");

  // Create the prompt for the agent
  const promptText = `
You are a Vue 3 component generator. Generate a Vue 3 wrapper component for a Polaris Web Component based on the following markdown documentation.

Component Name: ${componentName}
Category: ${category}
Web Component Tag: <s-${kebabName}>

# Documentation:
${markdown}

# Requirements:

1. Generate a Vue 3 component using <script setup lang="ts">
2. The component should wrap the <s-${kebabName}> web component
3. Extract all props from the documentation and define them in a TypeScript Props interface
4. All props should be optional (use ? in the interface)
5. Extract all events from the documentation and define them in the defineEmits type
6. Forward all events to the parent component using @event="$emit('event', $event)"
7. Include a default <slot /> for content
8. Follow this exact structure and naming conventions
9. Component must be named ${pascalName}

# File Structure:

Generate TWO files:

## File 1: index.vue
A Vue component following this pattern:

\`\`\`vue
<template>
  <s-${kebabName}
    :prop1="prop1"
    :prop2="prop2"
    @event1="$emit('event1', $event)"
  >
    <slot />
  </s-${kebabName}>
</template>

<script setup lang="ts">
// Type definitions for union types if needed
type ExampleType = "value1" | "value2";

// Props interface
interface Props {
  prop1?: string;
  prop2?: ExampleType;
}

defineProps<Props>();

// Events
defineEmits<{
  event1: [event: Event];
}>();
</script>
\`\`\`

## File 2: ${pascalName}.test.ts
A Vitest test file following this pattern:

\`\`\`typescript
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ${pascalName} from "../index.vue";

describe("${pascalName}", () => {
  it("renders properly", () => {
    const wrapper = mount(${pascalName}, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(${pascalName}, {
      props: {
        // Add 1-2 example props here
      }
    });
    
    const webComponent = wrapper.find("s-${kebabName}");
    expect(webComponent.exists()).toBe(true);
  });

  // Add event tests for each event and prop
});
\`\`\`

# Output Format:

Return your response as a JSON object with this exact structure:
{
  "vueComponent": "... the complete index.vue file content ...",
  "testFile": "... the complete test file content ..."
}

Do not include any markdown code fences or additional formatting in the JSON values - just the raw file contents.
`;

  console.log(`  → Creating Cursor agent task for ${pascalName}...`);

  try {
    // Prepare the request body
    const requestBody: any = {
      prompt: {
        text: promptText,
      },
    };

    // Only include source if GITHUB_REPOSITORY is set
    if (GITHUB_REPOSITORY) {
      requestBody.source = {
        repository: GITHUB_REPOSITORY,
        ref: GITHUB_REF,
      };
    }

    // Launch agent using Cursor's Background Agents API
    const response = await fetchWithRetry(`${CURSOR_API_BASE}/agents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CURSOR_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Cursor API request failed: ${response.status} ${response.statusText}\n${errorText}`
      );
    }

    const result = await response.json();

    // The API returns an agent ID
    if (!result.id) {
      throw new Error("No agent ID returned from API");
    }

    console.log(`  ✓ Agent ${result.id} launched`);
    return result.id;
  } catch (error) {
    console.error(`  ✗ Failed to launch Cursor agent:`, error);
    throw error;
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log(
      "🚀 Starting Polaris Vue component generator with Cursor AI...\n"
    );

    // Check for API key
    if (!CURSOR_API_KEY) {
      console.error("❌ Error: CURSOR_API_KEY environment variable is not set");
      console.error("\nTo use this script, you need to:");
      console.error(
        "1. Get your API key from the Cursor Dashboard: https://cursor.com/settings"
      );
      console.error("2. Set it as an environment variable:");
      console.error("   export CURSOR_API_KEY='your-api-key-here'");
      console.error("\nFor more information, visit:");
      console.error("https://docs.cursor.com/context/api-keys\n");
      process.exit(1);
    }

    // Verify API key works
    console.log("Verifying API key...");
    try {
      const meResponse = await fetchWithRetry(`${CURSOR_API_BASE}/me`, {
        headers: {
          Authorization: `Bearer ${CURSOR_API_KEY}`,
        },
      });

      if (!meResponse.ok) {
        if (meResponse.status === 401) {
          console.error("❌ Error: Invalid API key");
          console.error("Please check your CURSOR_API_KEY and try again.\n");
          process.exit(1);
        } else if (meResponse.status === 403) {
          console.error("❌ Error: API access forbidden");
          console.error(
            "Your plan may not have access to the Background Agents API.\n"
          );
          process.exit(1);
        }
        throw new Error(
          `API verification failed: ${meResponse.status} ${meResponse.statusText}`
        );
      }

      const meData = await meResponse.json();
      console.log(
        `✓ API key verified for: ${meData.email || meData.id || "user"}\n`
      );
    } catch (error) {
      console.error("❌ Error verifying API key:", error);
      process.exit(1);
    }

    // Fetch list of components
    let components = await fetchComponentsList();

    if (components.length === 0) {
      console.log("⚠️  No components found in the documentation");
      return;
    }

    // Filter components if specified
    if (componentsFilter) {
      const filterPairs = componentsFilter.split(",").map((pair) => {
        const [category, name] = pair.trim().split("/");
        return { category, name };
      });

      components = components.filter((component) =>
        filterPairs.some(
          (filter) =>
            filter.category === component.category &&
            filter.name === component.name
        )
      );

      console.log(
        `\n🔍 Filtering to ${components.length} specified components...\n`
      );

      if (components.length === 0) {
        console.log("⚠️  No matching components found");
        return;
      }
    }

    console.log(
      `\n🚀 Launching ${components.length} Cursor AI agents in parallel...\n`
    );

    // Launch all agents in parallel
    const agentPromises = components.map(async (componentDef) => {
      try {
        console.log(`📝 Launching agent for ${componentDef.name}...`);

        // Fetch markdown
        const markdown = await fetchComponentMarkdown(componentDef.markdownUrl);

        // Generate with Cursor agent (returns immediately)
        const agentId = await generateWithCursorAgent(
          componentDef.name,
          componentDef.category,
          markdown
        );

        // Wait before launching the next agent
        await new Promise((resolve) => setTimeout(resolve, 2_000));

        return { success: true, component: componentDef.name, agentId };
      } catch (error) {
        console.error(
          `  ✗ Failed to launch agent for ${componentDef.name}:`,
          error
        );
        return { success: false, component: componentDef.name, error };
      }
    });

    // Wait for all agents to be launched
    const results = await Promise.all(agentPromises);

    const successCount = results.filter((r) => r.success).length;
    const failCount = results.filter((r) => !r.success).length;

    console.log("\n" + "=".repeat(50));
    console.log("✨ All agents launched!");
    console.log(`✓ Successfully launched: ${successCount} agents`);
    if (failCount > 0) {
      console.log(`✗ Failed to launch: ${failCount} agents`);
    }
    console.log("\nAgents are running in the background.");
    console.log("Check your Cursor dashboard to monitor progress.");
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

// Run the script
main();
