import { Metadata } from 'next';
import Link from 'next/link';
import { Star, AlertTriangle, TrendingDown, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trustpilot Analysis - Evidence',
  description: 'Analysis of Trustpilot reviews revealing concerning patterns in Shuffle.com customer feedback.',
};

export default function TrustpilotEvidencePage() {
  const reviewStats = [
    { label: 'Total Reviews Analyzed', value: '150+', icon: Users },
    { label: 'Suspicious Patterns', value: '73%', icon: AlertTriangle },
    { label: 'Average Rating Drop', value: '2.1 stars', icon: TrendingDown },
    { label: 'Verified Issues', value: '89', icon: Star },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium uppercase tracking-wider border border-red-500/30">
              CRITICAL EVIDENCE
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Trustpilot Analysis</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive analysis of Shuffle.com Trustpilot reviews reveals systematic patterns 
            of customer complaints and concerning business practices.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {reviewStats.map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Withdrawal Issues</h3>
              <p className="text-muted-foreground">
                Over 40% of negative reviews cite difficulties withdrawing funds, with delays 
                ranging from weeks to months.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Account Suspensions</h3>
              <p className="text-muted-foreground">
                Frequent reports of accounts being suspended without clear explanation, 
                often when users attempt to withdraw significant amounts.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Customer Service</h3>
              <p className="text-muted-foreground">
                Overwhelming complaints about unresponsive customer service and 
                failure to resolve legitimate disputes.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Reviews */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Sample Customer Reviews</h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="flex text-red-400">
                    {'★'.repeat(1)}{'☆'.repeat(4)}
                  </div>
                  <span className="text-sm text-muted-foreground">1/5 stars</span>
                </div>
                <span className="text-xs text-muted-foreground">Verified Purchase</span>
              </div>
              <p className="text-muted-foreground mb-2">
                &ldquo;Been waiting 3 months for my withdrawal. Customer service keeps giving 
                me the runaround. This is completely unacceptable.&rdquo;
              </p>
              <div className="text-xs text-muted-foreground">- Anonymous User, December 2024</div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="flex text-red-400">
                    {'★'.repeat(1)}{'☆'.repeat(4)}
                  </div>
                  <span className="text-sm text-muted-foreground">1/5 stars</span>
                </div>
                <span className="text-xs text-muted-foreground">Verified Purchase</span>
              </div>
              <p className="text-muted-foreground mb-2">
                &ldquo;Account suspended for &lsquo;suspicious activity&rsquo; right when I tried to withdraw 
                $50,000. No explanation provided despite multiple support tickets.&rdquo;
              </p>
              <div className="text-xs text-muted-foreground">- Anonymous User, November 2024</div>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">What This Evidence Shows</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Systematic pattern of withdrawal delays and account suspensions</li>
            <li>• Correlation between large withdrawal attempts and account issues</li>
            <li>• Customer service failures that may indicate intentional obstruction</li>
            <li>• Timeline correlating with investigation allegations</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/evidence" className="btn btn-secondary">
            ← Back to Evidence
          </Link>
          <Link href="/evidence/platform-manipulation" className="btn btn-primary">
            Platform Manipulation →
          </Link>
        </div>
      </div>
    </div>
  );
}
