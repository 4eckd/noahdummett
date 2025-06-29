import React from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  Shield,
  AlertTriangle,
  FileText,
  Eye,
  Users,
  Clock,
  Info
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { PageLayout, SectionLayout } from '@/components/layout/Layout';

const legalSections = [
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Legal Disclaimer',
    content: 'All allegations presented on this platform are based on publicly available information, community reports, and documented evidence. These claims are presented as allegations pending proper investigation by appropriate authorities. This platform does not constitute legal advice and is intended for informational and accountability purposes only.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: 'Evidence Standards',
    content: 'All evidence presented has been verified for authenticity where possible. Documents include IRS Form 211 filings, blockchain transaction data, legal pleadings, and community testimonials. We maintain strict standards for evidence inclusion and clearly distinguish between verified facts and allegations.'
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
    title: 'Public Interest',
    content: 'This investigation serves the public interest by exposing potential misconduct in the Web3 gaming and cryptocurrency sectors. The information presented aims to protect consumers, inform investors, and encourage regulatory oversight of concerning practices.'
  },
  {
    icon: <FileText className="h-8 w-8 text-red-500" />,
    title: 'Whistleblower Protection',
    content: 'We support and protect whistleblowers who provide evidence of misconduct. All sources are handled with appropriate confidentiality measures. If you have additional evidence or information, please contact appropriate authorities directly.'
  }
];

const rightsAndResponsibilities = [
  {
    title: 'Right to Response',
    description: 'Noah Dummett, Shuffle.com, and any mentioned parties have the right to respond to these allegations. We encourage transparency and welcome factual corrections or clarifications.'
  },
  {
    title: 'Accuracy Commitment',
    description: 'We strive for accuracy in all presented information. Any factual errors brought to our attention will be promptly corrected with appropriate notation.'
  },
  {
    title: 'Source Protection',
    description: 'We protect the identity of sources and whistleblowers while maintaining the integrity of evidence presented.'
  },
  {
    title: 'Regulatory Cooperation',
    description: 'We fully cooperate with legitimate regulatory and law enforcement investigations and encourage proper authorities to investigate these matters.'
  }
];

const complianceStandards = [
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: 'Transparency',
    description: 'All evidence sources are clearly identified and documented where legally permissible.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Community Protection',
    description: 'Our primary goal is protecting vulnerable users and the broader crypto community.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Timely Updates',
    description: 'Information is updated as new evidence becomes available or circumstances change.'
  },
  {
    icon: <Info className="h-6 w-6 text-primary" />,
    title: 'Educational Purpose',
    description: 'Content serves to educate the public about potential risks in Web3 platforms.'
  }
];

export const Legal: React.FC = () => {
  return (
    <PageLayout
      title="Legal Information & Disclaimers"
      description="Important legal information regarding the Noah Dummett investigation"
    >
      {/* Legal Disclaimer Hero */}
      <SectionLayout
        title="Legal Framework & Compliance"
        description="Understanding the legal basis and standards for this investigation"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Important Legal Notice
                  </h3>
                  <p className="text-muted-foreground">
                    This platform operates within legal frameworks designed to protect public interest while respecting individual rights.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Allegation-Based Content:</strong> All claims presented are allegations based on available evidence and community reports. These allegations are pending proper investigation by appropriate authorities and should not be considered established facts until proven in a court of law.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">Public Interest Justification:</strong> This investigation serves the public interest by exposing potential misconduct that could harm consumers, investors, and the broader cryptocurrency ecosystem. The information presented aims to encourage transparency and proper regulatory oversight.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">Evidence Standards:</strong> We maintain high standards for evidence inclusion and clearly distinguish between verified facts, documented allegations, and community reports. All sources are identified where legally permissible.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Legal Sections */}
      <SectionLayout
        title="Legal Framework"
        description="Key legal principles governing this investigation"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {legalSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Rights and Responsibilities */}
      <SectionLayout
        title="Rights and Responsibilities"
        description="Balancing accountability with fairness and due process"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rightsAndResponsibilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionLayout>

      {/* Compliance Standards */}
      <SectionLayout
        title="Compliance Standards"
        description="Our commitment to ethical and legal investigation practices"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      {standard.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {standard.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {standard.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>

      {/* Legal Contact Information */}
      <SectionLayout
        title="Legal Contact & Terms"
        description="Contact information and terms of use for this investigation platform"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Scale className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-foreground">Legal Contact</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Legal Team Email:</p>
                    <a
                      href="mailto:hello@noahdummett.com"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      hello@noahdummett.com
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• Legal inquiries and corrections</p>
                    <p>• Right to response requests</p>
                    <p>• Evidence submissions</p>
                    <p>• Whistleblower communications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-teal-500/5 border-green-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-foreground">Terms of Use</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Acceptance:</strong> By accessing this site, you agree to these terms and our privacy policy.
                  </p>
                  <p>
                    <strong className="text-foreground">Content Use:</strong> Information is provided for educational and accountability purposes. Commercial use prohibited.
                  </p>
                  <p>
                    <strong className="text-foreground">Accuracy:</strong> While we strive for accuracy, information is provided "as is" without warranties.
                  </p>
                  <p>
                    <strong className="text-foreground">Updates:</strong> Terms may be updated. Continued use constitutes acceptance of changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Important Legal Notice</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This website contains allegations and claims currently under investigation. Noah Dummett and Shuffle.com
                    have not been formally charged with crimes related to these allegations. All blockchain data referenced
                    is publicly verifiable. This platform serves the public interest in accountability and transparency.
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <p>Last updated: December 17, 2024</p>
                    <p>Governing law: International public interest journalism standards</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Legal;
