import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation Home',
  description: 'Welcome to the Noah Dummett Investigation documentation portal.',
};

export default function DocsHomePage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Noah Dummett Investigation</h1>
      <h2>Documentation Portal</h2>

      <p>
        Welcome to the comprehensive documentation for the Noah Dummett investigation platform. 
        This portal provides detailed information about evidence analysis, legal proceedings, 
        and technical documentation for the investigation.
      </p>

      <h2>Documentation Sections</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Introduction</h3>
          <p className="text-muted-foreground mb-4">
            Get started with the Noah Dummett Investigation - overview, key features, and how to use this documentation.
          </p>
          <Link 
            href="/docs/introduction" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Read Introduction →
          </Link>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
          <p className="text-muted-foreground mb-4">
            Step-by-step guide for new users, legal professionals, and developers to navigate the platform.
          </p>
          <Link 
            href="/docs/getting-started" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Start Here →
          </Link>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">API Reference</h3>
          <p className="text-muted-foreground mb-4">
            Complete API documentation with endpoints, authentication, and code examples.
          </p>
          <Link 
            href="/docs/api-reference" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View API Docs →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Evidence Documentation</h3>
          <p className="text-muted-foreground mb-4">
            Detailed analysis of blockchain evidence, financial records, and digital forensics.
          </p>
          <Link 
            href="/docs/evidence-analysis" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View Evidence Docs →
          </Link>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Legal Proceedings</h3>
          <p className="text-muted-foreground mb-4">
            Documentation of legal filings, court proceedings, and regulatory compliance.
          </p>
          <Link 
            href="/docs/legal" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View Legal Docs →
          </Link>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Technical Documentation</h3>
          <p className="text-muted-foreground mb-4">
            Platform architecture, API references, and development guidelines.
          </p>
          <Link 
            href="/docs/technical" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View Technical Docs →
          </Link>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Investigation Timeline</h3>
          <p className="text-muted-foreground mb-4">
            Comprehensive chronological timeline from January 2022 to present with linked evidence.
          </p>
          <Link 
            href="/docs/timeline/comprehensive-timeline" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View Complete Timeline →
          </Link>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">People & Organizations</h3>
          <p className="text-muted-foreground mb-4">
            Dedicated pages for key individuals and organizations with evidence links and timeline connections.
          </p>
          <Link 
            href="/docs/entities/people-and-organizations" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View People & Organizations →
          </Link>
        </div>
      </div>

      <h2>Quick Links</h2>
      <ul>
        <li><a href="https://noahdummett.com">Main Investigation Site</a></li>
        <li><a href="https://noahdummett.com/evidence">Evidence Portal</a></li>
        <li><a href="https://noahdummett.com/legal">Legal Documents</a></li>
      </ul>

      <h2>Getting Started</h2>
      <p>New to the Noah Dummett Investigation? Start with these essential documents:</p>
      <ol>
        <li><Link href="/docs/introduction" className="text-primary hover:text-primary/80"><strong>Introduction</strong></Link>: Overview and key features of the investigation</li>
        <li><Link href="/docs/getting-started" className="text-primary hover:text-primary/80"><strong>Getting Started Guide</strong></Link>: Step-by-step navigation for all user types</li>
        <li><Link href="/docs/evidence-analysis" className="text-primary hover:text-primary/80"><strong>Evidence Analysis</strong></Link>: Comprehensive blockchain and financial evidence</li>
        <li><Link href="/docs/api-reference" className="text-primary hover:text-primary/80"><strong>API Reference</strong></Link>: Technical integration and development resources</li>
      </ol>

      <h2>Contributing</h2>
      <p>
        This investigation is a collaborative effort. If you have evidence, documentation, or 
        insights to contribute, please review our <Link href="/docs/contributing" className="text-primary hover:text-primary/80">contribution guidelines</Link>.
      </p>

      <h2>Contact</h2>
      <p>For questions about this documentation or the investigation:</p>
      <ul>
        <li>Email: docs@noahdummett.com</li>
        <li>Investigation Team: hello@noahdummett.com</li>
      </ul>

      <hr />
      <p className="text-sm text-muted-foreground">
        <em>This documentation is continuously updated as new evidence becomes available. Last updated: January 7, 2025</em>
      </p>
    </div>
  );
}
