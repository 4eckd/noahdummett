import { test, expect } from '@playwright/test';

/**
 * Test Suite: Landing Page Validation
 * 
 * Tests critical user flows for both main investigation site and docs portal.
 * Validates proper rendering, navigation, and key content visibility.
 */

test.describe('Investigation Landing Pages', () => {
  test('Main site (localhost) renders investigation landing', async ({ page }) => {
    // Navigate to main investigation site
    await page.goto('/');
    
    // Verify main heading
    await expect(page.locator('h1')).toContainText('Noah Dummett');
    await expect(page.locator('h1')).toContainText('Investigation');
    
    // Verify critical investigation elements
    await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
    await expect(page.locator('text=$25M+ Alleged Theft')).toBeVisible();
    await expect(page.locator('text=Read Full Investigation')).toBeVisible();
    
    // Verify key navigation links
    await expect(page.locator('a[href="/noah-dummett"]')).toBeVisible();
    await expect(page.locator('a[href="/evidence/trustpilot"]')).toBeVisible();
    
    // Verify evidence section
    await expect(page.locator('text=Blockchain Evidence')).toBeVisible();
    await expect(page.locator('text=$25 MILLION+ Stolen From FTX Victims')).toBeVisible();
  });

  test('Docs site (/docs) renders docs landing with sidebar', async ({ page }) => {
    // Navigate to docs portal (simulating subdomain middleware)
    await page.goto('/docs');
    
    // Verify main heading
    await expect(page.locator('h1')).toContainText('Noah Dummett Investigation');
    await expect(page.locator('h2')).toContainText('Documentation Portal');
    
    // Verify docs content structure
    await expect(page.locator('.prose')).toBeVisible();
    await expect(page.locator('text=Welcome to the comprehensive documentation')).toBeVisible();
    
    // Verify sidebar is visible and functional
    await expect(page.locator('aside .w-64')).toBeVisible();
    await expect(page.locator('text=Documentation')).toBeVisible();
    await expect(page.locator('text=Getting Started')).toBeVisible();
    await expect(page.locator('text=Evidence Analysis')).toBeVisible();
    await expect(page.locator('text=Legal Documentation')).toBeVisible();
    await expect(page.locator('text=Technical Documentation')).toBeVisible();
    
    // Verify key documentation links
    await expect(page.locator('a[href="/docs/introduction"]')).toBeVisible();
    await expect(page.locator('a[href="/docs/getting-started"]')).toBeVisible();
    await expect(page.locator('a[href="/docs/api-reference"]')).toBeVisible();
    await expect(page.locator('a[href="/docs/evidence-analysis"]')).toBeVisible();
    
    // Verify footer information
    await expect(page.locator('text=Its Different Productions')).toBeVisible();
  });

  test('Docs sidebar navigation is functional', async ({ page }) => {
    await page.goto('/docs');
    
    // Test sidebar section expansion
    const evidenceSection = page.locator('text=Evidence Analysis');
    await evidenceSection.click();
    
    // Verify subsection items appear
    await expect(page.locator('text=Blockchain Evidence')).toBeVisible();
    await expect(page.locator('text=Digital Forensics')).toBeVisible();
    
    // Test navigation to subsection
    await page.locator('a[href="/docs/evidence-analysis/blockchain"]').click();
    await expect(page.url()).toContain('/docs/evidence-analysis/blockchain');
  });

  test('Main site responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Verify mobile layout
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=BREAKING INVESTIGATION')).toBeVisible();
    
    // Verify mobile navigation works
    const ctaButton = page.locator('a[href="/noah-dummett"]').first();
    await expect(ctaButton).toBeVisible();
  });

  test('Docs site responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/docs');
    
    // Verify mobile layout
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.prose')).toBeVisible();
    
    // On mobile, sidebar should be hidden by default
    await expect(page.locator('aside')).toHaveClass(/hidden/);
  });
});

