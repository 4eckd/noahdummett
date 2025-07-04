import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Gavel, Settings, Code, ExternalLink, Download } from 'lucide-react';

export const DocsHome: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Noah Dummett Investigation Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive documentation for the Noah Dummett investigation, including evidence analysis, 
          legal documentation, and technical resources.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/evidence" 
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Search className="h-5 w-5" />
            <span>View Evidence</span>
          </Link>
          <a 
            href="https://noahdummett.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Main Site</span>
          </a>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">247</div>
          <div className="text-sm text-muted-foreground">Verified Complaints</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">67</div>
          <div className="text-sm text-muted-foreground">Countries Affected</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">$1.2M+</div>
          <div className="text-sm text-muted-foreground">Funds Withheld</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">300+</div>
          <div className="text-sm text-muted-foreground">Evidence Sources</div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/evidence" className="group">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group-hover:border-primary/50">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Evidence</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Comprehensive evidence analysis including Trustpilot reviews, Reddit posts, Casino Guru complaints, and blockchain data.
            </p>
            <div className="text-sm text-primary group-hover:underline">
              View Evidence Documentation →
            </div>
          </div>
        </Link>

        <Link to="/investigation" className="group">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group-hover:border-primary/50">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Investigation</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Investigation methodology, case overview, and integration documentation for blockchain and social media analysis.
            </p>
            <div className="text-sm text-primary group-hover:underline">
              View Investigation Docs →
            </div>
          </div>
        </Link>

        <Link to="/legal" className="group">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group-hover:border-primary/50">
            <div className="flex items-center space-x-3 mb-4">
              <Gavel className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Legal</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Legal documentation, whistleblower information, privacy policies, and terms of service.
            </p>
            <div className="text-sm text-primary group-hover:underline">
              View Legal Documentation →
            </div>
          </div>
        </Link>

        <Link to="/project" className="group">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group-hover:border-primary/50">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Project</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Project documentation, getting started guides, deployment instructions, and release notes.
            </p>
            <div className="text-sm text-primary group-hover:underline">
              View Project Documentation →
            </div>
          </div>
        </Link>

        <Link to="/technical" className="group">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group-hover:border-primary/50">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Technical</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Technical architecture, component documentation, deployment guides, and testing procedures.
            </p>
            <div className="text-sm text-primary group-hover:underline">
              View Technical Documentation →
            </div>
          </div>
        </Link>

        <a href="https://noahdummett.com/downloads/evidence-archive-index.md" target="_blank" rel="noopener noreferrer" className="group">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group-hover:border-primary/50">
            <div className="flex items-center space-x-3 mb-4">
              <Download className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Downloads</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Download complete evidence archive, PDF reports, and supporting documentation files.
            </p>
            <div className="text-sm text-primary group-hover:underline">
              Access Downloads →
            </div>
          </div>
        </a>
      </div>

      {/* Quick Links */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/evidence/trustpilot-analysis.html" className="text-primary hover:underline">
            Trustpilot Analysis Report
          </Link>
          <Link to="/evidence/archive-index" className="text-primary hover:underline">
            Complete Evidence Archive
          </Link>
          <Link to="/legal/whistleblower" className="text-primary hover:underline">
            Whistleblower Information
          </Link>
          <Link to="/investigation/overview" className="text-primary hover:underline">
            Investigation Overview
          </Link>
          <Link to="/technical/architecture" className="text-primary hover:underline">
            Technical Architecture
          </Link>
          <Link to="/project/getting-started" className="text-primary hover:underline">
            Getting Started Guide
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
        <p>
          Last Updated: July 4, 2025 | 
          <a href="https://noahdummett.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
            Noah Dummett Investigation
          </a>
        </p>
      </div>
    </div>
  );
};

export default DocsHome;
