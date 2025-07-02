import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, AlertTriangle, Users, Ban, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

const redditEvidence = [
  {
    id: 'banned-community',
    title: 'r/ShufflecomCasino - BANNED COMMUNITY',
    description: 'The official Shuffle.com Reddit community was banned for violating platform rules against prohibited goods and services',
    url: 'https://www.reddit.com/r/ShufflecomCasino/',
    status: 'BANNED',
    severity: 'Critical',
    date: '2024',
    details: 'Reddit banned the community for promoting illegal gambling services and violating terms of service'
  },
  {
    id: 'scam-reports',
    title: 'Multiple Scam Reports Across Reddit',
    description: 'Various Reddit posts and comments documenting withdrawal issues and scam allegations',
    url: 'https://www.reddit.com/search/?q=shuffle.com%20scam',
    status: 'Active',
    severity: 'High',
    date: 'Ongoing',
    details: 'Users across multiple subreddits reporting similar issues with withdrawals and customer service'
  },
  {
    id: 'gambling-addiction',
    title: 'Gambling Addiction Support Issues',
    description: 'Reports of inappropriate handling of users seeking help for gambling addiction',
    url: 'https://www.reddit.com/r/problemgambling/search/?q=shuffle',
    status: 'Documented',
    severity: 'Critical',
    date: 'Multiple instances',
    details: 'Users report being mocked or ignored when seeking help for gambling addiction'
  }
];

const downloadableFiles = [
  {
    name: 'Reddit Community Ban Documentation',
    description: 'Complete documentation of the r/ShufflecomCasino ban and reasons',
    filename: 'reddit-ban-documentation.md',
    size: '38 KB',
    type: 'Markdown Report'
  },
  {
    name: 'Investigation Summary',
    description: 'Complete investigation summary with all findings and evidence',
    filename: 'investigation-summary.md',
    size: '28 KB',
    type: 'Markdown Report'
  },
  {
    name: 'Evidence Archive Index',
    description: 'Complete index of all evidence files and sources with navigation guide',
    filename: 'evidence-archive-index.md',
    size: '52 KB',
    type: 'Markdown Index'
  }
];

const keyStatistics = [
  {
    value: '1',
    label: 'Banned Community',
    description: 'r/ShufflecomCasino banned by Reddit',
    color: 'text-red-400'
  },
  {
    value: '50+',
    label: 'Scam Reports',
    description: 'Individual posts reporting issues',
    color: 'text-orange-400'
  },
  {
    value: '10+',
    label: 'Subreddits',
    description: 'Communities with Shuffle complaints',
    color: 'text-yellow-400'
  },
  {
    value: '100+',
    label: 'User Comments',
    description: 'Comments documenting problems',
    color: 'text-red-400'
  }
];

export const RedditEvidencePage: React.FC = () => {
  return (
    <PageLayout
      title="Reddit Evidence - Shuffle.com Community Ban & Scam Reports"
      description="Documentation of Reddit community ban and widespread scam reports across multiple subreddits"
    >
      {/* Hero Section */}
      <SectionLayout
        title="🚫 Reddit Evidence Archive"
        description="Community ban documentation and scam reports from Reddit users"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
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

      {/* Download Section */}
      <SectionLayout
        title="📥 Download Evidence Files"
        description="Access comprehensive reports and documentation of Reddit evidence"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadableFiles.map((file, index) => (
            <motion.div
              key={file.filename}
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
                        {file.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                          {file.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {file.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {file.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/downloads/${file.filename}`, '_blank')}
                    leftIcon={<Download className="h-4 w-4" />}
                    className="w-full"
                  >
                    Download File
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Evidence Details */}
      <SectionLayout
        title="📋 Reddit Evidence Details"
        description="Detailed documentation of Reddit-based evidence against Shuffle.com"
      >
        <div className="space-y-6">
          {redditEvidence.map((evidence, index) => (
            <motion.div
              key={evidence.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`border-red-500/20 ${
                evidence.status === 'BANNED' 
                  ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                  : 'bg-gradient-to-br from-orange-500/5 to-red-500/5'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        {evidence.status === 'BANNED' ? (
                          <Ban className="h-6 w-6 text-red-400" />
                        ) : evidence.id === 'gambling-addiction' ? (
                          <AlertTriangle className="h-6 w-6 text-red-400" />
                        ) : (
                          <MessageSquare className="h-6 w-6 text-orange-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {evidence.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            evidence.status === 'BANNED' 
                              ? 'bg-red-500/20 text-red-400'
                              : evidence.severity === 'Critical'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {evidence.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {evidence.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      evidence.severity === 'Critical'
                        ? 'bg-red-500/30 text-red-300'
                        : 'bg-orange-500/30 text-orange-300'
                    }`}>
                      {evidence.severity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {evidence.description}
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 border border-gray-700">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Details:</strong> {evidence.details}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      <a
                        href={evidence.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                      >
                        View on Reddit
                      </a>
                      <ExternalLink className="h-3 w-3 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Analysis Summary */}
      <SectionLayout
        title="📊 Reddit Evidence Analysis"
        description="Summary of findings from Reddit community evidence"
      >
        <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Reddit Analysis Summary</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Community Ban:</strong> Reddit banned r/ShufflecomCasino for violating platform rules against prohibited gambling services
                  </p>
                  <p>
                    <strong className="text-foreground">Widespread Reports:</strong> Scam allegations appear across multiple subreddits including r/problemgambling, r/gambling, and others
                  </p>
                  <p>
                    <strong className="text-foreground">Pattern Recognition:</strong> Consistent reports of withdrawal issues, customer service problems, and inappropriate handling of addiction cases
                  </p>
                  <p>
                    <strong className="text-foreground">Platform Action:</strong> Reddit's ban indicates serious violations of terms of service and community guidelines
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionLayout>
    </PageLayout>
  );
};

export default RedditEvidencePage;
