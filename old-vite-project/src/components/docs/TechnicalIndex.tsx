import React from 'react';
import { Link } from 'react-router-dom';
import { Code, FileText } from 'lucide-react';

export const TechnicalIndex: React.FC = () => {
  const technicalFiles = [
    {
      name: 'Architecture',
      filename: 'architecture',
      description: 'Technical architecture and system design documentation',
      size: '35 KB'
    },
    {
      name: 'Components',
      filename: 'components',
      description: 'Component documentation and API reference',
      size: '42 KB'
    },
    {
      name: 'Deployment',
      filename: 'deployment',
      description: 'Technical deployment guide and infrastructure setup',
      size: '28 KB'
    },
    {
      name: 'Testing',
      filename: 'testing',
      description: 'Testing procedures and quality assurance documentation',
      size: '22 KB'
    },
    {
      name: 'Theming',
      filename: 'theming',
      description: 'Theme system and customization documentation',
      size: '18 KB'
    },
    {
      name: 'SEO Optimization',
      filename: 'seo-optimization',
      description: 'SEO optimization techniques and implementation',
      size: '24 KB'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Technical Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Technical architecture, components, and development documentation.
        </p>
      </div>

      <div className="grid gap-4">
        {technicalFiles.map((file) => (
          <div key={file.filename} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{file.name}</h3>
                </div>
                <p className="text-muted-foreground mb-3">{file.description}</p>
                <div className="text-sm text-muted-foreground">Size: {file.size}</div>
              </div>
              <Link
                to={`/technical/${file.filename}`}
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

export default TechnicalIndex;
