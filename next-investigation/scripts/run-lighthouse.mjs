#!/usr/bin/env node

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Simple Lighthouse audit runner
 */

const AUDIT_CONFIG = {
  thresholds: {
    performance: 90,
    accessibility: 95,
    'best-practices': 90,
    seo: 95,
    pwa: 80
  },
  
  sites: [
    {
      name: 'Main Investigation Site',
      url: 'https://noahdummett.com',
      outputFile: 'lighthouse-main-site.json'
    },
    {
      name: 'Documentation Portal', 
      url: 'https://docs.noahdummett.com',
      outputFile: 'lighthouse-docs-site.json'
    }
  ],

  lighthouseConfig: {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
      formFactor: 'desktop',
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false
      },
      emulatedUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36'
    }
  }
};

async function runLighthouseAudit(url, outputFile) {
  console.log(`🔍 Auditing ${url}...`);
  
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
    port: chrome.port
  };

  try {
    const runnerResult = await lighthouse(url, options, AUDIT_CONFIG.lighthouseConfig);
    
    // Save full report
    const reportJson = runnerResult.report;
    const outputPath = path.join(__dirname, '..', 'reports', 'lighthouse', outputFile);
    
    // Ensure directory exists
    const reportDir = path.dirname(outputPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, reportJson);
    
    const results = JSON.parse(reportJson);
    return {
      url,
      scores: {
        performance: Math.round(results.categories.performance.score * 100),
        accessibility: Math.round(results.categories.accessibility.score * 100),
        'best-practices': Math.round(results.categories['best-practices'].score * 100),
        seo: Math.round(results.categories.seo.score * 100),
        pwa: Math.round(results.categories.pwa.score * 100)
      },
      metrics: {
        'first-contentful-paint': results.audits['first-contentful-paint'].numericValue,
        'largest-contentful-paint': results.audits['largest-contentful-paint'].numericValue,
        'first-meaningful-paint': results.audits['first-meaningful-paint'].numericValue,
        'speed-index': results.audits['speed-index'].numericValue,
        'interactive': results.audits['interactive'].numericValue,
        'total-blocking-time': results.audits['total-blocking-time'].numericValue,
        'cumulative-layout-shift': results.audits['cumulative-layout-shift'].numericValue
      },
      reportPath: outputPath,
      securityHeaders: checkSecurityHeaders(results),
      cacheHeaders: checkCacheHeaders(results),
      mixedContent: checkMixedContent(results)
    };
  } finally {
    await chrome.kill();
  }
}

function checkSecurityHeaders(results) {
  const headers = {};
  const serverAudit = results.audits['server-response-time'];
  
  // Check for common security headers in the audits
  const securityAudits = [
    'csp-xss',
    'is-on-https',
    'redirects-http',
    'geolocation-on-start',
    'notification-on-start'
  ];
  
  securityAudits.forEach(auditId => {
    if (results.audits[auditId]) {
      headers[auditId] = {
        score: results.audits[auditId].score,
        title: results.audits[auditId].title,
        description: results.audits[auditId].description
      };
    }
  });
  
  return headers;
}

function checkCacheHeaders(results) {
  const cacheAudits = [
    'uses-long-cache-ttl',
    'efficient-animated-content',
    'unused-css-rules',
    'unused-javascript'
  ];
  
  const cacheInfo = {};
  cacheAudits.forEach(auditId => {
    if (results.audits[auditId]) {
      cacheInfo[auditId] = {
        score: results.audits[auditId].score,
        title: results.audits[auditId].title,
        numericValue: results.audits[auditId].numericValue || 0
      };
    }
  });
  
  return cacheInfo;
}

function checkMixedContent(results) {
  const mixedContentAudits = [
    'is-on-https',
    'redirects-http'
  ];
  
  const mixedContent = {};
  mixedContentAudits.forEach(auditId => {
    if (results.audits[auditId]) {
      mixedContent[auditId] = {
        score: results.audits[auditId].score,
        title: results.audits[auditId].title
      };
    }
  });
  
  return mixedContent;
}

async function main() {
  console.log('🚀 Starting Lighthouse Performance Audit...\n');
  
  const results = [];
  
  for (const site of AUDIT_CONFIG.sites) {
    try {
      const result = await runLighthouseAudit(site.url, site.outputFile);
      results.push(result);
      
      console.log(`✅ Completed audit for ${site.name}`);
      console.log(`   Performance: ${result.scores.performance}/100`);
      console.log(`   Accessibility: ${result.scores.accessibility}/100`);
      console.log(`   Best Practices: ${result.scores['best-practices']}/100`);
      console.log(`   SEO: ${result.scores.seo}/100`);
      console.log(`   PWA: ${result.scores.pwa}/100`);
      
      // Security headers check
      console.log(`   Security Headers: ${Object.keys(result.securityHeaders).length} checks`);
      
      // Cache headers check
      console.log(`   Cache Headers: ${Object.keys(result.cacheHeaders).length} checks`);
      
      // Mixed content check
      console.log(`   Mixed Content: ${Object.keys(result.mixedContent).length} checks`);
      
      console.log('');
      
    } catch (error) {
      console.error(`❌ Failed to audit ${site.name}:`, error.message);
      console.error(error.stack);
    }
  }
  
  // Check if all scores meet thresholds
  let allPassed = true;
  results.forEach((result, index) => {
    const site = AUDIT_CONFIG.sites[index];
    Object.entries(result.scores).forEach(([category, score]) => {
      const threshold = AUDIT_CONFIG.thresholds[category];
      if (score < threshold) {
        console.log(`❌ ${site.name} - ${category}: ${score}/100 (threshold: ${threshold})`);
        allPassed = false;
      }
    });
  });
  
  if (allPassed) {
    console.log('🎉 All sites passed performance thresholds!');
  } else {
    console.log('⚠️  Some sites failed to meet performance thresholds.');
  }
  
  return results;
}

main().catch(console.error);
