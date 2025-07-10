import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

export const Terms: React.FC = () => {
  return (
    <PageLayout
      title="Terms of Service - Noah Dummett Investigation"
      description="Terms of service for the Noah Dummett investigation website and documentation"
    >
      <SectionLayout
        title="Terms of Service"
        description="Terms and conditions for using the Noah Dummett investigation website"
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
                Terms of Service
              </h2>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing and using the Noah Dummett investigation website (noahdummett.com), 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h3>2. Purpose and Scope</h3>
              <p>
                This website provides investigative documentation and evidence analysis related to 
                allegations against Noah Dummett and Shuffle.com. The content is provided for 
                informational, educational, and research purposes.
              </p>

              <h3>3. Content and Evidence</h3>
              <ul>
                <li>All evidence presented is independently verifiable through original sources</li>
                <li>Documentation follows professional journalistic and academic standards</li>
                <li>Users are encouraged to verify information independently</li>
                <li>Original source links are provided for all claims and evidence</li>
              </ul>

              <h3>4. User Responsibilities</h3>
              <p>Users of this website agree to:</p>
              <ul>
                <li>Use the information responsibly and ethically</li>
                <li>Verify information through independent sources</li>
                <li>Respect applicable laws and regulations</li>
                <li>Not misrepresent or misuse the provided information</li>
              </ul>

              <h3>5. Disclaimer</h3>
              <p>
                The information on this website is provided "as is" without warranty of any kind. 
                While we strive for accuracy, users should independently verify all information 
                before making decisions based on the content.
              </p>

              <h3>6. Legal Compliance</h3>
              <p>
                This investigation complies with applicable laws regarding freedom of speech, 
                press freedom, and public interest reporting. All content is protected under 
                relevant legal frameworks for investigative journalism and public interest disclosure.
              </p>

              <h3>7. Privacy and Data Protection</h3>
              <p>
                We respect user privacy and comply with applicable data protection regulations. 
                See our Privacy Policy for detailed information about data collection and use.
              </p>

              <h3>8. Intellectual Property</h3>
              <p>
                Original analysis and compilation are protected by copyright. Evidence from 
                third-party sources remains the property of their respective owners and is 
                used under fair use provisions for investigative and educational purposes.
              </p>

              <h3>9. Modifications</h3>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified 
                of significant changes, and continued use constitutes acceptance of modified terms.
              </p>

              <h3>10. Contact Information</h3>
              <p>
                For questions about these terms or the investigation, please use the contact 
                methods provided on the main website.
              </p>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This investigation is conducted in the public interest 
                  and follows established standards for investigative journalism and academic research. 
                  All allegations are supported by independently verifiable evidence.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Terms;
