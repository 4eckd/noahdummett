import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, FileText, Calendar } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <PageLayout
      title="Investigation Updates - Noah Dummett Investigation"
      description="Latest updates and developments in the Noah Dummett investigation"
    >
      <SectionLayout
        title="Investigation Updates"
        description="Latest developments and analysis in the Noah Dummett investigation"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground">
                Investigation Updates
              </h2>
              <p className="text-muted-foreground">
                This section will contain updates and developments in the Noah Dummett investigation
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Updates Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We are currently focusing on comprehensive evidence documentation. 
                  Investigation updates and analysis will be published here as developments occur.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">Current Focus</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comprehensive evidence documentation across all platforms</li>
                      <li>• Legal documentation and whistleblower report filing</li>
                      <li>• Blockchain analysis and transaction verification</li>
                      <li>• Platform manipulation pattern analysis</li>
                    </ul>
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
                    >
                      View Evidence
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Blog;
