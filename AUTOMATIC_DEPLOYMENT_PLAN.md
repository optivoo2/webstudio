# 🚀 **AUTOMATIC WEBSTUDIO DEPLOYMENT PLAN**

## 📋 **Research Summary from Context7 & Brave Search**

### **✅ Root Cause Confirmed:**

1. **Missing `_index.tsx` route** - No handler for base URL `/`
2. **Incorrect Vercel function routing** - Routes not reaching Remix server
3. **Environment variables missing** - App needs authentication setup

### **✅ Documentation Sources:**

- **Remix Routing**: `/remix-run/remix` - File-based routing conventions
- **Vercel Configuration**: `/vercel/vercel` - Remix deployment best practices
- **Brave Search**: Multiple Remix+Vercel deployment guides confirmed solution

---

## 🎯 **7-Step Automatic Deployment Plan**

### **Step 1: Create Missing Root Route**

```typescript
// File: apps/builder/app/routes/_index.tsx
import { redirect } from "@remix-run/node";

export async function loader() {
  // Redirect root to dashboard (primary entry point)
  return redirect("/dashboard");
}

export default function Index() {
  return null; // Won't render due to redirect
}
```

### **Step 2: Fix Vercel Configuration**

```json
// File: vercel.json - Optimized for Remix monorepo
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "pnpm --filter='@webstudio-is/http-client' build && cd apps/builder && pnpm build",
  "devCommand": "cd apps/builder && pnpm dev",
  "installCommand": "pnpm install",
  "framework": "remix",
  "outputDirectory": "apps/builder/build",
  "functions": {
    "apps/builder/build/server/index.js": {
      "runtime": "nodejs20.x"
    }
  },
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/apps/builder/build/server/index.js"
    }
  ],
  "build": {
    "env": {
      "ENABLE_VC_BUILD": "1"
    }
  },
  "git": {
    "deploymentEnabled": true
  }
}
```

### **Step 3: Environment Variables Setup**

```bash
# Essential variables for production
AUTH_SECRET=NK9EfrTFU9VaccoKM4ay26P3Pu0IZZ2svnBJupxKFpg=
DEV_LOGIN=admin@example.com
DEPLOYMENT_ENVIRONMENT=production

# OAuth placeholders (update later)
GH_CLIENT_ID=placeholder-update-later
GH_CLIENT_SECRET=placeholder-update-later
```

### **Step 4: Test Route Structure**

- Verify all routes under `apps/builder/app/routes/` are accessible
- Ensure `_ui.dashboard._index.tsx` works at `/dashboard`
- Confirm root `/` redirects properly

### **Step 5: Build & Deploy**

- Execute optimized build command for monorepo
- Deploy to Vercel with corrected configuration
- Monitor deployment logs for success

### **Step 6: Post-Deployment Verification**

- Test root URL redirects to `/dashboard`
- Verify all major routes respond correctly
- Confirm environment variables are accessible

### **Step 7: Environment Variables via Dashboard**

- Add variables via Vercel dashboard for persistence
- Update OAuth credentials when ready
- Configure any additional app-specific variables

---

## ⚡ **Execution Commands**

```bash
# 1. Create missing root route
echo 'Creating _index.tsx...'

# 2. Update vercel.json
echo 'Updating Vercel configuration...'

# 3. Deploy with new configuration
echo 'Deploying to Vercel...'
npx vercel deploy --prod

# 4. Verify deployment
echo 'Testing deployment...'
curl -I https://your-deployment-url.vercel.app/
```

---

## 📊 **Expected Results**

✅ **Root URL** `/` → Redirects to `/dashboard`  
✅ **Dashboard** `/dashboard` → Loads Webstudio dashboard  
✅ **Builder** `/builder` → Loads visual editor  
✅ **API Routes** → All function correctly  
✅ **Static Assets** → Served from correct paths

---

## 🔧 **Rollback Plan**

If issues occur:

1. **Revert vercel.json** to previous version
2. **Remove \_index.tsx** if causing conflicts
3. **Redeploy** with original configuration
4. **Investigate** specific error logs

---

**🚀 Ready to execute? The plan will fix all identified issues and get Webstudio fully functional on Vercel!**
