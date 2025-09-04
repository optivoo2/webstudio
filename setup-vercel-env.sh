#!/bin/bash

# 🚀 Webstudio Vercel Environment Setup Script
# Automatically sets up all required environment variables for Vercel deployment

echo "🚀 Setting up Webstudio environment variables for Vercel..."

# Generate secure AUTH_SECRET
AUTH_SECRET=$(openssl rand -base64 32)

echo "🔐 Generated secure AUTH_SECRET"

# Essential Environment Variables
echo "📝 Adding essential environment variables..."

# Add AUTH_SECRET to all environments
echo "$AUTH_SECRET" | npx vercel env add AUTH_SECRET production

# Add minimal GitHub OAuth placeholders (user needs to replace these)
echo "github-client-id-placeholder" | npx vercel env add GH_CLIENT_ID production
echo "github-client-secret-placeholder" | npx vercel env add GH_CLIENT_SECRET production

# Add deployment environment
echo "production" | npx vercel env add DEPLOYMENT_ENVIRONMENT production

# Add development login for testing
echo "admin@example.com" | npx vercel env add DEV_LOGIN production

# Add PostgREST defaults (user can update later)
echo "http://localhost:3000" | npx vercel env add POSTGREST_URL production
echo "your-api-key-here" | npx vercel env add POSTGREST_API_KEY production

# Add publisher host
echo "wstd.work" | npx vercel env add PUBLISHER_HOST production

# Add OAuth client defaults
echo "12345" | npx vercel env add AUTH_WS_CLIENT_ID production
echo "12345678" | npx vercel env add AUTH_WS_CLIENT_SECRET production

# Add Entri defaults
echo "webstudio" | npx vercel env add ENTRI_APPLICATION_ID production

# Add asset limits
echo "10000000" | npx vercel env add MAX_UPLOAD_SIZE production
echo "1000" | npx vercel env add MAX_ASSETS_PER_PROJECT production

echo ""
echo "✅ Basic environment variables added!"
echo ""
echo "🔧 NEXT STEPS:"
echo "1. Update GitHub OAuth credentials:"
echo "   - Go to https://github.com/settings/developers"
echo "   - Create a new OAuth App"
echo "   - Set Authorization callback URL to: https://your-app.vercel.app/auth/github/callback"
echo "   - Update GH_CLIENT_ID and GH_CLIENT_SECRET in Vercel dashboard"
echo ""
echo "2. Optional: Set up database and storage:"
echo "   - Update POSTGREST_URL and POSTGREST_API_KEY"
echo "   - Add S3 storage credentials (S3_ENDPOINT, S3_ACCESS_KEY_ID, etc.)"
echo ""
echo "3. Deploy: npx vercel deploy --prod"
echo ""
echo "🎉 Your Webstudio is ready to deploy!"
