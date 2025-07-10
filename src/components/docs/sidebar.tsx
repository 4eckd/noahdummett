"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  FileText, 
  Scale, 
  Code, 
  Clock, 
  Home, 
  Search,
  Shield,
  Users,
  Building,
  ChevronDown,
  ChevronRight
} from "lucide-react"

interface DocSection {
  title: string
  slug: string
  icon: React.ComponentType<{ className?: string }>
  items?: DocItem[]
}

interface DocItem {
  title: string
  slug: string
  description?: string
}

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    slug: "",
    icon: Home,
    items: [
      {
        title: "Documentation Home",
        slug: "",
        description: "Documentation portal overview"
      },
      {
        title: "Introduction",
        slug: "introduction",
        description: "Welcome to the investigation"
      },
      {
        title: "Getting Started Guide",
        slug: "getting-started",
        description: "Step-by-step navigation guide"
      },
      {
        title: "Contributing",
        slug: "contributing",
        description: "How to contribute evidence"
      }
    ]
  },
  {
    title: "Evidence Analysis",
    slug: "evidence-analysis",
    icon: Search,
    items: [
      {
        title: "Blockchain Evidence",
        slug: "evidence-analysis/blockchain",
        description: "On-chain transaction analysis"
      },
      {
        title: "Financial Records",
        slug: "evidence-analysis/financial",
        description: "Financial documentation analysis"
      },
      {
        title: "Digital Forensics",
        slug: "evidence-analysis/digital",
        description: "Digital evidence collection"
      },
      {
        title: "Trustpilot Analysis",
        slug: "evidence-analysis/trustpilot",
        description: "Customer review analysis"
      }
    ]
  },
  {
    title: "Legal Documentation",
    slug: "legal",
    icon: Scale,
    items: [
      {
        title: "Court Filings",
        slug: "legal/filings",
        description: "Official legal documents"
      },
      {
        title: "Regulatory Compliance",
        slug: "legal/compliance",
        description: "Regulatory analysis"
      },
      {
        title: "Whistleblower Protection",
        slug: "legal/whistleblower",
        description: "Protection guidelines"
      },
      {
        title: "Legal Disclaimers",
        slug: "legal/disclaimers",
        description: "Important legal notices"
      }
    ]
  },
  {
    title: "Technical Documentation",
    slug: "technical",
    icon: Code,
    items: [
      {
        title: "Platform Architecture",
        slug: "technical/architecture",
        description: "System design overview"
      },
      {
        title: "API Reference",
        slug: "technical/api",
        description: "API documentation"
      },
      {
        title: "Development Setup",
        slug: "technical/setup",
        description: "Local development guide"
      },
      {
        title: "Security Protocols",
        slug: "technical/security",
        description: "Security measures"
      }
    ]
  },
  {
    title: "Investigation Timeline",
    slug: "timeline",
    icon: Clock,
    items: [
      {
        title: "Comprehensive Timeline",
        slug: "timeline/comprehensive-timeline",
        description: "Complete chronological overview"
      },
      {
        title: "Case Overview",
        slug: "timeline/overview",
        description: "Investigation summary"
      },
      {
        title: "Key Milestones",
        slug: "timeline/milestones",
        description: "Important dates and events"
      },
      {
        title: "Evidence Collection",
        slug: "timeline/evidence",
        description: "Evidence gathering timeline"
      }
    ]
  },
  {
    title: "People & Organizations",
    slug: "entities",
    icon: Users,
    items: [
      {
        title: "Overview",
        slug: "entities/people-and-organizations",
        description: "Key individuals and organizations"
      },
      {
        title: "Noah Dummett",
        slug: "entities/noah-dummett",
        description: "Primary investigation subject"
      },
      {
        title: "FTX",
        slug: "entities/ftx",
        description: "Cryptocurrency exchange involvement"
      },
      {
        title: "Shuffle.com",
        slug: "entities/shuffle",
        description: "Gambling platform analysis"
      },
      {
        title: "Financial Institutions",
        slug: "entities/financial-institutions",
        description: "Banks and payment processors"
      }
    ]
  }
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = React.useState<string[]>([])

  // Auto-expand current section
  React.useEffect(() => {
    const currentSection = docSections.find(section => 
      pathname.includes(`/docs/${section.slug}`) || 
      (section.slug === "" && pathname === "/docs")
    )
    if (currentSection && !expandedSections.includes(currentSection.slug)) {
      setExpandedSections(prev => [...prev, currentSection.slug])
    }
  }, [pathname, expandedSections])

  const toggleSection = (slug: string) => {
    setExpandedSections(prev => 
      prev.includes(slug) 
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    )
  }

  const isCurrentPath = (slug: string) => {
    if (slug === "" && pathname === "/docs") return true
    return pathname === `/docs/${slug}`
  }

  const isCurrentSection = (section: DocSection) => {
    if (section.slug === "" && pathname === "/docs") return true
    return pathname.startsWith(`/docs/${section.slug}`)
  }

  return (
    <div className="w-64 h-full border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="p-6">
        <Link href="/docs" className="flex items-center space-x-2 mb-8">
          <FileText className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Documentation</span>
        </Link>

        <nav className="space-y-2">
          {docSections.map((section) => {
            const isExpanded = expandedSections.includes(section.slug)
            const isCurrent = isCurrentSection(section)
            
            return (
              <div key={section.slug} className="space-y-1">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/docs${section.slug ? `/${section.slug}` : ""}`}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors flex-1",
                      isCurrent
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    <section.icon className="h-4 w-4" />
                    <span>{section.title}</span>
                  </Link>
                  
                  {section.items && (
                    <button
                      onClick={() => toggleSection(section.slug)}
                      className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Section Items */}
                {section.items && isExpanded && (
                  <div className="ml-6 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/docs/${item.slug}`}
                        className={cn(
                          "block px-3 py-2 rounded-md text-sm transition-colors",
                          isCurrentPath(item.slug)
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        <div>
                          <div className="font-medium">{item.title}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span>Secure Documentation</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3" />
              <span>Community Verified</span>
            </div>
            <div className="flex items-center space-x-1">
              <Building className="h-3 w-3" />
              <span>Its Different Productions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
