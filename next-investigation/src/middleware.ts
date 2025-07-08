import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  
  // Check if it's the docs subdomain
  if (hostname.startsWith('docs.')) {
    // For docs subdomain, rewrite to the (docs) route group
    // This makes /docs/... appear as / on the docs subdomain
    const newPath = pathname === '/' ? '/docs' : `/docs${pathname}`;
    
    return NextResponse.rewrite(new URL(newPath, request.url));
  }
  
  // For main domain, continue normally
  // The (main) route group handles the main site routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
