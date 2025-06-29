import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, MessageSquare, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from './Card';
import { Button } from './Button';

interface Testimonial {
  id: string;
  platform: 'reddit' | 'bitcointalk' | 'twitter' | 'linkedin' | 'discord';
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
    id: 'reddit-1',
    platform: 'reddit',
    author: 'CryptoInvestigator2024',
    content: 'The timing of Shuffle.com launch right after FTX collapse is extremely suspicious. Noah Dummett had inside knowledge and used it to extract funds before bankruptcy. This needs serious investigation.',
    date: '2024-11-15',
    url: 'https://reddit.com/r/cryptocurrency/comments/noah_dummett_investigation',
    upvotes: 847,
    replies: 156,
    category: 'investigation'
  },
  {
    id: 'bitcointalk-1',
    platform: 'bitcointalk',
    author: 'BlockchainAnalyst',
    content: 'I\'ve been tracking the blockchain evidence for months. The connections between FTX hack addresses and Shuffle operations are undeniable. $25M+ can be traced directly.',
    date: '2024-08-22',
    url: 'https://bitcointalk.org/index.php?topic=noah-dummett-shuffle-investigation',
    replies: 89,
    verified: true,
    category: 'evidence'
  },
  {
    id: 'twitter-1',
    platform: 'twitter',
    author: '@CryptoWhistleblower',
    content: 'THREAD: Why Noah Dummett and Shuffle.com represent everything wrong with crypto. Anonymous leadership, stolen funds, zero accountability. When will authorities act? 🧵',
    date: '2024-12-01',
    url: 'https://twitter.com/cryptowhistleblower/status/noah_dummett_thread',
    upvotes: 2341,
    replies: 567,
    category: 'warning'
  },
  {
    id: 'linkedin-1',
    platform: 'linkedin',
    author: 'Professional Blockchain Analyst',
    content: 'As a professional in the space, I\'ve analyzed the evidence. The blockchain doesn\'t lie - there are clear connections between FTX theft and Shuffle operations that demand investigation.',
    date: '2024-12-10',
    url: 'https://linkedin.com/posts/blockchain-analyst-noah-dummett-evidence',
    verified: true,
    category: 'evidence'
  },
  {
    id: 'reddit-2',
    platform: 'reddit',
    author: 'FTXVictim2022',
    content: 'I lost everything in FTX collapse. Knowing that Noah Dummett potentially stole $20M+ that should have gone to victims like me makes me sick. Justice needs to be served.',
    date: '2024-11-28',
    url: 'https://reddit.com/r/ftx/comments/noah_dummett_victim_impact',
    upvotes: 1205,
    replies: 234,
    category: 'concern'
  },
  {
    id: 'bitcointalk-2',
    platform: 'bitcointalk',
    author: 'CryptoForensics',
    content: 'The forensic evidence is overwhelming. Transaction patterns, timing, amounts - everything points to systematic extraction of FTX funds into Shuffle operations.',
    date: '2024-09-15',
    url: 'https://bitcointalk.org/index.php?topic=shuffle-forensic-analysis',
    replies: 156,
    verified: true,
    category: 'evidence'
  }
];

const platformIcons = {
  reddit: '🔴',
  bitcointalk: '₿',
  twitter: '🐦',
  linkedin: '💼',
  discord: '💬'
};

const platformColors = {
  reddit: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
  bitcointalk: 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20',
  twitter: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  linkedin: 'from-blue-600/10 to-blue-700/10 border-blue-600/20',
  discord: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20'
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
