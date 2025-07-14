#!/usr/bin/env node

/**
 * Helper function to safely extract category scores
 * @param {Object} result - The Lighthouse result object
 * @param {string} key - The category key to extract
 * @returns {number|null} - The score as a percentage or null if missing
 */
function safeCategoryScore(result, key) {
  return result.categories?.[key]?.score ? Math.round(result.categories[key].score * 100) : null;
}

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Lighthouse Performance Audit Script
 * 
 * Tests both main investigation site and docs portal for:
 * - Performance metrics
 * - Accessibility compliance
 * - Best practices
 * - SEO optimization
 * - Progressive Web App standards
 */

const AUDIT_CONFIG = {
  // Performance thresholds
  thresholds: {
    performance: 90,
    accessibility: 95,
    'best-practices': 90,
    seo: 95
  },
  
  // Sites to audit - use environment variable for base URL or default to production
  sites: [
    {
      name: 'Main Investigation Site',
      url: process.env.LIGHTHOUSE_BASE_URL || 'https://noahdummett.com',
      outputFile: 'lighthouse-main-site.json'
    },
    {
      name: 'Documentation Portal', 
      url: process.env.LIGHTHOUSE_DOCS_URL || 'https://docs.noahdummett.com',
      outputFile: 'lighthouse-docs-site.json'
    }
  ],

  // Lighthouse configuration
  lighthouseConfig: {
    extends: 'lighthouse:default',
    settings: {
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
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
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port
  };

  try {
    console.log(`🔍 Auditing ${url}...`);
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
        performance: safeCategoryScore(results, 'performance'),
        accessibility: safeCategoryScore(results, 'accessibility'),
        'best-practices': safeCategoryScore(results, 'best-practices'),
        seo: safeCategoryScore(results, 'seo')
      },
      metrics: {
        'first-contentful-paint': results.audits?.['first-contentful-paint']?.numericValue || 0,
        'largest-contentful-paint': results.audits?.['largest-contentful-paint']?.numericValue || 0,
        'first-meaningful-paint': results.audits?.['first-meaningful-paint']?.numericValue || 0,
        'speed-index': results.audits?.['speed-index']?.numericValue || 0,
        'interactive': results.audits?.['interactive']?.numericValue || 0,
        'total-blocking-time': results.audits?.['total-blocking-time']?.numericValue || 0,
        'cumulative-layout-shift': results.audits?.['cumulative-layout-shift']?.numericValue || 0
      },
      opportunities: results.audits ? 
        Object.keys(results.audits)
          .filter(key => results.audits[key]?.scoreDisplayMode === 'numeric' && results.audits[key]?.score < 1)
          .map(key => ({
            audit: key,
            title: results.audits[key].title,
            description: results.audits[key].description,
            score: results.audits[key].score
          }))
        : [],
      reportPath: outputPath
    };
  } finally {
    await chrome.kill();
  }
}

async function generateSummaryReport(results) {
  const summaryPath = path.join(__dirname, '..', 'reports', 'lighthouse', 'summary.md');
  
  let summary = `# Lighthouse Performance Audit Summary\n\n`;
  summary += `Generated on: ${new Date().toISOString()}\n\n`;
  
  results.forEach((result, index) => {
    const site = AUDIT_CONFIG.sites[index];
    summary += `## ${site.name}\n`;
    summary += `**URL:** ${result.url}\n\n`;
    
    // Scores table
    summary += `### Scores\n\n`;
    summary += `| Category | Score | Status |\n`;
    summary += `|----------|-------|--------|\n`;
    
    Object.entries(result.scores).forEach(([category, score]) => {
      if (score === null) {
        summary += `| ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')} | N/A | N/A |\n`;
        return;
      }
      const threshold = AUDIT_CONFIG.thresholds[category];
      const status = score >= threshold ? '✅ PASS' : '❌ FAIL';
      summary += `| ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')} | ${score}/100 | ${status} |\n`;
    });
    
    // Performance metrics
    summary += `\n### Key Performance Metrics\n\n`;
    summary += `| Metric | Value |\n`;
    summary += `|--------|-------|\n`;
    summary += `| First Contentful Paint | ${Math.round(result.metrics['first-contentful-paint'])}ms |\n`;
    summary += `| Largest Contentful Paint | ${Math.round(result.metrics['largest-contentful-paint'])}ms |\n`;
    summary += `| Speed Index | ${Math.round(result.metrics['speed-index'])}ms |\n`;
    summary += `| Time to Interactive | ${Math.round(result.metrics['interactive'])}ms |\n`;
    summary += `| Total Blocking Time | ${Math.round(result.metrics['total-blocking-time'])}ms |\n`;
    summary += `| Cumulative Layout Shift | ${result.metrics['cumulative-layout-shift'].toFixed(3)} |\n`;
    
    // Opportunities for improvement
    if (result.opportunities.length > 0) {
      summary += `\n### Opportunities for Improvement\n\n`;
      result.opportunities.slice(0, 5).forEach(opp => {
        summary += `- **${opp.title}**: ${opp.description}\n`;
      });
    }
    
    summary += `\n**Full Report:** [${site.outputFile}](${site.outputFile})\n\n`;
    summary += `---\n\n`;
  });
  
  fs.writeFileSync(summaryPath, summary);
  return summaryPath;
}

async function main() {
  console.log('🚀 Starting Lighthouse Performance Audit...\n');
  
  const results = [];
  
  for (const site of AUDIT_CONFIG.sites) {
    try {
      const result = await runLighthouseAudit(site.url, site.outputFile);
      results.push(result);
      
      console.log(`✅ Completed audit for ${site.name}`);
      console.log(`   Performance: ${result.scores.performance ?? 'N/A'}/100`);
      console.log(`   Accessibility: ${result.scores.accessibility ?? 'N/A'}/100`);
      console.log(`   Best Practices: ${result.scores['best-practices'] ?? 'N/A'}/100`);
      console.log(`   SEO: ${result.scores.seo ?? 'N/A'}/100\n`);
      
    } catch (error) {
      console.error(`❌ Failed to audit ${site.name}:`, error.message);
      process.exit(1);
    }
  }
  
  // Generate summary report
  const summaryPath = await generateSummaryReport(results);
  console.log(`📊 Summary report generated: ${summaryPath}`);
  
  // Check if all scores meet thresholds
  let allPassed = true;
  results.forEach((result, index) => {
    const site = AUDIT_CONFIG.sites[index];
    Object.entries(result.scores).forEach(([category, score]) => {
      if (score === null) return;
      const threshold = AUDIT_CONFIG.thresholds[category];
      if (score < threshold) {
        console.log(`❌ ${site.name} - ${category}: ${score}/100 (threshold: ${threshold})`);
        allPassed = false;
      }
    });
  });
  
  if (allPassed) {
    console.log('🎉 All sites passed performance thresholds!');
    process.exit(0);
  } else {
    console.log('⚠️  Some sites failed to meet performance thresholds.');
    process.exit(1);
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}` || 
    import.meta.url.endsWith(process.argv[1]?.replace(/\\/g, '/'))) {
  main().catch(console.error);
}

export { runLighthouseAudit, generateSummaryReport, AUDIT_CONFIG, main, safeCategoryScore };
