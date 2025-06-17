# 🌐 Noah Dummett Investigation Projects - Domain Setup Guide

This guide provides step-by-step instructions for setting up the noahdummett.com domain and its subdomains.

## 🎯 Domain Structure

- **Main Site**: `noahdummett.com` and `www.noahdummett.com`
- **Documentation**: `docs.noahdummett.com`

## 🚀 Quick Setup

### 1. Prerequisites

- Vercel account: https://vercel.com
- Domain ownership: noahdummett.com
- GitHub repository: https://github.com/4eckd/noahdummett

### 2. Automated Deployment

Run the deployment script:

```bash
chmod +x deploy-domains.sh
./deploy-domains.sh
```

### 3. Manual Deployment Steps

#### Main Site Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Add custom domains
vercel domains add noahdummett.com
vercel domains add www.noahdummett.com
```

#### Documentation Deployment

```bash
# Navigate to docs directory
cd docs

# Deploy documentation
vercel --prod

# Add docs subdomain
vercel domains add docs.noahdummett.com

cd ..
```

## 🔧 DNS Configuration

Add these DNS records to your domain provider (e.g., Namecheap, GoDaddy, Cloudflare):

### Required DNS Records

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 76.76.19.61             | 300  |
| CNAME | www  | cname.vercel-dns.com    | 300  |
| CNAME | docs | cname.vercel-dns.com    | 300  |

### Alternative Configuration (if using Cloudflare)

| Type  | Name | Value                    | Proxy Status |
|-------|------|--------------------------|--------------|
| A     | @    | 76.76.19.61             | Proxied      |
| CNAME | www  | noahdummett.com         | Proxied      |
| CNAME | docs | cname.vercel-dns.com    | DNS Only     |

## 🔒 Security Configuration

The following security headers are automatically configured:

- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY (main site) / SAMEORIGIN (docs)
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: camera=(), microphone=(), geolocation=()

## 🔄 Redirects

Automatic redirects are configured:

- `www.noahdummett.com` → `noahdummett.com` (301 permanent redirect)
- All HTTP traffic → HTTPS (automatic SSL)

## ✅ Verification Steps

### 1. Check Domain Status

```bash
# Check main site
curl -I https://noahdummett.com

# Check www redirect
curl -I https://www.noahdummett.com

# Check docs subdomain
curl -I https://docs.noahdummett.com
```

### 2. Verify SSL Certificates

- Visit https://noahdummett.com
- Check for valid SSL certificate (green lock icon)
- Verify certificate is issued by Let's Encrypt or similar

### 3. Test Functionality

- **Main Site**: Navigation, responsive design, all pages load
- **Documentation**: All documentation sections accessible
- **Redirects**: www redirects to non-www properly

## 🛠️ Troubleshooting

### Common Issues

#### Domain Not Resolving

1. Check DNS propagation: https://dnschecker.org
2. Verify DNS records are correct
3. Wait up to 24 hours for full propagation

#### SSL Certificate Issues

1. Ensure domain is properly verified in Vercel
2. Check that DNS records point to Vercel
3. Wait for automatic SSL provisioning (usually 5-10 minutes)

#### 404 Errors

1. Verify deployment was successful
2. Check vercel.json configuration
3. Ensure all routes are properly configured

### Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **GitHub Issues**: https://github.com/4eckd/noahdummett/issues
- **Domain Provider Support**: Contact your DNS provider

## 📊 Monitoring

### Performance Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Automatic tracking
- **Error Reporting**: Real-time error tracking

### Uptime Monitoring

Consider setting up external monitoring:

- **UptimeRobot**: https://uptimerobot.com
- **Pingdom**: https://pingdom.com
- **StatusCake**: https://statuscake.com

## 🔄 Maintenance

### Regular Tasks

- **Monthly**: Check for dependency updates
- **Quarterly**: Review security headers and SSL certificates
- **Annually**: Renew domain registration

### Backup Strategy

- **Code**: Git repository on GitHub
- **Configuration**: Vercel project settings
- **DNS**: Document all DNS records

---

**🎉 Your Noah Dummett Investigation Projects website is now ready for the world!**
