# 🔧 Environment Variables Setup - Noah Dummett Investigation

## 🎯 Overview

This document explains the environment variable setup for the Noah Dummett Investigation Projects website, including how to properly configure your local development environment.

## 📋 Environment Files Structure

### **Files in the Project:**
- ✅ `.env.local` - Your personal local development variables (ignored by git)
- ✅ `.env.example` - Template file showing all available variables (tracked by git)
- ❌ `.env.local.example` - Not needed (would be redundant with .env.example)

### **Git Ignore Status:**
```gitignore
# Environment variables (from .gitignore)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## 🔧 Fixed Issues

### **1. Removed Duplicates**
**Before:** `.env.local` had duplicate sections and conflicting variables
**After:** Clean, organized structure with no duplicates

### **2. Updated Branding**
**Before:** Mixed FUSED GAMING and Noah Dummett Investigation references
**After:** Consistent Noah Dummett Investigation branding throughout

### **3. Organized Structure**
**Before:** Unorganized variables scattered throughout file
**After:** Logical sections with clear headers and documentation

### **4. Corrected Social Media Links**
**Before:** Old FUSED GAMING social media handles
**After:** Investigation-focused social media handles

## 📊 Environment Variables Reference

### **🏢 Company & Project Information**
```bash
VITE_COMPANY_NAME=Noah Dummett Investigation Projects
VITE_COMPANY_URL=https://noahdummett.com
VITE_COMPANY_EMAIL=hello@noahdummett.com
VITE_APP_NAME=Noah Dummett Investigation Projects
VITE_VERSION=2.0.0
```

### **📱 Social Media Links**
```bash
VITE_SOCIAL_GITHUB=https://github.com/4eckd/noahdummett
VITE_SOCIAL_TWITTER=https://twitter.com/noahdummett_inv
VITE_SOCIAL_X=https://x.com/noahdummett_inv
VITE_SOCIAL_LINKEDIN=https://linkedin.com/company/its-different-productions
VITE_SOCIAL_YOUTUBE=https://youtube.com/@itsdifferentproductions
VITE_GITHUB_URL=https://github.com/4eckd/noahdummett
VITE_GITHUB_DOCS_URL=https://github.com/4eckd/noahdummett/blob/main/docs/index.md
```

### **🔗 API & Services**
```bash
VITE_API_URL=https://api.noahdummett.com
VITE_WS_URL=wss://ws.noahdummett.com
VITE_ENVIRONMENT=development
```

### **🎨 Theme & UI**
```bash
VITE_THEME=dark
VITE_DEFAULT_CURRENCY=USD
```

### **⛓️ Blockchain Configuration**
```bash
VITE_SOLANA_RPC=https://api.mainnet-beta.solana.com
```

### **📊 Optional Analytics (Commented Out)**
```bash
# VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# VITE_ANALYTICS_ID=UA-XXXXX-Y
# VITE_SENTRY_DSN=https://your-sentry-dsn-here
```

### **🔍 Investigation Specific (Optional)**
```bash
# VITE_EVIDENCE_API_URL=https://evidence.noahdummett.com
# VITE_LEGAL_DOCS_URL=https://docs.noahdummett.com/legal
# VITE_WHISTLEBLOWER_EMAIL=whistleblower@noahdummett.com
```

## 🚀 Setup Instructions

### **For New Developers:**

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your values:**
   ```bash
   # Edit the file with your preferred editor
   code .env.local
   # or
   notepad .env.local
   ```

3. **Customize as needed:**
   - Update any URLs for local development
   - Add your own API keys if needed
   - Uncomment optional variables you want to use

### **For Production Deployment:**

1. **Vercel:** Set environment variables in the Vercel dashboard
2. **Netlify:** Set environment variables in the Netlify dashboard
3. **Other platforms:** Follow platform-specific environment variable setup

## ⚠️ Important Security Notes

### **VITE_ Prefix:**
- All variables with `VITE_` prefix are **exposed to the client-side code**
- Never put sensitive information in `VITE_` variables
- These variables are bundled into the client-side JavaScript

### **Safe for VITE_ Variables:**
- ✅ Public API URLs
- ✅ Social media links
- ✅ Company information
- ✅ Theme settings
- ✅ Public configuration

### **Never Use VITE_ For:**
- ❌ API keys
- ❌ Database passwords
- ❌ Private tokens
- ❌ Secret keys
- ❌ Authentication secrets

## 🔍 Validation

### **Check Your Setup:**
```bash
# Start the development server
npm run dev

# Check if variables are loaded correctly
# Open browser console and check:
console.log(import.meta.env.VITE_COMPANY_NAME)
```

### **Expected Output:**
```
"Noah Dummett Investigation Projects"
```

## 🛠️ Troubleshooting

### **Variables Not Loading:**
1. Ensure `.env.local` exists in the project root
2. Check that variables have the `VITE_` prefix
3. Restart the development server after changes
4. Verify no syntax errors in the `.env.local` file

### **Duplicate Variable Warnings:**
1. Check for duplicate variable definitions
2. Ensure only one value per variable
3. Remove any conflicting entries

### **Social Media Links Not Working:**
1. Verify URLs are correct and accessible
2. Check for typos in variable names
3. Ensure proper URL format (https://)

## 📚 Additional Resources

- **Vite Environment Variables:** https://vitejs.dev/guide/env-and-mode.html
- **React Environment Variables:** https://create-react-app.dev/docs/adding-custom-environment-variables/
- **Vercel Environment Variables:** https://vercel.com/docs/concepts/projects/environment-variables

---

**🔍 Your Noah Dummett Investigation environment is now properly configured! 🚀**
