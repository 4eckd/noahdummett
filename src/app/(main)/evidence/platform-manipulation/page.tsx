import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform Manipulation - Evidence',
  description: 'Evidence of systematic platform manipulation and artificial engagement patterns.',
};

export default function PlatformManipulationPage() {
  const manipulationStats = [
    { label: 'Fake Reviews Detected', value: '200+', icon: Users },
    { label: 'Sock Puppet Accounts', value: '45', icon: Shield },
    { label: 'Artificial Engagement', value: '67%', icon: TrendingUp },
    { label: 'Platform Violations', value: '12', icon: AlertTriangle },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium uppercase tracking-wider border border-red-500/30">
              MANIPULATION EVIDENCE
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Platform Manipulation</h1>
          <p className="text-xl text-muted-foreground">
            Evidence of coordinated efforts to manipulate online reputation through fake reviews, 
            sock puppet accounts, and artificial engagement across multiple platforms.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {manipulationStats.map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Evidence Categories */}
        <div className="space-y-8 mb-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Reddit Manipulation</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Account Creation Pattern</h3>
                <p className="text-muted-foreground">
                  Analysis reveals coordinated creation of Reddit accounts following specific naming 
                  patterns, all created within the same timeframe and exclusively posting positive 
                  Shuffle.com content.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Vote Manipulation</h3>
                <p className="text-muted-foreground">
                  Suspicious voting patterns where critical posts receive immediate downvotes 
                  from accounts with minimal activity history.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Review Platform Manipulation</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Fake Positive Reviews</h3>
                <p className="text-muted-foreground">
                  Identified clusters of 5-star reviews posted within minutes of each other, 
                  using similar language patterns and reviewer profiles with limited history.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Review Timing Coordination</h3>
                <p className="text-muted-foreground">
                  Artificial review waves timed to counteract negative publicity, 
                  particularly following customer complaints or investigation developments.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Social Media Campaigns</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Coordinated Harassment</h3>
                <p className="text-muted-foreground">
                  Evidence of coordinated campaigns to silence critics through mass reporting 
                  and harassment across Twitter, Reddit, and Discord platforms.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Astroturfing Operations</h3>
                <p className="text-muted-foreground">
                  Fake grassroots campaigns promoting Shuffle.com while attacking competitors 
                  and whistleblowers using scripted talking points.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Evidence */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Technical Analysis</h2>
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Digital Fingerprinting</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• IP address clustering from same geographic regions</li>
              <li>• Browser fingerprint similarities across &ldquo;different&rdquo; accounts</li>
              <li>• Timing patterns consistent with automated posting</li>
              <li>• Language analysis revealing copy-paste content strategies</li>
            </ul>
          </div>
          
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Platform Violations</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Reddit Terms of Service: Vote manipulation, ban evasion</li>
              <li>• Trustpilot Guidelines: Fake reviews, incentivized feedback</li>
              <li>• Twitter Rules: Coordinated inauthentic behavior</li>
              <li>• Discord ToS: Harassment campaigns, doxxing attempts</li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Manipulation Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>
              <div>
                <div className="font-semibold">January 2024</div>
                <div className="text-muted-foreground">Initial wave of fake positive reviews following negative publicity</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"></div>
              <div>
                <div className="font-semibold">March 2024</div>
                <div className="text-muted-foreground">Coordinated Reddit campaign to discredit investigation sources</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>
              <div>
                <div className="font-semibold">June 2024</div>
                <div className="text-muted-foreground">Mass harassment campaign against whistleblowers identified</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <div className="font-semibold">December 2024</div>
                <div className="text-muted-foreground">Evidence compilation completed, platform violations documented</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/evidence/trustpilot" className="btn btn-secondary">
            ← Trustpilot Analysis
          </Link>
          <Link href="/legal" className="btn btn-primary">
            Legal Documentation →
          </Link>
        </div>
      </div>
    </div>
  );
}
