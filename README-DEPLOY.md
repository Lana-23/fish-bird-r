# Fish & Bird Observer - Deployment Guide

## Vercel Deployment

This guide explains how to deploy the Fish & Bird Observer Telegram Mini App to Vercel.

### Prerequisites

1. **Vercel CLI**: Install the Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

3. **Git Repository**: Initialize your project as a Git repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

### Quick Deployment

#### Option 1: Using the Deployment Script

```bash
# Make the script executable (already done)
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

#### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

#### Option 3: Using npm scripts

```bash
# Deploy to production
npm run deploy:vercel

# Deploy to preview
npm run deploy:vercel:preview
```

### Configuration Files

The following files are included for Vercel deployment:

- **`vercel.json`**: Vercel configuration with proper routing and headers
- **`deploy.sh`**: Automated deployment script
- **`.gitignore`**: Git ignore file optimized for Vercel
- **`package.json`**: Updated with deployment scripts

### Vercel Configuration

The `vercel.json` file includes:

- **Static build**: Uses `@vercel/static-build` for React applications
- **SPA routing**: All routes redirect to `index.html` for React Router
- **Security headers**: CSP, X-Frame-Options, and other security headers
- **Caching**: Optimized cache headers for static assets
- **HTTPS**: Automatic HTTPS configuration

### Environment Variables

For production deployment, you may want to set these environment variables in Vercel:

```env
VITE_APP_TITLE="Fish & Bird Observer"
VITE_APP_DESCRIPTION="Track wildlife observations"
VITE_TELEGRAM_BOT_TOKEN="your-bot-token"
```

### Post-Deployment Steps

1. **Get your Vercel URL**: After deployment, Vercel will provide a URL like `https://fish-bird-observer.vercel.app`

2. **Configure Telegram Bot**:
   - Open Telegram and go to [@BotFather](https://t.me/BotFather)
   - Use `/mybots` and select your bot
   - Go to "Bot Settings" → "WebApp"
   - Add your Vercel URL as the WebApp URL
   - Configure the menu button to open your Mini App

3. **Domain Verification**:
   - In Bot Settings, go to "Domain Names"
   - Add your Vercel domain (e.g., `fish-bird-observer.vercel.app`)
   - Verify the domain

4. **Test the Mini App**:
   - Open your bot in Telegram
   - Click the Mini App button
   - Verify all functionality works correctly

### Troubleshooting

#### Build Errors
```bash
# Check for TypeScript errors
npm run build

# Check for linting errors
npm run lint
```

#### Vercel Deployment Issues
```bash
# Check Vercel logs
vercel logs

# Check deployment status
vercel status
```

#### Common Issues

1. **HTTPS Required**: Telegram requires HTTPS for WebApps
   - ✅ Vercel provides automatic HTTPS

2. **Domain Verification**: Ensure your domain is verified in Telegram
   - Check Bot Settings → Domain Names

3. **CSP Headers**: Content Security Policy may block resources
   - Configured in `vercel.json`

4. **Build Failures**: Check for missing dependencies
   - Ensure all dependencies are in `package.json`

### Continuous Deployment

#### GitHub Integration
1. Connect your GitHub repository to Vercel
2. Configure automatic deployments on push to main branch
3. Set up preview deployments for pull requests

#### Environment Variables
Set environment variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add your environment variables
- Deploy again to apply changes

### Performance Optimization

#### Vercel Features
- **Edge Network**: Automatic global CDN
- **Image Optimization**: Automatic image optimization
- **Caching**: Intelligent caching strategies
- **Compression**: Automatic gzip/brotli compression

#### App Optimization
- **Bundle Size**: Minimized with Vercel's build process
- **Lazy Loading**: Components load on demand
- **Service Worker**: PWA features for offline support

### Monitoring

#### Vercel Analytics
- **Performance Metrics**: Page load times, Core Web Vitals
- **Error Tracking**: JavaScript errors and build failures
- **Usage Analytics**: Visitor statistics and engagement

#### Custom Monitoring
Add custom monitoring with:
- Google Analytics
- Sentry for error tracking
- Custom performance monitoring

### Cost Optimization

#### Free Tier
- **Hobby Plan**: Free for personal projects
- **100GB bandwidth per month**
- **1000 functions executions per month**

#### Pro Plan
- **$20/month**: For production applications
- **Unlimited bandwidth**
- **Advanced analytics and monitoring**

### Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Telegram Mini App Docs**: [telegram.org/docs](https://telegram.org/docs)
- **GitHub Issues**: Report issues in the repository

### Next Steps

1. **Custom Domain**: Set up a custom domain in Vercel
2. **SSL Certificate**: Automatic SSL with custom domains
3. **Analytics**: Add Google Analytics or other tracking
4. **Monitoring**: Set up error tracking and performance monitoring
5. **Scaling**: Configure for high traffic if needed

---

**Note**: This deployment guide is specifically for the Fish & Bird Observer Telegram Mini App. For general Vercel deployment information, see the official Vercel documentation.