import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ExternalLink, 
  AlertTriangle, 
  Bot,
  Star,
  Users,
  Scale,
  Eye,
  Shield
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { TrustpilotManipulation } from '@/components/ui/TrustpilotManipulation';

const manipulationCategories = [
  {
    id: 'trustpilot',
    title: 'Trustpilot Review Manipulation',
    description: 'Systematic fake review campaigns and negative review suppression',
    icon: <Star className="h-8 w-8 text-green-500" />,
    severity: 'Critical',
    evidence: '6 manipulation types documented',
    link: '/evidence/trustpilot',
    color: 'from-green-500/10 to-emerald-500/10 border-green-500/20',
    tactics: [
      'Coordinated positive review campaigns',
      'Generic repetitive content patterns',
      'Automated company response systems',
      'Systematic negative review suppression'
    ]
  },
  {
    id: 'reddit',
    title: 'Reddit Community Manipulation',
    description: 'Platform rule violations leading to community ban',
    icon: <Users className="h-8 w-8 text-orange-500" />,
    severity: 'High',
    evidence: 'Community banned by Reddit',
    link: '/evidence/reddit',
    color: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
    tactics: [
      'Promotion of prohibited gambling services',
      'Violation of community guidelines',
      'Suppression of legitimate complaints',
      'Astroturfing and fake engagement'
    ]
  },
  {
    id: 'casinoguru',
    title: 'Dispute Resolution Avoidance',
    description: 'Systematic avoidance of formal complaint resolution',
    icon: <Scale className="h-8 w-8 text-purple-500" />,
    severity: 'Critical',
    evidence: '0% resolution rate',
    link: '/evidence/casino-guru',
    color: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20',
    tactics: [
      'Complete non-cooperation with mediators',
      'Refusal to respond to formal complaints',
      'Systematic avoidance of dispute resolution',
      'False claims and unsubstantiated allegations'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Manipulation',
    description: 'Coordinated campaigns across multiple platforms',
    icon: <Bot className="h-8 w-8 text-blue-500" />,
    severity: 'High',
    evidence: 'Cross-platform coordination',
    link: '/evidence',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
    tactics: [
      'Coordinated positive messaging campaigns',
      'Suppression of negative content',
      'Fake account networks',
      'Astroturfing operations'
    ]
  }
];

const keyStatistics = [
  {
    value: '4',
    label: 'Platforms Manipulated',
    description: 'Trustpilot, Reddit, Casino Guru, Social Media',
    color: 'text-red-400'
  },
  {
    value: '6',
    label: 'Manipulation Types',
    description: 'Documented manipulation tactics',
    color: 'text-orange-400'
  },
  {
    value: '0%',
    label: 'Resolution Rate',
    description: 'Formal complaints resolved favorably',
    color: 'text-red-400'
  },
  {
    value: '100%',
    label: 'Avoidance Rate',
    description: 'Dispute resolution avoidance',
    color: 'text-red-400'
  }
];

const downloadableFiles = [
  {
    name: 'Trustpilot Manipulation Analysis',
    description: 'Comprehensive analysis of Trustpilot review manipulation tactics',
    filename: 'trustpilot-analysis.md',
    size: '45 KB',
    type: 'Markdown Report'
  },
  {
    name: 'Reddit Ban Documentation',
    description: 'Detailed documentation of Reddit community ban and policy violations',
    filename: 'reddit-ban-documentation.md',
    size: '38 KB',
    type: 'Markdown Report'
  },
  {
    name: 'Evidence Archive Index',
    description: 'Complete index of all evidence files and cross-platform coordination analysis',
    filename: 'evidence-archive-index.md',
    size: '52 KB',
    type: 'Markdown Index'
  }
];

export const PlatformManipulationPage: React.FC = () => {
  return (
    <PageLayout
      title="Platform Manipulation - Shuffle.com Systematic Deception"
      description="Comprehensive documentation of systematic platform manipulation tactics used by Shuffle.com across multiple review and complaint platforms"
    >
      {/* Hero Section */}
      <SectionLayout
        title="🎭 Platform Manipulation Analysis"
        description="Systematic deception and manipulation tactics across multiple platforms"
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

      {/* Manipulation Categories */}
      <SectionLayout
        title="📂 Manipulation Categories"
        description="Platform-specific manipulation tactics and evidence"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manipulationCategories.map((category, index) => (
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
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          category.severity === 'Critical' 
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-orange-500/20 text-orange-400'
                        }`}>
                          {category.severity}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {category.evidence}
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
                    <h4 className="text-sm font-medium text-foreground">Key Tactics:</h4>
                    <ul className="space-y-1">
                      {category.tactics.map((tactic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary font-bold text-xs mt-1">•</span>
                          <span className="text-xs text-muted-foreground">{tactic}</span>
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
                      View Evidence
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Download Section */}
      <SectionLayout
        title="📥 Download Manipulation Evidence"
        description="Access comprehensive reports documenting platform manipulation tactics"
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

      {/* Trustpilot Manipulation Component */}
      <SectionLayout
        title="🌟 Trustpilot Manipulation Analysis"
        description="Detailed analysis of systematic Trustpilot review manipulation"
      >
        <TrustpilotManipulation />
      </SectionLayout>

      {/* Impact Analysis */}
      <SectionLayout
        title="📊 Manipulation Impact Analysis"
        description="Understanding the scope and impact of platform manipulation"
      >
        <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Platform Manipulation Impact</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Consumer Deception:</strong> Systematic manipulation of review platforms misleads potential users about platform safety and reliability
                  </p>
                  <p>
                    <strong className="text-foreground">Platform Integrity:</strong> Undermines the integrity of review and complaint platforms, affecting their ability to protect consumers
                  </p>
                  <p>
                    <strong className="text-foreground">Regulatory Evasion:</strong> Manipulation tactics help evade regulatory scrutiny and accountability measures
                  </p>
                  <p>
                    <strong className="text-foreground">User Harm:</strong> Prevents legitimate warnings from reaching potential victims, enabling continued harm
                  </p>
                  <p>
                    <strong className="text-foreground">Industry Impact:</strong> Sets dangerous precedent for other operators to engage in similar deceptive practices
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-blue-500" />
                      <span>Platform Responses</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Reddit: Banned r/ShufflecomCasino community</li>
                      <li>• Trustpilot: Limited response to manipulation</li>
                      <li>• Casino Guru: Documented non-cooperation</li>
                      <li>• Social Media: Ongoing manipulation campaigns</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-orange-500" />
                      <span>Detection Methods</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Timing pattern analysis</li>
                      <li>• Content similarity detection</li>
                      <li>• Account behavior analysis</li>
                      <li>• Cross-platform coordination tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionLayout>
    </PageLayout>
  );
};

export default PlatformManipulationPage;
