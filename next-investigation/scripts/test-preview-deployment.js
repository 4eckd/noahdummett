#!/usr/bin/env node

/**
 * Preview Deployment Test Runner
 * 
 * This script runs comprehensive Playwright tests against preview deployments.
 * It uses the VERCEL_URL environment variable to test against the actual preview URL.
 * 
 * Features:
 * - Reads from process.env.VERCEL_URL for preview testing
 * - Generates docs subdomain URLs for Vercel previews
 * - Runs comprehensive tests including mobile viewport snapshots
 * - Fails the build if any tests fail
 * - Provides detailed logging and error reporting
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  log(`\n${'='.repeat(50)}`, 'cyan');
  log(`${title}`, 'cyan');
  log(`${'='.repeat(50)}`, 'cyan');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

async function main() {
  logSection('Preview Deployment Test Runner');
  
  // Check environment variables
  const vercelUrl = process.env.VERCEL_URL;
  const isVercelDeployment = !!vercelUrl;
  
  if (isVercelDeployment) {
    logInfo(`Testing Vercel preview deployment: https://${vercelUrl}`);
    
    // Generate docs subdomain URL
    const urlParts = vercelUrl.split('-');
    if (urlParts.length >= 2) {
      const hash = urlParts[urlParts.length - 2];
      const docsUrl = `https://docs-${hash}.vercel.app`;
      logInfo(`Docs subdomain will be tested at: ${docsUrl}`);
    }
  } else {
    logWarning('VERCEL_URL not found - testing against local development server');
    logInfo('Base URL: http://127.0.0.1:3000');
  }
  
  // Ensure test results directory exists
  const testResultsDir = path.join(__dirname, '..', 'test-results');
  if (!fs.existsSync(testResultsDir)) {
    fs.mkdirSync(testResultsDir, { recursive: true });
    logInfo('Created test-results directory');
  }
  
  // Run Playwright tests
  logSection('Running Playwright Tests');
  
  const playwrightArgs = [
    'test',
    '--config=playwright.config.ts',
    'tests/playwright/preview-deployment.test.ts',
    '--reporter=list,html',
    '--workers=1', // Sequential execution for preview testing
  ];
  
  // Add additional args for CI
  if (process.env.CI) {
    playwrightArgs.push('--forbid-only', '--reporter=github,html');
  }
  
  return new Promise((resolve, reject) => {
    const playwrightProcess = spawn('npx', ['playwright', ...playwrightArgs], {
      stdio: 'inherit',
      env: {
        ...process.env,
        // Pass through environment variables for the tests
        NODE_ENV: process.env.NODE_ENV || 'test',
        CI: process.env.CI || '',
        VERCEL_URL: vercelUrl || '',
      },
    });
    
    playwrightProcess.on('close', (code) => {
      if (code === 0) {
        logSuccess('All preview deployment tests passed!');
        logInfo('Test report available at: playwright-report/index.html');
        resolve();
      } else {
        logError(`Tests failed with exit code ${code}`);
        logError('Check the test report for details: playwright-report/index.html');
        reject(new Error(`Preview deployment tests failed with exit code ${code}`));
      }
    });
    
    playwrightProcess.on('error', (error) => {
      logError(`Failed to start Playwright tests: ${error.message}`);
      reject(error);
    });
  });
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logError(`Uncaught exception: ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logError(`Unhandled rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

// Run the main function
main().catch((error) => {
  logError(`Test runner failed: ${error.message}`);
  process.exit(1);
});
