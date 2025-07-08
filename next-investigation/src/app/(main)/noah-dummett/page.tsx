import { Metadata } from "next"
import { AlertTriangle, DollarSign, Eye, Users, TrendingDown, Hash, ExternalLink, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "🔥 Noah Dummett Files: Shuffle.com Criminal Evidence Exposed",
  description: "BOMBSHELL: Noah Dummett criminal files reveal $25M+ allegedly stolen from FTX. Blockchain evidence, legal docs, prison allegations.",
}

const keyAllegations = [
  {
    icon: DollarSign,
    title: "Alleged Fund Misappropriation",
    severity: "Critical",
    description: "Claims that Noah Dummett allegedly took $25 million from FTX bankruptcy estate to fund Shuffle.com operations.",
    evidence: "Blockchain analysis, whistleblower reports, timing of platform launch"
  },
  {
    icon: Eye,
    title: "Anonymous Leadership Structure", 
    severity: "High",
    description: "Key personnel operating under aliases including \"Cam\" and \"Brett\", making accountability impossible.",
    evidence: "Community reports, lack of public disclosure, operational secrecy"
  },
  {
    icon: Users,
    title: "Unethical Treatment of Vulnerable Users",
    severity: "Critical",
    description: "Reports of inappropriate handling of gambling addiction cases and disrespectful treatment of users seeking help.",
    evidence: "User testimonials, community discussions, documented interactions"
  },
  {
    icon: TrendingDown,
    title: "Operational Pattern Concerns",
    severity: "High", 
    description: "Potential replication of problematic practices that contributed to FTX's collapse.",
    evidence: "Operational analysis, background investigation, industry expert opinions"
  }
]

const blockchainEvidence = [
  {
    id: "TXID1",
    hash: "0x3e2563cdc27f1e6be1f5995b9669660431d7e9e60d5cfb1c74320c27bbf2536b",
    description: "On-chain connection to ShuffleEmployee2 - First notable holder receiving funds from FTX hack address",
    amount: "50,000 USDC",
    significance: "Critical",
    date: "November 7, 2022"
  },
  {
    id: "TXID2",
    hash: "0xdce984dccd4378b331591bcda03f9a0f5260bc53d16b863ef8f348b8ebe6c232",
    description: "Direct interaction with NoahShuffle2 address belonging to Noah Dummett - Former FTX employee, current Shuffle.com owner",
    amount: "100,000 USDC",
    significance: "Critical",
    date: "November 7, 2022"
  },
  {
    id: "TXID3",
    hash: "0x0dfe3dc5dbd49e2b05a477b7c9378dc7037b8a7bce1323e6dcf15b138185d4f4",
    description: "Direct connection to Shuffle casino hotwallet - Evidence of stolen funds flowing into gambling operations",
    amount: "Multiple transfers",
    significance: "Critical",
    date: "November 2022"
  }
]

const linkedInEvidence = {
  url: "https://www.linkedin.com/posts/supitsj_on-chain-evidence-suggesting-ftx-hackers-activity-7317938160343138307-r-J_",
  author: "supitsj",
  title: "On-chain evidence suggesting FTX hackers are still roaming free",
  summary: "Comprehensive blockchain analysis revealing $25M+ stolen from FTX, with direct connections to Noah Dummett and Shuffle.com operations",
  keyFindings: [
    "More than $25,000,000 stolen from tracked address",
    "Involvement of at least 2 former FTX employees",
    "Transactions occurred days before FTX bankruptcy filing",
    "Intentional 50,000 USDC transfers to avoid detection",
    "Direct connections to Shuffle casino operations",
    "Evidence of money laundering through gambling platform"
  ]
}

export default function NoahDummettPage() {
  return (
    <div className="flex flex-col py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500 mr-4" />
            <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium uppercase tracking-wider border border-red-500/30">
              🚨 CRIMINAL INVESTIGATION FILES
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            The Noah Dummett
            <span className="block text-red-500">Criminal Files</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Noah Dummett, founder and CEO of Shuffle.com, has become the center of a growing
            controversy that threatens to expose the dark underbelly of Web3 entrepreneurship.
            From his connections to the collapsed FTX exchange to allegations of fund
            misappropriation and unethical business practices, the evidence is mounting.
          </p>
        </section>

        {/* Key Allegations */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Critical Allegations</h2>
            <p className="text-lg text-muted-foreground">The most serious concerns that demand immediate investigation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {keyAllegations.map((allegation) => (
              <div key={allegation.title} className="card p-6 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <allegation.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {allegation.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    allegation.severity === "Critical" 
                      ? "bg-red-500/20 text-red-400" 
                      : "bg-orange-500/20 text-orange-400"
                  }`}>
                    {allegation.severity}
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {allegation.description}
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-primary mb-1">Supporting Evidence:</p>
                    <p className="text-sm text-muted-foreground">
                      {allegation.evidence}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blockchain Evidence */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-400 mb-4">
              🔗 EXPLOSIVE BLOCKCHAIN EVIDENCE
            </h2>
            <p className="text-lg text-muted-foreground">
              On-chain proof connecting Noah Dummett to $25M+ stolen from FTX victims
            </p>
          </div>

          {/* LinkedIn Source Reference */}
          <div className="card bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 p-6 mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <ExternalLink className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  🚨 BREAKING: LinkedIn Investigation Exposes $25M+ Theft
                </h3>
                <p className="text-blue-400 font-medium mb-2">
                  Source: {linkedInEvidence.author} - Blockchain Analyst
                </p>
                <p className="text-muted-foreground mb-4">
                  &ldquo;{linkedInEvidence.title}&rdquo;
                </p>
                <a
                  href={linkedInEvidence.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  <span>View Original LinkedIn Post</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">🔍 Key Findings from Blockchain Analysis:</h4>
              <ul className="space-y-2">
                {linkedInEvidence.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span className="text-muted-foreground">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Transaction Evidence */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-2">
                💰 SMOKING GUN TRANSACTIONS
              </h3>
              <p className="text-muted-foreground">
                These blockchain transactions provide irrefutable evidence of the alleged theft
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {blockchainEvidence.map((tx) => (
                <div key={tx.id} className="card border-red-500/30 bg-gradient-to-r from-red-500/5 to-orange-500/5 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <Hash className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {tx.id} - {tx.amount}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {tx.date}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      tx.significance === "Critical"
                        ? "bg-red-500/30 text-red-300"
                        : "bg-orange-500/30 text-orange-300"
                    }`}>
                      {tx.significance}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {tx.description}
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 border border-gray-700">
                      <p className="text-xs text-gray-400 mb-1">Transaction Hash:</p>
                      <code className="text-xs text-green-400 font-mono break-all">
                        {tx.hash}
                      </code>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                      <a
                        href={`https://etherscan.io/tx/${tx.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                      >
                        View on Etherscan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="text-center">
          <div className="card critical-alert p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The Scale of the Problem
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding the potential impact and scope of the allegations
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">$25M+</h4>
                <p className="text-sm font-medium text-foreground mb-2">Alleged Stolen Funds</p>
                <p className="text-xs text-muted-foreground">From FTX bankruptcy estate</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">1000s</h4>
                <p className="text-sm font-medium text-foreground mb-2">Affected Users</p>
                <p className="text-xs text-muted-foreground">Gamblers and crypto enthusiasts</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">18</h4>
                <p className="text-sm font-medium text-foreground mb-2">Months Since FTX</p>
                <p className="text-xs text-muted-foreground">Period of alleged misconduct</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                  <TrendingDown className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">0</h4>
                <p className="text-sm font-medium text-foreground mb-2">Accountability</p>
                <p className="text-xs text-muted-foreground">No oversight or transparency</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
