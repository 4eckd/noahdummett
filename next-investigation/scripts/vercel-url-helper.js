#!/usr/bin/env node

/**
 * Vercel URL Helper
 * 
 * This utility helps detect and validate Vercel deployment URLs for testing.
 * It handles various Vercel URL formats and generates appropriate docs subdomain URLs.
 */

const https = require('https');
const http = require('http');

/**
 * Extract deployment hash from Vercel URL
 * @param {string} vercelUrl - The Vercel URL (with or without https://)
 * @returns {string|null} - The deployment hash or null if not found
 */
function extractDeploymentHash(vercelUrl) {
  if (!vercelUrl) return null;
  
  // Remove protocol if present
  const url = vercelUrl.replace(/^https?:\/\//, '');
  
  // Common Vercel URL patterns:
  // 1. project-hash-team.vercel.app
  // 2. project-hash.vercel.app
  // 3. custom-domain-hash.vercel.app
  
  const parts = url.split('.');
  if (parts.length < 2) return null;
  
  const subdomain = parts[0];
  const domainParts = subdomain.split('-');
  
  if (domainParts.length >= 2) {
    // Get the second-to-last part as the hash
    return domainParts[domainParts.length - 2];
  }
  
  return null;
}

/**
 * Generate docs subdomain URL from Vercel URL
 * @param {string} vercelUrl - The main Vercel URL
 * @returns {string} - The docs subdomain URL
 */
function generateDocsSubdomainUrl(vercelUrl) {
  const hash = extractDeploymentHash(vercelUrl);
  
  if (hash) {
    return `https://docs-${hash}.vercel.app`;
  }
  
  // Fallback to /docs path on the same domain
  const baseUrl = vercelUrl.startsWith('http') ? vercelUrl : `https://${vercelUrl}`;
  return `${baseUrl}/docs`;
}

/**
 * Check if a URL is accessible
 * @param {string} url - The URL to check
 * @returns {Promise<boolean>} - True if accessible, false otherwise
 */
function checkUrlAccessibility(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const request = client.get(url, (res) => {
      // Consider 200-399 as accessible
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    });
    
    request.on('error', () => {
      resolve(false);
    });
    
    request.setTimeout(10000, () => {
      request.destroy();
      resolve(false);
    });
  });
}

/**
 * Validate Vercel deployment URLs
 * @param {string} vercelUrl - The Vercel URL to validate
 * @returns {Promise<Object>} - Validation results
 */
async function validateVercelUrls(vercelUrl) {
  if (!vercelUrl) {
    return {
      isValid: false,
      error: 'No Vercel URL provided'
    };
  }
  
  const baseUrl = vercelUrl.startsWith('http') ? vercelUrl : `https://${vercelUrl}`;
  const docsUrl = generateDocsSubdomainUrl(vercelUrl);
  
  console.log(`Validating Vercel deployment:`);
  console.log(`  Base URL: ${baseUrl}`);
  console.log(`  Docs URL: ${docsUrl}`);
  
  try {
    const [baseAccessible, docsAccessible] = await Promise.all([
      checkUrlAccessibility(baseUrl),
      checkUrlAccessibility(docsUrl)
    ]);
    
    return {
      isValid: baseAccessible,
      baseUrl,
      docsUrl,
      baseAccessible,
      docsAccessible,
      hash: extractDeploymentHash(vercelUrl)
    };
  } catch (error) {
    return {
      isValid: false,
      error: error.message
    };
  }
}

/**
 * Main function for CLI usage
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'validate') {
    const url = args[1] || process.env.VERCEL_URL;
    
    if (!url) {
      console.error('Error: No URL provided. Use: node vercel-url-helper.js validate <url>');
      process.exit(1);
    }
    
    const result = await validateVercelUrls(url);
    
    if (result.isValid) {
      console.log('✅ Deployment validation successful');
      console.log(`   Base URL accessible: ${result.baseAccessible ? '✅' : '❌'}`);
      console.log(`   Docs URL accessible: ${result.docsAccessible ? '✅' : '❌'}`);
      console.log(`   Deployment hash: ${result.hash || 'N/A'}`);
    } else {
      console.log('❌ Deployment validation failed');
      console.log(`   Error: ${result.error}`);
      process.exit(1);
    }
  } else if (command === 'extract-hash') {
    const url = args[1] || process.env.VERCEL_URL;
    const hash = extractDeploymentHash(url);
    
    if (hash) {
      console.log(hash);
    } else {
      console.error('No hash found in URL');
      process.exit(1);
    }
  } else if (command === 'generate-docs-url') {
    const url = args[1] || process.env.VERCEL_URL;
    const docsUrl = generateDocsSubdomainUrl(url);
    console.log(docsUrl);
  } else {
    console.log('Vercel URL Helper');
    console.log('');
    console.log('Usage:');
    console.log('  node vercel-url-helper.js validate [url]       - Validate deployment URLs');
    console.log('  node vercel-url-helper.js extract-hash [url]   - Extract deployment hash');
    console.log('  node vercel-url-helper.js generate-docs-url [url] - Generate docs subdomain URL');
    console.log('');
    console.log('If no URL is provided, VERCEL_URL environment variable is used.');
  }
}

// Export functions for use in other scripts
module.exports = {
  extractDeploymentHash,
  generateDocsSubdomainUrl,
  checkUrlAccessibility,
  validateVercelUrls
};

// Run main function if this script is executed directly
if (require.main === module) {
  main().catch(console.error);
}
