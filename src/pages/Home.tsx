import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, FileText, Search, Eye, DollarSign, Hash, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { NoahDummettHeroImage } from '@/components/ui/HeroImage';
import { Link } from 'react-router-dom';

const investigationHighlights = [
  {
    icon: <DollarSign className="h-8 w-8 text-red-500" />,
    title: '$20M+ Alleged Misappropriation',
    description: 'Claims of substantial funds taken from FTX bankruptcy estate to fund Shuffle.com operations.',
  },
  {
    icon: <Search className="h-8 w-8 text-orange-500" />,
    title: 'Anonymous Leadership',
    description: 'Concerning lack of transparency around company leadership and beneficial ownership.',
  },
  {
    icon: <Eye className="h-8 w-8 text-yellow-500" />,
    title: 'Community Investigations',
    description: 'Growing body of evidence from independent researchers and concerned community members.',
  },
];

export const Home: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <SectionLayout className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-red-500 mr-4" />
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
              BREAKING INVESTIGATION
            </span>
          </div>

          {/* Hero Portrait */}
          <NoahDummettHeroImage size="lg" className="mb-8" />

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            The Noah Dummett
            <span className="block text-red-500">Investigation</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uncovering the truth behind Shuffle.com's controversial founder and the mounting
            allegations that threaten to expose a Web3 scandal of unprecedented proportions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/noah-dummett">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="shadow-glow hover:shadow-glow-lg bg-red-600 hover:bg-red-700"
              >
                Read Full Investigation
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="hover:shadow-primary border-red-500/30 text-red-400 hover:text-red-300"
            >
              View Evidence
            </Button>
          </div>
        </motion.div>
      </SectionLayout>

      {/* Investigation Highlights */}
      <SectionLayout
        title="Key Allegations"
        description="The most serious concerns that demand immediate investigation"
        className="py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {investigationHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full border-red-500/20" variant="elevated">
                <CardHeader>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Blockchain Evidence Callout */}
      <SectionLayout className="py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Hash className="h-12 w-12 text-blue-400 mr-4 animate-pulse" />
                  <span className="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-full text-sm font-bold uppercase tracking-wider border border-blue-500/50">
                    🔗 BLOCKCHAIN EVIDENCE EXPOSED
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  <span className="text-blue-400">$25 MILLION+</span> Stolen From FTX Victims
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  <span className="text-red-400 font-bold">IRREFUTABLE ON-CHAIN PROOF:</span> LinkedIn investigation reveals
                  direct blockchain connections between Noah Dummett and stolen FTX funds.
                  <span className="text-yellow-400 font-semibold">5 smoking gun transactions</span> that could send him to prison for decades.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">$25M+ STOLEN</h3>
                  <p className="text-sm text-muted-foreground">Tracked from FTX hack to Shuffle operations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                    <Hash className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">5 KEY TRANSACTIONS</h3>
                  <p className="text-sm text-muted-foreground">Irrefutable blockchain evidence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">LINKEDIN EXPOSED</h3>
                  <p className="text-sm text-muted-foreground">Professional blockchain analyst reveals all</p>
                </div>
              </div>

              <div className="text-center">
                <Link to="/noah-dummett">
                  <Button
                    size="lg"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                    className="shadow-glow hover:shadow-glow-lg bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 font-bold"
                  >
                    🔍 SEE THE BLOCKCHAIN EVIDENCE
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Evidence Section */}
      <SectionLayout
        title="Mounting Evidence"
        description="Official documentation and community investigations"
        className="py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-red-500" />
                    <h3 className="text-xl font-bold text-foreground">Legal Documentation</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>IRS Form 211 whistleblower complaint</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Blockchain analysis and transaction records</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Legal pleadings and court documents</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Search className="h-6 w-6 text-orange-500" />
                    <h3 className="text-xl font-bold text-foreground">Community Research</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Bitcoin Talk forum investigations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>User testimonials and concerns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Timeline analysis and connections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Evidence Downloads */}
      <SectionLayout
        title="Download Investigation Evidence"
        description="Access comprehensive investigation documents and blockchain evidence"
        className="py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card hover className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-600/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Blockchain Evidence
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete blockchain analysis with transaction evidence
                </p>
                <a
                  href="/downloads/blockchain-evidence-report.pdf"
                  download
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  <span>Download PDF</span>
                  <FileText className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card hover className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-green-600/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Investigation Timeline
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete timeline from FTX to Shuffle allegations
                </p>
                <a
                  href="/downloads/noah-dummett-timeline.json"
                  download
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium"
                >
                  <span>Download JSON</span>
                  <Clock className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card hover className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-600/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Investigation Summary
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Executive summary of all findings and evidence
                </p>
                <a
                  href="/downloads/investigation-summary.md"
                  download
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium"
                >
                  <span>Download MD</span>
                  <Shield className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground">
            The Web3 Industry Deserves Better
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This investigation represents a critical moment for Web3 accountability.
            The evidence is mounting, the concerns are real, and the time for action is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/noah-dummett">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="shadow-glow hover:shadow-glow-lg bg-red-600 hover:bg-red-700"
              >
                Full Investigation
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-red-500/30 text-red-400 hover:text-red-300 hover:border-red-500/50"
            >
              Share Evidence
            </Button>
          </div>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Home;
