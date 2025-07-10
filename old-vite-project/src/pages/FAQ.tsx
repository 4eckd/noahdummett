import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  AlertTriangle,
  FileText,
  Search,
  Scale,
  Eye,
  DollarSign,
  Users
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 'investigation-overview',
    category: 'Investigation Overview',
    question: 'What is the Noah Dummett investigation about?',
    answer: 'This investigation examines allegations that Noah Dummett, co-founder of Shuffle.com, allegedly misappropriated over $25 million from the FTX bankruptcy estate. The investigation includes blockchain evidence, timeline analysis, and documentation of concerning practices in the crypto gambling industry.',
    icon: <Search className="h-5 w-5 text-blue-500" />
  },
  {
    id: 'evidence-sources',
    category: 'Evidence & Sources',
    question: 'What evidence supports these allegations?',
    answer: 'The investigation is based on publicly verifiable blockchain transactions, professional blockchain analysis from LinkedIn investigators, timeline correlations with FTX bankruptcy, and documented connections between Noah Dummett and suspicious fund movements. All blockchain evidence can be independently verified on Etherscan.',
    icon: <FileText className="h-5 w-5 text-green-500" />
  },
  {
    id: 'blockchain-proof',
    category: 'Evidence & Sources',
    question: 'How can I verify the blockchain evidence?',
    answer: 'All transaction hashes are provided and can be verified on Etherscan.io. Key transactions include: TXID1 (0x3e2563c...), TXID2 (0xdce984d...), and TXID3 (0x0dfe3dc...). These show direct connections between FTX hack addresses and Shuffle.com operations.',
    icon: <Shield className="h-5 w-5 text-purple-500" />
  },
  {
    id: 'noah-background',
    category: 'Key Figures',
    question: 'Who is Noah Dummett?',
    answer: 'Noah Dummett is a 26-year-old Australian citizen who worked as a trader at Alameda Research from October 2019 to April 2021. He left FTX/Alameda before the collapse and co-founded Shuffle.com in May 2022. He is currently CEO of the crypto gambling platform.',
    icon: <Users className="h-5 w-5 text-orange-500" />
  },
  {
    id: 'shuffle-connection',
    category: 'Key Figures',
    question: 'What is Shuffle.com and how is it connected?',
    answer: 'Shuffle.com is a crypto gambling platform co-founded by Noah Dummett and Ishan Haque in May 2022. The investigation alleges that stolen FTX funds were laundered through Shuffle operations, with blockchain evidence showing direct connections to casino hotwallets.',
    icon: <DollarSign className="h-5 w-5 text-red-500" />
  },
  {
    id: 'legal-status',
    category: 'Legal Matters',
    question: 'Have any formal charges been filed?',
    answer: 'No formal criminal charges have been filed against Noah Dummett or Shuffle.com at this time. These are allegations under investigation. The purpose of this platform is to present evidence for public accountability and to encourage proper investigation by authorities.',
    icon: <Scale className="h-5 w-5 text-yellow-500" />
  },
  {
    id: 'response-rights',
    category: 'Legal Matters',
    question: 'Can Noah Dummett or Shuffle.com respond to these allegations?',
    answer: 'Absolutely. Noah Dummett, Shuffle.com, and any mentioned parties have the right to respond to these allegations. We encourage transparency and welcome factual corrections or clarifications. Contact information is provided for legal correspondence.',
    icon: <Eye className="h-5 w-5 text-teal-500" />
  },
  {
    id: 'investigation-purpose',
    category: 'Investigation Overview',
    question: 'Why is this investigation important?',
    answer: 'This investigation serves the public interest by exposing potential misconduct in the Web3 gaming and cryptocurrency sectors. It aims to protect consumers, inform investors, encourage regulatory oversight, and ensure accountability for alleged crimes against FTX victims.',
    icon: <AlertTriangle className="h-5 w-5 text-red-500" />
  },
  {
    id: 'timeline-significance',
    category: 'Evidence & Sources',
    question: 'Why is the timing of events significant?',
    answer: 'The suspicious blockchain transactions occurred on November 7, 2022, just days before FTX filed for bankruptcy on November 11, 2022. This timing suggests potential advance knowledge of the collapse and systematic fund extraction before bankruptcy proceedings began.',
    icon: <FileText className="h-5 w-5 text-blue-500" />
  },
  {
    id: 'victim-impact',
    category: 'Legal Matters',
    question: 'How does this affect FTX victims?',
    answer: 'If proven true, these allegations represent additional funds that should have been available to FTX creditors and victims. The alleged $25+ million could have been used for victim compensation rather than funding a gambling platform.',
    icon: <Users className="h-5 w-5 text-red-500" />
  },
  {
    id: 'whistleblower-protection',
    category: 'Investigation Overview',
    question: 'How can someone safely provide additional evidence?',
    answer: 'We support whistleblower protection and handle all sources with appropriate confidentiality. Additional evidence can be submitted to hello@noahdummett.com. For maximum protection, consider contacting appropriate authorities directly.',
    icon: <Shield className="h-5 w-5 text-green-500" />
  },
  {
    id: 'accuracy-commitment',
    category: 'Investigation Overview',
    question: 'How do you ensure accuracy of information?',
    answer: 'We maintain strict standards for evidence inclusion, clearly distinguish between verified facts and allegations, and provide sources for all claims. Any factual errors brought to our attention are promptly corrected with appropriate notation.',
    icon: <Search className="h-5 w-5 text-purple-500" />
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Common questions about the Noah Dummett investigation, evidence, and legal matters"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investigation FAQ
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about the Noah Dummett investigation, 
              evidence sources, legal matters, and how you can contribute to accountability in Web3.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Category Filter */}
      <SectionLayout
        title="Browse by Category"
        description="Filter questions by topic to find what you're looking for"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All Questions ({faqData.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category} ({faqData.filter(item => item.category === category).length})
              </button>
            ))}
          </div>
        </motion.div>
      </SectionLayout>

      {/* FAQ Items */}
      <SectionLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-muted/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {item.question}
                          </h3>
                          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {openItems.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0">
                          <div className="pl-14">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionLayout>

      {/* Contact Section */}
      <SectionLayout
        title="Still Have Questions?"
        description="Can't find what you're looking for? Get in touch with our investigation team"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Need More Information?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our investigation team is committed to transparency and accountability. 
                If you have questions not covered here, additional evidence, or need clarification on any aspect of the investigation.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Investigation Team Email:</p>
                  <a 
                    href="mailto:hello@noahdummett.com" 
                    className="text-green-400 hover:text-green-300 font-medium text-lg"
                  >
                    hello@noahdummett.com
                  </a>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Response time: Within 48 hours</p>
                  <p>Evidence submissions welcome</p>
                  <p>Whistleblower protection available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default FAQ;
