import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FileText, Search, Home, Shield, Gavel, Settings, Code, ExternalLink } from 'lucide-react';

export const DocsLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold text-foreground">Noah Dummett Docs</h1>
                  <p className="text-sm text-muted-foreground">Investigation Documentation</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="https://noahdummett.com" 
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Main Site</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Documentation Home
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Search className="h-4 w-4" />
                  <span>Evidence</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link to="/evidence" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Evidence Index
                    </Link>
                  </li>
                  <li>
                    <Link to="/evidence/trustpilot" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Trustpilot Analysis
                    </Link>
                  </li>
                  <li>
                    <Link to="/evidence/reddit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Reddit Evidence
                    </Link>
                  </li>
                  <li>
                    <Link to="/evidence/casino-guru" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Casino Guru Complaints
                    </Link>
                  </li>
                  <li>
                    <Link to="/evidence/blockchain" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Blockchain Analysis
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Investigation</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link to="/investigation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Investigation Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/investigation/overview" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Case Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/investigation/blockchain-integration" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Blockchain Integration
                    </Link>
                  </li>
                  <li>
                    <Link to="/investigation/linkedin-integration" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      LinkedIn Integration
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Gavel className="h-4 w-4" />
                  <span>Legal</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link to="/legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Legal Index
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/whistleblower" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Whistleblower Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/privacy_policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/terms_of_service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Project</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link to="/project" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Project Index
                    </Link>
                  </li>
                  <li>
                    <Link to="/project/getting-started" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link to="/project/deployment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Deployment
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Code className="h-4 w-4" />
                  <span>Technical</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link to="/technical" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Technical Index
                    </Link>
                  </li>
                  <li>
                    <Link to="/technical/architecture" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Architecture
                    </Link>
                  </li>
                  <li>
                    <Link to="/technical/components" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link to="/technical/deployment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Deployment
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
