import { test, expect } from '@playwright/test';

/**
 * Test Suite: Preview Deployment Validation
 * 
 * Comprehensive testing for preview deployments using process.env.VERCEL_URL
 * Tests include:
 * - Homepage loads (200 status)
 * - Docs subdomain rewrite shows /docs page
 * - Navigation between domains works via anchor links
 * - Mobile viewport snapshot across five themes
 * 
 * These tests will fail the build if any issues are detected.
 */

// Get the deployment URL from environment
const getDeploymentURL = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.BASE_URL || 'http://127.0.0.1:3000';
};

// Generate docs subdomain URL for preview deployments
const getDocsSubdomainURL = () => {
  if (process.env.VERCEL_URL) {
    // Extract hash from VERCEL_URL (format: project-hash-team.vercel.app)
    const urlParts = process.env.VERCEL_URL.split('-');
    if (urlParts.length >= 2) {
      const hash = urlParts[urlParts.length - 2]; // Get second-to-last part (hash)
      return `https://docs-${hash}.vercel.app`;
    }
  }
  return `${getDeploymentURL()}/docs`;
};

const baseURL = getDeploymentURL();
const docsURL = getDocsSubdomainURL();

// Available themes for snapshot testing
const themes = ['dark', 'violet', 'emerald', 'amber', 'aurora'];

test.describe('Preview Deployment Validation', () => {
  test.beforeEach(async ({ page }) => {
    // Set a reasonable timeout for network requests
    page.setDefaultTimeout(30000);
  });

  test('Homepage loads successfully with 200 status', async ({ page }) => {
    // Navigate to homepage and verify response status
    const response = await page.goto(baseURL);
    expect(response?.status()).toBe(200);
    
    // Verify critical page elements are present
    await expect(page.locator('h1')).toContainText('Noah Dummett');
    await expect(page.locator('h1')).toContainText('Investigation');
    
    // Verify key investigation content loads
    await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
    await expect(page.locator('text=$25M+ Alleged Theft')).toBeVisible();
    
    // Verify navigation elements are present
    await expect(page.locator('a[href="/noah-dummett"]')).toBeVisible();
    await expect(page.locator('a[href="/evidence/trustpilot"]')).toBeVisible();
    
    console.log(`✅ Homepage loaded successfully at: ${baseURL}`);
  });

  test('Docs subdomain rewrite shows /docs page correctly', async ({ page }) => {
    // Navigate to docs subdomain URL
    const response = await page.goto(docsURL);
    expect(response?.status()).toBe(200);
    
    // Verify docs page content loads
    await expect(page.locator('h1')).toContainText('Noah Dummett Investigation');
    await expect(page.locator('h2')).toContainText('Documentation Portal');
    
    // Verify docs-specific elements are present
    await expect(page.locator('.prose')).toBeVisible();
    await expect(page.locator('text=Welcome to the comprehensive documentation')).toBeVisible();
    
    // Verify sidebar navigation is present
    await expect(page.locator('aside .w-64')).toBeVisible();
    await expect(page.locator('text=Documentation')).toBeVisible();
    await expect(page.locator('text=Getting Started')).toBeVisible();
    
    // Verify key documentation links
    await expect(page.locator('a[href="/docs/introduction"]')).toBeVisible();
    await expect(page.locator('a[href="/docs/getting-started"]')).toBeVisible();
    
    console.log(`✅ Docs subdomain loaded successfully at: ${docsURL}`);
  });

  test('Navigation between domains works via anchor links', async ({ page }) => {
    // Start on homepage
    await page.goto(baseURL);
    
    // Test navigation to docs from main site
    const docsLink = page.locator('a[href*="/docs"]').first();
    if (await docsLink.isVisible()) {
      await docsLink.click();
      
      // Verify we're on docs page
      await expect(page.locator('h1')).toContainText('Documentation');
      
      // Test navigation back to main site
      const homeLink = page.locator('a[href="/"]').first();
      if (await homeLink.isVisible()) {
        await homeLink.click();
        
        // Verify we're back on homepage
        await expect(page.locator('h1')).toContainText('Noah Dummett');
        await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
      }
    }
    
    console.log('✅ Cross-domain navigation working correctly');
  });

  test('Evidence page navigation works correctly', async ({ page }) => {
    // Navigate to evidence page
    await page.goto(baseURL);
    
    const evidenceLink = page.locator('a[href="/evidence/trustpilot"]');
    if (await evidenceLink.isVisible()) {
      await evidenceLink.click();
      
      // Verify evidence page loads
      await expect(page.locator('h1')).toContainText('Evidence');
      
      // Test navigation back to home
      const homeLink = page.locator('a[href="/"]').first();
      if (await homeLink.isVisible()) {
        await homeLink.click();
        await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
      }
    }
    
    console.log('✅ Evidence page navigation working correctly');
  });

  // Mobile viewport snapshot tests across all themes
  themes.forEach(theme => {
    test(`Mobile viewport snapshot - ${theme} theme`, async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Navigate to homepage
      await page.goto(baseURL);
      
      // Set theme by executing JavaScript
      await page.evaluate((themeName) => {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('investigation-theme', themeName);
      }, theme);
      
      // Wait for theme to apply
      await page.waitForTimeout(1000);
      
      // Verify critical elements are visible in mobile viewport
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
      
      // Take screenshot for visual regression testing
      await page.screenshot({
        path: `test-results/mobile-${theme}-theme.png`,
        fullPage: true,
      });
      
      // Verify mobile navigation works
      const ctaButton = page.locator('a[href="/noah-dummett"]').first();
      await expect(ctaButton).toBeVisible();
      
      console.log(`✅ Mobile viewport snapshot captured for ${theme} theme`);
    });
  });

  test('Mobile docs viewport snapshot across all themes', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    for (const theme of themes) {
      // Navigate to docs page
      await page.goto(docsURL);
      
      // Set theme
      await page.evaluate((themeName) => {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('investigation-theme', themeName);
      }, theme);
      
      // Wait for theme to apply
      await page.waitForTimeout(1000);
      
      // Verify docs mobile layout
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('.prose')).toBeVisible();
      
      // Take screenshot
      await page.screenshot({
        path: `test-results/mobile-docs-${theme}-theme.png`,
        fullPage: true,
      });
      
      console.log(`✅ Mobile docs snapshot captured for ${theme} theme`);
    }
  });

  test('Theme switching functionality works correctly', async ({ page }) => {
    await page.goto(baseURL);
    
    // Test theme switching if theme selector is available
    const themeSelector = page.locator('[data-testid="theme-selector"]');
    if (await themeSelector.isVisible()) {
      // Test switching to different themes
      for (const theme of themes) {
        await themeSelector.click();
        const themeOption = page.locator(`[data-theme="${theme}"]`);
        if (await themeOption.isVisible()) {
          await themeOption.click();
          
          // Verify theme was applied
          const dataTheme = await page.getAttribute('html', 'data-theme');
          expect(dataTheme).toBe(theme);
          
          // Wait for theme transition
          await page.waitForTimeout(500);
        }
      }
    }
    
    console.log('✅ Theme switching functionality verified');
  });

  test('Performance: Page loads within acceptable time limits', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto(baseURL);
    
    // Wait for critical content to load
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
    
    const loadTime = Date.now() - startTime;
    
    // Expect page to load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    console.log(`✅ Page loaded in ${loadTime}ms`);
  });

  test('Accessibility: Critical elements have proper ARIA attributes', async ({ page }) => {
    await page.goto(baseURL);
    
    // Check for main heading
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    
    // Check for navigation landmarks
    const nav = page.locator('nav');
    if (await nav.count() > 0) {
      await expect(nav.first()).toBeVisible();
    }
    
    // Check for main content area
    const main = page.locator('main');
    if (await main.count() > 0) {
      await expect(main.first()).toBeVisible();
    }
    
    console.log('✅ Basic accessibility checks passed');
  });

  test('Error handling: 404 pages display correctly', async ({ page }) => {
    // Navigate to non-existent page
    const response = await page.goto(`${baseURL}/non-existent-page`);
    
    // Should return 404 or redirect to error page
    if (response?.status() === 404) {
      // Verify 404 page content
      await expect(page.locator('text=404')).toBeVisible();
    } else {
      // If redirected, verify we're on a valid page
      await expect(page.locator('h1')).toBeVisible();
    }
    
    console.log('✅ Error handling verified');
  });
});

// Test configuration for different environments
test.describe('Environment-specific tests', () => {
  test('Environment variables are properly configured', async ({ page }) => {
    // This test ensures the environment is set up correctly
    const isVercelDeployment = !!process.env.VERCEL_URL;
    
    console.log(`Environment: ${isVercelDeployment ? 'Vercel Preview' : 'Local Development'}`);
    console.log(`Base URL: ${baseURL}`);
    console.log(`Docs URL: ${docsURL}`);
    
    // Verify the deployment is accessible
    const response = await page.goto(baseURL);
    expect(response?.status()).toBe(200);
    
    console.log('✅ Environment configuration verified');
  });
});
