import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, FileText, Search, Eye, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';
import { NoahDummettHeroImage } from '@/components/ui/HeroImage';
import { Link } from 'react-router-dom';

const investigationHighlights = [
  {
    icon: <DollarSign className="h-8 w-8 text-red-500 animate-pulse" />,
    title: '💰 $20M+ STOLEN FROM VICTIMS',
    description: 'SHOCKING: Evidence suggests Noah Dummett allegedly diverted millions from FTX bankruptcy victims to fund his gambling empire. The victims deserve justice!',
  },
  {
    icon: <Search className="h-8 w-8 text-orange-500 animate-bounce" />,
    title: '🕵️ HIDDEN CRIMINAL IDENTITIES',
    description: 'EXPOSED: Anonymous leadership structure designed to hide the true criminals behind Shuffle.com. What are they trying to hide from law enforcement?',
  },
  {
    icon: <Eye className="h-8 w-8 text-yellow-500 animate-pulse" />,
    title: '📋 EVIDENCE THAT COULD DESTROY THEM',
    description: 'BOMBSHELL: Legal documents, blockchain evidence, and whistleblower testimonies that could send them to prison for DECADES. The walls are closing in...',
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
            <AlertTriangle className="h-12 w-12 text-red-500 mr-4 animate-pulse" />
            <span className="px-4 py-2 bg-red-500/30 text-red-300 rounded-full text-sm font-bold uppercase tracking-wider border border-red-500/50">
              🚨 EXPLOSIVE INVESTIGATION 🚨
            </span>
          </div>

          {/* Hero Portrait */}
          <NoahDummettHeroImage size="lg" className="mb-8" />

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            <span className="text-red-500">The Disturbing Truth</span>
            <span className="block text-foreground">About Shuffle's Founders</span>
            <span className="block text-red-400 text-3xl md:text-4xl">That Could Put Them In Prison</span>
            <span className="block text-red-300 text-2xl md:text-3xl">For A Long, Long Time...</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="text-red-400 font-bold">SHOCKING DISCOVERY:</span> What we uncovered about Noah Dummett and Shuffle.com will make your blood boil.
            <span className="text-yellow-400 font-semibold">$20M+ allegedly stolen from FTX bankruptcy victims</span>, anonymous leadership hiding dark secrets,
            and evidence that could send them to prison for <span className="text-red-400 font-bold">DECADES</span>.
            The crypto world will never be the same...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/noah-dummett">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="shadow-glow hover:shadow-glow-lg bg-red-600 hover:bg-red-700 text-lg px-8 py-4 font-bold animate-pulse"
              >
                🔥 EXPOSE THE TRUTH NOW 🔥
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="hover:shadow-primary border-red-500/30 text-red-400 hover:text-red-300 text-lg px-8 py-4 font-semibold"
            >
              💰 See The Stolen Millions 💰
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-red-400 font-medium animate-bounce">
              ⚠️ WARNING: This investigation contains disturbing evidence of financial crimes ⚠️
            </p>
          </div>
        </motion.div>
      </SectionLayout>

      {/* Investigation Highlights */}
      <SectionLayout
        title="🚨 CRIMES THAT COULD SEND THEM TO PRISON FOR LIFE"
        description="These shocking revelations will make you question everything you thought you knew about the crypto industry"
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
