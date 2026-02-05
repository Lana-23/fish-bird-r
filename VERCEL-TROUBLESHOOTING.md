# Vercel Troubleshooting Guide

## 🚨 Common Vercel Issues and Solutions

### Issue: "If `rewrites`, `redirects`, `headers`, `cleanUrls` or `trailingSlash` are used, then `routes` cannot be present"

**Problem**: This error occurs when you have both `routes` and other routing configurations in your `vercel.json` file.

**Root Cause**: Vercel doesn't allow mixing different routing methods in the same configuration.

**Solutions**:

#### Solution 1: Use Only `routes` (Recommended for SPA)
```json
{
  "version": 2,
  "name": "your-app",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

#### Solution 2: Use Only `rewrites`
```json
{
  "version": 2,
  "name": "your-app",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

#### Solution 3: Use Only `redirects`
```json
{
  "version": 2,
  "name": "your-app",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

### Issue: Build Failures

#### Problem: "Build failed with exit code 1"
**Solutions**:
1. Check your `package.json` scripts
2. Ensure all dependencies are installed
3. Verify build command in `vercel.json`

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ]
}
```

#### Problem: "Missing build script"
**Solution**: Ensure you have a build script in `package.json`:
```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

### Issue: Environment Variables

#### Problem: Environment variables not working
**Solution**: Use `.env.production` or set them in Vercel dashboard:
```bash
# In Vercel dashboard
Settings > Environment Variables
```

### Issue: Custom Headers Not Applied

#### Problem: Headers not working
**Solution**: Ensure headers are properly formatted:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

### Issue: API Routes Not Working

#### Problem: API routes returning 404
**Solution**: Ensure API routes are properly configured:
```json
{
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🔧 Best Practices

### 1. SPA Configuration (Recommended)
```json
{
  "version": 2,
  "name": "your-app",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

### 2. Error Handling
```json
{
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/_error",
      "dest": "/error.html"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 3. Caching Strategy
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

## 🚀 Testing Your Configuration

### 1. Local Testing
```bash
# Install Vercel CLI
npm install -g vercel

# Test locally
vercel dev
```

### 2. Preview Deployment
```bash
# Deploy to preview
vercel --preivew

# Or use npm script
npm run deploy:preview
```

### 3. Production Deployment
```bash
# Deploy to production
vercel --prod

# Or use npm script
npm run deploy
```

## 📋 Checklist

- [ ] No mixing of `routes`, `redirects`, `rewrites`
- [ ] Build script exists in `package.json`
- [ ] `distDir` matches your build output
- [ ] Headers are properly formatted
- [ ] API routes are correctly configured
- [ ] Environment variables are set
- [ ] Test locally before deploying

## 🔍 Debugging

### 1. Check Build Logs
```bash
# View build logs
vercel logs
```

### 2. Check Configuration
```bash
# Validate vercel.json
vercel validate
```

### 3. Test Routes
```bash
# Test routing locally
vercel dev
```

## 🆘 Getting Help

### Vercel Documentation
- [Vercel Configuration](https://vercel.com/docs/concepts/projects/project-configuration)
- [Static Build](https://vercel.com/docs/concepts/functions/edge-functions)
- [Routing](https://vercel.com/docs/concepts/functions/serverless-functions/routing)

### Common Solutions
1. **Clear cache**: `vercel --clear`
2. **Re-deploy**: `vercel --force`
3. **Check permissions**: Ensure Vercel has access to your repository

---

**Note**: Always test your configuration locally before deploying to production.