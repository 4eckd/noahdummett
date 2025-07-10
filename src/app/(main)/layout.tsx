import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://noahdummett.com'),
  title: {
    default: "🚨 Noah Dummett Investigation: Shuffle.com Fraud Evidence",
    template: "%s | Noah Dummett Investigation"
  },
  description: "EXPLOSIVE: Noah Dummett Shuffle.com investigation reveals $25M+ allegedly stolen from FTX victims. Blockchain evidence, legal documents, prison allegations.",
  keywords: [
    "Noah Dummett prison",
    "Shuffle.com criminal investigation",
    "crypto fraud scandal",
    "FTX victims stolen money",
    "blockchain evidence",
    "crypto crime exposed",
    "gambling empire fraud",
    "whistleblower testimony"
  ],
  authors: [{ name: "Its Different Productions" }],
  creator: "Its Different Productions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noahdummett.com",
    title: "🚨 Noah Dummett Investigation: Shuffle.com Fraud Evidence",
    description: "EXPLOSIVE: Investigation reveals $25M+ allegedly stolen from FTX victims. Blockchain evidence could send them to prison.",
    siteName: "Noah Dummett Investigation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noah Dummett Investigation Evidence"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "🚨 Noah Dummett Investigation: Shuffle.com Fraud Evidence",
    description: "EXPLOSIVE: Investigation reveals $25M+ allegedly stolen from FTX victims.",
    creator: "@noahdummett_inv",
    images: ["/og-image.png"]
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
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function MainLayout({
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
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
