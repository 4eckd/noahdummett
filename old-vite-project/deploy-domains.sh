#!/bin/bash

# Noah Dummett Investigation Projects - Domain Deployment Script
# This script helps deploy the website and docs to the correct domains

set -e

echo "🚀 Noah Dummett Investigation Projects - Domain Deployment"
echo "=========================================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Checking Vercel authentication..."
if ! vercel whoami &> /dev/null; then
    echo "Please login to Vercel:"
    vercel login
fi

echo ""
echo "📋 Deployment Plan:"
echo "  Main Site: noahdummett.com, www.noahdummett.com"
echo "  Documentation: docs.noahdummett.com"
echo ""

# Deploy main site
echo "🌐 Deploying main site..."
echo "Building project..."
npm run build

echo "Deploying to Vercel..."
vercel --prod

echo ""
echo "📚 Deploying documentation..."
cd docs
vercel --prod
cd ..

echo ""
echo "🎯 Domain Configuration Instructions:"
echo "======================================"
echo ""
echo "1. Main Site Domains:"
echo "   vercel domains add noahdummett.com"
echo "   vercel domains add www.noahdummett.com"
echo ""
echo "2. Documentation Domain:"
echo "   cd docs"
echo "   vercel domains add docs.noahdummett.com"
echo "   cd .."
echo ""
echo "3. DNS Configuration (add these records to your domain provider):"
echo "   Type: A     Name: @     Value: 76.76.19.61"
echo "   Type: CNAME Name: www   Value: cname.vercel-dns.com"
echo "   Type: CNAME Name: docs  Value: cname.vercel-dns.com"
echo ""
echo "4. Verify domains in Vercel dashboard:"
echo "   https://vercel.com/dashboard"
echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔗 Your sites will be available at:"
echo "   • https://noahdummett.com"
echo "   • https://www.noahdummett.com"
echo "   • https://docs.noahdummett.com"
echo ""
echo "Note: DNS propagation may take up to 24 hours."
