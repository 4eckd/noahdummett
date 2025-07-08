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

  // Additional Edge Cases for Path Mapping
  describe('Edge Cases: Path Mapping', () => {
    it('should handle URLs with trailing slashes', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/getting-started/',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe('/docs/getting-started/');
      expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    });

    it('should handle docs path with multiple segments', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/evidence-analysis/blockchain/transactions',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe('/docs/evidence-analysis/blockchain/transactions');
      expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    });

    it('should handle special characters in path', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/legal/court-filings%20&%20evidence',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe('/docs/legal/court-filings%20&%20evidence');
      expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    });

    it('should handle docs subdomain with port number', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/api-reference',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com:3000'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      // Should not rewrite because hostname includes port
      expect(mockUrl.pathname).toBe('/api-reference');
      expect(mockRewrite).not.toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalled();
    });

    it('should handle already prefixed docs paths with trailing slash', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/docs/',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe('/docs/');
      expect(mockRewrite).not.toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalled();
    });

    it('should handle www subdomain correctly', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/investigation',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('www.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      // Should not rewrite for www subdomain
      expect(mockUrl.pathname).toBe('/investigation');
      expect(mockRewrite).not.toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalled();
    });

    it('should handle docs path with fragment/hash', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const mockUrl = {
        pathname: '/timeline/comprehensive-timeline',
        hash: '#january-2022',
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe('/docs/timeline/comprehensive-timeline');
      expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    });

    it('should handle malformed hostname headers', () => {
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
          get: jest.fn().mockReturnValue(''),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe('/test');
      expect(mockRewrite).not.toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalled();
    });

    it('should handle very long pathnames', () => {
      const mockRewrite = jest.fn();
      const mockNext = jest.fn();
      
      (NextResponse.rewrite as jest.Mock) = mockRewrite;
      (NextResponse.next as jest.Mock) = mockNext;

      const longPath = '/evidence-analysis/blockchain/transactions/detailed-analysis/january-2022/ftx-collapse/funds-transfer/shuffle-connections/noah-dummett-investigation';
      const mockUrl = {
        pathname: longPath,
      };

      const mockRequest = {
        nextUrl: mockUrl,
        headers: {
          get: jest.fn().mockReturnValue('docs.noahdummett.com'),
        },
      } as unknown as NextRequest;

      middleware(mockRequest);

      expect(mockUrl.pathname).toBe(`/docs${longPath}`);
      expect(mockRewrite).toHaveBeenCalledWith(mockUrl);
    });
  });
});
