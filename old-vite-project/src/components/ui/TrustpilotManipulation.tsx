import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle, TrendingUp, Bot, Calendar, Users, Eye } from 'lucide-react';
import { Card, CardHeader, CardContent } from './Card';

interface ManipulationEvidence {
  id: string;
  type: 'timing' | 'content' | 'response' | 'pattern';
  title: string;
  description: string;
  evidence: string[];
  severity: 'high' | 'medium' | 'low';
}

const manipulationEvidence: ManipulationEvidence[] = [
  {
    id: 'recent-positive-surge',
    type: 'timing',
    title: 'Suspicious Timing of Positive Reviews',
    description: 'Massive surge of 5-star reviews in May-June 2025, coinciding with increased scam allegations',
    evidence: [
      'May 19-30, 2025: 15+ five-star reviews in 11 days',
      'June 5-18, 2025: 8+ five-star reviews in 13 days', 
      'All positive reviews have immediate Shuffle company responses',
      'Timing correlates with peak negative review period'
    ],
    severity: 'high'
  },
  {
    id: 'generic-content',
    type: 'content',
    title: 'Generic and Repetitive Positive Content',
    description: 'Positive reviews use similar language patterns and focus on identical talking points',
    evidence: [
      '"Great platform" - repeated in multiple reviews',
      '"Instant withdrawals" - contradicts 100+ withdrawal complaints',
      '"Great community" and "lottery" mentioned repeatedly',
      'Extremely short, non-specific praise',
      'No detailed gameplay experiences in positive reviews'
    ],
    severity: 'high'
  },
  {
    id: 'automated-responses',
    type: 'response',
    title: 'Automated Company Response Pattern',
    description: 'Shuffle responds to ALL positive reviews with identical generic messages',
    evidence: [
      '"Thanks for the great review!" - used 10+ times',
      '"Thank you so much!" - repeated response',
      'Responses posted in batches on same dates (June 9, June 19)',
      'No personalized responses to specific positive feedback',
      'Immediate responses to positive reviews vs delayed/no response to negatives'
    ],
    severity: 'medium'
  },
  {
    id: 'account-patterns',
    type: 'pattern',
    title: 'Suspicious Account Characteristics',
    description: 'Positive reviewers show patterns consistent with fake/incentivized accounts',
    evidence: [
      'Many accounts with only 1-3 total reviews',
      'Accounts from diverse countries (US, NO, NZ, BR, HU, GU)',
      'Some accounts created recently but reviewing immediately',
      'PAKWALLET: 7 reviews, all positive, mentions "$5 for positive review"',
      'Kgb: 29 reviews, multiple positive Shuffle reviews'
    ],
    severity: 'high'
  },
  {
    id: 'contradiction-evidence',
    type: 'content',
    title: 'Direct Contradictions to Documented Issues',
    description: 'Positive reviews claim features that contradict extensive negative evidence',
    evidence: [
      'Claims of "instant withdrawals" vs 100+ withdrawal delay complaints',
      'Praise for "great support" vs documented unresponsive AI bots',
      'Claims of "transparency" vs anonymous leadership structure',
      'Positive RTP claims vs rigged game allegations',
      'No mention of KYC issues despite widespread complaints'
    ],
    severity: 'high'
  },
  {
    id: 'review-removal',
    type: 'pattern',
    title: 'Systematic Negative Review Suppression',
    description: 'Evidence of attempts to remove or suppress negative reviews',
    evidence: [
      'LagToScam: "shuffle.com again falsly reported my reviews systematically"',
      'Mystical Myth: "why trust pilot removes reviews?"',
      'Claims of false reporting to make platform "appear more legit"',
      'Pattern of negative reviewers mentioning review removal attempts',
      'Trustpilot shows "Replied to 84% of negative reviews" but many show no replies'
    ],
    severity: 'high'
  }
];

const severityColors = {
  high: 'from-red-500/10 to-red-600/10 border-red-500/20 text-red-400',
  medium: 'from-orange-500/10 to-orange-600/10 border-orange-500/20 text-orange-400',
  low: 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/20 text-yellow-400'
};

const typeIcons = {
  timing: <Calendar className="h-5 w-5" />,
  content: <Bot className="h-5 w-5" />,
  response: <Users className="h-5 w-5" />,
  pattern: <Eye className="h-5 w-5" />
};

export const TrustpilotManipulation: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEvidence = selectedType === 'all' 
    ? manipulationEvidence 
    : manipulationEvidence.filter(item => item.type === selectedType);

  const typeCounts = manipulationEvidence.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Bot className="h-8 w-8 text-red-500" />
          <h3 className="text-2xl font-bold text-foreground">Trustpilot Platform Manipulation Analysis</h3>
          <Bot className="h-8 w-8 text-red-500" />
        </div>
        <p className="text-muted-foreground mb-6">
          Comprehensive analysis revealing systematic manipulation of Trustpilot reviews and ratings
        </p>
        
        {/* Key Stats */}
        <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">37%</div>
                <div className="text-sm text-muted-foreground">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">53%</div>
                <div className="text-sm text-muted-foreground">1-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">May-June</div>
                <div className="text-sm text-muted-foreground">Positive Surge</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">6</div>
                <div className="text-sm text-muted-foreground">Manipulation Types</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedType === 'all'
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All Evidence ({manipulationEvidence.length})
        </button>
        {Object.entries(typeCounts).map(([type, count]) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
              selectedType === type
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {type} ({count})
          </button>
        ))}
      </div>

      {/* Evidence Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredEvidence.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className={`bg-gradient-to-br ${severityColors[item.severity]}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {typeIcons[item.type]}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full capitalize">
                          {item.type}
                        </span>
                        <span className={`text-xs ${severityColors[item.severity].split(' ')[3]} bg-current/10 px-2 py-1 rounded-full capitalize`}>
                          {item.severity} severity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Evidence:</h5>
                  <ul className="space-y-2">
                    {item.evidence.map((evidence, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2"></span>
                        <span>{evidence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Analysis Summary */}
      <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Platform Manipulation Conclusion</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Coordinated Campaign:</strong> Evidence shows systematic manipulation of Trustpilot reviews through timing, content patterns, and automated responses.
                </p>
                <p>
                  <strong className="text-foreground">Fake Positive Reviews:</strong> Surge of generic 5-star reviews in May-June 2025 using repetitive language and contradicting documented issues.
                </p>
                <p>
                  <strong className="text-foreground">Review Suppression:</strong> Multiple reports of attempts to remove negative reviews through false reporting to Trustpilot.
                </p>
                <p>
                  <strong className="text-foreground">Automated Responses:</strong> Company responses to positive reviews are clearly automated with identical generic messages posted in batches.
                </p>
                <p>
                  <strong className="text-foreground">Contradictory Claims:</strong> Positive reviews claim "instant withdrawals" and "great support" while 100+ negative reviews document the opposite.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://ca.trustpilot.com/review/shuffle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-medium"
                >
                  <span>Verify Analysis on Trustpilot</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specific Examples */}
      <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20">
        <CardContent className="p-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            <span>Documented Manipulation Examples</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-medium text-foreground mb-2">Suspicious Positive Reviews:</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>• "Great platform" (repeated 5+ times)</li>
                <li>• "Instant withdrawals" (contradicts evidence)</li>
                <li>• "Great community" (generic praise)</li>
                <li>• All receive identical company responses</li>
                <li>• Posted during peak negative review period</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">Review Suppression Evidence:</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>• "falsly reported my reviews systematically"</li>
                <li>• "why trust pilot removes reviews?"</li>
                <li>• "to make it appear they are more legit"</li>
                <li>• Multiple users report removal attempts</li>
                <li>• Pattern of negative review suppression</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrustpilotManipulation;
