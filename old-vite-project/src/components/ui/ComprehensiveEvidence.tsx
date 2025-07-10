import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle, Star, Users, MessageSquare, Scale, Search } from 'lucide-react';
import { Card, CardHeader, CardContent } from './Card';

interface EvidenceSource {
  id: string;
  platform: 'trustpilot' | 'bitcointalk' | 'twitter' | 'reddit' | 'casinoguru';
  title: string;
  description: string;
  url: string;
  count?: number;
  status?: 'active' | 'banned' | 'resolved' | 'ongoing';
}

const evidenceSources: EvidenceSource[] = [
  // Trustpilot Reviews (100+ sources)
  {
    id: 'trustpilot-main',
    platform: 'trustpilot',
    title: 'Trustpilot Scam & Withdrawal Search',
    description: 'Main Trustpilot page filtered for 1-star scam and withdrawal complaints',
    url: 'https://ca.trustpilot.com/review/shuffle.com?search=scam+withdraw&stars=1',
    count: 100,
    status: 'active'
  },
  {
    id: 'trustpilot-reviews',
    platform: 'trustpilot',
    title: 'Individual Trustpilot Reviews',
    description: '100+ verified customer complaints about withdrawal issues, scams, and rigged games',
    url: 'https://ca.trustpilot.com/reviews/68605c9e37a3606c4270c8a0',
    count: 100,
    status: 'active'
  },
  
  // BitcoinTalk Forums
  {
    id: 'bitcointalk-1',
    platform: 'bitcointalk',
    title: 'BitcoinTalk Investigation Thread #1',
    description: 'Community investigation into Shuffle.com practices and allegations',
    url: 'https://bitcointalk.org/index.php?topic=5505158',
    status: 'active'
  },
  {
    id: 'bitcointalk-2',
    platform: 'bitcointalk',
    title: 'BitcoinTalk Investigation Thread #2',
    description: 'Additional community discussion and evidence compilation',
    url: 'https://bitcointalk.org/index.php?topic=5514137',
    status: 'active'
  },
  {
    id: 'bitcointalk-3',
    platform: 'bitcointalk',
    title: 'BitcoinTalk Investigation Thread #3',
    description: 'Further community analysis and documentation',
    url: 'https://bitcointalk.org/index.php?topic=5507469',
    status: 'active'
  },

  // X.com (Twitter) Posts
  {
    id: 'twitter-1',
    platform: 'twitter',
    title: 'X.com Investigation Posts',
    description: 'Multiple X.com posts exposing Shuffle.com issues and scam allegations',
    url: 'https://x.com/spadeallin/status/1848396994869375393',
    count: 10,
    status: 'active'
  },

  // Reddit Community
  {
    id: 'reddit-banned',
    platform: 'reddit',
    title: 'r/ShufflecomCasino - BANNED',
    description: 'Reddit community banned for violating rules against prohibited goods/services',
    url: 'https://www.reddit.com/r/ShufflecomCasino/',
    status: 'banned'
  },

  // Casino Guru Complaints
  {
    id: 'casinoguru-main',
    platform: 'casinoguru',
    title: 'Casino Guru Complaints',
    description: '12+ formal complaints filed against Shuffle.com for withdrawal delays and account issues',
    url: 'https://casino.guru/shuffle-casino-player-s-withdrawal-is-delayed-due-1',
    count: 12,
    status: 'ongoing'
  }
];

const platformIcons = {
  trustpilot: <Star className="h-5 w-5 text-green-500" />,
  bitcointalk: <MessageSquare className="h-5 w-5 text-yellow-500" />,
  twitter: <MessageSquare className="h-5 w-5 text-blue-500" />,
  reddit: <Users className="h-5 w-5 text-orange-500" />,
  casinoguru: <Scale className="h-5 w-5 text-purple-500" />
};

const platformColors = {
  trustpilot: 'from-green-500/10 to-emerald-500/10 border-green-500/20',
  bitcointalk: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20',
  twitter: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  reddit: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
  casinoguru: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20'
};

const statusColors = {
  active: 'text-green-400',
  banned: 'text-red-400',
  resolved: 'text-blue-400',
  ongoing: 'text-yellow-400'
};

export const ComprehensiveEvidence: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  const filteredSources = selectedPlatform === 'all' 
    ? evidenceSources 
    : evidenceSources.filter(source => source.platform === selectedPlatform);

  const platformCounts = evidenceSources.reduce((acc, source) => {
    acc[source.platform] = (acc[source.platform] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalEvidence = evidenceSources.reduce((total, source) => total + (source.count || 1), 0);

  return (
    <div className="space-y-8">
      {/* Header with Stats */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Search className="h-8 w-8 text-red-500" />
          <h3 className="text-2xl font-bold text-foreground">Comprehensive Evidence Database</h3>
          <Search className="h-8 w-8 text-red-500" />
        </div>
        <p className="text-muted-foreground mb-6">
          Complete collection of evidence sources documenting Shuffle.com scam allegations and withdrawal issues
        </p>
        
        {/* Overall Stats */}
        <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{totalEvidence}+</div>
                <div className="text-sm text-muted-foreground">Total Evidence Sources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">5</div>
                <div className="text-sm text-muted-foreground">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-muted-foreground">Trustpilot Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">1</div>
                <div className="text-sm text-muted-foreground">Banned Community</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedPlatform('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedPlatform === 'all'
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All Sources ({evidenceSources.length})
        </button>
        {Object.entries(platformCounts).map(([platform, count]) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
              selectedPlatform === platform
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {platform} ({count})
          </button>
        ))}
      </div>

      {/* Evidence Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSources.map((source, index) => (
          <motion.div
            key={source.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className={`bg-gradient-to-br ${platformColors[source.platform]} h-full`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {platformIcons[source.platform]}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {source.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full capitalize">
                          {source.platform}
                        </span>
                        {source.count && (
                          <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                            {source.count}+ sources
                          </span>
                        )}
                        {source.status && (
                          <span className={`text-xs ${statusColors[source.status]} bg-current/10 px-2 py-1 rounded-full capitalize`}>
                            {source.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {source.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Verified Evidence Source
                  </span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-xs"
                  >
                    <span>View Evidence</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Detailed Source Lists */}
      <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Complete Evidence Archive</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Trustpilot Reviews:</strong> 100+ individual customer complaints with withdrawal issues, scam allegations, and rigged game reports
                </p>
                <p>
                  <strong className="text-foreground">BitcoinTalk Forums:</strong> 3 active investigation threads with community analysis and evidence compilation
                </p>
                <p>
                  <strong className="text-foreground">X.com Posts:</strong> 10+ social media posts exposing Shuffle.com issues and match-fixing allegations
                </p>
                <p>
                  <strong className="text-foreground">Reddit Community:</strong> r/ShufflecomCasino banned for violating platform rules against prohibited services
                </p>
                <p>
                  <strong className="text-foreground">Casino Guru:</strong> 12+ formal complaints filed for withdrawal delays, account closures, and KYC issues
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">
                  All sources are publicly accessible and independently verifiable. This represents one of the most comprehensive 
                  collections of evidence against a crypto gambling platform in recent history.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveEvidence;
