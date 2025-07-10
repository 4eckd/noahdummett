# Preview Deployment Testing

This document describes the comprehensive testing system for preview deployments, designed to run against Vercel preview URLs and validate critical functionality including subdomain routing, navigation, and visual consistency across themes.

## Overview

The preview deployment testing system automatically runs comprehensive tests against each PR's preview deployment, ensuring that:

1. **Homepage loads correctly** with 200 status code
2. **Docs subdomain rewrite** (`https://docs-${hash}.vercel.app`) properly shows the `/docs` page
3. **Navigation between domains** works seamlessly via anchor links
4. **Mobile viewport snapshots** are captured across all 5 themes for visual regression testing
5. **Build fails** if any tests are broken

## System Components

### 1. Playwright Configuration (`playwright.config.ts`)

The configuration automatically detects the environment and adjusts settings:

- **VERCEL_URL Detection**: Automatically uses `process.env.VERCEL_URL` for preview testing
- **Dynamic Base URL**: Falls back to local development URL when needed
- **Mobile Viewport Support**: Includes mobile Chrome and Safari for comprehensive testing
- **Conditional Web Server**: Only starts local server when not in CI or when no VERCEL_URL is available

### 2. Test Suite (`tests/playwright/preview-deployment.test.ts`)

Comprehensive test suite covering:

#### Core Functionality Tests
- **Homepage Loading**: Verifies 200 status and critical page elements
- **Docs Subdomain**: Tests the `https://docs-${hash}.vercel.app` rewrite functionality
- **Cross-Domain Navigation**: Validates anchor links between main site and docs
- **Evidence Page Navigation**: Tests investigation evidence page routing

#### Visual Regression Tests
- **Theme Snapshots**: Captures mobile viewport screenshots for all 5 themes:
  - Dark theme
  - Violet theme
  - Emerald theme
  - Amber theme
  - Aurora theme

#### Performance and Accessibility
- **Load Time Validation**: Ensures pages load within 5 seconds
- **Accessibility Checks**: Validates critical ARIA attributes and semantic structure
- **Error Handling**: Tests 404 page behavior

### 3. Test Runner Script (`scripts/test-preview-deployment.js`)

Custom test runner that:

- **Environment Detection**: Automatically detects Vercel vs local environments
- **Colored Output**: Provides clear, colored console output for test results
- **URL Generation**: Creates docs subdomain URLs from Vercel deployment URLs
- **Error Handling**: Comprehensive error reporting and logging

### 4. URL Helper Utility (`scripts/vercel-url-helper.js`)

Utility for working with Vercel deployment URLs:

- **Hash Extraction**: Extracts deployment hash from various Vercel URL formats
- **Docs URL Generation**: Creates appropriate docs subdomain URLs
- **URL Validation**: Checks if deployment URLs are accessible
- **CLI Interface**: Command-line tool for manual URL operations

### 5. GitHub Actions Workflow (`.github/workflows/preview-deployment-tests.yml`)

Automated CI/CD pipeline that:

- **Triggers on PR Events**: Runs tests on pull requests and deployment status changes
- **Waits for Deployments**: Ensures tests run against ready deployments
- **Uploads Artifacts**: Saves test reports and screenshots
- **PR Comments**: Adds test results summary to pull request comments

## Usage

### Running Tests Locally

```bash
# Run preview deployment tests
npm run test:preview

# Run tests against specific URL
VERCEL_URL=your-deployment-url.vercel.app npm run test:preview

# Run tests in CI mode
npm run test:preview:ci
```

### Manual URL Operations

```bash
# Validate a deployment URL
node scripts/vercel-url-helper.js validate your-deployment-url.vercel.app

# Extract deployment hash
node scripts/vercel-url-helper.js extract-hash your-deployment-url.vercel.app

# Generate docs subdomain URL
node scripts/vercel-url-helper.js generate-docs-url your-deployment-url.vercel.app
```

### Integration with CI/CD

The system automatically integrates with your CI/CD pipeline:

1. **PR Creation**: Tests run against the PR's preview deployment
2. **Deployment Ready**: Tests execute once Vercel deployment is complete
3. **Results Reporting**: Test results are posted as PR comments
4. **Build Status**: Failed tests will fail the CI build

## Test Coverage

### Homepage Tests
- ✅ Response status (200)
- ✅ Critical page elements (headings, investigation content)
- ✅ Navigation links presence
- ✅ Mobile viewport compatibility

### Docs Subdomain Tests
- ✅ Subdomain rewrite functionality
- ✅ Documentation page content
- ✅ Sidebar navigation
- ✅ Documentation links

### Navigation Tests
- ✅ Cross-domain link functionality
- ✅ Evidence page navigation
- ✅ Return navigation to homepage

### Visual Regression Tests
- ✅ Mobile viewport snapshots for all 5 themes
- ✅ Theme switching functionality
- ✅ Docs page theme consistency

### Performance Tests
- ✅ Page load time validation
- ✅ Basic accessibility checks
- ✅ Error page handling

## Environment Variables

The system uses the following environment variables:

- `VERCEL_URL`: Primary deployment URL (automatically set by Vercel)
- `BASE_URL`: Fallback URL for local development
- `CI`: CI environment detection
- `NODE_ENV`: Node environment setting

## File Structure

```
├── playwright.config.ts                           # Playwright configuration
├── tests/playwright/
│   ├── preview-deployment.test.ts                # Main test suite
│   └── landing.test.ts                           # Original landing page tests
├── scripts/
│   ├── test-preview-deployment.js                # Test runner script
│   └── vercel-url-helper.js                      # URL utility
├── .github/workflows/
│   └── preview-deployment-tests.yml              # GitHub Actions workflow
└── docs/
    └── PREVIEW_DEPLOYMENT_TESTING.md             # This documentation
```

## Troubleshooting

### Common Issues

1. **Tests fail with "Cannot connect to URL"**
   - Check that VERCEL_URL is set correctly
   - Verify the deployment is accessible
   - Use the URL helper to validate: `node scripts/vercel-url-helper.js validate`

2. **Docs subdomain tests fail**
   - Verify the subdomain routing is configured correctly
   - Check that the deployment hash extraction is working
   - Ensure the docs subdomain is accessible

3. **Theme snapshots fail**
   - Check that the theme provider is working correctly
   - Verify theme switching functionality
   - Ensure themes are applied via data attributes

4. **Navigation tests fail**
   - Verify anchor links are present on pages
   - Check that routing between main site and docs works
   - Ensure middleware is handling subdomain routing

### Debug Commands

```bash
# Test URL accessibility
node scripts/vercel-url-helper.js validate $VERCEL_URL

# Check deployment hash extraction
node scripts/vercel-url-helper.js extract-hash $VERCEL_URL

# Generate docs URL
node scripts/vercel-url-helper.js generate-docs-url $VERCEL_URL

# Run tests with debug output
DEBUG=pw:api npm run test:preview
```

## Best Practices

1. **Test Isolation**: Each test is independent and doesn't rely on others
2. **Environment Detection**: Tests adapt to different environments automatically
3. **Error Handling**: Comprehensive error handling and reporting
4. **Performance Monitoring**: Tests include performance validation
5. **Visual Regression**: Screenshots for visual consistency validation
6. **Documentation**: Clear documentation and inline comments

## Contributing

When adding new tests:

1. Follow the existing test structure and naming conventions
2. Include appropriate assertions for both success and failure cases
3. Add proper error handling and logging
4. Update this documentation if adding new functionality
5. Ensure tests work in both local and CI environments

## Security Considerations

- Environment variables are handled securely
- No sensitive data is logged or exposed
- Tests run in isolated environments
- Screenshots are uploaded as artifacts with retention limits
