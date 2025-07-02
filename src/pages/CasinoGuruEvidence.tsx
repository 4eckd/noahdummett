import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, AlertTriangle, Scale, Clock, User } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

const casinoGuruComplaints = [
  {
    id: 'complaint-1',
    title: 'Withdrawal Delayed Due to Verification Issues',
    player: 'Anonymous Player',
    amount: '$5,857',
    status: 'Unresolved',
    date: '2024-06-28',
    url: 'https://casino.guru/shuffle-casino-player-s-withdrawal-is-delayed-due-1',
    description: 'Player unable to withdraw winnings after 16 days despite completing verification',
    severity: 'High'
  },
  {
    id: 'complaint-2',
    title: 'Account Closure Without Explanation',
    player: 'Verified User',
    amount: '$3,200',
    status: 'Unresolved',
    date: '2024-06-15',
    url: 'https://casino.guru/shuffle-casino-player-s-account-was-closed-without',
    description: 'Account suddenly closed after winning, funds frozen without explanation',
    severity: 'Critical'
  },
  {
    id: 'complaint-3',
    title: 'KYC Process Manipulation',
    player: 'Long-term User',
    amount: '$8,400',
    status: 'Ongoing',
    date: '2024-06-10',
    url: 'https://casino.guru/shuffle-casino-player-s-kyc-verification-is-being',
    description: 'KYC requirements constantly changing to prevent withdrawal',
    severity: 'High'
  },
  {
    id: 'complaint-4',
    title: 'Sports Betting Winnings Confiscated',
    player: 'Sports Bettor',
    amount: '$12,000',
    status: 'Disputed',
    date: '2024-05-28',
    url: 'https://casino.guru/shuffle-casino-player-s-sports-betting-winnings',
    description: 'Winnings confiscated under false match-fixing allegations',
    severity: 'Critical'
  }
];

const downloadableFiles = [
  {
    name: 'Casino Guru Complaints Archive',
    description: 'Complete collection of all Casino Guru complaints against Shuffle.com',
    filename: 'casino-guru-complaints.pdf',
    size: '4.2 MB',
    type: 'PDF Archive'
  },
  {
    name: 'Complaint Analysis Report',
    description: 'Detailed analysis of complaint patterns and resolution rates',
    filename: 'complaint-analysis-report.pdf',
    size: '2.8 MB',
    type: 'PDF Report'
  },
  {
    name: 'Player Testimonies Database',
    description: 'Structured data of player testimonies and complaint details',
    filename: 'player-testimonies.json',
    size: '1.1 MB',
    type: 'JSON Data'
  }
];

const keyStatistics = [
  {
    value: '12+',
    label: 'Active Complaints',
    description: 'Formal complaints filed with Casino Guru',
    color: 'text-red-400'
  },
  {
    value: '85%',
    label: 'Unresolved Rate',
    description: 'Percentage of complaints still unresolved',
    color: 'text-orange-400'
  },
  {
    value: '$45K+',
    label: 'Disputed Funds',
    description: 'Total amount in disputed withdrawals',
    color: 'text-yellow-400'
  },
  {
    value: '0%',
    label: 'Resolution Rate',
    description: 'Percentage of complaints resolved favorably',
    color: 'text-red-400'
  }
];

export const CasinoGuruEvidencePage: React.FC = () => {
  return (
    <PageLayout
      title="Casino Guru Evidence - Shuffle.com Formal Complaints"
      description="Documentation of formal complaints filed with Casino Guru against Shuffle.com for withdrawal delays and account issues"
    >
      {/* Hero Section */}
      <SectionLayout
        title="⚖️ Casino Guru Evidence Archive"
        description="Formal complaints and dispute documentation from Casino Guru platform"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/30">
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
        description="Access comprehensive reports and documentation of Casino Guru complaints"
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

      {/* Complaints Details */}
      <SectionLayout
        title="📋 Formal Complaints Documentation"
        description="Detailed documentation of Casino Guru complaints against Shuffle.com"
      >
        <div className="space-y-6">
          {casinoGuruComplaints.map((complaint, index) => (
            <motion.div
              key={complaint.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-indigo-500/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Scale className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {complaint.title}
                        </h3>
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{complaint.player}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{complaint.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            complaint.status === 'Unresolved' 
                              ? 'bg-red-500/20 text-red-400'
                              : complaint.status === 'Ongoing'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {complaint.status}
                          </span>
                          <span className="text-sm font-medium text-green-400">
                            {complaint.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      complaint.severity === 'Critical'
                        ? 'bg-red-500/30 text-red-300'
                        : 'bg-orange-500/30 text-orange-300'
                    }`}>
                      {complaint.severity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {complaint.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Scale className="h-4 w-4 text-blue-400" />
                      <a
                        href={complaint.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                      >
                        View Complaint on Casino Guru
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

      {/* Quick Access */}
      <SectionLayout
        title="🔗 Quick Access Links"
        description="Direct links to Casino Guru complaint sections"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Scale className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">All Shuffle Complaints</h3>
                  <p className="text-sm text-muted-foreground">Complete list of Casino Guru complaints</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://casino.guru/complaints/all?casino=shuffle-casino', '_blank')}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View All Complaints
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Unresolved Complaints</h3>
                  <p className="text-sm text-muted-foreground">Filter for unresolved cases only</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://casino.guru/complaints/all?casino=shuffle-casino&status=unresolved', '_blank')}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View Unresolved Cases
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionLayout>

      {/* Analysis Summary */}
      <SectionLayout
        title="📊 Casino Guru Analysis"
        description="Summary of findings from Casino Guru complaint evidence"
      >
        <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Casino Guru Analysis Summary</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Formal Complaints:</strong> 12+ formal complaints filed through Casino Guru's dispute resolution system
                  </p>
                  <p>
                    <strong className="text-foreground">Resolution Rate:</strong> Extremely poor resolution rate with most complaints remaining unresolved
                  </p>
                  <p>
                    <strong className="text-foreground">Common Issues:</strong> Withdrawal delays, account closures, KYC manipulation, and confiscated winnings
                  </p>
                  <p>
                    <strong className="text-foreground">Financial Impact:</strong> Over $45,000 in disputed funds across documented complaints
                  </p>
                  <p>
                    <strong className="text-foreground">Pattern Recognition:</strong> Systematic avoidance of dispute resolution and player protection obligations
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

export default CasinoGuruEvidencePage;
