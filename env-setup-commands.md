# 🚀 Quick Vercel Environment Setup Commands

**Generated AUTH_SECRET**: `NK9EfrTFU9VaccoKM4ay26P3Pu0IZZ2svnBJupxKFpg=`

Run these commands to set up essential environment variables:

```bash
# 1. AUTH_SECRET (Essential for authentication)
npx vercel env add AUTH_SECRET
# Enter: NK9EfrTFU9VaccoKM4ay26P3Pu0IZZ2svnBJupxKFpg=
# Select: Production, Preview, Development

# 2. Development login (for testing without OAuth)
npx vercel env add DEV_LOGIN
# Enter: admin@example.com
# Select: Production, Preview, Development

# 3. Deployment environment
npx vercel env add DEPLOYMENT_ENVIRONMENT
# Enter: production
# Select: Production

# 4. GitHub OAuth (Placeholder - update later)
npx vercel env add GH_CLIENT_ID
# Enter: your-github-client-id
# Select: Production, Preview, Development

npx vercel env add GH_CLIENT_SECRET
# Enter: your-github-client-secret
# Select: Production, Preview, Development
```

## 🔗 After Setup:

1. **Deploy**: `npx vercel deploy --prod`
2. **Update GitHub OAuth**: Create OAuth app at https://github.com/settings/developers
3. **Add real credentials** in Vercel dashboard

**Your app will be functional with DEV_LOGIN for initial testing!**
