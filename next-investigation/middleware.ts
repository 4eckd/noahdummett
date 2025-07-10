import { NextRequest, NextResponse } from 'next/server';

/**
 * INTERNAL LISTENER REDIRECTIONS MIDDLEWARE
 * 
 * This middleware implements internal listener redirections for a single deployment
 * serving multiple domains. Both the main domain and docs subdomain hit the same
 * deployment, allowing us to handle routing at the edge without separate server listeners.
 * 
 * Key Design Principles:
 * 1. Host Header Detection: Uses the 'host' header to determine the requested domain
 * 2. Internal Rewrites: Performs URL rewrites (not redirects) to maintain the original host
 * 3. Edge Processing: Runs at the edge for optimal performance
 * 4. No Server Redirects: Avoids HTTP redirects that would change the host header
 * 
 * This approach eliminates the need for:
 * - Separate server listeners for each domain
 * - DNS-level redirects
 * - Complex proxy configurations
 * - Multiple deployment environments
 */

// Production domain from environment variable for flexibility
const PROD_DOCS_DOMAIN = process.env.DOCS_DOMAIN || 'docs.noahdummett.com';

// Development fallback hosts for localhost testing
const DEV_DOCS_HOSTS = [
  'docs.localhost',
  'docs.localhost:3000',
  'localhost:3000',
  'docs.127.0.0.1',
  'docs.127.0.0.1:3000',
  '127.0.0.1:3000'
];

// Check if hostname matches any docs domain (production or development)
function isDocsHost(hostname: string): boolean {
  // Handle production domain
  if (hostname === PROD_DOCS_DOMAIN) {
    return true;
  }
  
  // Handle development hosts
  return DEV_DOCS_HOSTS.includes(hostname);
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') ?? '';

  // INTERNAL LISTENER REDIRECTION LOGIC
  // Check if the request is for a docs domain (production or development)
  if (isDocsHost(hostname)) {
    // Only rewrite if the path doesn't already start with /docs
    // This prevents double-rewriting and maintains idempotency
    if (!url.pathname.startsWith('/docs')) {
      // Perform internal rewrite (NOT redirect) to maintain host header
      // This allows the same deployment to serve different content based on the domain
      // while keeping the original host information intact for further processing
      url.pathname = `/docs${url.pathname === '/' ? '' : url.pathname}`;
      
      // NextResponse.rewrite() performs an internal URL rewrite
      // The user's browser never sees this change - it maintains the original URL
      // This is crucial for internal listener redirections
      return NextResponse.rewrite(url);
    }
  }
  
  // For non-docs domains, pass through to the main application
  // This allows the same deployment to serve multiple domains seamlessly
  return NextResponse.next();
}

// Middleware configuration - matches all paths to enable host-based routing
// This ensures the middleware runs for every request, allowing it to examine
// the host header and perform internal listener redirections as needed
export const config = { matcher: ['/:path*'] };
