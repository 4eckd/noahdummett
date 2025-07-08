import { Metadata } from "next"
import Link from "next/link"
import { FileText, Search, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "⚖️ Comprehensive Evidence Archive",
  description: "Comprehensive evidence documentation including blockchain, legal, and community research."
}

const evidenceCategories = [
  {
    title: "Blockchain Evidence",
    description: "On-chain proof of $25M+ theft from FTX victims with transaction-level analysis",
    icon: FileText,
    href: "/evidence/blockchain",
    severity: "Critical"
  },
  {
    title: "Trustpilot Analysis", 
    description: "Comprehensive analysis of 100+ customer reviews showing manipulation patterns",
    icon: Search,
    href: "/evidence/trustpilot",
    severity: "High"
  },
  {
    title: "Reddit Community Ban",
    description: "Documentation of community bans and cross-platform suppression efforts",
    icon: AlertTriangle,
    href: "/evidence/reddit",
    severity: "Medium"
  },
  {
    title: "Casino Guru Complaints",
    description: "Formal complaint analysis showing 0% resolution rate for legitimate issues",
    icon: FileText,
    href: "/evidence/casino-guru",
    severity: "High"
  },
  {
    title: "Investigation Timeline",
    description: "Complete timeline from FTX collapse to current Shuffle.com allegations",
    icon: FileText,
    href: "/evidence/timeline",
    severity: "Medium"
  },
  {
    title: "Platform Manipulation",
    description: "Cross-platform analysis of review manipulation and reputation management",
    icon: Search,
    href: "/evidence/platform-manipulation",
    severity: "High"
  }
]

export default function EvidenceIndexPage() {
  return (
    <div className="flex flex-col py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-blue-500 mr-4" />
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium uppercase tracking-wider border border-blue-500/30">
              📊 EVIDENCE ARCHIVE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Comprehensive
            <span className="block text-blue-500">Evidence Archive</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete collection of evidence documenting the allegations against Noah Dummett and Shuffle.com,
            including blockchain analysis, legal documentation, and community research across multiple platforms.
          </p>
        </section>

        {/* Evidence Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Evidence Categories</h2>
            <p className="text-lg text-muted-foreground">
              Organized by platform and evidence type for comprehensive investigation analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceCategories.map((category) => (
              <Link key={category.title} href={category.href}>
                <div className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-opacity-20 hover:border-opacity-40 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      category.severity === "Critical" 
                        ? "bg-red-500/20 text-red-400" 
                        : category.severity === "High"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {category.severity}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm">
                    <span>View Evidence</span>
                    <FileText className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="text-center">
          <div className="card critical-alert p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Evidence Statistics
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive documentation across multiple platforms and evidence types
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">150+</h4>
                <p className="text-sm font-medium text-foreground mb-2">Evidence Sources</p>
                <p className="text-xs text-muted-foreground">Independently verifiable</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">5</h4>
                <p className="text-sm font-medium text-foreground mb-2">Key Transactions</p>
                <p className="text-xs text-muted-foreground">Blockchain evidence</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6 text-orange-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">4</h4>
                <p className="text-sm font-medium text-foreground mb-2">Platforms</p>
                <p className="text-xs text-muted-foreground">Evidence documentation</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">100%</h4>
                <p className="text-sm font-medium text-foreground mb-2">Verifiable</p>
                <p className="text-xs text-muted-foreground">All evidence sources</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
