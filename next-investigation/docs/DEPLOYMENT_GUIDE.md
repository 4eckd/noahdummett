# 🚀 Deployment Guide - Noah Dummett Investigation Platform

> **Professional deployment procedures for Next.js 15 investigation platform with subdomain routing**

## 📋 Overview

This guide provides comprehensive instructions for deploying the Noah Dummett Investigation Platform to production environments. The platform requires specific configuration for subdomain routing and security implementations.

## 🛠️ Prerequisites

### System Requirements
- Node.js 18+ with npm 9+
- Git version control
- Vercel CLI (recommended) or compatible hosting platform
- Domain access for subdomain configuration

### Environment Setup
```bash
# Verify Node.js version
node --version  # Should be 18+

# Verify npm version
npm --version   # Should be 9+

# Install Vercel CLI globally
npm install -g vercel
```

## 📦 Pre-Deployment Checklist

### 1. Code Quality & Testing
- [ ] All unit tests passing (`npm run test`)
- [ ] E2E tests passing (`npm run test:e2e`)
- [ ] Performance audits completed (`npm run test:lighthouse`)
- [ ] Code linting successful (`npm run lint`)
- [ ] TypeScript compilation successful (`npm run build`)

### 2. Security & Configuration
- [ ] Environment variables properly configured
- [ ] Security headers implemented in middleware
- [ ] SSL certificate ready for custom domain
- [ ] Subdomain DNS records prepared

### 3. Content & Documentation
- [ ] All investigation content reviewed and verified
- [ ] Legal disclaimers updated
- [ ] Documentation links functional
- [ ] Evidence sources verified

## 🚀 Deployment Procedures

### Method 1: Automated Deployment (Recommended)

#### Using the Deployment Script
```bash
# Make script executable (Linux/Mac)
chmod +x deploy-investigation.sh

# Run deployment script
./deploy-investigation.sh
```

#### Script Features
- Automatic dependency verification
- Build process validation
- Production deployment to Vercel
- Domain configuration verification
- Post-deployment health checks

### Method 2: Manual Deployment

#### Step 1: Build Preparation
```bash
# Install dependencies
npm install

# Run full test suite
npm run test:all

# Build for production
npm run build
```

#### Step 2: Vercel Deployment
```bash
# Initialize Vercel project (first time only)
vercel

# Deploy to production
vercel --prod
```

#### Step 3: Domain Configuration
```bash
# Add custom domain
vercel domains add noahdummett.com

# Add subdomain
vercel domains add docs.noahdummett.com
```

## 🌐 Subdomain Routing Configuration

### DNS Configuration
Configure the following DNS records with your domain provider:

```dns
# Main domain
noahdummett.com          A     76.76.21.21
www.noahdummett.com      CNAME noahdummett.com

# Documentation subdomain
docs.noahdummett.com     CNAME noahdummett.com
```

### Vercel Configuration
The platform uses `vercel.json` for environment configuration:

```json
{
  "env": {
    "DOCS_DOMAIN": "docs.noahdummett.com"
  }
}
```

### Middleware Configuration
The Next.js middleware handles subdomain routing automatically:

```typescript
// middleware.ts
const DOCS_DOMAIN = 'docs.noahdummett.com';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') ?? '';
  
  if (hostname === DOCS_DOMAIN) {
    // Automatic rewrite to /docs path structure
    return NextResponse.rewrite(new URL(`/docs${req.nextUrl.pathname}`, req.url));
  }
}
```

## 🔒 Security Implementation

### Security Headers
The platform implements comprehensive security headers:

```typescript
// Security headers configuration
const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'..."
};
```

### Environment Variables
Secure configuration for sensitive data:

```bash
# .env.local (never commit to repository)
DOCS_DOMAIN=docs.noahdummett.com
NEXT_PUBLIC_VERCEL_ENV=production
```

## 📊 Performance Optimization

### Build Optimization
```json
{
  "scripts": {
    "build": "next build",
    "vercel-build": "next build"
  }
}
```

### Static Generation
The platform uses static generation for optimal performance:
- Investigation pages: Static generation
- Documentation: Static generation
- Evidence archives: Static generation with ISR

## 🧪 Post-Deployment Verification

### Automated Testing
```bash
# Run deployment verification tests
npm run test:preview

# Performance audit
npm run test:lighthouse

# Full verification suite
npm run test:all
```

### Manual Verification Checklist
- [ ] **Main Domain**: https://noahdummett.com loads correctly
- [ ] **Documentation**: https://docs.noahdummett.com routes properly
- [ ] **Navigation**: Cross-domain navigation functions
- [ ] **Mobile**: Responsive design on mobile devices
- [ ] **Themes**: All 5 investigation themes work
- [ ] **Security**: Security headers present
- [ ] **Performance**: Lighthouse scores above 90
- [ ] **SSL**: HTTPS enforced on all domains

## 🔄 Deployment Workflow

### Development to Production
1. **Feature Development**: Work on feature branches
2. **Testing**: Run comprehensive test suite
3. **Preview Deployment**: Deploy to Vercel preview
4. **Review**: Code review and testing
5. **Production**: Merge to main and deploy

### Continuous Integration
```yaml
# GitHub Actions workflow
name: Deploy Investigation Platform
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm run test:all
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🛠️ Troubleshooting

### Common Issues

#### Subdomain Routing Not Working
```bash
# Check DNS propagation
nslookup docs.noahdummett.com

# Verify Vercel domain configuration
vercel domains ls

# Check middleware configuration
grep -r "DOCS_DOMAIN" .
```

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Run build locally
npm run build
```

#### Performance Issues
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Run performance audit
npm run test:lighthouse
```

## 📋 Version Management

### Current Version: v3.0.1
- Enhanced deployment procedures
- Improved security configuration
- Performance optimizations
- Comprehensive testing suite

### Deployment Log
```bash
# Version 3.0.1 - 2025-01-09
- Updated deployment documentation
- Enhanced security headers
- Improved subdomain routing
- Performance optimizations
```

## 🆘 Support & Maintenance

### Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Error Tracking**: Automatic error detection
- **Performance**: Lighthouse CI integration

### Maintenance Schedule
- **Weekly**: Security updates and dependency updates
- **Monthly**: Performance audits and optimization
- **Quarterly**: Comprehensive security review

### Emergency Procedures
1. **Rollback**: Use Vercel deployment history
2. **Hotfix**: Deploy critical fixes immediately
3. **Investigation**: Use built-in error tracking

## 📞 Contact & Support

For deployment issues or questions:
- **Technical Support**: [GitHub Issues](https://github.com/4eckd/noahdummett/issues)
- **Documentation**: [docs.noahdummett.com](https://docs.noahdummett.com)
- **Professional Services**: [Its Different Productions](https://linkedin.com/in/fusedgaming)

---

**🚨 Deployment Status**: Production Ready - v3.0.1  
**🌐 Platform URL**: https://noahdummett.com  
**📚 Documentation**: https://docs.noahdummett.com  
**🔒 Security**: Professional standards implemented  
**⚡ Performance**: Optimized for investigation workflows  

**Ready to deploy professional Web3 accountability investigations? 🚀**
