# 🚀 Quick Vercel Deployment Guide

## ⚡ One-Click Setup

Your Webstudio project is now configured for Vercel deployment!

### 📋 Required Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

```bash
# ESSENTIAL (Generate with: openssl rand -base64 32)
AUTH_SECRET=your-32-char-secret-key

# GITHUB OAUTH (https://github.com/settings/developers)
GH_CLIENT_ID=your-github-client-id
GH_CLIENT_SECRET=your-github-client-secret

# OPTIONAL: Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# DEPLOYMENT (Auto-set by Vercel)
DEPLOYMENT_ENVIRONMENT=production

# DATABASE (Required for persistence)
POSTGREST_URL=https://your-postgrest-api.com
POSTGREST_API_KEY=your-api-key

# STORAGE (Required for file uploads)
S3_ENDPOINT=https://your-s3-endpoint.com
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=your-key
S3_SECRET_ACCESS_KEY=your-secret
S3_BUCKET=your-bucket
```

### 🎯 Minimal Setup (Development/Testing)

```bash
AUTH_SECRET=your-secret-here
GH_CLIENT_ID=your-github-id
GH_CLIENT_SECRET=your-github-secret
DEV_LOGIN=admin@example.com
```

## 🚀 Deploy Now

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy!

**Note**: The app will work with minimal config but needs database + storage for full functionality.
