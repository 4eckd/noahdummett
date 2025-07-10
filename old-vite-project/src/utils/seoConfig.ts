// SEO Configuration for FUSED GAMING React TypeScript Boilerplate

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  author?: string;
  type?: 'website' | 'article';
}

export const defaultSEO: SEOConfig = {
  title: '🚨 Noah Dummett Investigation: Shuffle Founders Prison Evidence',
  description: 'SHOCKING: Noah Dummett & Shuffle.com investigation reveals $20M+ allegedly stolen from FTX victims. Blockchain evidence could send them to prison.',
  keywords: [
    'Noah Dummett prison',
    'Shuffle.com criminal investigation',
    'crypto fraud scandal',
    'FTX victims stolen money',
    'decades in prison',
    'crypto crime exposed',
    'gambling empire fraud',
    'anonymous criminals',
    'blockchain evidence',
    'whistleblower testimony',
    'criminal investigation',
    'stolen millions',
    'legal documents',
    'fund misappropriation',
    'hidden identities',
    'crypto scandal',
    'financial crimes',
    'criminal misconduct',
    'law enforcement',
    'justice for victims'
  ],
  ogImage: '/assets/images/social-preview.png',
  twitterCard: 'summary_large_image',
  author: 'Its Different Productions',
  type: 'website'
};

export const pageSEO: Record<string, Partial<SEOConfig>> = {
  home: {
    title: '🚨 Noah Dummett Shuffle Investigation: $20M FTX Theft Evidence',
    description: 'EXPLOSIVE: Noah Dummett Shuffle.com investigation reveals $20M+ allegedly stolen from FTX victims. Blockchain evidence, prison allegations.',
    keywords: ['Noah Dummett prison', 'Shuffle.com criminal investigation', 'crypto fraud scandal', 'FTX victims stolen money'],
    canonicalUrl: 'https://noahdummett.com/'
  },
  'noah-dummett': {
    title: '🔥 Noah Dummett Files: Shuffle.com Criminal Evidence Exposed',
    description: 'BOMBSHELL: Noah Dummett criminal files reveal $20M+ allegedly stolen from FTX. Blockchain evidence, legal docs, prison allegations.',
    keywords: ['Noah Dummett criminal files', 'Shuffle.com evidence', 'crypto crime investigation', 'prison sentences'],
    canonicalUrl: 'https://noahdummett.com/noah-dummett',
    type: 'article'
  },
  about: {
    title: 'About FUSED GAMING - Elegant Solutions to Complex UX Challenges',
    description: 'Learn about Its Different Productions and our approach to solving complex user experience challenges through elegant technical solutions. Discover the philosophy behind FUSED GAMING.',
    keywords: ['about', 'Its Different Productions', 'user experience', 'technical solutions', 'web development philosophy'],
    canonicalUrl: 'https://react-boilerplate-taupe.vercel.app/about'
  },
  themes: {
    title: 'Theme Showcase - 5 Beautiful Themes | FUSED GAMING',
    description: 'Explore 5 stunning themes: Dark, Violet, Emerald, Amber, and Aurora. Each theme is carefully crafted with consistent design tokens and accessibility in mind.',
    keywords: ['themes', 'dark mode', 'design system', 'UI themes', 'color schemes', 'accessibility'],
    canonicalUrl: 'https://react-boilerplate-taupe.vercel.app/themes'
  },
  contact: {
    title: 'Contact Us - Get Support | FUSED GAMING',
    description: 'Get in touch with Its Different Productions. Whether you need support, have questions, or want to collaborate, we\'re here to help.',
    keywords: ['contact', 'support', 'help', 'collaboration', 'Its Different Productions'],
    canonicalUrl: 'https://react-boilerplate-taupe.vercel.app/contact'
  }
};

export const socialLinks = {
  github: import.meta.env.VITE_SOCIAL_GITHUB || 'https://github.com/4eckd/noahdummett',
  twitter: import.meta.env.VITE_SOCIAL_TWITTER || 'https://twitter.com/noahdummett_inv',
  linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || 'https://linkedin.com/company/its-different-productions',
  discord: import.meta.env.VITE_SOCIAL_DISCORD,
  youtube: import.meta.env.VITE_SOCIAL_YOUTUBE,
  email: import.meta.env.VITE_COMPANY_EMAIL || 'hello@noahdummett.com'
};

export const companyInfo = {
  name: import.meta.env.VITE_COMPANY_NAME || 'Noah Dummett Investigation Projects',
  url: import.meta.env.VITE_COMPANY_URL || 'https://noahdummett.com',
  email: import.meta.env.VITE_COMPANY_EMAIL || 'hello@noahdummett.com',
  description: 'EXPOSING the shocking truth about crypto criminals who stole millions from victims. Bringing justice to the Web3 industry through fearless investigative journalism.'
};

export const projectInfo = {
  name: 'Noah Dummett Investigation Projects',
  version: '2.0.0',
  repository: 'https://github.com/4eckd/noahdummett',
  documentation: 'https://docs.noahdummett.com',
  demo: 'https://noahdummett.com',
  license: 'MIT'
};

// Helper function to generate page-specific SEO
export const getPageSEO = (page: keyof typeof pageSEO): SEOConfig => {
  const pageConfig = pageSEO[page] || {};
  return {
    ...defaultSEO,
    ...pageConfig,
    keywords: [...defaultSEO.keywords, ...(pageConfig.keywords || [])]
  };
};

// Helper function to generate structured data
export const generateStructuredData = (page: keyof typeof pageSEO = 'home') => {
  const seo = getPageSEO(page);
  
  return {
    '@context': 'https://schema.org',
    '@type': seo.type === 'article' ? 'TechArticle' : 'WebPage',
    name: seo.title,
    description: seo.description,
    url: seo.canonicalUrl,
    author: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.url
    },
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.url
    },
    image: `${projectInfo.demo}${seo.ogImage}`,
    datePublished: '2025-06-17',
    dateModified: '2025-06-17'
  };
};
