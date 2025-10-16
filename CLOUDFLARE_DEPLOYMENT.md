# Cloudflare Pages Deployment Guide

This guide will help you deploy the Lumavu Trading Enterprises website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier available)
2. Your GitHub repository connected to Cloudflare
3. Domain name (optional, but recommended)

## Step-by-Step Deployment

### 1. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign in to your account
3. Navigate to **Pages** in the left sidebar
4. Click **"Connect to Git"**

### 2. Select Your Repository

1. Choose **GitHub** as your Git provider
2. Authorize Cloudflare to access your GitHub account
3. Select the repository: `lmvtrdngent/lumavu-build-legacy`
4. Click **"Begin setup"**

### 3. Configure Build Settings

Use these settings in the Cloudflare Pages setup:

- **Project name**: `lumavu-trading-enterprises`
- **Production branch**: `main`
- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)

### 4. Environment Variables

No additional environment variables are required for basic deployment. The build will work with default settings.

### 5. Deploy

1. Click **"Save and Deploy"**
2. Cloudflare will automatically build and deploy your site
3. You'll get a URL like: `https://lumavu-trading-enterprises.pages.dev`

### 6. Custom Domain Setup (Optional)

To use your own domain:

1. In the Cloudflare Pages dashboard, go to your project
2. Click **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Enter your domain name (e.g., `lumavu.com`)
5. Follow the DNS configuration instructions

#### DNS Configuration

Add these DNS records in your domain registrar or DNS provider:

```
Type: CNAME
Name: www
Target: lumavu-trading-enterprises.pages.dev

Type: A
Name: @
Target: 192.0.2.1 (this will be provided by Cloudflare)
```

## Automatic Deployments

Once connected, Cloudflare Pages will automatically deploy your site whenever you:

1. Push changes to the `main` branch
2. Create a new branch (for preview deployments)
3. Create a pull request (for preview deployments)

## Preview Deployments

- **Branch deployments**: Each branch gets its own preview URL
- **Pull request deployments**: Each PR gets a unique preview URL for testing

## Performance Features

Cloudflare Pages includes:

- **Global CDN**: Fast loading worldwide
- **Automatic HTTPS**: SSL certificates included
- **Image optimization**: Automatic image compression
- **Minification**: CSS and JS minification
- **Caching**: Optimized caching strategies

## Monitoring and Analytics

1. Go to your project in Cloudflare Pages
2. Click **"Analytics"** to view:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

## Troubleshooting

### Build Failures

If your build fails:

1. Check the build logs in Cloudflare Pages dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (v18+)

### Common Issues

- **Build command error**: Make sure `npm run build` works locally
- **Missing files**: Ensure all assets are in the `public` folder
- **Environment variables**: Add any required env vars in Pages settings

## Support

For Cloudflare Pages support:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [GitHub Issues](https://github.com/lmvtrdngent/lumavu-build-legacy/issues)

## Cost

- **Free tier**: Includes 500 builds/month, 100GB bandwidth, unlimited sites
- **Paid plans**: Start at $20/month for more builds and features

Perfect for small to medium websites like Lumavu Trading Enterprises!
