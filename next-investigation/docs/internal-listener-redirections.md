# Internal Listener Redirections Implementation

## Overview

This project implements internal listener redirections using a single deployment that serves multiple domains (`noahdummett.com` and `docs.noahdummett.com`) without requiring separate server listeners.

## Implementation Details

### 1. Edge Middleware (`middleware.ts`)

The core implementation uses Next.js edge middleware to:
- Detect incoming requests by examining the `host` header
- Perform internal URL rewrites (not HTTP redirects) based on the domain
- Maintain the original host header throughout the request lifecycle
- Route docs traffic to `/docs/*` paths while preserving the user's URL

### 2. Vercel Configuration (`vercel.json`)

The deployment configuration is specifically designed to support internal listener redirections:
- **No forced redirects**: Intentionally avoids redirects that would modify the host header
- **Host header preservation**: Routes maintain the original host information
- **Catch-all forwarding**: All requests are forwarded to the root, allowing middleware to handle routing

### 3. Key Benefits

1. **Single Deployment**: Both domains served from the same deployment
2. **Edge Processing**: Routing decisions happen at the edge for optimal performance
3. **No HTTP Redirects**: Internal rewrites preserve the original URL and host
4. **Simplified Infrastructure**: No need for separate server listeners or proxy configurations
5. **Cost Effective**: Reduces deployment complexity and resource usage

## Request Flow

1. User visits `docs.noahdummett.com/getting-started`
2. Request hits the single deployment
3. Middleware examines the `host` header
4. Detects docs domain and internally rewrites to `/docs/getting-started`
5. Same deployment serves the docs content
6. User's browser still shows `docs.noahdummett.com/getting-started`

## Configuration Files

- `middleware.ts`: Contains the routing logic and host detection
- `vercel.json`: Deployment configuration that preserves host headers
- `docs/middleware.md`: Detailed documentation of the middleware functionality

## Testing

The implementation includes comprehensive tests covering:
- Basic routing scenarios
- Edge cases and error handling
- Development environment support
- Environment variable configuration
- Security considerations

Run tests with:
```bash
npm test -- __tests__/middleware.test.ts
```

## Development Support

The middleware supports local development with various localhost configurations:
- `docs.localhost`
- `docs.localhost:3000`
- `localhost:3000`
- `docs.127.0.0.1`
- `docs.127.0.0.1:3000`
- `127.0.0.1:3000`

## Production Configuration

Set the `DOCS_DOMAIN` environment variable to customize the production domain:
```bash
DOCS_DOMAIN=docs.yourdomain.com
```

## Security Considerations

- Hostname validation prevents header injection attacks
- Malformed hostnames are handled gracefully
- Port numbers in hostnames are properly handled
- Case sensitivity is enforced for security
