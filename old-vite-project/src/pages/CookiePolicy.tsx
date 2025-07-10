import React from 'react';
import { motion } from 'framer-motion';
import {
  Cookie,
  Shield,
  Settings,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const cookieTypes = [
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    title: 'Essential Cookies',
    description: 'Required for basic website functionality and security',
    status: 'Always Active',
    examples: ['Session management', 'Security tokens', 'Load balancing'],
    color: 'green'
  },
  {
    icon: <XCircle className="h-6 w-6 text-red-500" />,
    title: 'Analytics Cookies',
    description: 'Track website usage and performance (Currently Disabled)',
    status: 'Disabled',
    examples: ['Page views', 'User interactions', 'Performance metrics'],
    color: 'red'
  },
  {
    icon: <XCircle className="h-6 w-6 text-red-500" />,
    title: 'Marketing Cookies',
    description: 'Advertising and tracking cookies (Not Used)',
    status: 'Not Used',
    examples: ['Ad targeting', 'Social media tracking', 'Cross-site tracking'],
    color: 'red'
  },
  {
    icon: <XCircle className="h-6 w-6 text-red-500" />,
    title: 'Third-Party Cookies',
    description: 'External service cookies (Minimized)',
    status: 'Minimized',
    examples: ['CDN services', 'Security services', 'Essential integrations'],
    color: 'red'
  }
];

const privacyFeatures = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: 'Privacy by Design',
    description: 'Our investigation platform is built with privacy as a core principle, not an afterthought.'
  },
  {
    icon: <Eye className="h-8 w-8 text-green-500" />,
    title: 'No User Tracking',
    description: 'We do not track individual users or build behavioral profiles for commercial purposes.'
  },
  {
    icon: <Settings className="h-8 w-8 text-purple-500" />,
    title: 'Minimal Data Collection',
    description: 'Only essential cookies are used. No unnecessary data collection or storage.'
  }
];

export const CookiePolicy: React.FC = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      description="Understanding how we use cookies and protect your privacy during the investigation"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Cookie className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe in transparency about our data practices. This policy explains how we use cookies 
              on the Noah Dummett Investigation website and how we protect your privacy while you access 
              important accountability information.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: December 17, 2024
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Cookie Types */}
      <SectionLayout
        title="Cookie Usage Overview"
        description="What cookies we use and why we use them"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={cookie.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`border-${cookie.color}-500/20 bg-gradient-to-br from-${cookie.color}-500/5 to-${cookie.color}-600/5`}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-${cookie.color}-500/10 flex items-center justify-center flex-shrink-0`}>
                      {cookie.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {cookie.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${cookie.color}-500/20 text-${cookie.color}-400`}>
                        {cookie.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {cookie.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {cookie.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Privacy Features */}
      <SectionLayout
        title="Privacy Protection Features"
        description="How we protect your privacy while you access investigation information"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Technical Details */}
      <SectionLayout
        title="Technical Implementation"
        description="Detailed information about our cookie usage and data practices"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-foreground">Essential Cookies Only</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Session Management:</strong> Temporary cookies to maintain your session and ensure security during your visit.
                  </p>
                  <p>
                    <strong className="text-foreground">Security Tokens:</strong> CSRF protection and other security measures to protect against malicious attacks.
                  </p>
                  <p>
                    <strong className="text-foreground">Load Balancing:</strong> Technical cookies to ensure optimal performance and availability.
                  </p>
                  <p>
                    <strong className="text-foreground">No Tracking:</strong> We do not use cookies to track your behavior across websites or build advertising profiles.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-foreground">Your Rights & Controls</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Browser Controls:</strong> You can disable cookies in your browser settings, though this may affect website functionality.
                  </p>
                  <p>
                    <strong className="text-foreground">No Consent Required:</strong> Since we only use essential cookies, no consent banner is needed under GDPR.
                  </p>
                  <p>
                    <strong className="text-foreground">Data Deletion:</strong> Essential cookies are automatically deleted when you close your browser.
                  </p>
                  <p>
                    <strong className="text-foreground">Contact Us:</strong> Questions about cookies? Email hello@noahdummett.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Investigation Platform Notice</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This website is dedicated to accountability journalism and investigation. We prioritize your privacy 
                    while providing access to important information about potential misconduct in the cryptocurrency industry. 
                    Our minimal cookie usage reflects our commitment to privacy-first investigation practices.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="mailto:hello@noahdummett.com" 
                      className="text-orange-400 hover:text-orange-300 font-medium text-sm"
                    >
                      Contact our privacy team: hello@noahdummett.com
                    </a>
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

export default CookiePolicy;
