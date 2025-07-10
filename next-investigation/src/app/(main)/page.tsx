import Link from "next/link"
import { AlertTriangle, DollarSign, Eye, Search, ArrowRight, FileText, Clock, Shield, Star, Hash } from "lucide-react"

const investigationHighlights = [
  {
    icon: DollarSign,
    title: "$25M+ Alleged Theft",
    description: "Claims of substantial funds taken from FTX bankruptcy estate to fund Shuffle.com operations.",
    severity: "critical" as const
  },
  {
    icon: Search,
    title: "Anonymous Leadership",
    description: "Concerning lack of transparency around company leadership and beneficial ownership.",
    severity: "high" as const
  },
  {
    icon: Eye,
    title: "Community Investigations",
    description: "Growing body of evidence from independent researchers and concerned community members.",
    severity: "medium" as const
  }
]

const blockchainEvidence = [
  {
    amount: "$25M+",
    label: "STOLEN",
    description: "Tracked from FTX hack to Shuffle operations"
  },
  {
    amount: "5",
    label: "KEY TRANSACTIONS", 
    description: "Irrefutable blockchain evidence"
  },
  {
    amount: "100%",
    label: "VERIFIED",
    description: "Professional blockchain analyst validation"
  }
]

const evidenceCategories = [
  {
    title: "Blockchain Evidence",
    description: "Complete blockchain analysis with transaction evidence",
    icon: Hash,
    href: "/evidence/blockchain",
    color: "blue"
  },
  {
    title: "Investigation Timeline", 
    description: "Complete timeline from FTX to Shuffle allegations",
    icon: Clock,
    href: "/evidence/timeline",
    color: "green"
  },
  {
    title: "Investigation Summary",
    description: "Executive summary of all findings and evidence", 
    icon: Shield,
    href: "/evidence/summary",
    color: "purple"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500 mr-4 animate-pulse" />
            <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium uppercase tracking-wider border border-red-500/30">
              🚨 BREAKING INVESTIGATION
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Noah Dummett
            <span className="block text-red-500">Investigation</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Uncovering the truth behind Shuffle.com&apos;s controversial founder and the mounting
            allegations that threaten to expose a Web3 scandal of unprecedented proportions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/noah-dummett"
              className="btn btn-primary px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
            >
              Read Full Investigation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/evidence/trustpilot"
              className="btn btn-secondary px-8 py-3 text-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
            >
              <Star className="mr-2 h-5 w-5" />
              Trustpilot Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Key Allegations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Allegations</h2>
            <p className="text-lg text-muted-foreground">The most serious concerns that demand immediate investigation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investigationHighlights.map((highlight) => (
              <div key={highlight.title} className="card p-6 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <highlight.icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Evidence Callout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="card critical-alert p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Hash className="h-12 w-12 text-blue-400 mr-4 animate-pulse" />
                <span className="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-full text-sm font-bold uppercase tracking-wider border border-blue-500/50">
                  🔗 BLOCKCHAIN EVIDENCE EXPOSED
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-blue-400">$25 MILLION+</span> Stolen From FTX Victims
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                <span className="text-red-400 font-bold">IRREFUTABLE ON-CHAIN PROOF:</span> LinkedIn investigation reveals
                direct blockchain connections between Noah Dummett and stolen FTX funds.
                <span className="text-yellow-400 font-semibold"> 5 smoking gun transactions</span> that could send him to prison for decades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {blockchainEvidence.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{metric.amount} {metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/noah-dummett"
                className="btn btn-primary px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🔍 SEE THE BLOCKCHAIN EVIDENCE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Downloads */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Download Investigation Evidence</h2>
            <p className="text-lg text-muted-foreground">Access comprehensive investigation documents and blockchain evidence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evidenceCategories.map((category) => (
              <Link key={category.title} href={category.href}>
                <div className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-opacity-20 hover:border-opacity-40">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 font-medium">
                    <span>View Evidence</span>
                    <FileText className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The Web3 Industry Deserves Better
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This investigation represents a critical moment for Web3 accountability.
            The evidence is mounting, the concerns are real, and the time for action is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/noah-dummett"
              className="btn btn-primary px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Full Investigation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/evidence"
              className="btn btn-secondary px-8 py-3 text-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
            >
              Share Evidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
