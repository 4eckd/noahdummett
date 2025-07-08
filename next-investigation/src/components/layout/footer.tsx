import Link from "next/link"
import { AlertTriangle, Github, Twitter, Mail, ExternalLink, FileText, Scale, Search } from "lucide-react"

const investigationLinks = [
  {
    name: "Main Investigation",
    href: "/",
    description: "Complete investigation overview"
  },
  {
    name: "Noah Dummett Files",
    href: "/noah-dummett",
    description: "Personal investigation files"
  },
  {
    name: "Blockchain Evidence",
    href: "/evidence/blockchain",
    description: "On-chain proof of theft"
  },
  {
    name: "Legal Documentation", 
    href: "/legal",
    description: "Official legal filings"
  }
]

const evidenceLinks = [
  {
    name: "Trustpilot Analysis",
    href: "/evidence/trustpilot",
    description: "100+ customer reviews"
  },
  {
    name: "Reddit Documentation",
    href: "/evidence/reddit", 
    description: "Community ban evidence"
  },
  {
    name: "Casino Guru Complaints",
    href: "/evidence/casino-guru",
    description: "Formal complaint analysis"
  },
  {
    name: "Platform Manipulation",
    href: "/evidence/platform-manipulation",
    description: "Cross-platform analysis"
  }
]

const externalLinks = [
  {
    name: "GitHub Repository",
    href: "https://github.com/4eckd/noahdummett",
    icon: Github,
    external: true
  },
  {
    name: "Investigation Twitter",
    href: "https://twitter.com/noahdummett_inv",
    icon: Twitter,
    external: true
  },
  {
    name: "Contact Investigation",
    href: "mailto:hello@noahdummett.com",
    icon: Mail,
    external: true
  },
  {
    name: "Documentation Hub",
    href: "https://docs.noahdummett.com",
    icon: FileText,
    external: true
  }
]

const legalLinks = [
  {
    name: "Investigation Terms",
    href: "/legal/terms"
  },
  {
    name: "Privacy Policy", 
    href: "/legal/privacy"
  },
  {
    name: "Whistleblower Protection",
    href: "/legal/whistleblower"
  },
  {
    name: "Evidence Disclaimer",
    href: "/legal/disclaimer"
  }
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Investigation Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h3 className="text-sm font-semibold text-foreground">Investigation</h3>
            </div>
            <ul className="space-y-2">
              {investigationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Evidence Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-orange-500" />
              <h3 className="text-sm font-semibold text-foreground">Evidence Sources</h3>
            </div>
            <ul className="space-y-2">
              {evidenceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ExternalLink className="h-5 w-5 text-blue-500" />
              <h3 className="text-sm font-semibold text-foreground">External Links</h3>
            </div>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-5 w-5 text-purple-500" />
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            </div>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium text-foreground">
                Noah Dummett Investigation Projects
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 Its Different Productions</span>
              <span>•</span>
              <span>Investigation v3.0.0</span>
              <span>•</span>
              <Link 
                href="/legal/disclaimer"
                className="hover:text-foreground transition-colors"
              >
                Evidence Disclaimer
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              This investigation is conducted for accountability and transparency purposes. 
              All blockchain evidence is independently verifiable on the Ethereum blockchain.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
