import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Hash, Users, Calendar, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent } from './Card';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  type: 'page' | 'evidence' | 'transaction' | 'person' | 'date';
  url: string;
  category: string;
  relevance: number;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Search data - in a real app this would come from an API or search index
const searchData: SearchResult[] = [
  {
    id: 'noah-dummett-main',
    title: 'Noah Dummett Investigation Overview',
    content: 'Comprehensive investigation into Noah Dummett, co-founder of Shuffle.com, regarding allegations of fund misappropriation from FTX bankruptcy estate.',
    type: 'page',
    url: '/noah-dummett',
    category: 'Investigation',
    relevance: 100
  },
  {
    id: 'blockchain-evidence',
    title: 'Blockchain Evidence: $25M+ Theft',
    content: 'On-chain evidence showing $25,000,000+ allegedly stolen from FTX victims with direct connections to Noah Dummett and Shuffle.com operations.',
    type: 'evidence',
    url: '/noah-dummett#blockchain-evidence',
    category: 'Evidence',
    relevance: 95
  },
  {
    id: 'txid1',
    title: 'TXID1: ShuffleEmployee2 Connection',
    content: '0x3e2563cdc27f1e6be1f5995b9669660431d7e9e60d5cfb1c74320c27bbf2536b - 50,000 USDC transaction showing connection to ShuffleEmployee2',
    type: 'transaction',
    url: '/noah-dummett#blockchain-evidence',
    category: 'Blockchain',
    relevance: 90
  },
  {
    id: 'txid2',
    title: 'TXID2: Noah Dummett Direct Connection',
    content: '0xdce984dccd4378b331591bcda03f9a0f5260bc53d16b863ef8f348b8ebe6c232 - 100,000 USDC direct interaction with NoahShuffle2 address',
    type: 'transaction',
    url: '/noah-dummett#blockchain-evidence',
    category: 'Blockchain',
    relevance: 90
  },
  {
    id: 'shuffle-casino',
    title: 'Shuffle.com Casino Operations',
    content: 'Crypto gambling platform co-founded by Noah Dummett in May 2022, allegedly used for money laundering stolen FTX funds.',
    type: 'page',
    url: '/noah-dummett',
    category: 'Investigation',
    relevance: 85
  },
  {
    id: 'ishan-haque',
    title: 'Ishan Haque - Shuffle Co-founder',
    content: 'South African-born co-founder of Shuffle.com, Queensland University of Technology education, active on LinkedIn promoting Shuffle growth.',
    type: 'person',
    url: '/noah-dummett',
    category: 'Key Figures',
    relevance: 80
  },
  {
    id: 'ftx-timeline',
    title: 'FTX Bankruptcy Timeline',
    content: 'November 7, 2022: Suspicious transactions occur. November 11, 2022: FTX files for bankruptcy. Timeline shows potential advance knowledge.',
    type: 'date',
    url: '/noah-dummett',
    category: 'Timeline',
    relevance: 85
  },
  {
    id: 'alameda-research',
    title: 'Alameda Research Employment',
    content: 'Noah Dummett worked as trader at Alameda Research from October 2019 to April 2021 under Sam Bankman-Fried.',
    type: 'person',
    url: '/noah-dummett',
    category: 'Background',
    relevance: 75
  },
  {
    id: 'linkedin-investigation',
    title: 'LinkedIn Professional Analysis',
    content: 'Professional blockchain analyst supitsj published comprehensive evidence of $25M+ theft with direct Noah Dummett connections.',
    type: 'evidence',
    url: '/noah-dummett#blockchain-evidence',
    category: 'Evidence',
    relevance: 90
  },
  {
    id: 'faq-section',
    title: 'Frequently Asked Questions',
    content: 'Common questions about the investigation, evidence sources, legal matters, and how to contribute to accountability.',
    type: 'page',
    url: '/faq',
    category: 'Information',
    relevance: 70
  }
];

const getIcon = (type: SearchResult['type']) => {
  switch (type) {
    case 'page':
      return <FileText className="h-4 w-4" />;
    case 'evidence':
      return <FileText className="h-4 w-4 text-red-500" />;
    case 'transaction':
      return <Hash className="h-4 w-4 text-blue-500" />;
    case 'person':
      return <Users className="h-4 w-4 text-green-500" />;
    case 'date':
      return <Calendar className="h-4 w-4 text-purple-500" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    return searchData
      .map(item => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        const categoryLower = item.category.toLowerCase();
        
        // Title matches get highest score
        searchTerms.forEach(term => {
          if (titleLower.includes(term)) score += 10;
          if (contentLower.includes(term)) score += 5;
          if (categoryLower.includes(term)) score += 3;
        });
        
        // Exact phrase matches get bonus
        if (titleLower.includes(query.toLowerCase())) score += 20;
        if (contentLower.includes(query.toLowerCase())) score += 10;
        
        return { ...item, searchScore: score };
      })
      .filter(item => item.searchScore > 0)
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(0, 8); // Limit to top 8 results
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
      e.preventDefault();
      window.location.href = filteredResults[selectedIndex].url;
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-500/30 text-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl"
          onClick={e => e.stopPropagation()}
        >
          <Card className="bg-background/95 backdrop-blur-lg border-primary/30 shadow-2xl">
            <CardContent className="p-0">
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-border">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <input
                  type="text"
                  placeholder="Search investigation content, evidence, transactions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-lg"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="ml-2 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim() && filteredResults.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-2">Try searching for "Noah Dummett", "blockchain", "evidence", or "Shuffle"</p>
                  </div>
                )}

                {filteredResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={result.url}
                      onClick={onClose}
                      className={`block p-4 border-b border-border last:border-b-0 transition-colors ${
                        index === selectedIndex
                          ? 'bg-primary/10 border-primary/20'
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0 mt-1">
                          {getIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-foreground truncate">
                              {highlightText(result.title, query)}
                            </h3>
                            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full flex-shrink-0">
                              {result.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {highlightText(result.content, query)}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Search Tips */}
              {!query.trim() && (
                <div className="p-6 text-center text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">Search the Noah Dummett Investigation</p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-muted/50 px-2 py-1 rounded">Noah Dummett</span>
                    <span className="bg-muted/50 px-2 py-1 rounded">Shuffle.com</span>
                    <span className="bg-muted/50 px-2 py-1 rounded">blockchain evidence</span>
                    <span className="bg-muted/50 px-2 py-1 rounded">FTX theft</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;
