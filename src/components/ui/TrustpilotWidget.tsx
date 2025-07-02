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

  // Theme-aware styling
  const getThemeStyles = () => {
    const baseStyles = {
      backgroundColor: themeConfig.colors.card,
      borderColor: themeConfig.colors.border,
      color: themeConfig.colors.cardForeground,
    };

    // Enhanced contrast for different themes
    switch (themeConfig.variant) {
      case 'dark':
        return {
          ...baseStyles,
          backgroundColor: 'rgba(31, 41, 55, 0.95)', // gray-800/95
          borderColor: 'rgba(75, 85, 99, 0.8)', // gray-600/80
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        };
      case 'violet':
        return {
          ...baseStyles,
          backgroundColor: 'rgba(139, 92, 246, 0.1)', // violet-500/10
          borderColor: 'rgba(139, 92, 246, 0.3)', // violet-500/30
          boxShadow: '0 4px 6px -1px rgba(139, 92, 246, 0.2)',
        };
      case 'emerald':
        return {
          ...baseStyles,
          backgroundColor: 'rgba(16, 185, 129, 0.1)', // emerald-500/10
          borderColor: 'rgba(16, 185, 129, 0.3)', // emerald-500/30
          boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)',
        };
      case 'amber':
        return {
          ...baseStyles,
          backgroundColor: 'rgba(245, 158, 11, 0.1)', // amber-500/10
          borderColor: 'rgba(245, 158, 11, 0.3)', // amber-500/30
          boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.2)',
        };
      case 'aurora':
        return {
          ...baseStyles,
          backgroundColor: 'rgba(168, 85, 247, 0.1)', // purple-500/10
          borderColor: 'rgba(168, 85, 247, 0.3)', // purple-500/30
          boxShadow: '0 4px 6px -1px rgba(168, 85, 247, 0.2)',
        };
      default:
        return baseStyles;
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
          className="font-medium transition-colors duration-200"
          style={{
            color: themeConfig.colors.primary,
            textDecoration: 'underline',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = themeConfig.colors.primaryForeground;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = themeConfig.colors.primary;
          }}
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

// Header variant - smaller and more compact with theme-aware styling
export const TrustpilotHeaderWidget: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height'>> = (props) => {
  const { themeConfig } = useTheme();

  const headerStyles = {
    backgroundColor: `${themeConfig.colors.card}CC`, // Add transparency
    borderColor: `${themeConfig.colors.border}80`, // Add transparency
    backdropFilter: 'blur(8px)',
  };

  return (
    <div
      className={`rounded-md px-3 py-2 border shadow-sm transition-all duration-200 hover:shadow-md ${props.className || ''}`}
      style={headerStyles}
    >
      <TrustpilotWidget
        {...props}
        variant="micro-review-count"
        height="24px"
        className="inline-block"
      />
    </div>
  );
};

// CTA variant - larger and more prominent with theme-aware styling
export const TrustpilotCTA: React.FC<Omit<TrustpilotWidgetProps, 'variant'>> = (props) => {
  const { themeConfig } = useTheme();

  const ctaStyles = {
    backgroundColor: `${themeConfig.colors.card}F0`, // High opacity
    borderColor: themeConfig.colors.border,
    backdropFilter: 'blur(12px)',
  };

  const gradientStyles = {
    background: themeConfig.variant === 'dark'
      ? `linear-gradient(135deg, ${themeConfig.colors.primary}20, ${themeConfig.colors.accent}20)`
      : `linear-gradient(135deg, ${themeConfig.colors.primary}10, ${themeConfig.colors.accent}10)`,
    borderColor: `${themeConfig.colors.primary}40`,
  };

  return (
    <div
      className={`rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 ${props.className || ''}`}
      style={ctaStyles}
    >
      <div className="text-center mb-4">
        <h3
          className="text-xl font-bold mb-3 flex items-center justify-center gap-2"
          style={{ color: themeConfig.colors.foreground }}
        >
          <span className="text-2xl">⭐</span>
          Share Your Experience
          <span className="text-2xl">⭐</span>
        </h3>
        <p
          className="text-sm max-w-md mx-auto leading-relaxed"
          style={{ color: themeConfig.colors.mutedForeground }}
        >
          Help others by sharing your experience with our investigation. Your feedback helps build transparency and accountability.
        </p>
      </div>
      <div
        className="rounded-lg p-3 border transition-all duration-200"
        style={gradientStyles}
      >
        <TrustpilotWidget
          {...props}
          variant="review-collector"
          height="52px"
          className="w-full"
        />
      </div>
    </div>
  );
};

// Mini review display - for sidebars or small spaces with theme-aware styling
export const TrustpilotMini: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height' | 'width'>> = (props) => {
  const { themeConfig } = useTheme();

  const miniStyles = {
    backgroundColor: `${themeConfig.colors.card}E6`, // Semi-transparent
    borderColor: `${themeConfig.colors.border}B3`, // Semi-transparent
    backdropFilter: 'blur(6px)',
  };

  return (
    <div
      className={`rounded-lg p-3 border shadow-sm transition-all duration-200 hover:shadow-md ${props.className || ''}`}
      style={miniStyles}
    >
      <TrustpilotWidget
        {...props}
        variant="mini-review"
        height="120px"
        width="100%"
        className="block"
      />
    </div>
  );
};

// Stars only - for compact display with theme-aware styling
export const TrustpilotStars: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height'>> = (props) => {
  const { themeConfig } = useTheme();

  const starsStyles = {
    backgroundColor: `${themeConfig.colors.card}CC`, // Semi-transparent
    borderColor: `${themeConfig.colors.border}80`, // Semi-transparent
    backdropFilter: 'blur(4px)',
  };

  return (
    <div
      className={`inline-block rounded px-2 py-1 border transition-all duration-200 ${props.className || ''}`}
      style={starsStyles}
    >
      <TrustpilotWidget
        {...props}
        variant="review-stars"
        height="28px"
        className="inline-block"
      />
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
