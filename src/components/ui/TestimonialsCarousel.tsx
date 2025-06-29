import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, MessageSquare, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from './Card';
import { Button } from './Button';

interface Testimonial {
  id: string;
  platform: 'reddit' | 'bitcointalk' | 'twitter' | 'linkedin' | 'discord' | 'trustpilot';
  author: string;
  content: string;
  date: string;
  url: string;
  upvotes?: number;
  replies?: number;
  verified?: boolean;
  category: 'investigation' | 'concern' | 'evidence' | 'warning';
}

const testimonials: Testimonial[] = [
  {
    id: 'trustpilot-1',
    platform: 'trustpilot',
    author: 'İsmail (Turkey)',
    content: 'After becoming a new member, I invested 4000 USD on 05.06.2025. After making a profit, I requested a withdrawal of 5857 USD on 12.06.2025. My withdrawal request has not been processed for 16 days. I cannot connect to live support and get information. My emails are not being answered.',
    date: '2025-06-28',
    url: 'https://ca.trustpilot.com/reviews/68605c9e37a3606c4270c8a0',
    verified: true,
    category: 'concern'
  },
  {
    id: 'trustpilot-2',
    platform: 'trustpilot',
    author: 'peshko gumata (Bulgaria)',
    content: 'SCAM THEY DONT SEND WITHDRAW. ONCE YOU TRY CASHING OUT IT SAYS IN REVIEW AND YOU WILL NEVER GET YOUR MONEY DONT DEPO HERE',
    date: '2025-06-26',
    url: 'https://ca.trustpilot.com/reviews/685d452990cfa8dfc7c6a0f0',
    verified: true,
    category: 'warning'
  },
  {
    id: 'trustpilot-3',
    platform: 'trustpilot',
    author: 'Boychevww (Bulgaria)',
    content: 'The RTP of the site is so bad, my first bet was a scam as i had 19 bj hand and they somehow pulled 20 its obvious scam dont depo there please!',
    date: '2025-06-21',
    url: 'https://ca.trustpilot.com/reviews/6856b9deb9c66a7ddb92e6a2',
    verified: true,
    category: 'warning'
  },
  {
    id: 'trustpilot-4',
    platform: 'trustpilot',
    author: 'Mystical Myth (Pakistan)',
    content: 'Scam and worst site i have ever seen, i have been playing over 6 months on this site, not a single day with profit always ends with same red stats, isn\'t it pathetic using ai in casinos. Why they paid 5$ to people for positive review?',
    date: '2025-06-21',
    url: 'https://ca.trustpilot.com/reviews/68569da1a2a21cdcbedeec78',
    verified: true,
    category: 'warning'
  },
  {
    id: 'trustpilot-5',
    platform: 'trustpilot',
    author: 'facundo voria (Argentina)',
    content: 'take so long for withdraw, sometimes they dont even do them and they keep your money',
    date: '2025-06-16',
    url: 'https://ca.trustpilot.com/reviews/684f966598bb9f561e5d576a',
    verified: true,
    category: 'concern'
  },
  {
    id: 'trustpilot-6',
    platform: 'trustpilot',
    author: 'Андрей Москаленко (Austria)',
    content: 'my nickname on shuffle is kryakter and for a month now I have not been able to receive my withdrawal of funds, even after passing full verification, the support on the site is bots that do not answer your questions',
    date: '2025-06-15',
    url: 'https://ca.trustpilot.com/reviews/684e8fa5b277fdfb6846f890',
    verified: true,
    category: 'concern'
  },
  {
    id: 'trustpilot-7',
    platform: 'trustpilot',
    author: 'Anh (United States)',
    content: 'thought i would give this website a try but ended up realizing this was a scam like most people said. i deposited and won some money but they wouldn\'t allow me to withdraw the money. would not recommend this site',
    date: '2025-06-08',
    url: 'https://ca.trustpilot.com/reviews/684588de75dc863f22d0325c',
    verified: true,
    category: 'warning'
  },
  {
    id: 'trustpilot-8',
    platform: 'trustpilot',
    author: 'DynaMic FX (Estonia)',
    content: 'Shuffel is a scammer site. They do everything shady and dont let people withdraw when they want to withdraw big money. But they let u deposit always. Never play on this site. Its very bad!',
    date: '2025-06-07',
    url: 'https://ca.trustpilot.com/reviews/684493061c7fd1cae31dacc0',
    verified: true,
    category: 'warning'
  },
  {
    id: 'trustpilot-9',
    platform: 'trustpilot',
    author: 'Mushi (Pakistan)',
    content: 'after waiting a lot and passing all the procedure now I have finally understood that I lost my funds. and the shuffle has scammed me. on shuffle.com their is no withdrawal option for users who will win',
    date: '2025-06-07',
    url: 'https://ca.trustpilot.com/reviews/68437caca86e161cb76fc805',
    verified: true,
    category: 'concern'
  },
  {
    id: 'trustpilot-10',
    platform: 'trustpilot',
    author: 'WWoohoo (Canada)',
    content: 'Won some money with sportsbetting and tried to cash it out. Now my withdrawals are stuck in review and I just get the same message over and over again. It\'s been 8 days now and I still haven\'t received any money. Just go play on Roobet or Stake instead of these scammers',
    date: '2025-06-05',
    url: 'https://ca.trustpilot.com/reviews/68420d831d820796110ca225',
    verified: true,
    category: 'concern'
  }
];

const platformIcons = {
  reddit: '🔴',
  bitcointalk: '₿',
  twitter: '🐦',
  linkedin: '💼',
  discord: '💬',
  trustpilot: '⭐'
};

const platformColors = {
  reddit: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
  bitcointalk: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20',
  twitter: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  linkedin: 'from-blue-600/10 to-blue-700/10 border-blue-600/20',
  discord: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20',
  trustpilot: 'from-green-500/10 to-emerald-500/10 border-green-500/20'
};

const categoryColors = {
  investigation: 'text-blue-400',
  concern: 'text-orange-400',
  evidence: 'text-red-400',
  warning: 'text-yellow-400'
};

interface TestimonialsCarouselProps {
  title?: string;
  description?: string;
  autoPlay?: boolean;
  interval?: number;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  title = "Community Investigations & Concerns",
  description = "What the crypto community is saying about Noah Dummett and Shuffle.com",
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Main Carousel */}
      <div className="relative">
        <Card className={`bg-gradient-to-br ${platformColors[currentTestimonial.platform]} min-h-[300px]`}>
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Platform & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{platformIcons[currentTestimonial.platform]}</span>
                    <div>
                      <p className="font-medium text-foreground capitalize">
                        {currentTestimonial.platform}
                      </p>
                      <p className={`text-sm ${categoryColors[currentTestimonial.category]} capitalize`}>
                        {currentTestimonial.category}
                      </p>
                    </div>
                  </div>
                  {currentTestimonial.verified && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <span className="text-sm">✓ Verified</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author & Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium text-foreground">
                        {currentTestimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(currentTestimonial.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    {currentTestimonial.upvotes && (
                      <div className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>{currentTestimonial.upvotes.toLocaleString()}</span>
                      </div>
                    )}
                    {currentTestimonial.replies && (
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{currentTestimonial.replies}</span>
                      </div>
                    )}
                    <a
                      href={currentTestimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-110'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Control */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-xs"
        >
          {isPlaying ? 'Pause' : 'Play'} Auto-scroll
        </Button>
      </div>

      {/* All Links */}
      <Card className="bg-muted/20">
        <CardContent className="p-6">
          <h4 className="font-semibold text-foreground mb-4">All Community Sources:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {testimonials.map((testimonial) => (
              <a
                key={testimonial.id}
                href={testimonial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors"
              >
                <span>{platformIcons[testimonial.platform]}</span>
                <span className="flex-1 truncate">{testimonial.author}</span>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsCarousel;
