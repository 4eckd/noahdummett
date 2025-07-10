import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, FileText } from 'lucide-react';

export const ProjectIndex: React.FC = () => {
  const projectFiles = [
    {
      name: 'Getting Started',
      filename: 'getting-started',
      description: 'Getting started guide for the Noah Dummett investigation project',
      size: '20 KB'
    },
    {
      name: 'Deployment',
      filename: 'deployment',
      description: 'Deployment instructions and configuration',
      size: '18 KB'
    },
    {
      name: 'Environment Setup',
      filename: 'environment-setup',
      description: 'Environment setup and configuration guide',
      size: '16 KB'
    },
    {
      name: 'FAQ',
      filename: 'faq',
      description: 'Frequently asked questions about the project',
      size: '14 KB'
    },
    {
      name: 'Release Notes',
      filename: 'release-notes',
      description: 'Project release notes and version history',
      size: '25 KB'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Project Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Project setup, deployment, and maintenance documentation.
        </p>
      </div>

      <div className="grid gap-4">
        {projectFiles.map((file) => (
          <div key={file.filename} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{file.name}</h3>
                </div>
                <p className="text-muted-foreground mb-3">{file.description}</p>
                <div className="text-sm text-muted-foreground">Size: {file.size}</div>
              </div>
              <Link
                to={`/project/${file.filename}`}
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

export default ProjectIndex;
