import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Database, Download, ExternalLink } from 'lucide-react';

export const API: React.FC = () => {
  const dataFormats = [
    {
      format: "JSON",
      description: "Structured evidence data in JSON format",
      example: "evidence-data.json"
    },
    {
      format: "CSV",
      description: "Tabular data for analysis and research",
      example: "complaints-data.csv"
    },
    {
      format: "PDF",
      description: "Formatted reports and legal documentation",
      example: "investigation-report.pdf"
    },
    {
      format: "Markdown",
      description: "Human-readable documentation and analysis",
      example: "evidence-analysis.md"
    }
  ];

  return (
    <PageLayout
      title="Data Access - Noah Dummett Investigation"
      description="Access to investigation data and evidence in various formats"
    >
      <SectionLayout
        title="Data Access"
        description="Access investigation data and evidence in structured formats"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="mb-6">
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground">
                Investigation Data Access
              </h2>
              <p className="text-muted-foreground">
                Access structured investigation data for research, analysis, and verification
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 mb-6">
                <Database className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Structured Data Access
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Investigation data is available in multiple formats for researchers, journalists, 
                  and affected individuals. All data includes verification links to original sources.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {dataFormats.map((format, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-4 border border-border rounded-lg"
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {format.format} Format
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {format.description}
                    </p>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {format.example}
                    </code>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-muted rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Available Data Sets</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Evidence Archive</strong> - Complete evidence compilation with metadata</li>
                  <li>• <strong>Complaint Database</strong> - Structured customer complaint data</li>
                  <li>• <strong>Blockchain Transactions</strong> - Verified transaction data and analysis</li>
                  <li>• <strong>Platform Analysis</strong> - Cross-platform manipulation pattern data</li>
                  <li>• <strong>Legal Documentation</strong> - Structured legal filing information</li>
                </ul>
              </div>

              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
                <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  Data Access Methods
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-100">Direct Download</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Download structured data files from the evidence archive
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-100">Source Links</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Direct links to original sources for independent verification
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  leftIcon={<ArrowLeft className="h-4 w-4" />}
                  onClick={() => window.location.href = '/'}
                >
                  Back to Investigation
                </Button>
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/evidence'}
                  rightIcon={<ExternalLink className="h-4 w-4" />}
                >
                  Access Evidence Archive
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default API;
