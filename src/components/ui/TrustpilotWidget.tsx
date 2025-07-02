import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface TrustpilotWidgetProps {
  /**
   * Template ID for the Trustpilot widget
   * Default: "56278e9abfbbba0bdcd568bc" (Review Collector)
   */
  templateId?: string;
  
  /**
   * Business unit ID for noahdummett.com
   */
  businessUnitId?: string;
  
  /**
   * Locale for the widget
   */
  locale?: string;
  
  /**
   * Height of the widget
   */
  height?: string;
  
  /**
   * Width of the widget
   */
  width?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Widget variant
   */
  variant?: 'review-collector' | 'micro-review-count' | 'review-stars' | 'mini-review';
}

const TRUSTPILOT_TEMPLATES = {
  'review-collector': '56278e9abfbbba0bdcd568bc',
  'micro-review-count': '5419b6a8b0d04a076446a9ad',
  'review-stars': '5419b6ffb0d04a076446a9ae',
  'mini-review': '5419b732fbfb950b10de65e5'
};

export const TrustpilotWidget: React.FC<TrustpilotWidgetProps> = ({
  templateId,
  businessUnitId = '68649b41257a8efcad0082bf', // noahdummett.com business unit
  locale = 'en-US',
  height = '52px',
  width = '100%',
  className = '',
  variant = 'review-collector'
}) => {
  const { themeConfig } = useTheme();
  const finalTemplateId = templateId || TRUSTPILOT_TEMPLATES[variant];

  // Theme-aware styling with better contrast and readability
  const getThemeStyles = () => {
    // Enhanced contrast for different themes with proper text readability
    switch (themeConfig.variant) {
      case 'dark':
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.95)', // gray-900/95 - darker for better contrast
          borderColor: 'rgba(55, 65, 81, 0.8)', // gray-700/80
          boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(55, 65, 81, 0.3)',
          color: 'rgba(243, 244, 246, 0.95)', // gray-100/95
        };
      case 'violet':
        return {
          backgroundColor: 'rgba(30, 27, 75, 0.9)', // Deep violet background
          borderColor: 'rgba(139, 92, 246, 0.6)', // violet-500/60
          boxShadow: '0 4px 12px -2px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.4)',
          color: 'rgba(245, 243, 255, 0.95)', // violet-50/95
        };
      case 'emerald':
        return {
          backgroundColor: 'rgba(6, 46, 37, 0.9)', // Deep emerald background
          borderColor: 'rgba(16, 185, 129, 0.6)', // emerald-500/60
          boxShadow: '0 4px 12px -2px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.4)',
          color: 'rgba(236, 253, 245, 0.95)', // emerald-50/95
        };
      case 'amber':
        return {
          backgroundColor: 'rgba(69, 39, 11, 0.9)', // Deep amber background
          borderColor: 'rgba(245, 158, 11, 0.6)', // amber-500/60
          boxShadow: '0 4px 12px -2px rgba(245, 158, 11, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.4)',
          color: 'rgba(255, 251, 235, 0.95)', // amber-50/95
        };
      case 'aurora':
        return {
          backgroundColor: 'rgba(46, 16, 101, 0.9)', // Deep purple background
          borderColor: 'rgba(168, 85, 247, 0.6)', // purple-500/60
          boxShadow: '0 4px 12px -2px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.4)',
          color: 'rgba(250, 245, 255, 0.95)', // purple-50/95
        };
      default:
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          borderColor: 'rgba(55, 65, 81, 0.8)',
          boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.4)',
          color: 'rgba(243, 244, 246, 0.95)',
        };
    }
  };

  const themeStyles = getThemeStyles();

  useEffect(() => {
    // Load Trustpilot script if not already loaded
    const existingScript = document.querySelector('script[src*="tp.widget.bootstrap.min.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Reinitialize Trustpilot widgets after component mount
    const initializeTrustpilot = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(document.querySelector('.trustpilot-widget'));
      }
    };

    // Wait for script to load if it's new
    if (!existingScript) {
      const script = document.querySelector('script[src*="tp.widget.bootstrap.min.js"]');
      if (script) {
        script.addEventListener('load', initializeTrustpilot);
      }
    } else {
      // Script already exists, initialize immediately
      setTimeout(initializeTrustpilot, 100);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className={`trustpilot-widget-container ${className}`}>
      {/* TrustBox widget with theme-aware styling */}
      <div
        className="trustpilot-widget rounded-lg p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
        data-locale={locale}
        data-template-id={finalTemplateId}
        data-businessunit-id={businessUnitId}
        data-style-height={height}
        data-style-width={width}
        style={{
          ...themeStyles,
          borderRadius: '8px',
          padding: '12px',
          border: `1px solid ${themeStyles.borderColor}`,
          backdropFilter: 'blur(8px)',
        }}
      >
        <a
          href="https://www.trustpilot.com/review/noahdummett.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-colors duration-200 hover:underline"
          style={{
            color: themeStyles.color,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = themeConfig.variant === 'dark'
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(255, 255, 255, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = themeStyles.color;
          }}
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

// Header variant - smaller and more compact with enhanced readability
export const TrustpilotHeaderWidget: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height'>> = (props) => {
  const { themeConfig } = useTheme();

  const getHeaderStyles = () => {
    switch (themeConfig.variant) {
      case 'dark':
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.9)', // gray-900/90
          borderColor: 'rgba(55, 65, 81, 0.7)', // gray-700/70
          boxShadow: '0 2px 8px -1px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(55, 65, 81, 0.4)',
        };
      case 'violet':
        return {
          backgroundColor: 'rgba(30, 27, 75, 0.85)', // Deep violet
          borderColor: 'rgba(139, 92, 246, 0.5)',
          boxShadow: '0 2px 8px -1px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.3)',
        };
      case 'emerald':
        return {
          backgroundColor: 'rgba(6, 46, 37, 0.85)', // Deep emerald
          borderColor: 'rgba(16, 185, 129, 0.5)',
          boxShadow: '0 2px 8px -1px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.3)',
        };
      case 'amber':
        return {
          backgroundColor: 'rgba(69, 39, 11, 0.85)', // Deep amber
          borderColor: 'rgba(245, 158, 11, 0.5)',
          boxShadow: '0 2px 8px -1px rgba(245, 158, 11, 0.2), 0 0 0 1px rgba(245, 158, 11, 0.3)',
        };
      case 'aurora':
        return {
          backgroundColor: 'rgba(46, 16, 101, 0.85)', // Deep purple
          borderColor: 'rgba(168, 85, 247, 0.5)',
          boxShadow: '0 2px 8px -1px rgba(168, 85, 247, 0.2), 0 0 0 1px rgba(168, 85, 247, 0.3)',
        };
      default:
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          borderColor: 'rgba(55, 65, 81, 0.7)',
          boxShadow: '0 2px 8px -1px rgba(0, 0, 0, 0.3)',
        };
    }
  };

  return (
    <div
      className={`rounded-md px-3 py-2 border backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${props.className || ''}`}
      style={{
        ...getHeaderStyles(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '32px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TrustpilotWidget
          {...props}
          variant="micro-review-count"
          height="24px"
          className="inline-block"
        />
      </div>
    </div>
  );
};

// CTA variant - larger and more prominent with enhanced readability
export const TrustpilotCTA: React.FC<Omit<TrustpilotWidgetProps, 'variant'>> = (props) => {
  const { themeConfig } = useTheme();

  const getCTAStyles = () => {
    switch (themeConfig.variant) {
      case 'dark':
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.95)', // gray-900/95
          borderColor: 'rgba(55, 65, 81, 0.8)',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(55, 65, 81, 0.3)',
          textColor: 'rgba(243, 244, 246, 0.95)', // gray-100/95
          mutedColor: 'rgba(156, 163, 175, 0.9)', // gray-400/90
        };
      case 'violet':
        return {
          backgroundColor: 'rgba(30, 27, 75, 0.95)', // Deep violet
          borderColor: 'rgba(139, 92, 246, 0.6)',
          boxShadow: '0 8px 25px -5px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.4)',
          textColor: 'rgba(245, 243, 255, 0.95)', // violet-50/95
          mutedColor: 'rgba(196, 181, 253, 0.8)', // violet-300/80
        };
      case 'emerald':
        return {
          backgroundColor: 'rgba(6, 46, 37, 0.95)', // Deep emerald
          borderColor: 'rgba(16, 185, 129, 0.6)',
          boxShadow: '0 8px 25px -5px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.4)',
          textColor: 'rgba(236, 253, 245, 0.95)', // emerald-50/95
          mutedColor: 'rgba(110, 231, 183, 0.8)', // emerald-300/80
        };
      case 'amber':
        return {
          backgroundColor: 'rgba(69, 39, 11, 0.95)', // Deep amber
          borderColor: 'rgba(245, 158, 11, 0.6)',
          boxShadow: '0 8px 25px -5px rgba(245, 158, 11, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.4)',
          textColor: 'rgba(255, 251, 235, 0.95)', // amber-50/95
          mutedColor: 'rgba(252, 211, 77, 0.8)', // amber-300/80
        };
      case 'aurora':
        return {
          backgroundColor: 'rgba(46, 16, 101, 0.95)', // Deep purple
          borderColor: 'rgba(168, 85, 247, 0.6)',
          boxShadow: '0 8px 25px -5px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.4)',
          textColor: 'rgba(250, 245, 255, 0.95)', // purple-50/95
          mutedColor: 'rgba(196, 181, 253, 0.8)', // purple-300/80
        };
      default:
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          borderColor: 'rgba(55, 65, 81, 0.8)',
          boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.4)',
          textColor: 'rgba(243, 244, 246, 0.95)',
          mutedColor: 'rgba(156, 163, 175, 0.9)',
        };
    }
  };

  const ctaStyles = getCTAStyles();

  const getGradientStyles = () => {
    switch (themeConfig.variant) {
      case 'dark':
        return {
          background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.4), rgba(75, 85, 99, 0.3))',
          borderColor: 'rgba(55, 65, 81, 0.6)',
        };
      case 'violet':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.15))',
          borderColor: 'rgba(139, 92, 246, 0.4)',
        };
      case 'emerald':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))',
          borderColor: 'rgba(16, 185, 129, 0.4)',
        };
      case 'amber':
        return {
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.15))',
          borderColor: 'rgba(245, 158, 11, 0.4)',
        };
      case 'aurora':
        return {
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.15))',
          borderColor: 'rgba(168, 85, 247, 0.4)',
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.4), rgba(75, 85, 99, 0.3))',
          borderColor: 'rgba(55, 65, 81, 0.6)',
        };
    }
  };

  return (
    <div
      className={`rounded-xl p-6 border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${props.className || ''}`}
      style={{
        backgroundColor: ctaStyles.backgroundColor,
        borderColor: ctaStyles.borderColor,
        boxShadow: ctaStyles.boxShadow,
      }}
    >
      <div className="text-center mb-4">
        <h3
          className="text-xl font-bold mb-3 flex items-center justify-center gap-2"
          style={{
            color: ctaStyles.textColor,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          <span className="text-2xl">⭐</span>
          Share Your Experience
          <span className="text-2xl">⭐</span>
        </h3>
        <p
          className="text-sm max-w-md mx-auto leading-relaxed"
          style={{
            color: ctaStyles.mutedColor,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Help others by sharing your experience with our investigation. Your feedback helps build transparency and accountability.
        </p>
      </div>
      <div
        className="rounded-lg p-3 border backdrop-blur-sm transition-all duration-200"
        style={{
          ...getGradientStyles(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60px',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <TrustpilotWidget
            {...props}
            variant="review-collector"
            height="52px"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

// Mini review display - for sidebars or small spaces with enhanced readability
export const TrustpilotMini: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height' | 'width'>> = (props) => {
  const { themeConfig } = useTheme();

  const getMiniStyles = () => {
    switch (themeConfig.variant) {
      case 'dark':
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.9)', // gray-900/90
          borderColor: 'rgba(55, 65, 81, 0.7)',
          boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(55, 65, 81, 0.4)',
        };
      case 'violet':
        return {
          backgroundColor: 'rgba(30, 27, 75, 0.85)', // Deep violet
          borderColor: 'rgba(139, 92, 246, 0.5)',
          boxShadow: '0 4px 12px -2px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.3)',
        };
      case 'emerald':
        return {
          backgroundColor: 'rgba(6, 46, 37, 0.85)', // Deep emerald
          borderColor: 'rgba(16, 185, 129, 0.5)',
          boxShadow: '0 4px 12px -2px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.3)',
        };
      case 'amber':
        return {
          backgroundColor: 'rgba(69, 39, 11, 0.85)', // Deep amber
          borderColor: 'rgba(245, 158, 11, 0.5)',
          boxShadow: '0 4px 12px -2px rgba(245, 158, 11, 0.2), 0 0 0 1px rgba(245, 158, 11, 0.3)',
        };
      case 'aurora':
        return {
          backgroundColor: 'rgba(46, 16, 101, 0.85)', // Deep purple
          borderColor: 'rgba(168, 85, 247, 0.5)',
          boxShadow: '0 4px 12px -2px rgba(168, 85, 247, 0.2), 0 0 0 1px rgba(168, 85, 247, 0.3)',
        };
      default:
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          borderColor: 'rgba(55, 65, 81, 0.7)',
          boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.3)',
        };
    }
  };

  return (
    <div
      className={`rounded-lg p-3 border backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${props.className || ''}`}
      style={{
        ...getMiniStyles(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '140px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <TrustpilotWidget
          {...props}
          variant="mini-review"
          height="120px"
          width="100%"
          className="block"
        />
      </div>
    </div>
  );
};

// Stars only - for compact display with enhanced readability
export const TrustpilotStars: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height'>> = (props) => {
  const { themeConfig } = useTheme();

  const getStarsStyles = () => {
    switch (themeConfig.variant) {
      case 'dark':
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.85)', // gray-900/85
          borderColor: 'rgba(55, 65, 81, 0.6)',
          boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.2)',
        };
      case 'violet':
        return {
          backgroundColor: 'rgba(30, 27, 75, 0.8)', // Deep violet
          borderColor: 'rgba(139, 92, 246, 0.4)',
          boxShadow: '0 2px 6px -1px rgba(139, 92, 246, 0.15)',
        };
      case 'emerald':
        return {
          backgroundColor: 'rgba(6, 46, 37, 0.8)', // Deep emerald
          borderColor: 'rgba(16, 185, 129, 0.4)',
          boxShadow: '0 2px 6px -1px rgba(16, 185, 129, 0.15)',
        };
      case 'amber':
        return {
          backgroundColor: 'rgba(69, 39, 11, 0.8)', // Deep amber
          borderColor: 'rgba(245, 158, 11, 0.4)',
          boxShadow: '0 2px 6px -1px rgba(245, 158, 11, 0.15)',
        };
      case 'aurora':
        return {
          backgroundColor: 'rgba(46, 16, 101, 0.8)', // Deep purple
          borderColor: 'rgba(168, 85, 247, 0.4)',
          boxShadow: '0 2px 6px -1px rgba(168, 85, 247, 0.15)',
        };
      default:
        return {
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          borderColor: 'rgba(55, 65, 81, 0.6)',
          boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.2)',
        };
    }
  };

  return (
    <div
      className={`inline-block rounded px-2 py-1 border backdrop-blur-sm transition-all duration-200 ${props.className || ''}`}
      style={{
        ...getStarsStyles(),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '36px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TrustpilotWidget
          {...props}
          variant="review-stars"
          height="28px"
          className="inline-block"
        />
      </div>
    </div>
  );
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    Trustpilot: {
      loadFromElement: (element: Element | null) => void;
    };
  }
}

export default TrustpilotWidget;
