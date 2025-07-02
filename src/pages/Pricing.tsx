import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Heart, Users, Globe } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <PageLayout
      title="Support the Investigation - Noah Dummett Investigation"
      description="Information about supporting the Noah Dummett investigation"
    >
      <SectionLayout
        title="Support the Investigation"
        description="This investigation is provided free to the public in the interest of transparency"
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
                Free Public Investigation
              </h2>
              <p className="text-muted-foreground">
                This investigation is provided free to the public in the interest of transparency and accountability
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Public Interest Investigation
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This investigation is conducted in the public interest and is provided free of charge. 
                  Our goal is transparency, accountability, and protecting potential victims from fraud.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 border border-border rounded-lg">
                    <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Free Access</h4>
                    <p className="text-sm text-muted-foreground">
                      All evidence and documentation freely available to the public
                    </p>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Community Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      Supported by community members and affected individuals
                    </p>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Public Interest</h4>
                    <p className="text-sm text-muted-foreground">
                      Conducted to protect potential victims and ensure accountability
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">How You Can Help</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                    <li>• Share this investigation with others who may be affected</li>
                    <li>• Verify the evidence independently through provided sources</li>
                    <li>• Report additional evidence if you have relevant information</li>
                    <li>• Support transparency and accountability in the cryptocurrency space</li>
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
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Pricing;
