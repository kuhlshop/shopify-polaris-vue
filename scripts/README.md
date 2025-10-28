# Polaris Vue Component Generator

This script automatically generates Vue wrapper components from Shopify's Polaris Web Components documentation using **Cursor's Background Agent API** for intelligent AI-powered generation.

## Setup

### 1. Get Your Cursor API Key

1. Go to the [Cursor Dashboard](https://cursor.com/settings)
2. Navigate to the Integrations section
3. Create a new API key

### 2. Configure Environment

Set your API key as an environment variable:

```bash
export CURSOR_API_KEY='your-cursor-api-key-here'
```

Optionally, configure your GitHub repository (if using Background Agents with a GitHub repo):

```bash
export GITHUB_REPOSITORY='https://github.com/your-org/polaris-vue'
export GITHUB_REF='main'  # Optional, defaults to 'main'
```

Or add them to your shell profile (`.bashrc`, `.zshrc`, etc.):

```bash
echo 'export CURSOR_API_KEY="your-cursor-api-key-here"' >> ~/.zshrc
echo 'export GITHUB_REPOSITORY="https://github.com/your-org/polaris-vue"' >> ~/.zshrc
source ~/.zshrc
```

## Usage

To generate all components from the Polaris Web Components spec:

```bash
bun run generate
```

**Note**: Make sure `CURSOR_API_KEY` is set before running the generator.

## How It Works

1. **Fetches Documentation**: Downloads the main Polaris Web Components documentation from Shopify's developer site
2. **Discovers Components**: Parses the markdown to find all component references
3. **Fetches Specifications**: For each component, fetches its detailed markdown specification
4. **AI Generation via Cursor Agent**: Sends the markdown to Cursor's Background Agent API with detailed instructions to:
   - Parse the documentation intelligently
   - Extract props, events, and their types
   - Generate proper TypeScript interfaces
   - Create a Vue 3 setup component wrapper
   - Generate comprehensive Vitest tests
5. **Saves Results**: Stores the generated component, tests, and original documentation

### Why Use Cursor's Agent API?

Instead of hardcoded template generation, Cursor's AI agent:

- ✅ **Intelligently parses** documentation variations
- ✅ **Infers proper TypeScript types** from descriptions
- ✅ **Adapts to changes** in Polaris documentation format
- ✅ **Generates better tests** based on component functionality
- ✅ **Handles edge cases** that templates might miss

## Generated Structure

Each component follows this structure:

```
src/components/
└── [category]/           # e.g., actions, media, forms
    └── S[ComponentName]/ # e.g., SButton, SAvatar
        ├── index.vue     # The Vue wrapper component
        ├── [name].md     # Original Polaris documentation
        └── tests/
            └── S[ComponentName].test.ts  # Vitest tests
```

## Example

For the Button component from Polaris:

- Source: `https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button.md`
- Generated as: `src/components/actions/SButton/index.vue`
- Documentation saved: `src/components/actions/SButton/button.md`
- Tests: `src/components/actions/SButton/SButton.test.ts`

## Running Tests

After generating components, run tests with:

```bash
bun run test           # Run tests in watch mode
bun run test:ui        # Run tests with UI
```

## Component Usage

Generated components can be imported and used like any Vue component:

```vue
<script setup>
import SButton from "@/components/actions/SButton/index.vue";
</script>

<template>
  <SButton variant="primary" @click="handleClick">Click me</SButton>
</template>
```

## Manual Adjustments

After generation, you may need to:

1. Review and refine TypeScript types (especially complex union types)
2. Add custom validation logic
3. Enhance test coverage
4. Add component-specific documentation
5. Handle special cases not covered by the automatic parser

## Troubleshooting

### API Key Issues

If you see "CURSOR_API_KEY environment variable is not set":

1. Make sure you've set the environment variable
2. Verify the API key is correct
3. Check you have access to the Cursor Background Agent API

### Generation Failures

If component generation fails:

- **Network Issues**: Check your internet connection (fetches from Shopify's servers and Cursor API)
- **API Limits**: You may have hit rate limits on the Cursor API
- **Documentation Changes**: Verify the Polaris documentation structure hasn't changed
- **Agent Errors**: Check console output for specific error messages from the Cursor agent

### Timeout Issues

If tasks are timing out:

- The Cursor agent might be taking longer than expected
- Check the `pollTaskCompletion` function's timeout settings
- Some complex components may need more time

### Response Format Issues

If you see JSON parsing errors:

- The Cursor agent's response format may not match expectations
- Check the actual API response in the error logs
- You may need to adjust the response parsing logic

## API Details

### Background Agents API

The script uses Cursor's Background Agents API with the following endpoints:

#### 1. Verify API Key: `GET /v0/me`

Validates the API key before starting generation.

#### 2. Launch Agent: `POST /v0/agents`

Creates a new background agent with:

```json
{
  "prompt": {
    "text": "... detailed component generation instructions ..."
  },
  "source": {
    "repository": "https://github.com/your-org/polaris-vue",
    "ref": "main"
  }
}
```

Returns an agent ID for tracking.

#### 3. Check Status: `GET /v0/agents/{id}`

Polls the agent status until completion:

- `pending` / `running` - Agent is still working
- `completed` / `success` - Agent finished successfully
- `failed` / `error` - Agent encountered an error
- `cancelled` - Agent was cancelled

#### 4. Get Results: `GET /v0/agents/{id}/conversation`

Retrieves the conversation history containing the agent's response with the generated code.

### Polling Behavior

- Polls every 5 seconds
- Maximum 120 attempts (10 minutes)
- Logs progress every 30 seconds
- Implements exponential backoff for rate limiting (429 responses)

### Rate Limiting

The script implements both proactive and reactive rate limiting:

**Proactive Rate Limiting (20 requests/minute)**:

- Automatically tracks all Cursor API requests in a 60-second sliding window
- Throttles requests before they're sent to stay under the 20/min limit
- Prevents 429 errors by spacing out API calls appropriately

**Reactive Rate Limiting**:

- Respects `Retry-After` header when present
- Falls back to exponential backoff
- Maximum 3 retry attempts per request

This dual approach ensures your script never hits rate limits while maintaining optimal performance.

### Expected Agent Output

The agent is instructed to return JSON in its response:

```json
{
  "vueComponent": "... complete Vue component code ...",
  "testFile": "... complete test file code ..."
}
```
