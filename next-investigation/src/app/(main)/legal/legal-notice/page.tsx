import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Shield, AlertTriangle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Notice - Noah Dummett Investigation',
  description: 'Important legal disclaimers and notices for the Noah Dummett investigation.',
};

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Scale className="h-6 w-6 text-blue-500" />
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium uppercase tracking-wider border border-blue-500/30">
              LEGAL NOTICE
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Legal Notice & Disclaimers</h1>
          <p className="text-xl text-muted-foreground">
            Important legal information regarding the Noah Dummett investigation, 
            evidence presentation, and legal disclaimers.
          </p>
        </div>

        {/* Key Legal Points */}
        <div className="space-y-8">
          <div className="card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Investigation Disclaimer</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This investigation is conducted for accountability and transparency purposes. 
                All allegations presented are based on publicly available information, 
                blockchain data, and verifiable evidence.
              </p>
              <p>
                <strong>No Legal Advice:</strong> Nothing on this website constitutes legal advice. 
                Users should consult with qualified legal professionals for legal matters.
              </p>
              <p>
                <strong>Ongoing Investigation:</strong> This is an active investigation. 
                Information is updated as new evidence becomes available and verified.
              </p>
            </div>
          </div>

          <div className="card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold">Evidence Standards</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                All evidence presented undergoes verification processes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Blockchain transactions are independently verifiable on public ledgers</li>
                <li>Public records are cross-referenced with official sources</li>
                <li>Customer reviews and complaints are from verified platforms</li>
                <li>Timeline events are corroborated with multiple sources</li>
              </ul>
              <p>
                <strong>Source Protection:</strong> We maintain the confidentiality of sources 
                who provide information under whistleblower protection.
              </p>
            </div>
          </div>

          <div className="card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Legal Protections</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This investigation operates under several legal protections:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>First Amendment:</strong> Freedom of speech and press protections</li>
                <li><strong>Public Interest:</strong> Reporting on matters of public concern</li>
                <li><strong>Factual Reporting:</strong> Based on verifiable evidence and public records</li>
                <li><strong>Whistleblower Protection:</strong> Protection for sources reporting illegal activity</li>
              </ul>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Terms of Use</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">Acceptable Use</h3>
              <p>
                This website is provided for informational purposes. Users may:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View and share content for educational and informational purposes</li>
                <li>Download evidence documents for legitimate research</li>
                <li>Reference materials with proper attribution</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">Prohibited Activities</h3>
              <p>
                Users may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use content for defamatory or malicious purposes</li>
                <li>Attempt to identify protected sources or whistleblowers</li>
                <li>Interfere with the investigation or evidence collection</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Contact & Legal</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For legal inquiries, evidence submission, or other official matters:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="space-y-2">
                  <div><strong>Legal Team:</strong> legal@noahdummett.com</div>
                  <div><strong>Evidence Tips:</strong> tips@noahdummett.com</div>
                  <div><strong>Media Inquiries:</strong> media@noahdummett.com</div>
                  <div><strong>General Contact:</strong> hello@noahdummett.com</div>
                </div>
              </div>
              <p>
                <strong>Jurisdiction:</strong> This investigation operates under United States law. 
                Any legal disputes will be resolved in appropriate U.S. federal or state courts.
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-semibold">Important Notice</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              This investigation is ongoing. Information presented is current as of the publication date 
              and may be updated as new evidence emerges. All blockchain evidence remains permanently 
              verifiable on public ledgers regardless of website updates.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Link href="/legal" className="btn btn-secondary">
            ← Back to Legal
          </Link>
          <Link href="/evidence" className="btn btn-primary">
            View Evidence →
          </Link>
        </div>
      </div>
    </div>
  );
}
