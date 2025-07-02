import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Search, FileText, Scale, Shield } from 'lucide-react';

export const Features: React.FC = () => {
  const investigationFeatures = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Comprehensive Evidence Analysis",
      description: "Multi-platform evidence compilation with independent verification links"
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Professional Documentation",
      description: "Detailed documentation following journalistic and academic standards"
    },
    {
      icon: <Scale className="h-8 w-8 text-purple-500" />,
      title: "Legal Documentation",
      description: "Whistleblower reports and legal analysis by qualified professionals"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Blockchain Verification",
      description: "On-chain evidence with transaction-level proof and verification"
    }
  ];

  return (
    <PageLayout
      title="Investigation Features - Noah Dummett Investigation"
      description="Key features and capabilities of the Noah Dummett investigation documentation"
    >
      <SectionLayout
        title="Investigation Features"
        description="Comprehensive investigation capabilities and documentation standards"
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
                Investigation Capabilities
              </h2>
              <p className="text-muted-foreground">
                Professional investigation features and documentation standards
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investigationFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Evidence Standards</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All evidence independently verifiable through original sources</li>
                  <li>• Professional documentation following journalistic standards</li>
                  <li>• Legal compliance and whistleblower protection measures</li>
                  <li>• Cross-platform evidence compilation and analysis</li>
                  <li>• Blockchain verification with transaction-level proof</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
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
                >
                  View Evidence
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Features;
