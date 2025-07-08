# Middleware Implementation

## Overview

This Next.js middleware provides hostname-based routing for the docs subdomain (`docs.noahdummett.com`). It automatically rewrites requests from the docs subdomain to the `/docs` route group without changing the URL in the browser.

## Files Created

- `middleware.ts` - Main middleware implementation in the repo root
- `__tests__/middleware.test.ts` - Comprehensive test suite
- `jest.config.js` - Jest configuration for testing
- `jest.setup.js` - Jest setup file

## Dependencies Added

- `@edge-runtime/primitives` - Edge runtime mock for testing
- `@testing-library/jest-dom` - Jest DOM testing utilities
- `@types/jest` - TypeScript types for Jest
- `jest` - Testing framework
- `jest-environment-jsdom` - JSDOM environment for Jest
- `ts-jest` - TypeScript transformer for Jest

## Functionality

### Hostname Detection

The middleware checks if the incoming request hostname matches `docs.noahdummett.com` exactly.

### Path Rewriting

For docs domain requests:
- Root path `/` → `/docs`
- Any other path `/path` → `/docs/path`
- Paths already starting with `/docs` are left unchanged

### Edge Cases Handled

- Null/undefined hostnames
- Case sensitivity (only exact match works)
- Nested paths
- Query parameters (preserved)

## Configuration

The middleware uses a simple matcher configuration:
```typescript
export const config = { matcher: ['/:path*'] };
```

This matches all paths, allowing the middleware to handle hostname-based routing for all requests.

## Testing

Run tests with:
```bash
npm test
```

The test suite includes:
- Basic rewrite functionality
- Edge case handling
- Configuration verification
- Mock setup for `@edge-runtime/primitives`

## Security Considerations

- Exact hostname matching prevents subdomain hijacking
- No user input processing beyond standard Next.js request handling
- Proper error handling for missing/malformed headers

## Performance

- Minimal overhead - only string comparisons and conditionals
- No external API calls or heavy processing
- Edge runtime compatible
