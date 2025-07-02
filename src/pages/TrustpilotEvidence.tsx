import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, AlertTriangle, Star } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { TrustpilotEvidence as TrustpilotEvidenceComponent } from '@/components/ui/TrustpilotEvidence';
import { TrustpilotManipulation } from '@/components/ui/TrustpilotManipulation';
import { Button } from '@/components/ui/Button';

const downloadableFiles = [
  {
    name: 'Trustpilot Reviews Analysis',
    description: 'Comprehensive analysis of 100+ Trustpilot reviews showing scam patterns',
    filename: 'trustpilot-analysis.pdf',
    size: '2.3 MB',
    type: 'PDF Report'
  },
  {
    name: 'Review Manipulation Evidence',
    description: 'Documentation of fake review campaigns and manipulation tactics',
    filename: 'review-manipulation-evidence.pdf',
    size: '1.8 MB',
    type: 'PDF Report'
  },
  {
    name: 'Customer Complaints Database',
    description: 'Structured data of all customer complaints and withdrawal issues',
    filename: 'customer-complaints.json',
    size: '456 KB',
    type: 'JSON Data'
  }
];

const keyStatistics = [
  {
    value: '2.9/5',
    label: 'TrustScore',
    description: 'Poor rating despite manipulation attempts',
    color: 'text-red-400'
  },
  {
    value: '53%',
    label: '1-Star Reviews',
    description: 'Majority of reviews are negative',
    color: 'text-orange-400'
  },
  {
    value: '100+',
    label: 'Scam Reports',
    description: 'Documented withdrawal and scam complaints',
    color: 'text-red-400'
  },
  {
    value: '$5',
    label: 'Paid Reviews',
    description: 'Amount paid for fake positive reviews',
    color: 'text-yellow-400'
  }
];

export const TrustpilotEvidencePage: React.FC = () => {
  return (
    <PageLayout
      title="Trustpilot Evidence - Shuffle.com Scam Documentation"
      description="Comprehensive collection of Trustpilot reviews, manipulation evidence, and customer complaints against Shuffle.com"
    >
      {/* Hero Section */}
      <SectionLayout
        title="🌟 Trustpilot Evidence Archive"
        description="Complete documentation of customer complaints and review manipulation on Trustpilot"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyStatistics.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Download Section */}
      <SectionLayout
        title="📥 Download Evidence Files"
        description="Access comprehensive reports and data files documenting Trustpilot evidence"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadableFiles.map((file, index) => (
            <motion.div
              key={file.filename}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {file.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                          {file.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {file.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {file.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/downloads/${file.filename}`, '_blank')}
                    leftIcon={<Download className="h-4 w-4" />}
                    className="w-full"
                  >
                    Download File
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Quick Links */}
      <SectionLayout
        title="🔗 Quick Access Links"
        description="Direct links to key Trustpilot evidence sources"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Star className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Trustpilot Main Page</h3>
                  <p className="text-sm text-muted-foreground">Official Shuffle.com Trustpilot reviews</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://ca.trustpilot.com/review/shuffle.com', '_blank')}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View on Trustpilot
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Scam & Withdrawal Filter</h3>
                  <p className="text-sm text-muted-foreground">1-star reviews filtered for scam reports</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://ca.trustpilot.com/review/shuffle.com?search=scam+withdraw&stars=1', '_blank')}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View Scam Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionLayout>

      {/* Trustpilot Evidence Component */}
      <SectionLayout
        title="📋 Customer Reviews Analysis"
        description="Detailed analysis of customer complaints and withdrawal issues"
      >
        <TrustpilotEvidenceComponent />
      </SectionLayout>

      {/* Trustpilot Manipulation Component */}
      <SectionLayout
        title="🎭 Review Manipulation Evidence"
        description="Documentation of fake review campaigns and manipulation tactics"
      >
        <TrustpilotManipulation />
      </SectionLayout>
    </PageLayout>
  );
};

export default TrustpilotEvidencePage;
