import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink, Download } from 'lucide-react';

export const EvidenceIndex: React.FC = () => {
  const evidenceFiles = [
    {
      name: 'Trustpilot Analysis',
      filename: 'trustpilot',
      description: '247 verified complaints analysis with systematic fraud documentation',
      size: '85 KB',
      type: 'Markdown'
    },
    {
      name: 'Trustpilot Analysis (HTML)',
      filename: 'trustpilot-analysis.html',
      description: 'Professional investigation report with interactive design',
      size: '125 KB',
      type: 'HTML Report'
    },
    {
      name: 'Reddit Evidence',
      filename: 'reddit',
      description: 'Reddit community ban documentation and cross-platform analysis',
      size: '58 KB',
      type: 'Markdown'
    },
    {
      name: 'Casino Guru Complaints',
      filename: 'casino-guru',
      description: 'Formal complaint analysis and dispute resolution failures',
      size: '62 KB',
      type: 'Markdown'
    },
    {
      name: 'Blockchain Analysis',
      filename: 'blockchain',
      description: 'On-chain evidence and transaction analysis',
      size: '45 KB',
      type: 'Markdown'
    },
    {
      name: 'Evidence Archive Index',
      filename: 'archive-index',
      description: 'Complete index of all evidence files and documentation',
      size: '42 KB',
      type: 'Markdown'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Evidence Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive evidence analysis documenting systematic fraud across multiple platforms.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-primary mb-2">247</div>
          <div className="text-sm text-muted-foreground">Verified Complaints</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-primary mb-2">67</div>
          <div className="text-sm text-muted-foreground">Countries Affected</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-primary mb-2">$1.2M+</div>
          <div className="text-sm text-muted-foreground">Funds Withheld</div>
        </div>
      </div>

      {/* Evidence Files */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Evidence Files</h2>
        <div className="grid gap-4">
          {evidenceFiles.map((file) => (
            <div key={file.filename} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{file.name}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {file.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{file.description}</p>
                  <div className="text-sm text-muted-foreground">Size: {file.size}</div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Link
                    to={`/evidence/${file.filename}`}
                    className="inline-flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span>View</span>
                  </Link>
                  <a
                    href={`/docs/evidence/${file.filename}${file.filename.includes('.html') ? '' : '.md'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 border border-border px-3 py-2 rounded text-sm hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Open</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Sources */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">External Evidence Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Trustpilot (247+ sources)</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://ca.trustpilot.com/review/shuffle.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Main Review Page
                </a>
              </li>
              <li>
                <a href="https://ca.trustpilot.com/review/shuffle.com?search=scam+withdraw&stars=1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Scam & Withdrawal Issues
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Reddit Evidence (45+ sources)</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.reddit.com/r/ShufflecomCasino/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Banned Community
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/problemgambling/search/?q=shuffle" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Problem Gambling Posts
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Casino Guru (25+ complaints)</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://casino.guru/complaints/all?casino=shuffle-casino" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  All Complaints
                </a>
              </li>
              <li>
                <a href="https://casino.guru/complaints/all?casino=shuffle-casino&status=unresolved" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Unresolved Cases
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Downloads</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://noahdummett.com/downloads/trustpilot-evidence-analysis.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>Trustpilot Analysis PDF</span>
                </a>
              </li>
              <li>
                <a href="https://noahdummett.com/downloads/evidence-archive-index.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>Complete Evidence Archive</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceIndex;
