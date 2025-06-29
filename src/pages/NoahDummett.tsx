import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  FileText,
  TrendingDown,
  Shield,
  Eye,
  DollarSign,
  Users,
  Clock,
  Link,
  ExternalLink,
  Hash
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { NoahDummettHeroImage } from '@/components/ui/HeroImage';
import { TestimonialsCarousel } from '@/components/ui/TestimonialsCarousel';
import { TrustpilotEvidence } from '@/components/ui/TrustpilotEvidence';
import { ComprehensiveEvidence } from '@/components/ui/ComprehensiveEvidence';
import { TrustpilotManipulation } from '@/components/ui/TrustpilotManipulation';

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

const blockchainEvidence = [
  {
    id: 'TXID1',
    hash: '0x3e2563cdc27f1e6be1f5995b9669660431d7e9e60d5cfb1c74320c27bbf2536b',
    description: 'On-chain connection to ShuffleEmployee2 - First notable holder receiving funds from FTX hack address',
    amount: '50,000 USDC',
    significance: 'Critical',
    date: 'November 7, 2022'
  },
  {
    id: 'TXID2',
    hash: '0xdce984dccd4378b331591bcda03f9a0f5260bc53d16b863ef8f348b8ebe6c232',
    description: 'Direct interaction with NoahShuffle2 address belonging to Noah Dummett - Former FTX employee, current Shuffle.com owner',
    amount: '100,000 USDC',
    significance: 'Critical',
    date: 'November 7, 2022'
  },
  {
    id: 'TXID3',
    hash: '0x0dfe3dc5dbd49e2b05a477b7c9378dc7037b8a7bce1323e6dcf15b138185d4f4',
    description: 'Direct connection to Shuffle casino hotwallet - Evidence of stolen funds flowing into gambling operations',
    amount: 'Multiple transfers',
    significance: 'Critical',
    date: 'November 2022'
  },
  {
    id: 'TXID4',
    hash: '0x3288f464dca8507658594a290d165e08ce88faf207d3ed2d88f6079d949b7ed6',
    description: 'Additional transaction from NoahShuffle address - Pattern of systematic fund movement',
    amount: 'Undisclosed',
    significance: 'High',
    date: 'November 2022'
  },
  {
    id: 'TXID5',
    hash: '0x1b87a6885f73d9dbce0cd2789793503440921fc3d8633f747b8fb046af18d459',
    description: 'Another NoahShuffle transaction - Continued evidence of fund laundering through gambling platform',
    amount: 'Undisclosed',
    significance: 'High',
    date: 'November 2022'
  }
];

const linkedInEvidence = {
  url: 'https://www.linkedin.com/posts/supitsj_on-chain-evidence-suggesting-ftx-hackers-activity-7317938160343138307-r-J_',
  author: 'supitsj',
  title: 'On-chain evidence suggesting FTX hackers are still roaming free',
  summary: 'Comprehensive blockchain analysis revealing $25M+ stolen from FTX, with direct connections to Noah Dummett and Shuffle.com operations',
  keyFindings: [
    'More than $25,000,000 stolen from tracked address',
    'Involvement of at least 2 former FTX employees',
    'Transactions occurred days before FTX bankruptcy filing',
    'Intentional 50,000 USDC transfers to avoid detection',
    'Direct connections to Shuffle casino operations',
    'Evidence of money laundering through gambling platform'
  ]
};

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
                <div className="flex-shrink-0">
                  <NoahDummettHeroImage size="md" />
                </div>

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

      {/* Blockchain Evidence */}
      <SectionLayout
        title="🔗 EXPLOSIVE BLOCKCHAIN EVIDENCE"
        description="On-chain proof connecting Noah Dummett to $25M+ stolen from FTX victims"
      >
        {/* LinkedIn Source Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    🚨 BREAKING: LinkedIn Investigation Exposes $25M+ Theft
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">
                    Source: {linkedInEvidence.author} - Blockchain Analyst
                  </p>
                  <p className="text-muted-foreground mb-4">
                    "{linkedInEvidence.title}"
                  </p>
                  <a
                    href={linkedInEvidence.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <span>View Original LinkedIn Post</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">🔍 Key Findings from Blockchain Analysis:</h4>
                <ul className="space-y-2">
                  {linkedInEvidence.keyFindings.map((finding, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span className="text-muted-foreground">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transaction Evidence */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-2">
              💰 SMOKING GUN TRANSACTIONS
            </h3>
            <p className="text-muted-foreground">
              These blockchain transactions provide irrefutable evidence of the alleged theft
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {blockchainEvidence.map((tx, index) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-red-500/30 bg-gradient-to-r from-red-500/5 to-orange-500/5">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                          <Hash className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-1">
                            {tx.id} - {tx.amount}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {tx.date}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        tx.significance === 'Critical'
                          ? 'bg-red-500/30 text-red-300'
                          : 'bg-orange-500/30 text-orange-300'
                      }`}>
                        {tx.significance}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {tx.description}
                      </p>
                      <div className="bg-black/20 rounded-lg p-4 border border-gray-700">
                        <p className="text-xs text-gray-400 mb-1">Transaction Hash:</p>
                        <code className="text-xs text-green-400 font-mono break-all">
                          {tx.hash}
                        </code>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link className="h-4 w-4 text-blue-400" />
                        <a
                          href={`https://etherscan.io/tx/${tx.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                        >
                          View on Etherscan
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Community Testimonials */}
      <SectionLayout
        title="Community Investigations & Accusations"
        description="What the crypto community is saying about Noah Dummett and Shuffle.com across social media platforms"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TestimonialsCarousel />
        </motion.div>
      </SectionLayout>

      {/* Trustpilot Evidence */}
      <SectionLayout
        title="Trustpilot Scam Reports"
        description="Verified customer reviews showing systematic withdrawal issues and scam allegations"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TrustpilotEvidence />
        </motion.div>
      </SectionLayout>

      {/* Trustpilot Platform Manipulation */}
      <SectionLayout
        title="Platform Manipulation Analysis"
        description="Evidence of systematic manipulation of Trustpilot reviews and ratings"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TrustpilotManipulation />
        </motion.div>
      </SectionLayout>

      {/* Comprehensive Evidence Database */}
      <SectionLayout
        title="Complete Evidence Archive"
        description="Comprehensive database of all evidence sources across multiple platforms"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ComprehensiveEvidence />
        </motion.div>
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
