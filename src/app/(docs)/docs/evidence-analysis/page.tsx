import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evidence Analysis',
  description: 'Comprehensive analysis of blockchain evidence and digital forensics in the Noah Dummett investigation.',
};

export default function EvidenceAnalysisPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Evidence Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive analysis of blockchain evidence and digital forensics in the Noah Dummett investigation.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Blockchain Evidence</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Transaction Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Detailed examination of on-chain transactions related to the investigation, 
              including wallet addresses, transaction patterns, and fund flows.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Wallet address mapping and verification</li>
              <li>Transaction timeline reconstruction</li>
              <li>Cross-chain analysis and tracking</li>
              <li>Smart contract interaction analysis</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Digital Forensics</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Digital Evidence Collection</h3>
            <p className="text-muted-foreground mb-4">
              Methodical collection and preservation of digital evidence following 
              established forensic procedures and chain of custody protocols.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Email and communication records</li>
              <li>Social media evidence preservation</li>
              <li>Website and platform screenshots</li>
              <li>Server logs and access records</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Financial Records</h2>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Financial Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Analysis of financial records, banking transactions, and monetary flows 
              related to the investigation.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Bank account analysis</li>
              <li>Cryptocurrency exchange records</li>
              <li>Payment processor transactions</li>
              <li>Asset valuation and tracking</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-8 p-6 border border-border rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Related Documentation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="/legal-docs" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Legal Documentation →
          </a>
          <a 
            href="/technical" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Technical Documentation →
          </a>
        </div>
      </div>
    </div>
  );
}
