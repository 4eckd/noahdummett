import React, { useState, useEffect } from 'react';
import { AlertTriangle, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWarningIcon?: boolean;
  fallbackIcon?: React.ReactNode;
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-32 h-32 lg:w-40 lg:h-40',
  lg: 'w-48 h-48 md:w-64 md:h-64',
  xl: 'w-64 h-64 md:w-80 md:h-80'
};

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  className = '',
  size = 'lg',
  showWarningIcon = true,
  fallbackIcon
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Reset states when src changes
    setImageLoaded(false);
    setImageError(false);
    setImageSrc('');

    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
      console.warn(`Failed to load hero image: ${src}`);
    };
    img.src = src;
  }, [src]);

  const renderFallback = () => {
    if (fallbackIcon) {
      return fallbackIcon;
    }
    
    return (
      <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
        <User className="w-1/3 h-1/3 text-red-500/60" />
      </div>
    );
  };

  const renderImage = () => {
    if (imageError) {
      return renderFallback();
    }

    if (!imageLoaded) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center animate-pulse">
          <div className="w-1/3 h-1/3 bg-gray-400/40 rounded-full animate-pulse" />
        </div>
      );
    }

    return (
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex justify-center ${className}`}
    >
      <div className="relative">
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 border-red-500/30 shadow-2xl bg-background`}>
          {renderImage()}
        </div>
        
        {showWarningIcon && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <AlertTriangle className="h-5 w-5 text-white" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Specific component for Noah Dummett hero image
export const NoahDummettHeroImage: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showWarningIcon?: boolean;
}> = ({ size = 'lg', className, showWarningIcon = true }) => {
  return (
    <HeroImage
      src="/hero-noahdummett.png"
      alt="Noah Dummett - Founder of Shuffle.com"
      size={size}
      className={className}
      showWarningIcon={showWarningIcon}
      fallbackIcon={
        <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
          <div className="text-center">
            <User className="w-12 h-12 text-red-500/60 mx-auto mb-2" />
            <div className="text-xs text-red-500/60 font-medium">Noah Dummett</div>
          </div>
        </div>
      }
    />
  );
};

export default HeroImage;
