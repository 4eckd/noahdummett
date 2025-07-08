#!/bin/bash

# Noah Dummett Investigation Projects - Next.js Deployment Script
# This script deploys the Next.js 14 investigation platform to Vercel

echo "🚀 Deploying Noah Dummett Investigation Projects - Next.js Platform"
echo "=================================================================="

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Main site: https://noahdummett.com"
    echo "📚 Documentation: https://docs.noahdummett.com"
    echo ""
    echo "🎉 Noah Dummett Investigation Platform is now live!"
    echo "=================================================================="
    echo "📊 Platform Features:"
    echo "   • Modern Next.js 14 architecture"
    echo "   • Multi-theme investigation platform"
    echo "   • Professional evidence presentation"
    echo "   • Blockchain transaction analysis"
    echo "   • Legal documentation system"
    echo "   • Mobile-responsive design"
    echo "   • SEO optimized"
    echo "   • Security headers configured"
    echo "=================================================================="
else
    echo "❌ Deployment failed. Please check the Vercel CLI output for errors."
    exit 1
fi
