import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Check, Settings } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent } from './Card';

interface GDPRBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
}

export const GDPRBanner: React.FC<GDPRBannerProps> = ({
  onAccept,
  onDecline,
  onCustomize
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('gdpr-consent');
    if (!hasConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'accepted');
    localStorage.setItem('gdpr-timestamp', new Date().toISOString());
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr-consent', 'declined');
    localStorage.setItem('gdpr-timestamp', new Date().toISOString());
    setIsVisible(false);
    onDecline?.();
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
    onCustomize?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-lg border-primary/30 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Privacy & Investigation Transparency
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      This investigation website uses only essential cookies for security and functionality. 
                      We do not track users or collect personal data for commercial purposes. Our focus is on 
                      accountability journalism, not data monetization.
                    </p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-muted/20 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-foreground mb-3">Cookie Details:</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span><strong>Essential Cookies:</strong> Session security, CSRF protection (Always Active)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span><strong>Analytics Cookies:</strong> Not used - We don't track user behavior</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span><strong>Marketing Cookies:</strong> Not used - No advertising or tracking</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span><strong>Third-Party Cookies:</strong> Minimized - Only essential services</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={handleAccept}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Accept Essential Cookies
                  </Button>
                  
                  <Button
                    onClick={handleCustomize}
                    variant="outline"
                    size="sm"
                    className="border-blue-500/30 text-blue-400 hover:text-blue-300"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    {showDetails ? 'Hide Details' : 'Show Details'}
                  </Button>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <a 
                      href="/privacy" 
                      className="hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <a 
                      href="/cookie-policy" 
                      className="hover:text-foreground transition-colors"
                    >
                      Cookie Policy
                    </a>
                    <a 
                      href="/legal" 
                      className="hover:text-foreground transition-colors"
                    >
                      Legal Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

// Hook for managing GDPR consent state
export const useGDPRConsent = () => {
  const [consent, setConsent] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('gdpr-consent');
    const storedTimestamp = localStorage.getItem('gdpr-timestamp');
    setConsent(storedConsent);
    setTimestamp(storedTimestamp);
  }, []);

  const updateConsent = (newConsent: 'accepted' | 'declined') => {
    const now = new Date().toISOString();
    localStorage.setItem('gdpr-consent', newConsent);
    localStorage.setItem('gdpr-timestamp', now);
    setConsent(newConsent);
    setTimestamp(now);
  };

  const clearConsent = () => {
    localStorage.removeItem('gdpr-consent');
    localStorage.removeItem('gdpr-timestamp');
    setConsent(null);
    setTimestamp(null);
  };

  return {
    consent,
    timestamp,
    hasConsent: consent !== null,
    isAccepted: consent === 'accepted',
    isDeclined: consent === 'declined',
    updateConsent,
    clearConsent
  };
};

export default GDPRBanner;
