import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Search,
  FileText,
  TrendingDown,
  Shield,
  Eye,
  DollarSign,
  Users,
  Clock,
  Target
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const concerningFactors = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: 'FTX Connection',
    concern: 'Former FTX employee launching crypto gambling platform',
    details: 'Noah Dummett worked at FTX before its spectacular collapse and legal troubles. The timing of Shuffle.com\'s launch raises questions about operational practices and fund sources.',
    impact: 'Community trust and regulatory scrutiny'
  },
  {
    icon: <Eye className="h-8 w-8 text-red-500" />,
    title: 'Anonymous Leadership Structure',
    concern: 'Key personnel operating under aliases',
    details: 'Critical team members like "Cam" and "Brett" use pseudonyms, making accountability and background verification impossible for users and regulators.',
    impact: 'Lack of transparency and accountability'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-red-500" />,
    title: 'Operational Similarities',
    concern: 'Potential replication of problematic practices',
    details: 'Given the founder\'s background, there are legitimate concerns about whether Shuffle.com employs similar operational strategies that contributed to FTX\'s downfall.',
    impact: 'User fund security and platform stability'
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: 'Community Concerns',
    concern: 'Reports of unethical behavior toward vulnerable users',
    details: 'Allegations suggest inappropriate handling of gambling addiction cases and disrespectful treatment of users seeking help.',
    impact: 'Harm to vulnerable populations'
  }
];

const investigativeActions = [
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: 'Due Diligence Required',
    description: 'Thorough investigation of leadership backgrounds and operational practices is essential.'
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: 'Transparency Demanded',
    description: 'Full disclosure of team identities, funding sources, and operational procedures.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Regulatory Oversight',
    description: 'Proper regulatory scrutiny and compliance verification for user protection.'
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: 'Community Vigilance',
    description: 'Ongoing monitoring and reporting of suspicious activities or concerning practices.'
  }
];

const timelineEvents = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'FTX Employment',
    description: 'Worked at FTX during its operational period before the spectacular collapse and legal proceedings.',
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-red-500" />,
    title: 'FTX Collapse',
    description: 'FTX filed for bankruptcy amid allegations of fraud, mismanagement, and misuse of customer funds.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Shuffle Launch',
    description: 'Founded Shuffle.com in February 2023, shortly after the FTX collapse, raising questions about timing and funding.',
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: 'Community Concerns',
    description: 'Growing allegations and concerns from the crypto community about operational practices and transparency.',
  },
];

export const About: React.FC = () => {
  return (
    <PageLayout
      title="Noah Dummett: A Critical Analysis"
      description="Examining the controversial founder of Shuffle.com and his impact on Web3 gaming"
    >
      {/* Hero Section */}
      <SectionLayout
        title="The Shuffle Phenomenon: A Web3 Controversy"
        description="Investigating the rise of a crypto gambling empire built on questionable foundations"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Noah Dummett has emerged as one of the most controversial figures in the Web3 gaming space. 
                As the founder and CEO of Shuffle.com, he has built what appears to be a successful crypto 
                gambling platform, but beneath the surface lies a web of concerning connections, questionable 
                practices, and troubling allegations that demand serious scrutiny.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This analysis examines the troubling patterns, concerning connections, and mounting evidence 
                that suggests Shuffle.com may represent everything wrong with the current state of Web3 
                entrepreneurship - where past failures are quickly forgotten and accountability is optional.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Concerning Factors Analysis */}
      <SectionLayout
        title="Red Flags and Concerning Patterns"
        description="Critical issues that demand investigation and transparency"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {concerningFactors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full border-red-500/20">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-red-500">Concern:</span> {item.concern}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-orange-500 mb-2">Details:</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm font-medium text-red-400 mb-1">Potential Impact:</p>
                      <p className="text-sm text-muted-foreground">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Required Actions */}
      <SectionLayout
        title="Critical Actions Required"
        description="What the community and regulators must demand for accountability"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {investigativeActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      {action.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {action.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {action.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Timeline Section */}
      <SectionLayout
        title="Timeline of Controversy"
        description="The concerning sequence of events that led to Shuffle.com's creation"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {event.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {event.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Evidence and Documentation */}
      <SectionLayout
        title="Evidence and Documentation"
        description="The mounting proof that demands immediate attention"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-red-500" />
                  <h4 className="text-lg font-semibold text-foreground">
                    Legal Documentation
                  </h4>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>IRS Form 211:</strong> Whistleblower documentation filed with federal authorities
                      <a href="/downloads/terry IRS_Form_211.pdf" download className="ml-2 text-blue-400 hover:text-blue-300 text-sm">[Download PDF]</a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Shuffle Pleadings:</strong> Legal documents outlining specific allegations
                      <a href="/downloads/Shuffle-Pleading.pdf" download className="ml-2 text-blue-400 hover:text-blue-300 text-sm">[Download PDF]</a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Chain Data Analysis:</strong> Blockchain evidence of suspicious transactions
                      <a href="/downloads/Shuffle-Chain-Data.pdf" download className="ml-2 text-blue-400 hover:text-blue-300 text-sm">[Download PDF]</a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Demand Letters:</strong> Formal requests for transparency and accountability
                      <a href="/downloads/Shuffle-Demand.pdf" download className="ml-2 text-blue-400 hover:text-blue-300 text-sm">[Download PDF]</a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Synopsis Reports:</strong> Comprehensive analysis of operational concerns
                      <a href="/downloads/Shuffle Synapsis (2).pdf" download className="ml-2 text-blue-400 hover:text-blue-300 text-sm">[Download PDF]</a>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Search className="h-6 w-6 text-orange-500" />
                  <h4 className="text-lg font-semibold text-foreground">
                    Community Investigations
                  </h4>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Bitcoin Talk Forums:</strong> Detailed community discussions and allegations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>User Testimonials:</strong> Reports of unethical treatment and concerning practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Transaction Analysis:</strong> Independent blockchain investigations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Background Research:</strong> Connections to FTX and other concerning entities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Regulatory Concerns:</strong> Questions about compliance and oversight</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </SectionLayout>

      {/* Call to Action */}
      <SectionLayout
        title="The Stakes Are Real"
        description="Why this matters for the entire Web3 ecosystem"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-red-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">$20M+</h4>
                <p className="text-sm text-muted-foreground">Alleged Misappropriated Funds</p>
                <p className="text-xs text-muted-foreground mt-2">Claims of funds taken from FTX bankruptcy estate</p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">1000s</h4>
                <p className="text-sm text-muted-foreground">Potentially Affected Users</p>
                <p className="text-xs text-muted-foreground mt-2">Gamblers and crypto enthusiasts at risk</p>
              </CardContent>
            </Card>

            <Card className="text-center border-yellow-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">0</h4>
                <p className="text-sm text-muted-foreground">Accountability Measures</p>
                <p className="text-xs text-muted-foreground mt-2">No meaningful oversight or transparency</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </SectionLayout>

      {/* Conclusion */}
      <SectionLayout
        title="The Web3 Industry Deserves Better"
        description="A call for accountability, transparency, and genuine innovation"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
            <CardContent className="p-8">
              <div className="space-y-6 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">
                      Protecting the Future of Web3
                    </h4>
                    <p className="text-sm text-red-500">Accountability Through Transparency</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  The Noah Dummett and Shuffle.com case represents everything that's wrong with the current
                  state of Web3 entrepreneurship. When individuals with questionable backgrounds and concerning
                  connections can launch major platforms without proper scrutiny, the entire ecosystem suffers.
                  The crypto community deserves leaders who operate with transparency, integrity, and genuine
                  concern for user welfare.
                </p>

                <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  This analysis serves as a wake-up call for investors, users, and regulators. We cannot allow
                  the promise of Web3 innovation to be hijacked by those who prioritize profit over principles.
                  The evidence is mounting, the concerns are real, and the time for action is now.
                </p>

                <div className="pt-6 border-t border-border">
                  <p className="text-lg font-semibold text-foreground mb-4">
                    The Web3 industry must demand better. Users deserve protection. Accountability is not optional.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This investigation continues. More evidence will be revealed. Justice will be pursued.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default About;
