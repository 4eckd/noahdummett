# Middleware Documentation

## Overview

The middleware implements **internal listener redirections** for a single deployment serving multiple domains. Both the main domain and docs subdomain hit the same deployment, allowing us to handle routing at the edge without separate server listeners.

## Internal Listener Redirections

### What Are Internal Listener Redirections?

Internal listener redirections allow a single deployment to serve multiple domains by:
- Examining the `host` header of incoming requests
- Performing internal URL rewrites (not HTTP redirects) based on the domain
- Maintaining the original host header throughout the request lifecycle
- Eliminating the need for separate server listeners or deployment environments

### Key Benefits

1. **Single Deployment**: Both domains are served from the same deployment
2. **Edge Processing**: Routing decisions happen at the edge for optimal performance
3. **No HTTP Redirects**: Internal rewrites preserve the original URL and host
4. **Simplified Infrastructure**: No need for separate server listeners or proxy configurations
5. **Cost Effective**: Reduces deployment complexity and resource usage

### How It Works

1. **Request Arrives**: User visits `docs.noahdummett.com/api`
2. **Host Detection**: Middleware reads the `host` header
3. **Domain Matching**: Checks if hostname matches docs domain patterns
4. **Internal Rewrite**: Rewrites URL to `/docs/api` (invisible to user)
5. **Content Serving**: Same deployment serves docs content from `/docs` directory

The middleware handles routing for documentation hosts, supporting both production and development environments with fallback localhost testing capabilities.

## Features

### 1. Production Domain Flexibility
- Uses `process.env.DOCS_DOMAIN` for production host configuration
- Defaults to `docs.noahdummett.com` when environment variable is not set
- Allows deployment-time configuration without code changes

### 2. Development Host Support
The middleware includes fallback dev hosts for localhost testing:
- `docs.localhost`
- `docs.localhost:3000`
- `localhost:3000`
- `docs.127.0.0.1`
- `docs.127.0.0.1:3000`
- `127.0.0.1:3000`

### 3. Automatic Path Rewriting
- Requests to docs hosts are automatically prefixed with `/docs`
- Root paths (`/`) become `/docs`
- Non-root paths (`/getting-started`) become `/docs/getting-started`
- Already prefixed paths (`/docs/api`) remain unchanged

## Configuration

### Vercel Configuration (`vercel.json`)

The `vercel.json` configuration is specifically designed to support internal listener redirections:

- **No Forced Redirects**: The configuration intentionally does NOT include redirects that would modify the host header
- **Host Header Preservation**: Routes are configured to maintain the original host header
- **Edge Middleware Priority**: The middleware runs before any static routing rules
- **Single Deployment**: Both domains are handled by the same deployment configuration

**Important**: The Vercel configuration leaves the host header intact so the middleware can detect the original domain and perform appropriate internal rewrites.

### Environment Variables

Set the `DOCS_DOMAIN` environment variable to customize the production domain:

```bash
# .env.local
DOCS_DOMAIN=docs.yourdomain.com
```

### Development Setup

For local development, you can use any of the supported localhost hosts:

```bash
# Add to your hosts file (/etc/hosts or C:\Windows\System32\drivers\etc\hosts)
127.0.0.1 docs.localhost
```

Then access your application at:
- `http://docs.localhost:3000`
- `http://localhost:3000` (will route to docs)

## Testing

The middleware includes comprehensive test coverage:

### Test Categories
1. **Basic Routing Tests** - Root and non-root path rewriting
2. **Edge Cases** - Special characters, long paths, trailing slashes
3. **Development Hosts** - All localhost variations
4. **Environment Variable Support** - Production domain flexibility
5. **Security** - Hostname validation and malformed header handling

### Running Tests

```bash
npm test -- __tests__/middleware.test.ts
```

## How It Works

1. **Host Detection**: Middleware checks the incoming request hostname
2. **Domain Matching**: Compares against production domain and development hosts
3. **Path Analysis**: Determines if the path already starts with `/docs`
4. **Rewriting**: Prefixes non-docs paths with `/docs` and rewrites the URL
5. **Passthrough**: Non-matching hosts continue to the next middleware

## Example Usage

### Production Deployment
```bash
# Set production domain
DOCS_DOMAIN=docs.example.com

# Deploy with custom domain
vercel --prod
```

### Local Development
```bash
# Start development server
npm run dev

# Test with localhost variants
curl http://docs.localhost:3000/api
# → Rewrites to /docs/api

curl http://localhost:3000/getting-started
# → Rewrites to /docs/getting-started
```

## Security Considerations

- Hostname validation prevents header injection attacks
- Malformed hostnames are handled gracefully
- Port numbers in hostnames are properly handled
- Case sensitivity is enforced for security

## Performance

- Minimal overhead with simple string matching
- No regex patterns for better performance
- Early returns for non-matching hosts
- Efficient path prefix checking

## Troubleshooting

### Common Issues

1. **Routes not rewriting**: Check if hostname matches configured domains
2. **Port conflicts**: Ensure development hosts include port numbers
3. **Environment variables**: Verify `DOCS_DOMAIN` is set correctly
4. **Caching**: Clear browser cache after changing configurations

### Debug Mode

Add logging to middleware for debugging:

```typescript
console.log('Hostname:', hostname);
console.log('Pathname:', url.pathname);
console.log('Rewrite needed:', isDocsHost(hostname) && !url.pathname.startsWith('/docs'));
```

## Browser Support

The middleware works with all modern browsers and handles:
- HTTP/HTTPS protocols
- IPv4 and IPv6 addresses
- Custom ports
- Subdomain routing
- URL encoding/decoding
