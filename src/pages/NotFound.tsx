import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { PageLayout } from '@/components/layout/Layout';

export const NotFound: React.FC = () => {
  return (
    <PageLayout
      title="404 - Investigation File Not Found"
      description="The evidence file you're looking for doesn't exist. Return to the Noah Dummett investigation for complete documentation."
    >
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-2xl w-full"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="space-y-4"
          >
            <div className="text-8xl font-bold text-red-500">404</div>
            <div className="text-2xl font-semibold text-foreground">
              Investigation File Not Found
            </div>
            <p className="text-muted-foreground">
              The evidence file you're looking for has been moved, deleted, or never existed.
            </p>
          </motion.div>

          {/* Warning Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center">
                  <AlertTriangle className="h-12 w-12 text-red-500" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Looking for Evidence?</h3>
                  <p className="text-sm text-muted-foreground">
                    All investigation materials are available on the main Noah Dummett page,
                    including blockchain evidence, customer complaints, and platform manipulation analysis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/noah-dummett">
                <Button
                  leftIcon={<AlertTriangle className="h-4 w-4" />}
                  variant="primary"
                  fullWidth
                  className="bg-red-600 hover:bg-red-700"
                >
                  View Investigation
                </Button>
              </Link>
              <Link to="/">
                <Button
                  leftIcon={<Home className="h-4 w-4" />}
                  variant="outline"
                  fullWidth
                >
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Evidence Links */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Quick access to evidence:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <Link
                  to="/noah-dummett#blockchain-evidence"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  🔗 Blockchain Evidence
                </Link>
                <Link
                  to="/noah-dummett#trustpilot-evidence"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  ⭐ Trustpilot Analysis
                </Link>
                <Link
                  to="/noah-dummett#community-testimonials"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  💬 Community Reports
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <Button
              onClick={() => window.history.back()}
              leftIcon={<ArrowLeft className="h-4 w-4" />}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
