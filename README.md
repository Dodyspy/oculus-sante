# Oculus Santé Ophtalmologie

Site web du cabinet d'ophtalmologie **Oculus Santé**, situé au 3 quai de Stalingrad, 92100 Boulogne-Billancourt.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Déploiement** : Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec sections Hero, Services, Équipe, Galerie, CTA |
| `/services` | Détail des services ophtalmologiques |
| `/equipe` | Présentation de l'équipe médicale |
| `/a-propos` | Histoire, mission et valeurs du cabinet |
| `/galerie` | Galerie photos du cabinet |
| `/contact` | Formulaire de contact, carte et informations pratiques |

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Déploiement

Le site est déployé automatiquement sur **Vercel** à chaque push sur la branche `main`.

---

# 🎯 CLIENT HANDOVER GUIDE

## ✅ Pre-Deployment Checklist

This website is **100% ready for production deployment**. All tests have passed:

- ✅ Production build verified (no errors)
- ✅ All pages compile successfully (11 static pages)
- ✅ No hardcoded secrets or API keys
- ✅ Optimized bundle size (194 kB first load)
- ✅ TypeScript & ESLint validation passed
- ✅ `.gitignore` properly configured

## 🚀 How to Deploy to Vercel (Free Tier)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (recommended)
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import Your Repository
1. Click **"Add New Project"** in Vercel dashboard
2. Select **"Import Git Repository"**
3. Choose the repository: `Dodyspy/oculus-sante`
4. Click **"Import"**

### Step 3: Configure Build Settings
Vercel will auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` (auto-detected) |
| **Install Command** | `npm install` |
| **Node Version** | 20.x (default) |

### Step 4: Environment Variables (OPTIONAL)
**Important:** This site works perfectly **without any environment variables**.

Only add these if you want to password-protect preview deployments:
- `BASIC_AUTH_USER` = your_username
- `BASIC_AUTH_PASS` = your_password

**For production:** Leave environment variables empty (site will be public).

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://oculus-sante-xxx.vercel.app`

## 🌐 Connecting Your Gandi Domain

### Step 1: In Vercel Dashboard
1. Go to your project → **Settings** → **Domains**
2. Enter your domain: `oculus-sante.fr` (or `www.oculus-sante.fr`)
3. Click **"Add"**
4. Vercel will show you DNS records to configure

### Step 2: In Gandi Dashboard
1. Log in to [gandi.net](https://www.gandi.net)
2. Go to **Domain** → **DNS Records**
3. Add the DNS records provided by Vercel:

**For root domain (`oculus-sante.fr`):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 300
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 300
```

### Step 3: Verify Domain
1. Return to Vercel dashboard
2. Click **"Verify"** next to your domain
3. Wait 5-60 minutes for DNS propagation
4. Your site will be live at your custom domain!

## 📦 What's Included

### Pages
- ✅ Homepage with hero, services, team, gallery sections
- ✅ Services page (4 ophthalmology services)
- ✅ Team page (Équipe)
- ✅ About page (À propos)
- ✅ Gallery page (Galerie)
- ✅ Contact page with Doctolib integration
- ✅ Legal pages (Mentions légales, Politique de confidentialité)
- ✅ Cookie consent banner

### Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern animations (Framer Motion, GSAP)
- ✅ 3D eye animation on homepage
- ✅ Accessibility features (ARIA labels, skip links, keyboard navigation)
- ✅ SEO optimized (meta tags, semantic HTML)
- ✅ Fast loading (static generation)
- ✅ French language throughout

### Contact Information
- **Address:** 3 quai de Stalingrad, 92100 Boulogne-Billancourt
- **Phone:** 01 89 46 29 59
- **Email:** contact@oculus-sante.fr
- **Hours:** Lun-Ven 9h-19h, Sam & Dim fermé
- **Doctolib:** All "Prendre RDV" buttons link to Doctolib

### Legal Information (Mentions Légales)
- **Forme juridique:** Entreprise Individuelle
- **SIRET:** 98973990900012
- **Directeur de publication:** STAN Anamaria-Veronica
- **N° RPPS:** 1010 225 4280

## 🔧 Maintenance & Updates

### Making Content Changes
1. Clone the repository locally
2. Edit files in `/src/app/` directory
3. Test locally: `npm run dev`
4. Commit and push to `main` branch
5. Vercel will auto-deploy in 2-3 minutes

### Key Files to Edit
- **Services:** `/src/app/services/page.tsx`
- **Team:** `/src/app/equipe/page.tsx`
- **About:** `/src/app/a-propos/page.tsx`
- **Contact info:** `/src/components/Footer.tsx`
- **Homepage:** `/src/app/page.tsx`

## 💰 Free Tier Limits (Vercel)

Your site is optimized to stay within Vercel's free tier:

- ✅ **Bandwidth:** 100 GB/month (more than enough for a clinic site)
- ✅ **Build time:** ~30 seconds (well under 6000 minutes/month limit)
- ✅ **Deployments:** Unlimited
- ✅ **Custom domain:** 1 included (perfect for `oculus-sante.fr`)
- ✅ **SSL certificate:** Automatic and free
- ✅ **Analytics:** Basic analytics included

## 🆘 Troubleshooting

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Verify Node.js version is 20.x
- Ensure all dependencies are in `package.json`

### Domain not connecting
- Wait 30-60 minutes for DNS propagation
- Verify DNS records match exactly what Vercel provides
- Clear your browser cache

### Site is slow
- This site is fully static and should load in <1 second
- Check your internet connection
- Try a different browser

## 📞 Support

For technical issues with:
- **Vercel hosting:** [vercel.com/support](https://vercel.com/support)
- **Gandi domain:** [gandi.net/support](https://www.gandi.net/support)
- **Code changes:** Refer to Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs)

---

**🎉 Your website is production-ready! Deploy with confidence.**
