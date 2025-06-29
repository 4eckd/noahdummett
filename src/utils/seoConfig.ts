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
  title: '🔍 Noah Dummett Investigation | Exposing Web3 Accountability Issues',
  description: 'Comprehensive investigation into Noah Dummett, founder of Shuffle.com. Uncovering allegations of fund misappropriation, anonymous leadership, and Web3 accountability issues. Evidence-based analysis of a potential crypto scandal.',
  keywords: [
    'Noah Dummett',
    'Shuffle.com',
    'Web3 Investigation',
    'Crypto Scandal',
    'FTX',
    'Gambling',
    'Accountability',
    'Whistleblower',
    'Blockchain Analysis',
    'Cryptocurrency',
    'Investigation',
    'Evidence',
    'Legal Documents',
    'Fund Misappropriation',
    'Anonymous Leadership',
    'Web3 Ethics',
    'Crypto Fraud',
    'Financial Misconduct',
    'Regulatory Compliance',
    'Transparency'
  ],
  ogImage: '/social-preview.png',
  twitterCard: 'summary_large_image',
  author: 'Its Different Productions',
  type: 'website'
};

export const pageSEO: Record<string, Partial<SEOConfig>> = {
  home: {
    title: '🔍 Noah Dummett Investigation | Web3 Accountability Exposed',
    description: 'BREAKING: Comprehensive investigation into Shuffle.com founder Noah Dummett reveals allegations of $20M+ fund misappropriation from FTX bankruptcy estate. Anonymous leadership, unethical practices, and mounting evidence demand immediate attention.',
    keywords: ['Noah Dummett investigation', 'Shuffle.com scandal', 'Web3 accountability', 'crypto fraud investigation'],
    canonicalUrl: 'https://noahdummett.com/'
  },
  'noah-dummett': {
    title: '🚨 The Noah Dummett Files | Complete Investigation Report',
    description: 'Detailed analysis of allegations against Noah Dummett, founder of Shuffle.com. Evidence of fund misappropriation, anonymous leadership structure, and unethical treatment of vulnerable users. Legal documents, blockchain analysis, and community investigations.',
    keywords: ['Noah Dummett files', 'Shuffle.com investigation', 'crypto scandal evidence', 'Web3 fraud'],
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
  description: 'Exposing Web3 accountability issues and investigating potential cryptocurrency fraud and misconduct'
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
