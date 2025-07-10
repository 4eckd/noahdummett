import { Metadata } from 'next';
import { DocsSidebar } from '@/components/docs/sidebar';

export const metadata: Metadata = {
  title: {
    template: '%s | Noah Dummett Investigation Docs',
    default: 'Noah Dummett Investigation Docs',
  },
  description: 'Comprehensive documentation for the Noah Dummett investigation platform.',
  keywords: ['Noah Dummett', 'investigation', 'evidence', 'documentation', 'legal'],
  authors: [{ name: 'Its Different Productions' }],
  creator: 'Its Different Productions',
  publisher: 'Its Different Productions',
  metadataBase: new URL('https://docs.noahdummett.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Noah Dummett Investigation Documentation',
    description: 'Comprehensive documentation for the Noah Dummett investigation platform.',
    url: 'https://docs.noahdummett.com',
    siteName: 'Noah Dummett Investigation Docs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Dummett Investigation Documentation',
    description: 'Comprehensive documentation for the Noah Dummett investigation platform.',
    creator: '@noahdummett',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Layout */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex lg:flex-shrink-0">
          <DocsSidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Page Content */}
              <div className="py-4">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
