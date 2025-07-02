import React, { useEffect } from 'react';

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
  const finalTemplateId = templateId || TRUSTPILOT_TEMPLATES[variant];

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
      {/* TrustBox widget */}
      <div 
        className="trustpilot-widget" 
        data-locale={locale}
        data-template-id={finalTemplateId}
        data-businessunit-id={businessUnitId}
        data-style-height={height}
        data-style-width={width}
      >
        <a 
          href="https://www.trustpilot.com/review/noahdummett.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

// Header variant - smaller and more compact
export const TrustpilotHeaderWidget: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height'>> = (props) => {
  return (
    <TrustpilotWidget
      {...props}
      variant="micro-review-count"
      height="24px"
      className={`inline-block ${props.className || ''}`}
    />
  );
};

// CTA variant - larger and more prominent
export const TrustpilotCTA: React.FC<Omit<TrustpilotWidgetProps, 'variant'>> = (props) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm ${props.className || ''}`}>
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Share Your Experience
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Help others by sharing your experience with our investigation
        </p>
      </div>
      <TrustpilotWidget
        {...props}
        variant="review-collector"
        height="52px"
        className="w-full"
      />
    </div>
  );
};

// Mini review display - for sidebars or small spaces
export const TrustpilotMini: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height' | 'width'>> = (props) => {
  return (
    <TrustpilotWidget
      {...props}
      variant="mini-review"
      height="120px"
      width="100%"
      className={`block ${props.className || ''}`}
    />
  );
};

// Stars only - for compact display
export const TrustpilotStars: React.FC<Omit<TrustpilotWidgetProps, 'variant' | 'height'>> = (props) => {
  return (
    <TrustpilotWidget
      {...props}
      variant="review-stars"
      height="28px"
      className={`inline-block ${props.className || ''}`}
    />
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
