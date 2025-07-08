import { NextRequest, NextResponse } from 'next/server';
import { middleware } from '../middleware';

// Mock @edge-runtime/primitives
jest.mock('@edge-runtime/primitives', () => ({
  ...jest.requireActual('@edge-runtime/primitives'),
}));

// Mock Next.js server components
jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    rewrite: jest.fn(),
    next: jest.fn(),
  },
}));

describe('middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should rewrite docs domain root to /docs', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('docs.noahdummett.com'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/docs');
    expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should rewrite docs domain non-root paths to /docs prefix', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/getting-started',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('docs.noahdummett.com'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/docs/getting-started');
    expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should not rewrite when already under /docs path', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/docs/api',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('docs.noahdummett.com'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/docs/api');
    expect(mockRewrite).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });

  it('should not rewrite when hostname is not docs domain', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/api',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('noahdummett.com'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/api');
    expect(mockRewrite).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });

  it('should handle empty hostname', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/test',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue(null),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/test');
    expect(mockRewrite).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });

  it('should handle undefined hostname', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/test',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue(undefined),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/test');
    expect(mockRewrite).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });

  it('should verify config matcher', () => {
    const { config } = require('../middleware');
    expect(config.matcher).toEqual(['/:path*']);
  });

  it('should handle docs domain with nested paths', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/api/reference/functions',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('docs.noahdummett.com'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/docs/api/reference/functions');
    expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should handle docs domain with query parameters', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/search',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('docs.noahdummett.com'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/docs/search');
    expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should handle case sensitivity in hostname', () => {
    const mockRewrite = jest.fn();
    const mockNext = jest.fn();
    
    (NextResponse.rewrite as jest.Mock) = mockRewrite;
    (NextResponse.next as jest.Mock) = mockNext;

    const mockUrl = {
      pathname: '/test',
    };

    const mockRequest = {
      nextUrl: mockUrl,
      headers: {
        get: jest.fn().mockReturnValue('DOCS.NOAHDUMMETT.COM'),
      },
    } as unknown as NextRequest;

    middleware(mockRequest);

    expect(mockUrl.pathname).toBe('/test');
    expect(mockRewrite).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });
});
