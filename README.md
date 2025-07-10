# 🚨 Noah Dummett Investigation Platform - Next.js 15

> **Professional Web3 Accountability Investigation - Modern Architecture Implementation**

A comprehensive investigation platform exposing concerning allegations surrounding Noah Dummett, founder and CEO of Shuffle.com. Built using Next.js 15 with professional architecture, subdomain routing, and comprehensive testing to present evidence-based analysis while maintaining legal compliance and credibility.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Version](https://img.shields.io/badge/Version-3.0.2-blue?style=for-the-badge)](https://github.com/4eckd/noahdummett)

## 🎯 **Critical Allegations**

- **$25M+ alleged fund misappropriation** from FTX bankruptcy estate
- **Anonymous leadership structure** with key personnel using aliases
- **Unethical treatment** of vulnerable gambling users
- **Operational pattern concerns** linking to FTX practices

## 🏗️ **Modern Architecture**

### **Tech Stack**
- **Next.js 15** - App Router, Server Components, Turbopack
- **TypeScript** - Full type safety with strict mode
- **Tailwind CSS v4** - Modern utility-first styling
- **MDX** - Markdown with React components for evidence
- **Framer Motion** - Professional animations
- **Lucide React** - Consistent icon system
- **Middleware** - Custom subdomain routing for docs.noahdummett.com

### **Key Features**
- ⚡ **Lightning Fast** - Next.js 15 with Turbopack
- 🌐 **Subdomain Routing** - Dedicated docs.noahdummett.com subdomain
- 🎨 **5 Investigation Themes** - Dark, Violet, Emerald, Amber, Aurora
- 🔒 **Type Safe** - Comprehensive TypeScript implementation
- 📱 **Mobile-First** - Responsive design optimized for all devices
- 🚀 **Production Ready** - Professional deployment configuration
- 📊 **Evidence-Focused** - Specialized components for investigation data
- 🔗 **Blockchain Integration** - Transaction analysis and verification
- ⚖️ **Legal Compliance** - Professional legal documentation system
- 🧪 **Comprehensive Testing** - Unit, E2E, and performance tests

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/4eckd/noahdummett.git
cd noahdummett

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Lint code
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests
npm run test:all     # Run all tests including performance
./deploy-investigation.sh  # Deploy to Vercel
```

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage - investigation overview
│   ├── (docs)/            # Subdomain routing group
│   │   └── docs/          # Documentation pages
│   ├── noah-dummett/      # Detailed investigation files
│   ├── evidence/          # Evidence archive system
│   ├── legal/             # Legal documentation
│   └── globals.css        # Global styles with theme system
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── ui/                # Reusable UI components
│   └── docs/              # Documentation components
├── providers/             # React context providers
├── lib/                   # Utility functions
├── content/               # MDX content and evidence files
├── middleware.ts          # Subdomain routing middleware
├── __tests__/             # Unit tests
├── tests/                 # E2E tests
└── docs/                  # Project documentation
```

## 🎨 **Theme System**

Professional investigation themes optimized for evidence presentation:

- **Dark** - Primary investigation theme with red accents
- **Violet** - Purple-themed variant for legal documentation
- **Emerald** - Green-themed variant for evidence analysis
- **Amber** - Orange-themed variant for blockchain data
- **Aurora** - Gradient variant for special presentations

## 🌐 **Subdomain Routing**

### Architecture
The platform implements sophisticated subdomain routing for optimal user experience:

- **Main Domain**: `noahdummett.com` - Investigation platform
- **Docs Subdomain**: `docs.noahdummett.com` - Documentation hub
- **Seamless Integration**: Middleware-powered routing without redirects

### Features
- ⚡ **Zero Redirect** - Direct path rewriting for performance
- 🔒 **Secure Headers** - Professional security implementation
- 📱 **Mobile Optimized** - Responsive design across all subdomains
- 🚀 **Production Ready** - Vercel-optimized deployment

### Technical Implementation
```typescript
// Middleware automatically rewrites docs.noahdummett.com to /docs paths
const DOCS_DOMAIN = 'docs.noahdummett.com';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') ?? '';
  if (hostname === DOCS_DOMAIN) {
    // Rewrite to /docs path structure
  }
}
```

## 📊 **Evidence System**

### Evidence Categories
- **Blockchain Evidence** - On-chain transaction analysis
- **Legal Documentation** - Whistleblower reports and filings
- **Platform Analysis** - Trustpilot, Reddit, Casino Guru investigations
- **Community Research** - Independent investigations and findings

## 🔗 **Blockchain Integration**

Professional blockchain analysis with:
- Transaction hash verification
- Etherscan integration
- Amount tracking and visualization
- Timeline analysis
- Professional analyst validation

## 🧪 **Testing Infrastructure**

### Unit Testing
- **Framework**: Jest with TypeScript support
- **Coverage**: Middleware, utilities, and components
- **Focus**: Subdomain routing logic and edge cases

### E2E Testing
- **Framework**: Playwright with multi-browser support
- **Coverage**: Cross-browser compatibility (Chromium, Firefox, WebKit)
- **Features**: Responsive design, navigation, accessibility

### Preview Deployment Testing
- **Framework**: Playwright with VERCEL_URL integration
- **Coverage**: Homepage (200 status), docs subdomain rewrite, cross-domain navigation
- **Visual Regression**: Mobile viewport snapshots across 5 themes
- **CI/CD**: Automated testing on every PR with build failure on issues

### Performance Testing
- **Tool**: Lighthouse auditing
- **Metrics**: Performance, accessibility, SEO, best practices
- **Automation**: CI/CD integration for continuous monitoring

### Quality Assurance
```bash
npm run test         # Unit tests
npm run test:e2e     # End-to-end tests
npm run test:preview # Preview deployment tests
npm run test:lighthouse # Performance audits
npm run test:all     # Complete test suite
```

## ⚖️ **Legal Compliance**

- **Whistleblower Protection** - IRS Form 211 compliance
- **Evidence Standards** - Professional legal documentation
- **Verification Guidelines** - Independent evidence verification
- **Disclaimer System** - Proper legal notices and disclaimers

## 🚀 **Deployment**

### Vercel (Recommended)

```bash
# Automated deployment
./deploy-investigation.sh

# Manual deployment
npm run build
vercel --prod
```

## 🔒 **Security**

Professional security implementation:
- Security headers (XSS, CSRF, etc.)
- Environment variable protection
- Legal compliance safeguards
- Evidence verification systems

## 📈 **Performance**

Optimized for investigation platform needs:
- Next.js 14 App Router optimization
- Static generation for evidence pages
- Image optimization for evidence photos
- Code splitting for large evidence datasets
- Turbopack for fast development

## 📚 **Documentation**

- **Main Investigation**: [noahdummett.com](https://noahdummett.com)
- **Documentation Hub**: [docs.noahdummett.com](https://docs.noahdummett.com)
- **Evidence Archive**: [noahdummett.com/evidence](https://noahdummett.com/evidence)
- **Legal Documentation**: [noahdummett.com/legal](https://noahdummett.com/legal)
- **Technical Documentation**: [docs.noahdummett.com/technical](https://docs.noahdummett.com/technical)
- **Subdomain Routing Guide**: [docs/SUBDOMAIN_ROUTING.md](docs/SUBDOMAIN_ROUTING.md)
- **Deployment Guide**: [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md)
- **Verification Checklist**: [docs/VERIFICATION_CHECKLIST.md](docs/VERIFICATION_CHECKLIST.md)

## 📝 **Version History**

### v3.0.2 (Current)
- 🏗️ **Project Structure**: Reorganized from nested directory to root level
- 📋 **Deployment Guide**: Comprehensive deployment documentation
- 🔒 **Security Enhancement**: Improved security headers and configuration
- 📊 **Performance**: Additional performance optimizations
- 🛠️ **Documentation**: Enhanced technical documentation
- ✅ **Verification**: Complete verification checklist implementation
- 🧪 **Testing Suite**: Comprehensive E2E and performance testing
- 📅 **Changelog**: Corrected all release dates and documentation

### v3.0.1
- 📋 **Initial Deployment Guide**: Basic deployment documentation
- ✅ **Verification Checklist**: Initial verification checklist implementation

### v3.0.0
- 🌐 **Subdomain Routing**: Complete docs.noahdummett.com implementation
- 🚀 **Next.js 15**: Upgrade to latest framework version
- 🧪 **Testing Suite**: Comprehensive unit, E2E, and performance tests
- 🔒 **Security**: Enhanced headers and middleware protection
- 📊 **Performance**: Optimized builds and static generation

### v2.0.0
- 🎨 **Theme System**: Multiple investigation themes
- 📱 **Responsive Design**: Mobile-first approach
- 🔗 **Blockchain Integration**: Enhanced transaction analysis

### v1.0.0
- 🎆 **Initial Release**: Core investigation platform

## ⚖️ **Legal Notice**

**Important**: The allegations presented in this investigation have not been proven in a court of law. Noah Dummett and Shuffle.com have not been formally charged with any crimes related to these allegations. All blockchain evidence is independently verifiable on the Ethereum blockchain.

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Built with ❤️ by [Fused Gaming](https://linkedin.com/in/fusedgaming)
- Professional blockchain analysis by independent researchers
- Legal guidance from qualified legal counsel
- Community support from Web3 accountability advocates

---

**🚨 Investigation Status**: Active - v3.0.2 Production Ready
**🌐 Subdomain Routing**: docs.noahdummett.com fully operational  
**📊 Evidence Sources**: 150+ independently verifiable  
**⚖️ Legal Compliance**: Professional standards maintained  
**🔗 Blockchain Evidence**: 5 key transactions verified  
**🧪 Testing Coverage**: Unit, E2E, and performance tests passing  
**🚀 Performance**: Optimized builds with Next.js 15  
**🏗️ Project Structure**: Clean organization and deployment

**Ready to expose Web3 fraud and bring accountability to the crypto gambling industry? 🚀**
