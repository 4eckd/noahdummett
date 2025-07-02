import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

export const Cookies: React.FC = () => {
  return (
    <PageLayout
      title="Cookie Policy - Noah Dummett Investigation"
      description="Cookie policy for the Noah Dummett investigation website"
    >
      <SectionLayout
        title="Cookie Policy"
        description="How we use cookies and similar technologies on our website"
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
                Cookie Policy
              </h2>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <h3>What Are Cookies</h3>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience and allow certain features 
                to function properly.
              </p>

              <h3>How We Use Cookies</h3>
              <p>We use cookies for the following purposes:</p>

              <h4>Essential Cookies</h4>
              <ul>
                <li><strong>Theme Preferences</strong> - Remember your selected theme (Dark, Violet, Emerald, Amber, Aurora)</li>
                <li><strong>Site Functionality</strong> - Enable core website features and navigation</li>
                <li><strong>Security</strong> - Protect against malicious activity and ensure secure browsing</li>
              </ul>

              <h4>Analytics Cookies</h4>
              <ul>
                <li><strong>Usage Statistics</strong> - Understand how visitors use our website</li>
                <li><strong>Performance Monitoring</strong> - Monitor website performance and identify issues</li>
                <li><strong>Content Optimization</strong> - Improve content based on user behavior</li>
              </ul>

              <h4>Third-Party Cookies</h4>
              <ul>
                <li><strong>Trustpilot Widgets</strong> - Enable Trustpilot review functionality</li>
                <li><strong>External Links</strong> - Track clicks to external evidence sources</li>
              </ul>

              <h3>Types of Cookies We Use</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">Cookie Type</th>
                      <th className="border border-border p-2 text-left">Purpose</th>
                      <th className="border border-border p-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">Theme Preference</td>
                      <td className="border border-border p-2">Store selected theme</td>
                      <td className="border border-border p-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Session</td>
                      <td className="border border-border p-2">Maintain session state</td>
                      <td className="border border-border p-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Analytics</td>
                      <td className="border border-border p-2">Website usage statistics</td>
                      <td className="border border-border p-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Trustpilot</td>
                      <td className="border border-border p-2">Review widget functionality</td>
                      <td className="border border-border p-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Managing Cookies</h3>
              <p>You can control and manage cookies in several ways:</p>

              <h4>Browser Settings</h4>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul>
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h4>Our Cookie Banner</h4>
              <p>
                When you first visit our website, you'll see a cookie banner that allows you to:
              </p>
              <ul>
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>

              <h3>Impact of Disabling Cookies</h3>
              <p>
                If you disable cookies, some features may not work properly:
              </p>
              <ul>
                <li>Theme preferences won't be saved</li>
                <li>Some interactive features may not function</li>
                <li>We won't be able to improve the website based on usage data</li>
              </ul>

              <h3>Updates to This Policy</h3>
              <p>
                We may update this cookie policy from time to time. Any changes will be posted 
                on this page with an updated revision date.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have questions about our use of cookies, please contact us through 
                the methods provided on our main website.
              </p>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We are committed to transparency and user privacy. 
                  Our cookie usage is minimal and focused on providing the best possible 
                  experience while respecting your privacy preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Cookies;
