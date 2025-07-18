# Changelog

All notable changes to the Noah Dummett Investigation Platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.6] - 2025-01-14

### Changed
- 🔍 **Lighthouse Audit Refactoring**: Removed PWA category from audit configuration and downstream processing
- 🛡️ **Error Handling**: Enhanced error handling with optional chaining and null checks for missing categories
- 📊 **Performance Thresholds**: Updated thresholds - Performance ≥90%, Accessibility ≥95%, Best Practices ≥90%, SEO ≥95%
- 🎯 **Safe Category Extraction**: Added `safeCategoryScore()` helper function for robust score extraction
- 📝 **Summary Generation**: Improved summary reports to gracefully handle missing categories with N/A display

### Added
- ✅ **Unit Tests**: Comprehensive test coverage for `safeCategoryScore()` function with edge case handling
- 📚 **Documentation**: Added detailed refactoring documentation in `docs/lighthouse-audit-refactoring.md`
- 🔧 **Jest Configuration**: Updated Jest config to support ES modules and improved test infrastructure

### Fixed
- 🐛 **Undefined Errors**: Eliminated potential "undefined" errors when Lighthouse categories are missing
- 🔄 **Graceful Degradation**: Scripts now handle incomplete Lighthouse results without crashing
- 📈 **Consistency**: Both `lighthouse-audit.mjs` and `run-lighthouse.mjs` now follow same patterns

### Technical
- 🛠️ **Code Quality**: Enhanced code robustness with comprehensive null checking and optional chaining
- 📦 **Backward Compatibility**: Maintained compatibility with existing Lighthouse reports
- 🧪 **Test Coverage**: 9 unit tests covering all edge cases and real-world scenarios

## [3.0.5] - 2025-01-11

### Fixed
- 🔥 **Critical Production Fix**: Resolved persistent MDX parsing errors causing build failures in production
- 🔧 **JSX Components**: Removed problematic custom JSX components (`<EvidenceBlock>`) causing MDX compilation conflicts
- 🔢 **Numbered Lists**: Fixed numbered lists that were causing character parsing issues
- 🎯 **Static Generation**: Ensured all 21 pages generate successfully without MDX conflicts
- ⚡ **Build Performance**: Optimized build time to 2.0s with stable compilation

### Changed
- 📝 **Markdown Format**: Converted custom JSX components to standard markdown headers for better compatibility
- 🔍 **List Format**: Changed numbered lists to bullet points to avoid parsing conflicts
- 📊 **Documentation Structure**: Simplified evidence documentation structure for better MDX compatibility
- 🎨 **Formatting**: Maintained visual consistency while improving technical stability

### Technical
- 🛠️ **MDX Compatibility**: Eliminated all MDX parsing conflicts with complex JSX components
- 📝 **Content Structure**: Optimized content structure for reliable static generation
- 🎯 **Error Resolution**: Resolved "Unexpected character `2` (U+0032) before name" MDX error
- 📦 **Build Stability**: Achieved consistent and reliable production builds

## [3.0.4] - 2025-01-11

### Fixed
- 🔧 **Production Build**: Fixed MDX parsing errors causing production build failures
- 📄 **Code Blocks**: Changed problematic `solidity` code blocks to `json` format in blockchain evidence
- 🏗️ **Static Generation**: Ensured all 21 pages generate successfully during build process
- 🎯 **MDX Compatibility**: Resolved character parsing conflicts in custom JSX components

### Changed
- 📊 **Data Format**: Restructured transaction data as JSON objects for better MDX compatibility
- 🔍 **Syntax Highlighting**: Updated code block syntax from `solidity` to `json` for blockchain evidence
- 📚 **Documentation**: Improved technical documentation rendering stability

### Technical
- 🛠️ **Build Process**: Optimized build time (2.0s vs previous 11.0s)
- 📦 **Bundle Size**: Maintained consistent bundle size with improved stability
- 🔍 **Error Handling**: Enhanced MDX error handling for complex content structures

## [3.0.3] - 2025-01-11

### Fixed
- 🐛 **MDX Syntax**: Fixed code block syntax highlighting from `ethereum` to `solidity` in blockchain evidence documentation
- 🔧 **Build Errors**: Resolved Next.js build compilation errors related to unsupported syntax highlighting
- 🧹 **Cache Issues**: Fixed development server warnings by clearing corrupted `.next` build cache
- ✅ **Playwright Tests**: Ensured comprehensive E2E testing suite works correctly with preview deployments

### Technical
- 🛠️ **MDX Processing**: Updated MDX components to properly handle Solidity syntax highlighting
- 📚 **Documentation**: Improved technical documentation rendering and build stability
- 🔍 **Code Quality**: Enhanced code block presentation in evidence analysis documents

## [3.0.2] - 2025-07-09

### Added
- 🏗️ **Project Structure**: Reorganized project structure - moved from nested `next-investigation` directory to root
- 📋 **Deployment Guide**: Comprehensive deployment documentation in `docs/DEPLOYMENT_GUIDE.md`
- 🔒 **Security Enhancement**: Improved security headers and configuration guidelines
- 📊 **Performance Optimization**: Additional performance improvements and monitoring
- 🛠️ **Documentation**: Enhanced technical documentation and troubleshooting guides
- ✅ **Verification Checklist**: Complete verification checklist implementation
- 🧪 **Playwright Testing**: Comprehensive E2E testing suite for preview deployments
- 📱 **Mobile Testing**: Cross-theme mobile viewport testing automation
- 🔍 **Accessibility Testing**: Automated accessibility validation in test suite

### Changed
- 📝 **README**: Updated version badges and documentation links
- 🔍 **Version Management**: Comprehensive version bump procedures
- 📊 **Domain Links**: Verified and updated all domain references
- 🏗️ **Codebase Organization**: Cleaned up project structure and archived old Vite-based files
- 📅 **Changelog**: Corrected all release dates to reflect accurate timeline

### Fixed
- 🔗 **Documentation Links**: Fixed broken internal documentation links
- 📝 **Version Consistency**: Ensured consistent version numbering across all files
- 🏗️ **Project Structure**: Resolved nested directory issues and simplified deployment

## [3.0.1] - 2025-07-08

### Added
- 📋 **Initial Deployment Guide**: Basic deployment documentation
- ✅ **Verification Checklist**: Initial verification checklist implementation

### Fixed
- 📝 **Version Consistency**: Basic version numbering fixes

## [3.0.0] - 2025-07-05

### Added
- 🌐 **Subdomain Routing**: Complete implementation of docs.noahdummett.com subdomain routing through Next.js middleware
- 🧪 **Comprehensive Testing Suite**: 
  - Unit tests with Jest for middleware and utilities
  - E2E tests with Playwright for cross-browser compatibility
  - Performance tests with Lighthouse auditing
  - Automated test scripts for CI/CD integration
- 🔒 **Enhanced Security**: Professional security headers implementation
- 📊 **Performance Optimizations**: Build optimizations and static generation improvements
- 📚 **Documentation**: Comprehensive technical documentation including subdomain routing guide
- 🛠️ **Development Tools**: Enhanced development workflow with improved scripts

### Changed
- ⬆️ **Framework Upgrade**: Updated from Next.js 14 to Next.js 15
- 📱 **Responsive Design**: Enhanced mobile-first approach with improved navigation
- 🎨 **UI/UX Improvements**: Refined investigation themes and component consistency
- 🔧 **Build System**: Optimized build configuration for production deployment

### Fixed
- 🐛 **Routing Issues**: Resolved subdomain routing edge cases and hostname handling
- 🔍 **SEO Optimizations**: Improved search engine optimization for documentation pages
- 📈 **Performance**: Reduced bundle size and improved loading times
- 🔗 **Link Management**: Fixed broken links and improved internal navigation

### Security
- 🛡️ **Security Headers**: Implementation of comprehensive security headers
- 🔐 **Environment Variables**: Secure handling of sensitive configuration
- 🚨 **Input Validation**: Enhanced validation for all user inputs

## [2.0.0] - 2025-06-15

### Added
- 🎨 **Theme System**: Multiple investigation themes (Dark, Violet, Emerald, Amber, Aurora)
- 📱 **Mobile-First Design**: Responsive design optimized for all device sizes
- 🔗 **Blockchain Integration**: Enhanced transaction analysis and verification
- 📊 **Evidence System**: Specialized components for investigation data presentation
- ⚖️ **Legal Compliance**: Professional legal documentation system
- 🧪 **Testing Infrastructure**: Initial Jest and testing setup
- 📚 **Documentation System**: MDX-based documentation framework
- 🎯 **Navigation System**: Advanced navigation with breadcrumbs and search

### Changed
- 🏗️ **Architecture**: Migrated to Next.js 14 App Router
- 🎯 **User Experience**: Improved navigation and content organization
- 📈 **Performance**: Optimized loading and rendering performance
- 🔧 **Build System**: Enhanced build configuration and optimization
- 📱 **Responsive Design**: Complete mobile-first responsive redesign

### Fixed
- 🐛 **Browser Compatibility**: Cross-browser compatibility improvements
- 📱 **Mobile Issues**: Mobile-specific bugs and layout issues
- 🔍 **Search Functionality**: Enhanced search and navigation features
- 🎨 **Theme Consistency**: Unified theme application across all components

### Security
- 🛡️ **Enhanced Security**: Improved security headers and CSP policies
- 🔐 **Environment Management**: Secure environment variable handling
- 🚨 **Input Validation**: Comprehensive input validation and sanitization

## [1.0.0] - 2025-05-20

### Added
- 🎆 **Initial Release**: Core investigation platform with React/Vite foundation
- 📝 **Content Management**: Basic content structure and organization
- 🔍 **Investigation Framework**: Foundation for evidence presentation
- 📱 **Basic Responsive Design**: Initial mobile compatibility
- 🎨 **Theme Foundation**: Basic theming system with CSS variables
- 🔧 **Development Tools**: ESLint, Prettier, and TypeScript configuration
- 📦 **Build System**: Vite-based build system with optimization
- 🧪 **Testing Setup**: Vitest testing framework integration

### Security
- 🔒 **Basic Security**: Initial security measures and best practices
- 📋 **Legal Framework**: Basic legal compliance and disclaimers
- 🔐 **Environment Setup**: Secure environment variable handling

### Infrastructure
- 🌐 **Deployment**: Vercel deployment configuration
- 📊 **Analytics**: Basic analytics integration
- 🔍 **SEO**: Initial SEO optimization and meta tags

## [Unreleased]

### Planned
- 🤖 **AI Integration**: Automated evidence analysis and categorization
- 🌍 **Internationalization**: Multi-language support for global accessibility
- 📊 **Advanced Analytics**: Enhanced performance and user behavior tracking
- 🔍 **Search Enhancement**: Advanced search capabilities with filtering
- 📱 **PWA Support**: Progressive Web App functionality
- 🔄 **Real-time Updates**: Live evidence updates and notifications

---
## Version Support

| Version | Status | Support Level | End of Life |
|---------|--------|---------------|--------------|
| 3.0.x   | ✅ Active | Full support | TBD |
| 2.0.x   | ⚠️ Maintenance | Security only | 2025-12-01 |
| 1.0.x   | ❌ Deprecated | None | 2025-08-01 |

## Migration Guides

### Upgrading from v3.0.1 to v3.0.2
- No breaking changes - structure reorganization only
- Update any deployment scripts referencing `next-investigation` subdirectory
- Verify all paths in CI/CD configurations

### Upgrading from v2.0.0 to v3.0.0
- Update Next.js from version 14 to version 15
- Configure subdomain routing in your deployment (docs.noahdummett.com)
- Update test scripts to use new Playwright testing infrastructure
- Review and update security headers configuration
- Update middleware configuration for subdomain handling
- Replace Jest with new testing setup if using custom tests

### Upgrading from v1.0.0 to v2.0.0
- **BREAKING**: Migrate from Vite to Next.js 14 App Router
- **BREAKING**: Update theme system from CSS variables to Tailwind-based themes
- **BREAKING**: Replace React Router with Next.js App Router navigation
- Update all component imports and file structure
- Implement responsive design improvements
- Update legal compliance documentation
- Replace Vitest with Jest for testing
- Update build scripts from Vite to Next.js
- Update legal compliance documentation

## Contributing

For information on contributing to this project, please see our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
