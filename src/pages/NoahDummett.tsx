import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Search,
  FileText,
  TrendingDown,
  Shield,
  Eye,
  DollarSign,
  Users,
  Clock,
  Target,
  ExternalLink
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const keyAllegations = [
  {
    icon: <DollarSign className="h-8 w-8 text-red-500" />,
    title: 'Alleged Fund Misappropriation',
    severity: 'Critical',
    description: 'Claims that Noah Dummett allegedly took $20 million from FTX bankruptcy estate to fund Shuffle.com operations.',
    evidence: 'Blockchain analysis, whistleblower reports, timing of platform launch'
  },
  {
    icon: <Eye className="h-8 w-8 text-orange-500" />,
    title: 'Anonymous Leadership Structure',
    severity: 'High',
    description: 'Key personnel operating under aliases including "Cam" and "Brett", making accountability impossible.',
    evidence: 'Community reports, lack of public disclosure, operational secrecy'
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: 'Unethical Treatment of Vulnerable Users',
    severity: 'Critical',
    description: 'Reports of inappropriate handling of gambling addiction cases and disrespectful treatment of users seeking help.',
    evidence: 'User testimonials, community discussions, documented interactions'
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-orange-500" />,
    title: 'Operational Pattern Concerns',
    severity: 'High',
    description: 'Potential replication of problematic practices that contributed to FTX\'s collapse.',
    evidence: 'Operational analysis, background investigation, industry expert opinions'
  }
];

const documentationEvidence = [
  {
    title: 'IRS Form 211 - Whistleblower Report',
    description: 'Official whistleblower documentation filed with federal authorities regarding alleged financial misconduct.',
    status: 'Filed',
    significance: 'Federal Investigation Trigger'
  },
  {
    title: 'Shuffle Chain Data Analysis',
    description: 'Comprehensive blockchain analysis revealing suspicious transaction patterns and fund flows.',
    status: 'Completed',
    significance: 'Financial Evidence'
  },
  {
    title: 'Legal Pleadings and Demands',
    description: 'Formal legal documents outlining specific allegations and demands for transparency.',
    status: 'Active',
    significance: 'Legal Accountability'
  },
  {
    title: 'Community Investigation Reports',
    description: 'Detailed analysis from Bitcoin Talk forums and independent investigators.',
    status: 'Ongoing',
    significance: 'Public Awareness'
  }
];

const impactMetrics = [
  {
    icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
    value: '$20M+',
    label: 'Alleged Misappropriated Funds',
    description: 'Claimed amount taken from FTX bankruptcy estate'
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    value: '1000s',
    label: 'Potentially Affected Users',
    description: 'Gamblers and crypto enthusiasts at risk'
  },
  {
    icon: <Clock className="h-6 w-6 text-yellow-500" />,
    value: '18 Months',
    label: 'Time Since FTX Collapse',
    description: 'Period of alleged misconduct and cover-up'
  },
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    value: '0',
    label: 'Accountability Measures',
    description: 'No meaningful oversight or transparency'
  }
];

export const NoahDummett: React.FC = () => {
  return (
    <PageLayout
      title="Noah Dummett Investigation"
      description="A comprehensive analysis of the controversial Shuffle.com founder and mounting allegations"
    >
      {/* Hero Section */}
      <SectionLayout
        title="The Noah Dummett Files"
        description="Uncovering the truth behind Shuffle.com's controversial founder"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Hero Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-red-500/50 shadow-2xl">
                      <img
                        src="/hero-noahdummett.png"
                        alt="Noah Dummett - Founder of Shuffle.com"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-foreground">
                    A Web3 Scandal in the Making
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Noah Dummett, founder and CEO of Shuffle.com, has become the center of a growing
                    controversy that threatens to expose the dark underbelly of Web3 entrepreneurship.
                    From his connections to the collapsed FTX exchange to allegations of fund
                    misappropriation and unethical business practices, the evidence is mounting.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This investigation reveals a pattern of concerning behavior that demands immediate
                    attention from regulators, investors, and the crypto community at large.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Key Allegations */}
      <SectionLayout
        title="Critical Allegations"
        description="The most serious concerns that demand immediate investigation"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {keyAllegations.map((allegation, index) => (
            <motion.div
              key={allegation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full border-red-500/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        {allegation.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {allegation.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      allegation.severity === 'Critical' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {allegation.severity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {allegation.description}
                    </p>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm font-medium text-primary mb-1">Supporting Evidence:</p>
                      <p className="text-sm text-muted-foreground">
                        {allegation.evidence}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Documentation Evidence */}
      <SectionLayout
        title="Evidence Documentation"
        description="Official documents and investigations supporting the allegations"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentationEvidence.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {doc.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                          {doc.status}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {doc.significance}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {doc.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Impact Metrics */}
      <SectionLayout
        title="The Scale of the Problem"
        description="Understanding the potential impact and scope of the allegations"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">
                    {metric.value}
                  </h4>
                  <p className="text-sm font-medium text-foreground mb-2">
                    {metric.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default NoahDummett;
