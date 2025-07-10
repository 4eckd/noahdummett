import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/context/ThemeContext';
import { Cookie, Settings, X, Check, Shield } from 'lucide-react';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
  onCustomize,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });
  const { themeConfig } = useTheme();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onAccept?.();
  };

  const handleDeclineAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onDecline?.();
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    onCustomize?.();
  };

  const getContainerStyles = () => {
    switch (themeConfig.variant) {
      case 'dark':
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.98)',
          borderColor: 'rgba(55, 65, 81, 0.8)',
          boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        };
      case 'violet':
        return {
          backgroundColor: 'rgba(30, 27, 75, 0.98)',
          borderColor: 'rgba(139, 92, 246, 0.6)',
          boxShadow: '0 10px 40px -10px rgba(139, 92, 246, 0.3)',
        };
      case 'emerald':
        return {
          backgroundColor: 'rgba(6, 46, 37, 0.98)',
          borderColor: 'rgba(16, 185, 129, 0.6)',
          boxShadow: '0 10px 40px -10px rgba(16, 185, 129, 0.3)',
        };
      case 'amber':
        return {
          backgroundColor: 'rgba(69, 39, 11, 0.98)',
          borderColor: 'rgba(245, 158, 11, 0.6)',
          boxShadow: '0 10px 40px -10px rgba(245, 158, 11, 0.3)',
        };
      case 'aurora':
        return {
          backgroundColor: 'rgba(46, 16, 101, 0.98)',
          borderColor: 'rgba(168, 85, 247, 0.6)',
          boxShadow: '0 10px 40px -10px rgba(168, 85, 247, 0.3)',
        };
      default:
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.98)',
          borderColor: 'rgba(55, 65, 81, 0.8)',
          boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        };
    }
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
        <div
          className="max-w-6xl mx-auto rounded-xl border backdrop-blur-md"
          style={getContainerStyles()}
        >
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacy & Cookie Notice
                  </h3>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  We use cookies to enhance your experience on our investigation website. 
                  Essential cookies are required for site functionality, while optional cookies 
                  help us improve our documentation and understand how visitors use our evidence resources.
                </p>

                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-4 space-y-3"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">Essential Cookies</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Required for site functionality, theme preferences, and security.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">Analytics Cookies</span>
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                            className="rounded"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Help us understand how visitors interact with our investigation.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">Functional Cookies</span>
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
                            className="rounded"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Enable enhanced features like Trustpilot widgets and social sharing.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">Marketing Cookies</span>
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                            className="rounded"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Used to track visitors for social media integration and sharing.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleAcceptAll}
                    leftIcon={<Check className="h-4 w-4" />}
                  >
                    Accept All
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDeclineAll}
                  >
                    Essential Only
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDetails(!showDetails)}
                    leftIcon={<Settings className="h-4 w-4" />}
                  >
                    {showDetails ? 'Hide' : 'Customize'}
                  </Button>
                  
                  {showDetails && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleSavePreferences}
                    >
                      Save Preferences
                    </Button>
                  )}
                </div>

                <div className="mt-3 text-xs text-muted-foreground">
                  Learn more in our{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
