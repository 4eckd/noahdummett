import { Metadata } from "next"
import Link from "next/link"
import { Scale, FileText, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "⚖️ Legal Documentation & Whistleblower Reports",
  description: "Official legal documentation, whistleblower reports, and regulatory filings related to the Noah Dummett investigation."
}

const legalDocuments = [
  {
    title: "IRS Form 211 - Whistleblower Report",
    description: "Official whistleblower documentation filed with federal authorities regarding alleged financial misconduct.",
    icon: Scale,
    status: "Filed",
    significance: "Federal Investigation Trigger",
    severity: "Critical"
  },
  {
    title: "Shuffle Chain Data Analysis",
    description: "Comprehensive blockchain analysis revealing suspicious transaction patterns and fund flows.",
    icon: FileText,
    status: "Completed",
    significance: "Financial Evidence",
    severity: "Critical"
  },
  {
    title: "Legal Pleadings and Demands",
    description: "Formal legal documents outlining specific allegations and demands for transparency.",
    icon: Scale,
    status: "Active",
    significance: "Legal Accountability",
    severity: "High"
  },
  {
    title: "Whistleblower Protection Guidelines",
    description: "Information about whistleblower protections and how to safely report misconduct.",
    icon: Shield,
    status: "Available",
    significance: "Protection Framework",
    severity: "Medium"
  }
]

const disclaimers = [
  {
    title: "Evidence Disclaimer",
    description: "Important information about the nature and verification of evidence presented in this investigation."
  },
  {
    title: "Investigation Terms",
    description: "Terms and conditions governing the use of information from this investigation."
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect information related to this investigation."
  },
  {
    title: "Legal Notice",
    description: "Important legal notices and jurisdictional information for this investigation."
  }
]

export default function LegalPage() {
  return (
    <div className="flex flex-col py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-purple-500 mr-4" />
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium uppercase tracking-wider border border-purple-500/30">
              ⚖️ LEGAL DOCUMENTATION
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Legal Documentation
            <span className="block text-purple-500">& Whistleblower Reports</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Official legal documentation, regulatory filings, and whistleblower reports supporting
            the allegations against Noah Dummett and Shuffle.com. All documents are prepared
            according to proper legal standards and procedures.
          </p>
        </section>

        {/* Legal Documents */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Official Legal Documentation</h2>
            <p className="text-lg text-muted-foreground">
              Professional legal documents and regulatory filings supporting the investigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalDocuments.map((doc) => (
              <div key={doc.title} className="card p-6 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <doc.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {doc.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                          {doc.status}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {doc.significance}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    doc.severity === "Critical" 
                      ? "bg-red-500/20 text-red-400" 
                      : doc.severity === "High"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {doc.severity}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-16">
          <div className="card critical-alert p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  🚨 Important Legal Notice
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-red-400">Allegations Pending Investigation:</strong> The allegations presented 
                    in this investigation have not been proven in a court of law. Noah Dummett and Shuffle.com have not 
                    been formally charged with any crimes related to these allegations.
                  </p>
                  <p>
                    <strong className="text-yellow-400">Evidence Verification:</strong> All blockchain evidence referenced 
                    is independently verifiable on the Ethereum blockchain through services like Etherscan.io. 
                    Community members are encouraged to verify all claims independently.
                  </p>
                  <p>
                    <strong className="text-blue-400">Whistleblower Protection:</strong> This investigation is conducted 
                    under whistleblower protection guidelines. All information is gathered and presented according to 
                    proper legal procedures and standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimers & Policies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Legal Disclaimers & Policies</h2>
            <p className="text-lg text-muted-foreground">
              Important legal information governing this investigation and evidence presentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disclaimers.map((disclaimer) => (
              <Link key={disclaimer.title} href={`/legal/${disclaimer.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-opacity-20 hover:border-opacity-40">
                  <div className="flex items-center space-x-3 mb-3">
                    <FileText className="h-5 w-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {disclaimer.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {disclaimer.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium text-sm">
                    <span>Read Document</span>
                    <FileText className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="card bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30 p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Legal Contact Information
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For legal inquiries, evidence verification, or whistleblower reports
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  <Scale className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Legal Inquiries</h4>
                <p className="text-sm text-muted-foreground">legal@noahdummett.com</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Whistleblower Reports</h4>
                <p className="text-sm text-muted-foreground">whistleblower@noahdummett.com</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Evidence Verification</h4>
                <p className="text-sm text-muted-foreground">evidence@noahdummett.com</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                All communications are handled according to professional legal standards and whistleblower protection guidelines.
                <br />
                Response time: 2-5 business days for legal inquiries, immediate for urgent whistleblower reports.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
