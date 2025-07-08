import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Documentation',
  description: 'Technical documentation for the Noah Dummett investigation platform architecture and APIs.',
};

export default function TechnicalDocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Technical Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Technical documentation for the Noah Dummett investigation platform architecture, APIs, and development guidelines.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Platform Architecture</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Next.js App Router Structure</h3>
            <p className="text-muted-foreground mb-4">
              The platform uses Next.js 15 with App Router and route groups for clean URL separation between the main site and documentation.
            </p>
            <div className="bg-background p-4 rounded border font-mono text-sm">
              <pre>{`src/app/
├── (main)/           # Main investigation site
│   ├── page.tsx      # Homepage (noahdummett.com)
│   ├── evidence/     # Evidence portal
│   ├── legal/        # Legal documents
│   └── noah-dummett/ # Profile page
├── (docs)/           # Documentation subdomain
│   ├── layout.tsx    # Docs-specific layout
│   └── docs/         # Documentation pages
│       ├── page.tsx  # Docs homepage (docs.noahdummett.com)
│       ├── evidence-analysis/
│       └── technical/
├── globals.css       # Global styles
└── layout.tsx        # Root layout`}</pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Middleware & Routing</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Subdomain Routing</h3>
            <p className="text-muted-foreground mb-4">
              Custom middleware handles subdomain routing to provide clean URL separation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><code>noahdummett.com</code> → <code>src/app/(main)/</code></li>
              <li><code>docs.noahdummett.com</code> → <code>src/app/(docs)/docs/</code></li>
            </ul>
            <div className="bg-background p-4 rounded border font-mono text-sm">
              <pre>{`// src/middleware.ts
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  if (hostname.startsWith('docs.')) {
    const newPath = pathname === '/' ? '/docs' : \`/docs\${pathname}\`;
    return NextResponse.rewrite(new URL(newPath, request.url));
  }
  
  return NextResponse.next();
}`}</pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Core Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-sm">
                  <li>Next.js 15 (App Router)</li>
                  <li>React 19</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS 4</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content & Documentation</h4>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-sm">
                  <li>MDX Support</li>
                  <li>Remark & Rehype Plugins</li>
                  <li>Syntax Highlighting</li>
                  <li>Auto-generated TOC</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Deployment & Infrastructure</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Single Deployment Strategy</h3>
            <p className="text-muted-foreground mb-4">
              Both the main site and documentation are served from a single Next.js deployment, with subdomain routing handled by middleware.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Single codebase for both main site and docs</li>
              <li>Shared components and styling</li>
              <li>Unified deployment pipeline</li>
              <li>Centralized content management</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-8 p-6 border border-border rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Development Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="/evidence-analysis" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Evidence Analysis →
          </a>
          <a 
            href="/legal-docs" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Legal Documentation →
          </a>
        </div>
      </div>
    </div>
  );
}
