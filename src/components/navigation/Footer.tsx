import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart, Youtube, MessageCircle } from 'lucide-react';
import { clsx } from 'clsx';

export interface FooterProps {
  logo?: React.ReactNode;
  companyName?: string;
  description?: string;
  links?: FooterSection[];
  socialLinks?: SocialLink[];
  showCopyright?: boolean;
  className?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

const getSocialLinks = (): SocialLink[] => {
  const links: SocialLink[] = [];

  if (import.meta.env.VITE_SOCIAL_GITHUB) {
    links.push({
      platform: 'GitHub',
      href: import.meta.env.VITE_SOCIAL_GITHUB,
      icon: <Github className="h-5 w-5" />,
    });
  }

  if (import.meta.env.VITE_SOCIAL_TWITTER) {
    links.push({
      platform: 'Twitter',
      href: import.meta.env.VITE_SOCIAL_TWITTER,
      icon: <Twitter className="h-5 w-5" />,
    });
  }

  if (import.meta.env.VITE_SOCIAL_LINKEDIN) {
    links.push({
      platform: 'LinkedIn',
      href: import.meta.env.VITE_SOCIAL_LINKEDIN,
      icon: <Linkedin className="h-5 w-5" />,
    });
  }

  if (import.meta.env.VITE_SOCIAL_DISCORD) {
    links.push({
      platform: 'Discord',
      href: import.meta.env.VITE_SOCIAL_DISCORD,
      icon: <MessageCircle className="h-5 w-5" />,
    });
  }

  if (import.meta.env.VITE_SOCIAL_YOUTUBE) {
    links.push({
      platform: 'YouTube',
      href: import.meta.env.VITE_SOCIAL_YOUTUBE,
      icon: <Youtube className="h-5 w-5" />,
    });
  }

  if (import.meta.env.VITE_COMPANY_EMAIL) {
    links.push({
      platform: 'Email',
      href: `mailto:${import.meta.env.VITE_COMPANY_EMAIL}`,
      icon: <Mail className="h-5 w-5" />,
    });
  }

  return links;
};

const defaultLinks: FooterSection[] = [
  {
    title: 'Investigation',
    links: [
      { label: 'Noah Dummett Files', href: '/noah-dummett' },
      { label: 'Evidence Overview', href: '/evidence' },
      { label: 'Platform Manipulation', href: '/platform-manipulation' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Evidence Sources',
    links: [
      { label: 'Trustpilot Reviews', href: '/evidence/trustpilot' },
      { label: 'Reddit Documentation', href: '/evidence/reddit' },
      { label: 'Casino Guru Complaints', href: '/evidence/casino-guru' },
      { label: 'Download Archive', href: '/service', external: true },
    ],
  },
  {
    title: 'Documentation',
    links: [
      { label: 'Investigation Docs', href: '/docs/investigation/' },
      { label: 'Evidence Analysis', href: '/docs/evidence/' },
      { label: 'Legal Documents', href: '/docs/legal/' },
      { label: 'Technical Docs', href: '/docs/technical/' },
    ],
  },
  {
    title: 'External Links',
    links: [
      { label: 'Trustpilot Main', href: 'https://ca.trustpilot.com/review/shuffle.com', external: true },
      { label: 'Scam Reports Filter', href: 'https://ca.trustpilot.com/review/shuffle.com?search=scam+withdraw&stars=1', external: true },
      { label: 'Casino Guru Complaints', href: 'https://casino.guru/complaints/all?casino=shuffle-casino', external: true },
      { label: 'Reddit r/ShufflecomCasino', href: 'https://www.reddit.com/r/ShufflecomCasino/', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal Notice', href: '/legal' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  logo,
  companyName = import.meta.env.VITE_COMPANY_NAME || 'Noah Dummett Investigation',
  description = 'Comprehensive investigation into Shuffle.com fraud allegations and Noah Dummett\'s role in the $25M+ FTX theft. Evidence-based documentation across multiple platforms.',
  links = defaultLinks,
  socialLinks = getSocialLinks(),
  showCopyright = true,
  className,
}) => {
  const currentYear = new Date().getFullYear();

  const renderLogo = () => {
    if (logo) return logo;
    
    return (
      <Link to="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">F</span>
        </div>
        <span className="font-bold text-xl text-foreground">{companyName}</span>
      </Link>
    );
  };

  return (
    <footer className={clsx('border-t border-border bg-background', className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {renderLogo()}
              <p className="text-muted-foreground text-sm max-w-md">
                {description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {links.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        {showCopyright && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {companyName}. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center space-x-1">
                <span>Investigation by</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>N.D. Investigations Team</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
