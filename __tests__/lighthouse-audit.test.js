// Helper function to safely extract category scores - copied from lighthouse-audit.mjs
function safeCategoryScore(result, key) {
  return result?.categories?.[key]?.score ? Math.round(result.categories[key].score * 100) : null;
}

describe('safeCategoryScore', () => {
  test('should return correct score for valid category', () => {
    const mockResult = {
      categories: {
        performance: { score: 0.95 },
        accessibility: { score: 0.87 },
        'best-practices': { score: 0.92 },
        seo: { score: 0.89 }
      }
    };

    expect(safeCategoryScore(mockResult, 'performance')).toBe(95);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(87);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(92);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(89);
  });

  test('should return null for missing category', () => {
    const mockResult = {
      categories: {
        performance: { score: 0.95 },
        accessibility: { score: 0.87 }
      }
    };

    expect(safeCategoryScore(mockResult, 'pwa')).toBe(null);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(null);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(null);
  });

  test('should return null for category with null score', () => {
    const mockResult = {
      categories: {
        performance: { score: null },
        accessibility: { score: undefined },
        'best-practices': { score: 0 },
        seo: { score: 0.89 }
      }
    };

    expect(safeCategoryScore(mockResult, 'performance')).toBe(null);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(null);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(null);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(89);
  });

  test('should return null for missing categories object', () => {
    const mockResult = {};

    expect(safeCategoryScore(mockResult, 'performance')).toBe(null);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(null);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(null);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(null);
  });

  test('should return null for null result', () => {
    expect(safeCategoryScore(null, 'performance')).toBe(null);
    expect(safeCategoryScore(undefined, 'accessibility')).toBe(null);
  });

  test('should handle edge cases with scores', () => {
    const mockResult = {
      categories: {
        performance: { score: 1.0 },
        accessibility: { score: 0.0 },
        'best-practices': { score: 0.999 },
        seo: { score: 0.001 }
      }
    };

    expect(safeCategoryScore(mockResult, 'performance')).toBe(100);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(null); // 0 score should return null
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(100);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(0);
  });

  test('should handle missing score property in category', () => {
    const mockResult = {
      categories: {
        performance: { score: 0.95 },
        accessibility: {}, // no score property
        'best-practices': { score: 0.92 },
        seo: { otherProperty: 'value' } // has properties but no score
      }
    };

    expect(safeCategoryScore(mockResult, 'performance')).toBe(95);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(null);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(92);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(null);
  });

  test('should handle real-world Lighthouse result structure', () => {
    // Mock a more realistic Lighthouse result structure
    const mockResult = {
      lhr: {
        requestedUrl: 'https://example.com',
        finalUrl: 'https://example.com',
        lighthouseVersion: '10.0.0',
        userAgent: 'Mozilla/5.0...',
        environment: {},
        runWarnings: [],
        configSettings: {}
      },
      categories: {
        performance: {
          id: 'performance',
          title: 'Performance',
          score: 0.94,
          auditRefs: []
        },
        accessibility: {
          id: 'accessibility', 
          title: 'Accessibility',
          score: 0.87,
          auditRefs: []
        },
        'best-practices': {
          id: 'best-practices',
          title: 'Best Practices',
          score: 0.92,
          auditRefs: []
        },
        seo: {
          id: 'seo',
          title: 'SEO',
          score: 0.89,
          auditRefs: []
        }
      },
      audits: {}
    };

    expect(safeCategoryScore(mockResult, 'performance')).toBe(94);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(87);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(92);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(89);
    expect(safeCategoryScore(mockResult, 'pwa')).toBe(null); // PWA removed
  });

  test('should handle missing Lighthouse result with some categories', () => {
    // Test case where some categories might be missing in actual Lighthouse results
    const mockResult = {
      categories: {
        performance: { score: 0.94 },
        accessibility: { score: 0.87 }
        // best-practices and seo missing
      }
    };

    expect(safeCategoryScore(mockResult, 'performance')).toBe(94);
    expect(safeCategoryScore(mockResult, 'accessibility')).toBe(87);
    expect(safeCategoryScore(mockResult, 'best-practices')).toBe(null);
    expect(safeCategoryScore(mockResult, 'seo')).toBe(null);
    expect(safeCategoryScore(mockResult, 'pwa')).toBe(null);
  });
});
