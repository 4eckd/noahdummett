# Subdomain Routing Documentation

## Overview

This project implements a comprehensive subdomain routing system for the Noah Dummett Investigation Projects platform, specifically designed to handle `docs.noahdummett.com` subdomain routing through Next.js middleware.

## Architecture

### Core Components

1. **Middleware** (`middleware.ts`)
   - Handles subdomain detection and routing
   - Rewrites `docs.noahdummett.com` requests to `/docs` paths
   - Maintains URL structure and query parameters

2. **Next.js Configuration** (`next.config.ts`)
   - Configured image domains for subdomain support
   - Security headers implementation
   - MDX processing for documentation

3. **Documentation Structure**
   - App Router with grouped routes: `(docs)/docs/`
   - Dynamic routing with `[...slug]` for flexible documentation paths
   - Markdown processing with syntax highlighting

## Features

### Subdomain Routing
- **Primary Domain**: `noahdummett.com` - Main investigation platform
- **Docs Subdomain**: `docs.noahdummett.com` - Documentation hub
- **Seamless Routing**: Transparent path rewriting without redirects

### Security Implementation
- Content Security Policy headers
- XSS Protection
- Frame Options protection
- Referrer Policy configuration
- Permissions Policy restrictions

### Performance Optimizations
- Static generation for documentation pages
- Optimized image handling
- Efficient middleware processing
- Build-time optimization

## Implementation Details

### Middleware Logic
```typescript
const DOCS_DOMAIN = 'docs.noahdummett.com';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') ?? '';

  if (hostname === DOCS_DOMAIN) {
    if (!url.pathname.startsWith('/docs')) {
      url.pathname = `/docs${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}
```

### Route Structure
- `/docs` - Documentation home
- `/docs/[...slug]` - Dynamic documentation pages
- `/docs/evidence-analysis` - Evidence analysis documentation
- `/docs/technical` - Technical documentation

## Testing

### Unit Tests
- Middleware functionality testing
- Edge case handling
- Hostname validation
- Path rewriting logic

### E2E Tests
- Cross-browser compatibility
- Responsive design validation
- Navigation functionality
- Documentation accessibility

### Performance Tests
- Lighthouse auditing
- Build optimization verification
- Load time analysis

## Deployment

### Vercel Configuration
- Automatic subdomain routing
- Environment variable management
- Build optimization
- Performance monitoring

### Environment Variables
- `DOCS_DOMAIN`: Documentation subdomain configuration
- Security and API configurations
- Build-time environment setup

## Maintenance

### Monitoring
- Subdomain routing health checks
- Performance metrics tracking
- Error logging and analysis

### Updates
- Documentation content management
- Security header updates
- Performance optimizations

## Related Files
- `middleware.ts` - Core routing logic
- `next.config.ts` - Next.js configuration
- `src/app/(docs)/` - Documentation routes
- `src/components/docs/` - Documentation components
- `__tests__/middleware.test.ts` - Unit tests
- `tests/` - E2E tests

## Version History
- v3.0.0 - Subdomain routing implementation
- v2.0.0 - Next.js 15 upgrade
- v1.0.0 - Initial investigation platform
