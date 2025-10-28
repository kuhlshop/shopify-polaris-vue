# Cursor Background Agent API Integration Notes

## Current Implementation Status

✅ The `generate-components.ts` script has been **updated to use the official Cursor Background Agents API** endpoints as documented in the [official API documentation](https://docs.cursor.com/context/api-keys).

## API Endpoints Used

### Base URL

```typescript
const CURSOR_API_BASE = "https://api.cursor.com/v0";
```

### 1. Verify API Key

```
GET /v0/me
```

Returns information about the authenticated user/API key.

### 2. Launch Background Agent

```
POST /v0/agents
```

Request body:

```typescript
{
  prompt: {
    text: string,           // The instruction/prompt
    images?: Array<{        // Optional images
      data: string,         // Base64 encoded
      dimension: {
        width: number,
        height: number
      }
    }>
  },
  source?: {                // Optional GitHub repo context
    repository: string,     // e.g., "https://github.com/org/repo"
    ref: string            // e.g., "main"
  }
}
```

Response:

```typescript
{
  id: string; // Agent ID for tracking
}
```

### 3. Check Agent Status

```
GET /v0/agents/{id}
```

Response:

```typescript
{
  id: string,
  status: "pending" | "running" | "completed" | "success" | "failed" | "error" | "cancelled",
  error?: string  // If failed
}
```

### 4. Get Agent Conversation

```
GET /v0/agents/{id}/conversation
```

Response:

```typescript
{
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
}
```

### 5. Add Follow-up (Optional)

```
POST /v0/agents/{id}/followup
```

Request body:

```typescript
{
  prompt: {
    text: string,
    images?: Array<...>
  }
}
```

### 6. Delete Agent (Optional)

```
DELETE /v0/agents/{id}
```

### 7. List Models (Optional)

```
GET /v0/models
```

Returns recommended models for background agents.

### 8. List Repositories (Optional)

```
GET /v0/repositories
```

⚠️ **Very strict rate limits**: 1/user/minute, 30/user/hour.

## Authentication

Uses Bearer token in Authorization header:

```typescript
Authorization: `Bearer ${CURSOR_API_KEY}`;
```

Get your API key from: https://cursor.com/settings

## Rate Limiting

The API implements rate limiting. When exceeding limits, returns `429 Too Many Requests`.

The script automatically handles this with:

- Exponential backoff
- `Retry-After` header support
- Maximum 3 retry attempts

## Response Codes

- `200` - Success (GET requests)
- `201` - Created (POST requests)
- `400` - Bad Request (invalid parameters)
- `401` - Unauthorized (invalid API key)
- `403` - Forbidden (insufficient permissions, plan limits)
- `404` - Not Found
- `409` - Conflict (invalid resource state)
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

## Implementation Details

### Flow

1. **Verify API Key** (`GET /v0/me`)

   - Confirms API key is valid
   - Checks plan access

2. **Launch Agent** (`POST /v0/agents`)

   - Sends component generation prompt
   - Optionally includes GitHub repo context
   - Returns agent ID

3. **Poll Status** (`GET /v0/agents/{id}`)

   - Checks every 5 seconds
   - Maximum 10 minutes (120 attempts)
   - Logs progress every 30 seconds

4. **Get Results** (`GET /v0/agents/{id}/conversation`)

   - When status is `completed` or `success`
   - Extracts last assistant message
   - Parses JSON response

5. **Parse Output**
   - Expects JSON with `vueComponent` and `testFile` fields
   - Saves to filesystem

### Environment Variables

Required:

```bash
export CURSOR_API_KEY="your-api-key-here"
```

Optional:

```bash
export GITHUB_REPOSITORY="https://github.com/your-org/repo"
export GITHUB_REF="main"
```

## Error Handling

The script handles:

- ✅ Invalid API keys (401)
- ✅ Insufficient permissions (403)
- ✅ Rate limiting (429)
- ✅ Agent failures
- ✅ Timeouts
- ✅ Network errors
- ✅ JSON parsing errors

## Testing

### Test API Connection

```bash
export CURSOR_API_KEY="your-key"
curl -H "Authorization: Bearer $CURSOR_API_KEY" https://api.cursor.com/v0/me
```

### Test Single Component

Modify the main loop to process only one component for testing:

```typescript
const components = await fetchComponentsList();
const testComponents = components.slice(0, 1); // Test with first component only
```

### Debug Mode

Add detailed logging by uncommenting debug statements or adding:

```typescript
console.log("Request body:", JSON.stringify(requestBody, null, 2));
console.log("Response:", await response.text());
```

## Known Limitations

1. **GitHub Repository Context**

   - Optional in the API
   - Script works without it
   - May improve results if provided

2. **Polling Interval**

   - 5 seconds between status checks
   - May be adjusted based on typical completion times

3. **Timeout**

   - 10 minutes maximum per agent
   - Complex components may need adjustment

4. **Rate Limits**
   - Background agents have rate limits
   - Script processes components sequentially to avoid hitting limits

## Resources

- [Official API Documentation](https://docs.cursor.com/context/api-keys)
- [OpenAPI Specification](https://docs.cursor.com/docs-static/background-agents-openapi.yaml)
- [Cursor Dashboard](https://cursor.com/settings) - Get API key here

## Troubleshooting

### "Invalid API key"

1. Verify key is correct
2. Check it's from https://cursor.com/settings
3. Ensure no extra spaces or quotes

### "API access forbidden"

1. Check your Cursor plan includes Background Agents API
2. Verify billing is active
3. Contact Cursor support if issue persists

### "Rate limit exceeded"

1. Script automatically retries with backoff
2. If persistent, reduce concurrent requests
3. Add delays between component generations

### "Agent task failed"

1. Check the error message in console
2. Review the prompt for any issues
3. Try with a simpler component first
4. Check if documentation format changed

### "No response found in conversation"

1. Agent may have completed without returning expected format
2. Check conversation manually via API
3. Adjust response parsing logic

## Future Improvements

Potential enhancements:

- [ ] Support for custom models via `/v0/models`
- [ ] Parallel agent execution (with rate limit awareness)
- [ ] Resume from failed components
- [ ] Progress persistence across runs
- [ ] Follow-up support for refinements
- [ ] Agent cleanup (DELETE endpoint)
