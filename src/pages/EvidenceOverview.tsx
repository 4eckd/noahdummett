import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Download,
  ExternalLink,
  Star,
  Users,
  Scale,
  Database
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ComprehensiveEvidence } from '@/components/ui/ComprehensiveEvidence';

const evidenceCategories = [
  {
    id: 'trustpilot',
    title: 'Trustpilot Evidence',
    description: '100+ customer reviews documenting scam patterns and withdrawal issues',
    icon: <Star className="h-8 w-8 text-green-500" />,
    count: '100+',
    type: 'Customer Reviews',
    link: '/evidence/trustpilot',
    color: 'from-green-500/10 to-emerald-500/10 border-green-500/20',
    highlights: [
      '2.9/5 TrustScore despite manipulation',
      '53% of reviews are 1-star complaints',
      'Documented review manipulation campaigns',
      'Global withdrawal issues reported'
    ]
  },
  {
    id: 'reddit',
    title: 'Reddit Evidence',
    description: 'Community ban and widespread scam reports across multiple subreddits',
    icon: <Users className="h-8 w-8 text-orange-500" />,
    count: '50+',
    type: 'Community Reports',
    link: '/evidence/reddit',
    color: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
    highlights: [
      'r/ShufflecomCasino banned by Reddit',
      'Violations of platform rules',
      'Multiple subreddit complaints',
      'Gambling addiction mishandling'
    ]
  },
  {
    id: 'casinoguru',
    title: 'Casino Guru Evidence',
    description: '12+ formal complaints for withdrawal delays and account issues',
    icon: <Scale className="h-8 w-8 text-purple-500" />,
    count: '12+',
    type: 'Formal Complaints',
    link: '/evidence/casino-guru',
    color: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20',
    highlights: [
      '85% unresolved complaint rate',
      '$45K+ in disputed funds',
      'KYC manipulation tactics',
      'Zero favorable resolutions'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain Evidence',
    description: 'On-chain proof of $25M+ theft from FTX victims',
    icon: <Database className="h-8 w-8 text-blue-500" />,
    count: '5',
    type: 'Transaction Records',
    link: '/noah-dummett#blockchain-evidence',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
    highlights: [
      'Direct connections to FTX hack addresses',
      'Noah Dummett wallet interactions',
      'Shuffle casino hotwallet links',
      'Systematic fund laundering evidence'
    ]
  }
];

const downloadableArchives = [
  {
    name: 'Legal Documentation Package',
    description: 'Complete legal documentation including IRS whistleblower reports and pleadings',
    filename: 'legal-documentation-index.md',
    size: '28 KB',
    type: 'Legal Index',
    includes: ['IRS Form 211', 'Legal pleadings', 'Demand letters', 'Chain analysis']
  },
  {
    name: 'Investigation Synopsis',
    description: 'Comprehensive investigation report with multi-platform evidence compilation',
    filename: 'Shuffle Synapsis (2).pdf',
    size: '4.2 MB',
    type: 'PDF Report',
    includes: ['Evidence compilation', 'Expert analysis', 'Timeline of events', 'Supporting documentation']
  },
  {
    name: 'Blockchain Chain Data',
    description: 'Comprehensive blockchain analysis documenting transaction flows and wallet connections',
    filename: 'Shuffle-Chain-Data.pdf',
    size: '3.4 MB',
    type: 'PDF Report',
    includes: ['Transaction analysis', 'Wallet connections', 'Fund flow mapping', '$25M+ theft documentation']
  }
];

const keyStatistics = [
  {
    value: '150+',
    label: 'Total Evidence Sources',
    description: 'Across all platforms and categories',
    color: 'text-red-400'
  },
  {
    value: '5',
    label: 'Evidence Categories',
    description: 'Trustpilot, Reddit, Casino Guru, Blockchain, Legal',
    color: 'text-orange-400'
  },
  {
    value: '$25M+',
    label: 'Documented Theft',
    description: 'Blockchain-verified stolen funds',
    color: 'text-yellow-400'
  },
  {
    value: '100%',
    label: 'Verifiable Sources',
    description: 'All evidence independently verifiable',
    color: 'text-green-400'
  }
];

export const EvidenceOverviewPage: React.FC = () => {
  return (
    <PageLayout
      title="Evidence Overview - Complete Shuffle.com Investigation Archive"
      description="Comprehensive overview of all evidence categories documenting Shuffle.com scam allegations and Noah Dummett investigation"
    >
      {/* Hero Section */}
      <SectionLayout
        title="🔍 Complete Evidence Archive"
        description="Comprehensive documentation of Shuffle.com scam allegations across multiple platforms"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyStatistics.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Evidence Categories */}
      <SectionLayout
        title="📂 Evidence Categories"
        description="Explore evidence by platform and type"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {evidenceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${category.color} h-full hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                          {category.type}
                        </span>
                        <span className="text-sm font-medium text-blue-400">
                          {category.count} sources
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-medium text-foreground">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {category.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary font-bold text-xs mt-1">•</span>
                          <span className="text-xs text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={category.link}>
                    <Button
                      variant="outline"
                      size="sm"
                      rightIcon={<ExternalLink className="h-4 w-4" />}
                      className="w-full"
                    >
                      View {category.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Download Archives */}
      <SectionLayout
        title="📥 Download Complete Archives"
        description="Access comprehensive evidence packages and reports"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadableArchives.map((archive, index) => (
            <motion.div
              key={archive.filename}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {archive.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                          {archive.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {archive.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {archive.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {archive.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary font-bold text-xs mt-1">•</span>
                          <span className="text-xs text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/downloads/${archive.filename}`, '_blank')}
                    leftIcon={<Download className="h-4 w-4" />}
                    className="w-full"
                  >
                    Download Archive
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Comprehensive Evidence Component */}
      <SectionLayout
        title="🗂️ Complete Evidence Database"
        description="Interactive database of all evidence sources"
      >
        <ComprehensiveEvidence />
      </SectionLayout>
    </PageLayout>
  );
};

export default EvidenceOverviewPage;
