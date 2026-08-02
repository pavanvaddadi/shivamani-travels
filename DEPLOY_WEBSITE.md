# Shivamani Travels — Website Deployment Guide

## Quick Reference

| Setting           | Value                |
|-------------------|----------------------|
| Build Command     | `npm run build`      |
| Output Directory  | `www`                |
| Node Version      | 22                   |
| Framework         | Angular + Ionic      |

---

## Option A: Deploy via Netlify (Recommended)

Netlify is the easiest platform for this project — free tier, automatic HTTPS, custom domain support, and zero-config SPA routing.

### Step 1: Create Netlify Account

Go to [https://app.netlify.com/signup](https://app.netlify.com/signup) and sign up with your GitHub account.

### Step 2: Import Repository

1. Click **"Add new site"** → **"Import an existing project"**
2. Select **GitHub** as the provider
3. Authorize Netlify to access your GitHub account
4. Select the repository: `pavanvaddadi/shivamani-travels`

### Step 3: Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

| Setting          | Value           |
|------------------|-----------------|
| Branch to deploy | `main`          |
| Build command    | `npm run build` |
| Publish directory| `www`           |

### Step 4: Deploy

Click **"Deploy site"**. Netlify will:
1. Clone your repo
2. Run `npm ci`
3. Run `npm run build`
4. Publish the `www/` directory
5. Assign a public URL like `https://shivamani-travels.netlify.app`

### Automatic Redeployment

Every time you push to the `main` branch, Netlify will **automatically rebuild and redeploy** the website. No manual action needed.

---

## Option B: Deploy via Vercel

### Step 1: Create Vercel Account

Go to [https://vercel.com/signup](https://vercel.com/signup) and sign up with GitHub.

### Step 2: Import Repository

1. Click **"Add New Project"**
2. Import `pavanvaddadi/shivamani-travels`

### Step 3: Configure Build Settings

| Setting               | Value           |
|-----------------------|-----------------|
| Framework Preset      | Other           |
| Build Command         | `npm run build` |
| Output Directory      | `www`           |
| Install Command       | `npm ci`        |

### Step 4: Deploy

Click **Deploy**. Vercel will build and give you a public URL like `https://shivamani-travels.vercel.app`.

---

## Option C: Deploy via GitHub Actions + Netlify (CI/CD)

For fully automated deployments using the GitHub Actions workflow included in this project:

### Step 1: Create a Netlify Site

1. Log into [Netlify](https://app.netlify.com)
2. Create a new site (you can do a manual deploy first with an empty folder)
3. Note your **Site ID** from Site Settings → General

### Step 2: Get Netlify Auth Token

1. Go to [User Settings → Applications](https://app.netlify.com/user/applications)
2. Create a new **Personal Access Token**
3. Copy the token

### Step 3: Add GitHub Secrets

In your GitHub repo (`pavanvaddadi/shivamani-travels`):
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:

| Secret Name          | Value                          |
|----------------------|--------------------------------|
| `NETLIFY_AUTH_TOKEN`  | Your Netlify personal access token |
| `NETLIFY_SITE_ID`    | Your Netlify site ID            |

### Step 4: Push to Main

The workflow at `.github/workflows/deploy-website.yml` will automatically:
1. Build the Angular app
2. Deploy to Netlify

---

## Connecting a Custom Domain

After deployment, you can connect your own domain (e.g., `shivamanitravels.com`):

### On Netlify:
1. Go to **Site Settings** → **Domain Management** → **Add custom domain**
2. Enter your domain name
3. Update your domain's DNS:
   - Add a **CNAME** record pointing to `your-site.netlify.app`
   - Or use Netlify DNS (recommended)
4. Netlify will automatically provision a free SSL certificate

### On Vercel:
1. Go to **Project Settings** → **Domains** → **Add Domain**
2. Follow the DNS instructions provided
3. SSL is automatic

---

## SEO: Making the Site Discoverable on Google

After deployment:

1. **Submit to Google Search Console**: Go to [search.google.com/search-console](https://search.google.com/search-console) and add your website URL.
2. **Create a sitemap**: Add a `sitemap.xml` to `src/assets/` listing all your pages.
3. **Verify meta tags**: Each page already has proper `<title>` and semantic HTML.

---

## Redeploying After Changes

Simply push your code changes to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

The website will automatically rebuild and redeploy within 1-2 minutes.
