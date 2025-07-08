import { NextRequest, NextResponse } from 'next/server';

const DOCS_DOMAIN = 'docs.noahdummett.com';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') ?? '';

  if (hostname === DOCS_DOMAIN) {
    // Already under /docs? do nothing
    if (!url.pathname.startsWith('/docs')) {
      url.pathname = `/docs${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ['/:path*'] };
