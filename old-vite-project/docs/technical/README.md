# Technical Documentation

## Overview

This directory contains technical documentation for the Noah Dummett investigation website, including component architecture, routing systems, download functionality, and deployment procedures.

## Technical Architecture

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with comprehensive type definitions
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling

### Component Architecture
- **Evidence Components**: Specialized components for evidence presentation
- **Navigation Components**: Header, footer, and breadcrumb navigation
- **UI Components**: Reusable UI components with consistent styling
- **Layout Components**: Page layout and section layout components

### Routing System
- **React Router**: Client-side routing for single-page application
- **Evidence Routes**: Dedicated routes for each evidence category
- **Dynamic Routing**: Dynamic content loading for evidence pages
- **SEO Optimization**: Server-side rendering considerations for SEO

## Evidence System Architecture

### Evidence Pages
```
/evidence                    # Evidence overview and navigation hub
/evidence/trustpilot        # Trustpilot evidence and analysis
/evidence/reddit            # Reddit evidence and community ban
/evidence/casino-guru       # Casino Guru formal complaints
/platform-manipulation     # Cross-platform manipulation analysis
```

### Download System
- **File Organization**: Structured file organization in `/public/downloads/`
- **Documentation Links**: Links to organized documentation in `/docs/`
- **Metadata Display**: File size, type, and description metadata
- **Direct Download**: Direct file download functionality

### Navigation Architecture
- **Header Navigation**: Main navigation with evidence sections
- **Footer Navigation**: Comprehensive footer with evidence links
- **Breadcrumb Navigation**: Clear navigation paths through evidence
- **External Links**: Direct access to original source platforms

## Component Documentation

### Evidence Components
- **EvidenceCard**: Reusable evidence presentation component
- **DownloadButton**: File download component with metadata
- **PlatformIcon**: Consistent iconography for evidence platforms
- **StatisticsDisplay**: Evidence statistics and metrics display

### Navigation Components
- **Header**: Main site navigation with evidence sections
- **Footer**: Comprehensive footer with organized evidence links
- **Breadcrumbs**: Navigation path display for complex evidence structure
- **SideNavigation**: Secondary navigation for documentation sections

### UI Components
- **Card**: Flexible card component for content presentation
- **Button**: Consistent button styling and behavior
- **Modal**: Modal dialogs for detailed evidence display
- **Tooltip**: Contextual information display

## File Organization

### Source Code Structure
```
src/
├── components/
│   ├── evidence/          # Evidence-specific components
│   ├── navigation/        # Navigation components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components
├── pages/
│   ├── evidence/         # Evidence page components
│   └── investigation/    # Investigation page components
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
└── types/                # TypeScript type definitions
```

### Documentation Structure
```
docs/
├── investigation/        # Investigation documentation
├── evidence/            # Evidence analysis documentation
├── legal/               # Legal documentation
└── technical/           # Technical documentation (this directory)
```

### Public Assets
```
public/
├── downloads/           # Downloadable evidence files
├── images/             # Site images and assets
└── static/             # Static site assets
```

## Development Workflow

### Local Development
1. **Environment Setup**: Node.js 18+ and npm/yarn installation
2. **Dependency Installation**: `npm install` for project dependencies
3. **Development Server**: `npm run dev` for local development
4. **Type Checking**: `npm run type-check` for TypeScript validation

### Build Process
1. **Production Build**: `npm run build` for optimized production build
2. **Preview**: `npm run preview` for local production preview
3. **Testing**: `npm run test` for component and integration testing
4. **Linting**: `npm run lint` for code quality validation

### Deployment Process
1. **Build Verification**: Ensure successful production build
2. **Asset Optimization**: Automatic asset optimization and compression
3. **Static Site Generation**: Generate static files for hosting
4. **CDN Deployment**: Deploy to content delivery network

## Evidence System Implementation

### Download Functionality
- **File Serving**: Static file serving from `/public/downloads/`
- **Metadata Management**: File metadata stored in component definitions
- **Link Generation**: Dynamic download link generation
- **Error Handling**: Graceful handling of missing or corrupted files

### Evidence Navigation
- **Category Organization**: Evidence organized by platform and type
- **Search Functionality**: Search across evidence categories
- **Filter Options**: Filter evidence by type, date, and platform
- **Cross-References**: Links between related evidence items

### Responsive Design
- **Mobile Optimization**: Mobile-first responsive design
- **Touch Interfaces**: Touch-friendly navigation and interactions
- **Performance**: Optimized loading for mobile networks
- **Accessibility**: WCAG 2.1 AA accessibility compliance

## Security Considerations

### Content Security
- **Input Validation**: Validation of all user inputs
- **XSS Protection**: Cross-site scripting protection measures
- **CSRF Protection**: Cross-site request forgery protection
- **Content Sanitization**: Sanitization of user-generated content

### Evidence Protection
- **File Integrity**: Verification of evidence file integrity
- **Access Logging**: Logging of evidence file access
- **Rate Limiting**: Rate limiting for download endpoints
- **Backup Systems**: Redundant backup of critical evidence

### Privacy Protection
- **Data Minimization**: Minimal collection of user data
- **Anonymization**: Anonymization of sensitive information
- **Secure Transmission**: HTTPS encryption for all communications
- **Compliance**: GDPR and privacy regulation compliance

## Performance Optimization

### Frontend Optimization
- **Code Splitting**: Dynamic imports for route-based code splitting
- **Asset Optimization**: Image and asset optimization
- **Caching**: Browser caching strategies for static assets
- **Bundle Analysis**: Regular bundle size analysis and optimization

### Content Delivery
- **CDN Integration**: Content delivery network for global performance
- **Compression**: Gzip and Brotli compression for text assets
- **Image Optimization**: WebP and AVIF image format support
- **Lazy Loading**: Lazy loading for images and non-critical content

## Monitoring and Analytics

### Performance Monitoring
- **Core Web Vitals**: Monitoring of Google Core Web Vitals
- **Error Tracking**: Comprehensive error tracking and reporting
- **Performance Metrics**: Detailed performance metrics collection
- **User Experience**: User experience monitoring and optimization

### Usage Analytics
- **Evidence Access**: Tracking of evidence file access patterns
- **Navigation Patterns**: Analysis of user navigation behavior
- **Search Analytics**: Search query analysis and optimization
- **Conversion Tracking**: Tracking of evidence download conversions

---

**Technical Documentation Version**: 1.0  
**Last Updated**: December 2024  
**Framework**: React 18 + TypeScript + Vite  
**Deployment**: Static site hosting with CDN
