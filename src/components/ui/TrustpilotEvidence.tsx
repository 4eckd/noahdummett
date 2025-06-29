import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle, TrendingDown, Users, Calendar, Star } from 'lucide-react';
import { Card, CardHeader, CardContent } from './Card';
import { Button } from './Button';

interface TrustpilotReview {
  id: string;
  author: string;
  country: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  url: string;
  category: 'withdrawal_issues' | 'scam_allegations' | 'poor_rtp' | 'customer_service';
}

const trustpilotReviews: TrustpilotReview[] = [
  {
    id: '1',
    author: 'İsmail',
    country: 'Turkey',
    rating: 1,
    title: 'My withdrawal request has not been processed for 16 days',
    content: 'After becoming a new member, I invested 4000 USD on 05.06.2025. After making a profit, I requested a withdrawal of 5857 USD on 12.06.2025. I was asked to verify my email ID and address. I sent the requested documents and they were approved, but my withdrawal request has not yet been finalized. I cannot connect to live support and get information. My emails are not being answered.',
    date: '2025-06-28',
    url: 'https://ca.trustpilot.com/reviews/68605c9e37a3606c4270c8a0',
    category: 'withdrawal_issues'
  },
  {
    id: '2',
    author: 'peshko gumata',
    country: 'Bulgaria',
    rating: 1,
    title: 'SCAM THEY DONT SEND WITHDRAW',
    content: 'SCAM THEY DONT SEND WITHDRAW. ONCE YOU TRY CASHING OUT IT SAYS IN REVIEW AND YOU WILL NEVER GET YOUR MONEY DONT DEPO HERE',
    date: '2025-06-26',
    url: 'https://ca.trustpilot.com/reviews/685d452990cfa8dfc7c6a0f0',
    category: 'scam_allegations'
  },
  {
    id: '3',
    author: 'Boychevww',
    country: 'Bulgaria',
    rating: 1,
    title: 'The owners stink and havent showered since 1992',
    content: 'The RTP of the site is so bad, my first bet was a scam as i had 19 bj hand and they somehow pulled 20 its obvious scam dont depo there please!',
    date: '2025-06-21',
    url: 'https://ca.trustpilot.com/reviews/6856b9deb9c66a7ddb92e6a2',
    category: 'poor_rtp'
  },
  {
    id: '4',
    author: 'Mystical Myth',
    country: 'Pakistan',
    rating: 1,
    title: 'Scam and worst site i have ever seen',
    content: 'Scam and worst site i have ever seen, i have been playing over 6 months on this site, not a single day with profit always ends with same red stats, isn\'t it pathetic using ai in casinos. Why they paid 5$ to people for positive review? And why trust pilot removes reviews?',
    date: '2025-06-21',
    url: 'https://ca.trustpilot.com/reviews/68569da1a2a21cdcbedeec78',
    category: 'scam_allegations'
  },
  {
    id: '5',
    author: 'facundo voria',
    country: 'Argentina',
    rating: 1,
    title: 'take so long for withdraw',
    content: 'take so long for withdraw, sometimes they dont even do them and they keep your money',
    date: '2025-06-16',
    url: 'https://ca.trustpilot.com/reviews/684f966598bb9f561e5d576a',
    category: 'withdrawal_issues'
  },
  {
    id: '6',
    author: 'Андрей Москаленко',
    country: 'Austria',
    rating: 1,
    title: 'a site that does not withdraw money',
    content: 'my nickname on shuffle is kryakter and for a month now I have not been able to receive my withdrawal of funds, even after passing full verification, the support on the site is bots that do not answer your questions, and completely ignore emails, I do not recommend this site because at any moment your account will be frozen and you will be prohibited from withdrawing money without reason',
    date: '2025-06-15',
    url: 'https://ca.trustpilot.com/reviews/684e8fa5b277fdfb6846f890',
    category: 'customer_service'
  },
  {
    id: '7',
    author: 'Anh',
    country: 'United States',
    rating: 1,
    title: 'scam gambling site',
    content: 'thought i would give this website a try but ended up realizing this was a scam like most people said. a lot of controversy surrounding this website from matching fixing and betting on competitive games on valorant. i deposited and won some money but they wouldn\'t allow me to withdraw the money. would not recommend this site',
    date: '2025-06-08',
    url: 'https://ca.trustpilot.com/reviews/684588de75dc863f22d0325c',
    category: 'scam_allegations'
  },
  {
    id: '8',
    author: 'DynaMic FX',
    country: 'Estonia',
    rating: 1,
    title: 'Shuffel scammer',
    content: 'Shuffel is a scammer site. They do everything shady and dont let people withdraw when they want to withdraw big money. But they let u deposit always. Never play on this site. Its very bad!',
    date: '2025-06-07',
    url: 'https://ca.trustpilot.com/reviews/684493061c7fd1cae31dacc0',
    category: 'scam_allegations'
  },
  {
    id: '9',
    author: 'Mushi',
    country: 'Pakistan',
    rating: 1,
    title: 'scam alert',
    content: 'after waiting a lot and passing all the procedure now I have finally understood that I lost my funds. and the shuffle has scammed me. on shuffle.com their is no withdrawal option for users who will win or would like to withdraw funds. after investigation I have noticed it is not only me. actually everyday they are scamming to many people.',
    date: '2025-06-07',
    url: 'https://ca.trustpilot.com/reviews/68437caca86e161cb76fc805',
    category: 'scam_allegations'
  },
  {
    id: '10',
    author: 'WWoohoo',
    country: 'Canada',
    rating: 1,
    title: 'Joined this casino because of KyleTooReal',
    content: 'Won some money with sportsbetting and tried to cash it out. Now my withdrawals are stuck in review and I just get the same message over and over again. I\'ve send them my ID and to check something like that manually shouldn\'t take more than 5 minutes but now I am waiting for almost 3 days without any information. UPDATE: It\'s been 8 days now and I still haven\'t received any money. Just go play on Roobet or Stake instead of these scammers',
    date: '2025-06-05',
    url: 'https://ca.trustpilot.com/reviews/68420d831d820796110ca225',
    category: 'withdrawal_issues'
  }
];

const categoryStats = {
  withdrawal_issues: { count: 4, color: 'text-orange-400', label: 'Withdrawal Issues' },
  scam_allegations: { count: 4, color: 'text-red-400', label: 'Scam Allegations' },
  poor_rtp: { count: 1, color: 'text-yellow-400', label: 'Poor RTP/Rigged Games' },
  customer_service: { count: 1, color: 'text-purple-400', label: 'Customer Service Issues' }
};

export const TrustpilotEvidence: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredReviews = selectedCategory === 'all' 
    ? trustpilotReviews 
    : trustpilotReviews.filter(review => review.category === selectedCategory);

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <div className="space-y-8">
      {/* Header with Stats */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Star className="h-8 w-8 text-green-500" />
          <h3 className="text-2xl font-bold text-foreground">Trustpilot Evidence</h3>
          <Star className="h-8 w-8 text-green-500" />
        </div>
        <p className="text-muted-foreground mb-6">
          Real customer reviews from Trustpilot showing systematic scam patterns and withdrawal issues
        </p>
        
        {/* Overall Stats */}
        <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">2.9/5</div>
                <div className="text-sm text-muted-foreground">TrustScore</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">53%</div>
                <div className="text-sm text-muted-foreground">1-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">521</div>
                <div className="text-sm text-muted-foreground">Total Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">10+</div>
                <div className="text-sm text-muted-foreground">Scam Reports</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === 'all'
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All Issues ({trustpilotReviews.length})
        </button>
        {Object.entries(categoryStats).map(([key, stats]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === key
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {stats.label} ({stats.count})
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5 h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.country}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {review.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      by {review.author} • {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    categoryStats[review.category]?.color
                  } bg-current/10`}>
                    {categoryStats[review.category]?.label}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{review.content}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Verified Trustpilot Review
                  </span>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-xs"
                  >
                    <span>View Original</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {filteredReviews.length > 6 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="border-red-500/30 text-red-400 hover:text-red-300"
          >
            {showAll ? 'Show Less' : `Show All ${filteredReviews.length} Reviews`}
          </Button>
        </div>
      )}

      {/* Analysis Summary */}
      <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Trustpilot Analysis Summary</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Pattern Recognition:</strong> Systematic withdrawal delays and denials affecting users globally
                </p>
                <p>
                  <strong className="text-foreground">Geographic Spread:</strong> Complaints from Turkey, Bulgaria, Pakistan, Argentina, Austria, US, Estonia, Canada
                </p>
                <p>
                  <strong className="text-foreground">Common Issues:</strong> Funds frozen after verification, support unresponsive, withdrawal requests stuck "in review"
                </p>
                <p>
                  <strong className="text-foreground">Red Flags:</strong> Allegations of paying for positive reviews, AI-manipulated games, selective scamming
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://ca.trustpilot.com/review/shuffle.com?search=scam+withdraw&stars=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-medium"
                >
                  <span>View All Trustpilot Scam Reports</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrustpilotEvidence;
