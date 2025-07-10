import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Book, Scale, Wrench } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

const documentationSections = [
  {
    id: 'investigation',
    title: 'Investigation Documentation',
    description: 'Complete investigation methodology, timeline, and findings',
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    url: '/docs/investigation/',
    items: [
      'Investigation Overview',
      'Investigation Summary',
      'Blockchain Integration',
      'LinkedIn Integration'
    ]
  },
  {
    id: 'evidence',
    title: 'Evidence Analysis',
    description: 'Platform-specific evidence analysis and documentation',
    icon: <Book className="h-8 w-8 text-green-500" />,
    url: '/docs/evidence/',
    items: [
      'Trustpilot Evidence',
      'Reddit Evidence',
      'Casino Guru Evidence',
      'Blockchain Evidence',
      'Evidence Archive Index'
    ]
  },
  {
    id: 'legal',
    title: 'Legal Documentation',
    description: 'Legal documents, whistleblower reports, and analysis',
    icon: <Scale className="h-8 w-8 text-purple-500" />,
    url: '/docs/legal/',
    items: [
      'Whistleblower Reports',
      'Legal Documentation Index',
      'Privacy Policy',
      'Terms of Service'
    ]
  },
  {
    id: 'technical',
    title: 'Technical Documentation',
    description: 'Technical implementation and architecture documentation',
    icon: <Wrench className="h-8 w-8 text-orange-500" />,
    url: '/docs/technical/',
    items: [
      'Technical Overview',
      'Component Documentation',
      'SEO Optimization',
      'Deployment Guide'
    ]
  },
  {
    id: 'project',
    title: 'Project Documentation',
    description: 'Project management, development history, and release notes',
    icon: <FileText className="h-8 w-8 text-indigo-500" />,
    url: '/docs/project/',
    items: [
      'Project Overview',
      'Environment Setup',
      'Release Management',
      'Development History'
    ]
  }
];

export const DocsRedirectPage: React.FC = () => {
  // Remove auto-redirect - this is now the main docs page
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.href = '/docs/';
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <PageLayout
      title="Documentation - Noah Dummett Investigation"
      description="Comprehensive documentation for the Noah Dummett investigation including evidence analysis, legal documents, and technical implementation"
    >
      {/* Hero Section */}
      <SectionLayout
        title="📚 Complete Documentation Hub"
        description="Your single source for all investigation evidence, legal documentation, and technical implementation"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">150+</div>
                  <div className="text-sm font-medium text-foreground mb-1">Evidence Sources</div>
                  <div className="text-xs text-muted-foreground">Independently verifiable</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">5</div>
                  <div className="text-sm font-medium text-foreground mb-1">Documentation Categories</div>
                  <div className="text-xs text-muted-foreground">Organized by type</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$25M+</div>
                  <div className="text-sm font-medium text-foreground mb-1">Documented Theft</div>
                  <div className="text-xs text-muted-foreground">Blockchain verified</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-2">0%</div>
                  <div className="text-sm font-medium text-foreground mb-1">Resolution Rate</div>
                  <div className="text-xs text-muted-foreground">Across all platforms</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Documentation Sections */}
      <SectionLayout
        title="📂 Documentation Categories"
        description="Choose a specific documentation category"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentationSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-medium text-foreground">Includes:</h4>
                    <ul className="space-y-1">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary font-bold text-xs mt-1">•</span>
                          <span className="text-xs text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = section.url}
                    rightIcon={<ExternalLink className="h-4 w-4" />}
                    className="w-full"
                  >
                    View {section.title}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Quick Access */}
      <SectionLayout
        title="🔗 Quick Access"
        description="Direct links to key documentation sections"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Main Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete documentation index</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/docs/'}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View All Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-6 text-center">
              <Book className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Evidence README</h3>
              <p className="text-sm text-muted-foreground mb-4">Evidence documentation overview</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/docs/evidence/README.md'}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View Evidence Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Scale className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Legal README</h3>
              <p className="text-sm text-muted-foreground mb-4">Legal documentation overview</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/docs/legal/README.md'}
                rightIcon={<ExternalLink className="h-4 w-4" />}
                className="w-full"
              >
                View Legal Docs
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default DocsRedirectPage;
