import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DocsSidebar } from "@/components/docs/sidebar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.noahdummett.com'),
  title: {
    default: "Noah Dummett Investigation Documentation",
    template: "%s | Noah Dummett Investigation Docs"
  },
  description: "Documentation for the Noah Dummett investigation platform, evidence analysis, and legal proceedings.",
  keywords: [
    "Noah Dummett documentation",
    "investigation documentation",
    "evidence analysis",
    "legal documentation",
    "fraud investigation docs"
  ],
  authors: [{ name: "Its Different Productions" }],
  creator: "Its Different Productions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.noahdummett.com",
    title: "Noah Dummett Investigation Documentation",
    description: "Documentation for the Noah Dummett investigation platform, evidence analysis, and legal proceedings.",
    siteName: "Noah Dummett Investigation Docs",
    images: [
      {
        url: "/og-docs-image.png",
        width: 1200,
        height: 630,
        alt: "Noah Dummett Investigation Documentation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Dummett Investigation Documentation",
    description: "Documentation for the Noah Dummett investigation platform.",
    creator: "@noahdummett_inv",
    images: ["/og-docs-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-bold">Noah Dummett Investigation</h1>
                    <span className="text-sm text-muted-foreground">Documentation</span>
                  </div>
                  <nav className="flex items-center space-x-4">
                    <a 
                      href="https://noahdummett.com" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ← Back to Investigation
                    </a>
                  </nav>
                </div>
              </div>
            </header>
            
            <div className="flex flex-1">
              <DocsSidebar />
              <main className="flex-1 px-8 py-8 overflow-auto">
                <div className="max-w-4xl mx-auto">
                  {children}
                </div>
              </main>
            </div>
            
            <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
                <p>© 2025 Its Different Productions. Documentation for Noah Dummett Investigation.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
