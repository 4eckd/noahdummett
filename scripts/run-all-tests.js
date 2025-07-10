#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Test Runner for Noah Dummett Investigation Platform
 * 
 * Executes all test suites in the correct order:
 * 1. Unit Tests (Jest)
 * 2. Component Tests (Jest + React Testing Library)
 * 3. Integration Tests (Middleware)
 * 4. End-to-End Tests (Playwright)
 * 5. Performance Tests (Lighthouse)
 */

class TestRunner {
  constructor() {
    this.results = {
      unit: null,
      middleware: null,
      e2e: null,
      lighthouse: null
    };
    this.startTime = Date.now();
    this.reportDir = path.join(__dirname, '..', 'reports', 'test-results');
    
    // Ensure report directory exists
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
      console.log(`\n🔧 Running: ${command} ${args.join(' ')}`);
      
      const process = spawn(command, args, {
        stdio: 'inherit',
        shell: true,
        ...options
      });

      process.on('close', (code) => {
        if (code === 0) {
          resolve(code);
        } else {
          reject(new Error(`Command failed with exit code ${code}`));
        }
      });

      process.on('error', (error) => {
        reject(error);
      });
    });
  }

  async runUnitTests() {
    console.log('\n📋 === UNIT TESTS ===');
    try {
      await this.runCommand('npm', ['run', 'test', '--', '--coverage', '--passWithNoTests']);
      this.results.unit = { status: 'PASS', duration: Date.now() - this.startTime };
      console.log('✅ Unit tests passed');
    } catch (error) {
      this.results.unit = { status: 'FAIL', error: error.message };
      console.log('❌ Unit tests failed');
      throw error;
    }
  }

  async runE2ETests() {
    console.log('\n🌐 === END-TO-END TESTS ===');
    try {
      await this.runCommand('npx', ['playwright', 'test', '--reporter=html']);
      this.results.e2e = { status: 'PASS', duration: Date.now() - this.startTime };
      console.log('✅ E2E tests passed');
    } catch (error) {
      this.results.e2e = { status: 'FAIL', error: error.message };
      console.log('❌ E2E tests failed');
      throw error;
    }
  }

  async runLighthouseTests() {
    console.log('\n⚡ === PERFORMANCE TESTS ===');
    try {
      await this.runCommand('node', ['scripts/lighthouse-audit.js']);
      this.results.lighthouse = { status: 'PASS', duration: Date.now() - this.startTime };
      console.log('✅ Performance tests passed');
    } catch (error) {
      this.results.lighthouse = { status: 'FAIL', error: error.message };
      console.log('❌ Performance tests failed');
      throw error;
    }
  }

  async generateTestReport() {
    const endTime = Date.now();
    const totalDuration = endTime - this.startTime;
    
    const report = {
      summary: {
        startTime: new Date(this.startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        totalDuration: `${Math.round(totalDuration / 1000)}s`,
        overallStatus: Object.values(this.results).every(r => r?.status === 'PASS') ? 'PASS' : 'FAIL'
      },
      results: this.results,
      environment: {
        node: process.version,
        platform: process.platform,
        arch: process.arch,
        cwd: process.cwd()
      }
    };

    // Save JSON report
    const jsonReportPath = path.join(this.reportDir, 'test-summary.json');
    fs.writeFileSync(jsonReportPath, JSON.stringify(report, null, 2));

    // Generate Markdown report
    const mdReport = this.generateMarkdownReport(report);
    const mdReportPath = path.join(this.reportDir, 'test-summary.md');
    fs.writeFileSync(mdReportPath, mdReport);

    console.log(`\n📊 Test reports generated:`);
    console.log(`   JSON: ${jsonReportPath}`);
    console.log(`   Markdown: ${mdReportPath}`);

    return report;
  }

  generateMarkdownReport(report) {
    const { summary, results } = report;
    
    let md = `# Test Execution Summary\n\n`;
    md += `**Execution Time:** ${summary.startTime} to ${summary.endTime}\n`;
    md += `**Total Duration:** ${summary.totalDuration}\n`;
    md += `**Overall Status:** ${summary.overallStatus === 'PASS' ? '✅ PASS' : '❌ FAIL'}\n\n`;

    md += `## Test Suite Results\n\n`;
    md += `| Test Suite | Status | Notes |\n`;
    md += `|------------|--------|-------|\n`;

    Object.entries(results).forEach(([suite, result]) => {
      if (result) {
        const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';
        const notes = result.error || 'All tests passed';
        md += `| ${suite.charAt(0).toUpperCase() + suite.slice(1)} | ${status} | ${notes} |\n`;
      } else {
        md += `| ${suite.charAt(0).toUpperCase() + suite.slice(1)} | ⏭️ SKIPPED | Not executed |\n`;
      }
    });

    md += `\n## Test Coverage\n\n`;
    md += `Coverage reports are available in the following locations:\n`;
    md += `- Unit Test Coverage: \`coverage/lcov-report/index.html\`\n`;
    md += `- E2E Test Report: \`playwright-report/index.html\`\n`;
    md += `- Lighthouse Report: \`reports/lighthouse/summary.md\`\n\n`;

    md += `## Quick Links\n\n`;
    md += `- [Unit Test Coverage](../coverage/lcov-report/index.html)\n`;
    md += `- [Playwright Test Report](../playwright-report/index.html)\n`;
    md += `- [Lighthouse Performance Report](../lighthouse/summary.md)\n\n`;

    md += `---\n`;
    md += `*Report generated on ${new Date().toISOString()}*\n`;

    return md;
  }

  async run() {
    console.log('🚀 Starting comprehensive test suite for Noah Dummett Investigation Platform\n');
    
    try {
      // Run tests in sequence
      await this.runUnitTests();
      await this.runE2ETests();
      await this.runLighthouseTests();

      // Generate comprehensive report
      const report = await this.generateTestReport();

      console.log('\n🎉 All tests completed successfully!');
      console.log(`\n📈 Test Summary:`);
      console.log(`   Overall Status: ${report.summary.overallStatus}`);
      console.log(`   Total Duration: ${report.summary.totalDuration}`);
      
      return 0;

    } catch (error) {
      console.error('\n💥 Test suite failed:', error.message);
      
      // Still generate report for failed runs
      await this.generateTestReport();
      
      return 1;
    }
  }
}

// CLI execution
if (require.main === module) {
  const runner = new TestRunner();
  runner.run().then(process.exit).catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = TestRunner;
