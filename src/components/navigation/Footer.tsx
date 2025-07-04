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
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API', href: '/api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  logo,
  companyName = import.meta.env.VITE_COMPANY_NAME || 'FUSED GAMING',
  description = 'Building the future of gaming with cutting-edge technology and innovative solutions.',
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

              {/* Trustpilot Widget */}
              <div className="max-w-sm">
                <div className="rounded-lg p-4 border backdrop-blur-sm hover:shadow-xl transition-all duration-300" style={{backgroundColor: 'rgba(46, 16, 101, 0.95)', borderColor: 'rgba(168, 85, 247, 0.6)', boxShadow: 'rgba(168, 85, 247, 0.3) 0px 6px 20px -3px, rgba(168, 85, 247, 0.4) 0px 0px 0px 1px'}}>
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold mb-2 flex items-center justify-center gap-2" style={{color: 'rgba(250, 245, 255, 0.95)', textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px'}}>
                      <span className="text-xl">⭐</span>Share Your Experience<span className="text-xl">⭐</span>
                    </h3>
                    <p className="text-xs max-w-xs mx-auto leading-relaxed" style={{color: 'rgba(196, 181, 253, 0.8)', textShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px'}}>
                      Help others by sharing your experience with our investigation. Your feedback helps build transparency and accountability.
                    </p>
                  </div>
                  <div className="rounded-md p-2 border backdrop-blur-sm transition-all duration-200" style={{background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(147, 51, 234, 0.15))', borderColor: 'rgba(168, 85, 247, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '280px'}}>
                      <div className="trustpilot-widget-container w-full">
                        <div className="trustpilot-widget rounded-md p-2 backdrop-blur-sm transition-all duration-300 hover:shadow-lg" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="68649b41257a8efcad0082bf" data-style-height="44px" data-style-width="100%" style={{backgroundColor: 'rgba(46, 16, 101, 0.9)', border: '1px solid rgba(168, 85, 247, 0.6)', boxShadow: 'rgba(168, 85, 247, 0.3) 0px 3px 10px -2px, rgba(168, 85, 247, 0.4) 0px 0px 0px 1px', color: 'rgba(250, 245, 255, 0.95)', borderRadius: '6px', padding: '8px', backdropFilter: 'blur(8px)', position: 'relative'}}>
                          <iframe title="Customer reviews powered by Trustpilot" loading="lazy" src="https://widget.trustpilot.com/trustboxes/56278e9abfbbba0bdcd568bc/index.html?templateId=56278e9abfbbba0bdcd568bc&businessunitId=68649b41257a8efcad0082bf#locale=en-US&styleHeight=44px&styleWidth=100%25" style={{position: 'relative', height: '44px', width: '100%', borderStyle: 'none', display: 'block', overflow: 'hidden'}}></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
