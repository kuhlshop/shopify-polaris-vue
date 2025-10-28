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
console.log(CURSOR_API_KEY, GITHUB_REPOSITORY, GITHUB_REF);

interface ComponentDefinition {
  name: string;
  category: string;
  url: string;
  markdownUrl: string;
}

interface AgentTaskResult {
  vueComponent: string;
  testFile: string;
}

/**
 * Sleep for a specified number of milliseconds
 */
async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch with retry logic for rate limiting
 *
 * Automatically handles 429 (Rate Limit Exceeded) responses by:
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
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url, options);

    // If rate limited, wait and retry
    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      const waitTime = retryAfter
        ? parseInt(retryAfter) * 1000
        : Math.pow(2, attempt) * 1000; // Exponential backoff

      console.log(
        `  ⚠️  Rate limited. Waiting ${waitTime / 1000}s before retry...`
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
 * 3. Polls the agent status via GET /v0/agents/{id}
 * 4. Retrieves the results from GET /v0/agents/{id}/conversation
 * 5. Parses the agent's JSON response
 *
 * @see https://docs.cursor.com/context/api-keys
 */
async function generateWithCursorAgent(
  componentName: string,
  category: string,
  markdown: string
): Promise<AgentTaskResult> {
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

  // Add event tests for each event
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

    console.log(`  → Agent ${result.id} created, waiting for completion...`);

    // Poll for completion
    const agentResponse = await pollAgentCompletion(result.id);

    // Parse the agent's JSON response
    const parsed = JSON.parse(agentResponse);

    return {
      vueComponent: parsed.vueComponent,
      testFile: parsed.testFile,
    };
  } catch (error) {
    console.error(`  ✗ Failed to generate with Cursor agent:`, error);
    throw error;
  }
}

/**
 * Poll for agent completion using the Background Agents API
 *
 * Continuously checks the agent status until it completes, fails, or times out.
 * When completed, fetches the conversation to extract the agent's response.
 *
 * Status values:
 * - pending/running: Agent is still working
 * - completed/success: Agent finished successfully
 * - failed/error: Agent encountered an error
 * - cancelled: Agent was cancelled
 *
 * @param agentId - The ID returned from POST /v0/agents
 * @returns The agent's response text (should be JSON)
 */
async function pollAgentCompletion(agentId: string): Promise<string> {
  const maxAttempts = 120; // 10 minutes max
  const pollInterval = 5000; // 5 seconds

  for (let i = 0; i < maxAttempts; i++) {
    const response = await fetchWithRetry(
      `${CURSOR_API_BASE}/agents/${agentId}`,
      {
        headers: {
          Authorization: `Bearer ${CURSOR_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to poll agent status: ${response.statusText}`);
    }

    const result = await response.json();

    // Check agent status
    if (result.status === "completed" || result.status === "success") {
      // Get the conversation to extract the agent's response
      const conversationResponse = await fetchWithRetry(
        `${CURSOR_API_BASE}/agents/${agentId}/conversation`,
        {
          headers: {
            Authorization: `Bearer ${CURSOR_API_KEY}`,
          },
        }
      );

      if (!conversationResponse.ok) {
        throw new Error(
          `Failed to fetch conversation: ${conversationResponse.statusText}`
        );
      }

      const conversation = await conversationResponse.json();

      // Extract the last assistant message from the conversation
      // The conversation format may vary, adjust based on actual API response
      const lastMessage = conversation.messages?.findLast(
        (msg: any) => msg.role === "assistant"
      );

      if (!lastMessage || !lastMessage.content) {
        throw new Error("No response found in conversation");
      }

      return lastMessage.content;
    } else if (result.status === "failed" || result.status === "error") {
      throw new Error(`Agent task failed: ${result.error || "Unknown error"}`);
    } else if (result.status === "cancelled") {
      throw new Error("Agent task was cancelled");
    }

    // Status is still "running" or "pending", continue polling
    if (i % 6 === 0) {
      // Log every 30 seconds
      console.log(
        `  → Still waiting... (${Math.floor(
          (i * pollInterval) / 1000
        )}s elapsed)`
      );
    }

    // Wait before polling again
    await sleep(pollInterval);
  }

  throw new Error("Agent task timed out after 10 minutes");
}

/**
 * Save component files to disk
 */
async function saveComponent(
  componentName: string,
  category: string,
  markdown: string,
  generated: AgentTaskResult
): Promise<void> {
  const pascalName = `S${componentName.replace(/\s+/g, "")}`;
  const componentDir = join(COMPONENTS_DIR, category, pascalName);

  // Create directory structure
  await mkdir(componentDir, { recursive: true });
  await mkdir(join(componentDir, "tests"), { recursive: true });

  // Save index.vue
  await writeFile(join(componentDir, "index.vue"), generated.vueComponent);

  // Save markdown documentation
  await writeFile(
    join(componentDir, `${componentName.toLowerCase()}.md`),
    markdown
  );

  // Save test file
  await writeFile(
    join(componentDir, "tests", `${pascalName}.test.ts`),
    generated.testFile
  );

  console.log(`  ✓ Generated ${pascalName} component`);
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
      const meResponse = await fetch(`${CURSOR_API_BASE}/me`, {
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
    const components = await fetchComponentsList();

    if (components.length === 0) {
      console.log("⚠️  No components found in the documentation");
      return;
    }

    console.log(
      `\n📦 Processing ${components.length} components with Cursor AI...\n`
    );

    // Process each component
    let successCount = 0;
    let failCount = 0;

    for (const componentDef of components) {
      try {
        console.log(`\n📝 Processing ${componentDef.name}...`);

        // Fetch markdown
        console.log(`  → Fetching documentation...`);
        const markdown = await fetchComponentMarkdown(componentDef.markdownUrl);

        // Generate with Cursor agent
        const generated = await generateWithCursorAgent(
          componentDef.name,
          componentDef.category,
          markdown
        );

        // Save component
        await saveComponent(
          componentDef.name,
          componentDef.category,
          markdown,
          generated
        );

        successCount++;
      } catch (error) {
        console.error(`  ✗ Failed to process ${componentDef.name}:`, error);
        failCount++;
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log("✨ Component generation complete!");
    console.log(`✓ Successfully generated: ${successCount} components`);
    if (failCount > 0) {
      console.log(`✗ Failed: ${failCount} components`);
    }
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

// Run the script
main();
