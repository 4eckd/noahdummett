import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { Mail, Download, Trash2, Eye } from 'lucide-react';

export const GDPR: React.FC = () => {
  return (
    <PageLayout
      title="GDPR Compliance - Noah Dummett Investigation"
      description="GDPR compliance information and data protection rights for the Noah Dummett investigation website"
    >
      <SectionLayout
        title="GDPR Compliance"
        description="Your data protection rights under the General Data Protection Regulation"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground">
                Data Protection Rights
              </h2>
              <p className="text-muted-foreground">
                Your rights under the General Data Protection Regulation (GDPR)
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                We are committed to protecting your personal data and respecting your privacy rights. 
                Under the GDPR, you have several rights regarding your personal data.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Your GDPR Rights</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Right to Access</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Request a copy of the personal data we hold about you
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Download className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Right to Portability</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive your data in a structured, machine-readable format
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Trash2 className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Right to Erasure</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Request deletion of your personal data ("right to be forgotten")
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Right to Rectification</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Request correction of inaccurate or incomplete data
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data We Collect */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Data We Collect</h3>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>Minimal Data Collection</h4>
              <p>We collect minimal personal data, limited to:</p>
              <ul>
                <li><strong>Technical Data</strong> - IP address, browser type, device information</li>
                <li><strong>Usage Data</strong> - Pages visited, time spent, interaction patterns</li>
                <li><strong>Preferences</strong> - Theme selection, language preferences</li>
                <li><strong>Feedback</strong> - Voluntary feedback through Trustpilot or contact forms</li>
              </ul>

              <h4>Legal Basis for Processing</h4>
              <ul>
                <li><strong>Legitimate Interest</strong> - Website functionality and security</li>
                <li><strong>Consent</strong> - Analytics and optional features</li>
                <li><strong>Public Interest</strong> - Investigative journalism and transparency</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection Measures */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Data Protection Measures</h3>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h4>Security Measures</h4>
              <ul>
                <li><strong>Encryption</strong> - All data transmitted using HTTPS encryption</li>
                <li><strong>Access Controls</strong> - Limited access to personal data</li>
                <li><strong>Data Minimization</strong> - Collect only necessary data</li>
                <li><strong>Retention Limits</strong> - Data deleted when no longer needed</li>
              </ul>

              <h4>Third-Party Services</h4>
              <p>We use GDPR-compliant third-party services:</p>
              <ul>
                <li><strong>Trustpilot</strong> - Review platform with GDPR compliance</li>
                <li><strong>Analytics</strong> - Privacy-focused analytics tools</li>
                <li><strong>Hosting</strong> - EU-based or GDPR-compliant hosting providers</li>
              </ul>
            </CardContent>
          </Card>

          {/* Exercise Your Rights */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Exercise Your Rights</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                To exercise any of your GDPR rights, please contact us using the methods below. 
                We will respond within 30 days of receiving your request.
              </p>
              
              <div className="space-y-4">
                <Button
                  variant="outline"
                  leftIcon={<Mail className="h-4 w-4" />}
                  onClick={() => window.location.href = '/contact'}
                  className="w-full sm:w-auto"
                >
                  Contact Us About Your Data
                </Button>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">What to Include in Your Request</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clear description of your request</li>
                    <li>• Proof of identity (for security purposes)</li>
                    <li>• Specific data or time period (if applicable)</li>
                    <li>• Preferred method of response</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Complaints */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground">Complaints and Concerns</h3>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                If you have concerns about how we handle your personal data, you have the right to:
              </p>
              <ul>
                <li>Contact us directly to resolve the issue</li>
                <li>Lodge a complaint with your local data protection authority</li>
                <li>Seek legal remedies if your rights have been violated</li>
              </ul>

              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We are committed to GDPR compliance and protecting your privacy. 
                  Our data collection is minimal and focused on providing the investigation documentation 
                  while respecting your privacy rights.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default GDPR;
