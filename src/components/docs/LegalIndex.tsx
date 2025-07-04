import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, FileText } from 'lucide-react';

export const LegalIndex: React.FC = () => {
  const legalFiles = [
    {
      name: 'Whistleblower Information',
      filename: 'whistleblower',
      description: 'Information for whistleblowers and reporting procedures',
      size: '18 KB'
    },
    {
      name: 'Privacy Policy',
      filename: 'privacy_policy',
      description: 'Privacy policy and data protection information',
      size: '22 KB'
    },
    {
      name: 'Terms of Service',
      filename: 'terms_of_service',
      description: 'Terms of service and usage guidelines',
      size: '25 KB'
    },
    {
      name: 'Documentation Index',
      filename: 'documentation-index',
      description: 'Legal documentation index and references',
      size: '15 KB'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Legal Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Legal documentation, policies, and whistleblower information.
        </p>
      </div>

      <div className="grid gap-4">
        {legalFiles.map((file) => (
          <div key={file.filename} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Gavel className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{file.name}</h3>
                </div>
                <p className="text-muted-foreground mb-3">{file.description}</p>
                <div className="text-sm text-muted-foreground">Size: {file.size}</div>
              </div>
              <Link
                to={`/legal/${file.filename}`}
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

export default LegalIndex;
