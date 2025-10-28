# Cursor Agent API Integration

This document outlines how the Polaris Vue component generator could be enhanced with Cursor's Agent API for intelligent, AI-powered component generation and maintenance.

## Current Implementation

The current `scripts/generate-components.ts` is a standalone TypeScript script that:

- Fetches Polaris Web Components documentation
- Parses markdown tables for props and events
- Generates Vue components using string templates
- Creates basic test files

## Cursor Agent API Enhancement Opportunities

### 1. Intelligent Component Generation

Instead of relying on rigid markdown parsing, the Cursor Agent API could:

```typescript
// Pseudo-code for Cursor Agent integration
const agent = new CursorAgent({
  apiKey: process.env.CURSOR_API_KEY,
});

const task = await agent.createTask({
  type: "generate",
  context: {
    markdown: componentMarkdown,
    framework: "Vue 3",
    pattern: "Web Component Wrapper",
  },
  prompt: `
    Generate a Vue 3 component that wraps the Polaris web component.
    - Extract all props from the documentation
    - Infer proper TypeScript types
    - Create comprehensive event handlers
    - Follow our component pattern (see examples)
  `,
});

const component = await agent.waitForCompletion(task.id);
```

### 2. Smart Type Inference

The Agent API could analyze documentation and generate better TypeScript types:

- **Union types**: Automatically detect and create proper union types from descriptions
- **Complex types**: Generate interfaces for object props
- **Event types**: Infer proper event detail types from descriptions
- **Generics**: Create generic types where appropriate

Example:

```typescript
// Current: Manual type mapping
type Variant = "auto" | "primary" | "secondary" | "tertiary";

// With Agent: Intelligent extraction from docs
// The agent would read: "variant can be 'primary', 'secondary', or 'tertiary'"
// And generate: type Variant = "primary" | "secondary" | "tertiary";
```

### 3. Enhanced Test Generation

The Agent API could create more comprehensive tests:

```typescript
const tests = await agent.createTask({
  type: "test-generation",
  context: {
    component: componentCode,
    framework: "vitest",
  },
  prompt: `
    Generate comprehensive tests including:
    - Edge cases
    - Accessibility tests
    - Integration scenarios
    - Error handling
  `,
});
```

### 4. Documentation Analysis

Use the Agent to understand component relationships and patterns:

```typescript
const analysis = await agent.analyze({
  files: ["*.md"],
  task: "Identify component dependencies and relationships",
});

// Generate imports and setup code based on analysis
```

### 5. Continuous Updates

Set up background agents to monitor Shopify's documentation:

```typescript
const monitor = await agent.createBackgroundTask({
  schedule: "daily",
  task: "check-polaris-updates",
  action: async () => {
    const updates = await checkForDocumentationChanges();
    if (updates.length > 0) {
      // Regenerate affected components
      // Create PR with changes
      // Run tests
    }
  },
});
```

## Implementation Steps

### Phase 1: Basic Integration

1. **Setup Cursor Agent API**

   ```bash
   bun add @cursor/agent-sdk
   ```

2. **Configure Authentication**

   ```typescript
   // .env
   CURSOR_API_KEY = your - api - key - here;
   ```

3. **Create Agent Wrapper**

   ```typescript
   // scripts/lib/cursor-agent.ts
   import { CursorAgent } from "@cursor/agent-sdk";

   export const agent = new CursorAgent({
     apiKey: process.env.CURSOR_API_KEY,
   });
   ```

### Phase 2: Enhanced Parsing

Replace rigid markdown parsing with AI-powered extraction:

```typescript
async function parseWithAgent(markdown: string): Promise<ParsedComponent> {
  const result = await agent.analyze({
    content: markdown,
    schema: {
      name: "string",
      props: [{ name: "string", type: "string", required: "boolean" }],
      events: [{ name: "string", type: "string" }],
    },
  });

  return result;
}
```

### Phase 3: Intelligent Generation

Use the agent to generate components:

```typescript
async function generateWithAgent(component: ParsedComponent): Promise<string> {
  return await agent.generate({
    type: "vue-component",
    template: existingComponentExample,
    data: component,
  });
}
```

### Phase 4: Quality Assurance

Let the agent review generated code:

```typescript
const review = await agent.review({
  code: generatedComponent,
  criteria: [
    "TypeScript correctness",
    "Vue 3 best practices",
    "Accessibility",
    "Documentation",
  ],
});

if (review.issues.length > 0) {
  // Fix issues automatically
  const fixed = await agent.fix(generatedComponent, review.issues);
}
```

## Benefits of Agent Integration

1. **Better Type Safety**: More accurate type inference from documentation
2. **Smarter Parsing**: Handle variations in documentation format
3. **Comprehensive Tests**: Generate edge cases and accessibility tests
4. **Automatic Updates**: Monitor and update components when Polaris changes
5. **Code Review**: AI-powered quality checks before generation
6. **Pattern Learning**: Agent learns from existing components to maintain consistency

## Example: Full Workflow

```typescript
import { agent } from "./lib/cursor-agent";

async function generateComponentWithAgent(componentUrl: string) {
  // 1. Fetch documentation
  const markdown = await fetchMarkdown(componentUrl);

  // 2. Let agent analyze the documentation
  const analysis = await agent.analyze({
    content: markdown,
    task: "Extract component specification",
  });

  // 3. Generate Vue component
  const component = await agent.generate({
    type: "vue-component",
    spec: analysis,
    examples: await loadExamples(),
  });

  // 4. Generate tests
  const tests = await agent.generate({
    type: "vitest-tests",
    component: component,
  });

  // 5. Review and optimize
  const review = await agent.review({
    code: component,
    tests: tests,
  });

  // 6. Apply fixes if needed
  if (review.suggestions.length > 0) {
    component = await agent.apply(component, review.suggestions);
  }

  // 7. Save to disk
  await saveComponent(component, tests);
}
```

## Migration Path

### Current Script → Agent-Enhanced

1. **Keep existing script**: Current implementation works as fallback
2. **Add agent layer**: Optionally use agent for complex components
3. **Gradual migration**: Move features to agent one at a time
4. **A/B testing**: Compare agent output with manual parsing

### Feature Flags

```typescript
const USE_AGENT_FOR_PARSING = process.env.USE_CURSOR_AGENT === "true";
const USE_AGENT_FOR_GENERATION = process.env.USE_CURSOR_AGENT === "true";
const USE_AGENT_FOR_TESTS = process.env.USE_CURSOR_AGENT === "true";

if (USE_AGENT_FOR_PARSING) {
  component = await parseWithAgent(markdown);
} else {
  component = await parseComponentMarkdown(markdown);
}
```

## Cost Considerations

Using the Cursor Agent API incurs costs. Consider:

- **Caching**: Cache agent responses to avoid repeated calls
- **Batch processing**: Process multiple components in one call
- **Incremental updates**: Only regenerate changed components
- **Local fallback**: Use simple parsing for straightforward cases

## Getting Started

1. Review [Cursor Agent API Documentation](https://docs.cursor.com/en/background-agent/api/overview)
2. Set up API key from Cursor Dashboard
3. Install SDK: `bun add @cursor/agent-sdk`
4. Start with Phase 1 implementation
5. Gradually enhance with agent features

## Resources

- [Cursor Agent API Docs](https://docs.cursor.com/en/background-agent/api/overview)
- [Shopify Polaris Documentation](https://shopify.dev/docs/api/app-home/polaris-web-components)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vitest Documentation](https://vitest.dev/)

## Questions & Support

For questions about Cursor Agent API integration:

- Check Cursor's documentation
- Review example projects
- Reach out to Cursor support

For questions about this implementation:

- See `scripts/README.md`
- Review existing components
- Check the main README.md
