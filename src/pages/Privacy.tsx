import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  AlertTriangle
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const privacyPrinciples = [
  {
    icon: <Shield className="h-8 w-8 text-green-500" />,
    title: 'Data Minimization',
    description: 'We collect only the minimum data necessary for platform operation and investigation purposes.',
    details: 'No personal information is collected from visitors. We do not use tracking cookies, analytics that identify individuals, or require user registration.'
  },
  {
    icon: <Eye className="h-8 w-8 text-blue-500" />,
    title: 'Transparency',
    description: 'Complete transparency about what data we collect and how it is used.',
    details: 'This privacy policy clearly outlines all data practices. We do not engage in hidden data collection or undisclosed sharing practices.'
  },
  {
    icon: <Lock className="h-8 w-8 text-purple-500" />,
    title: 'Security First',
    description: 'Strong security measures protect any data that is collected.',
    details: 'Industry-standard encryption, secure hosting, and regular security audits ensure data protection. Access is strictly limited and monitored.'
  },
  {
    icon: <UserCheck className="h-8 w-8 text-orange-500" />,
    title: 'User Control',
    description: 'Users maintain control over their interaction with our platform.',
    details: 'No mandatory data collection, no user accounts required, and clear opt-out mechanisms for any optional features.'
  }
];

const dataCategories = [
  {
    category: 'Technical Data',
    collected: 'Server logs, IP addresses (anonymized), browser type',
    purpose: 'Security monitoring, performance optimization, abuse prevention',
    retention: '30 days maximum',
    sharing: 'Not shared with third parties'
  },
  {
    category: 'Evidence Submissions',
    collected: 'Voluntarily submitted evidence or tips',
    purpose: 'Investigation support, verification processes',
    retention: 'Until investigation completion or legal requirements',
    sharing: 'Only with appropriate authorities when legally required'
  },
  {
    category: 'Contact Information',
    collected: 'Email addresses for correspondence (optional)',
    purpose: 'Communication regarding submissions or updates',
    retention: 'Until purpose fulfilled or deletion requested',
    sharing: 'Never shared with third parties'
  },
  {
    category: 'Website Analytics',
    collected: 'Aggregated, anonymized usage statistics',
    purpose: 'Platform improvement and performance monitoring',
    retention: '12 months maximum',
    sharing: 'Only in aggregated, non-identifiable form'
  }
];

const userRights = [
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: 'Right to Information',
    description: 'Know what data we collect and how it is used'
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: 'Right to Access',
    description: 'Request access to any data we may have collected'
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    title: 'Right to Correction',
    description: 'Request correction of any inaccurate information'
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: 'Right to Deletion',
    description: 'Request deletion of data when legally permissible'
  }
];

export const Privacy: React.FC = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="How we protect your privacy while conducting this investigation"
    >
      {/* Privacy Hero */}
      <SectionLayout
        title="Privacy-First Investigation"
        description="Protecting user privacy while exposing corporate misconduct"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Privacy by Design
                  </h3>
                  <p className="text-muted-foreground">
                    Our investigation platform is built with privacy as a fundamental principle, not an afterthought.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">No User Tracking:</strong> Unlike many websites, we do not track individual users, build profiles, or collect personal information for commercial purposes. Our focus is on the investigation, not on monetizing user data.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">Minimal Data Collection:</strong> We collect only the absolute minimum data necessary for platform security and investigation purposes. No registration required, no personal information collected from casual visitors.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">Transparency Commitment:</strong> This privacy policy provides complete transparency about our data practices. We believe privacy and accountability can coexist.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Privacy Principles */}
      <SectionLayout
        title="Privacy Principles"
        description="The core principles that guide our privacy practices"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {privacyPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Data Collection Details */}
      <SectionLayout
        title="Data Collection Details"
        description="Specific information about what data we collect and why"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{category.category}</h4>
                        <p className="text-sm text-muted-foreground">{category.collected}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Purpose</h5>
                        <p className="text-sm text-muted-foreground">{category.purpose}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Retention</h5>
                        <p className="text-sm text-muted-foreground">{category.retention}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Sharing</h5>
                        <p className="text-sm text-muted-foreground">{category.sharing}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-xs text-green-600 font-medium">Compliant</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionLayout>

      {/* User Rights */}
      <SectionLayout
        title="Your Privacy Rights"
        description="Understanding and exercising your privacy rights"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userRights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      {right.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {right.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {right.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Privacy;
