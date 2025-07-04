import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';

export const InvestigationIndex: React.FC = () => {
  const investigationFiles = [
    {
      name: 'Investigation Overview',
      filename: 'overview',
      description: 'Comprehensive overview of the Noah Dummett investigation methodology',
      size: '32 KB'
    },
    {
      name: 'Blockchain Integration',
      filename: 'blockchain-integration',
      description: 'Integration of blockchain analysis into the investigation process',
      size: '28 KB'
    },
    {
      name: 'LinkedIn Integration',
      filename: 'linkedin-integration',
      description: 'Social media analysis and LinkedIn evidence integration',
      size: '24 KB'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Investigation Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Methodology, processes, and integration documentation for the Noah Dummett investigation.
        </p>
      </div>

      <div className="grid gap-4">
        {investigationFiles.map((file) => (
          <div key={file.filename} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{file.name}</h3>
                </div>
                <p className="text-muted-foreground mb-3">{file.description}</p>
                <div className="text-sm text-muted-foreground">Size: {file.size}</div>
              </div>
              <Link
                to={`/investigation/${file.filename}`}
                className="inline-flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>View</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestigationIndex;
