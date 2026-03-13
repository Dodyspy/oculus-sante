# 🔄 GITHUB REPOSITORY TRANSFER GUIDE
## Complete Step-by-Step Setup for Client

This guide covers transferring the Oculus Santé website from your GitHub account to the client's GitHub account and deploying to Vercel.

---

## 📋 PREREQUISITES

### What the Client Needs:
- [ ] GitHub account (free tier is fine)
- [ ] Vercel account (free tier)
- [ ] Gandi domain access (for DNS configuration)
- [ ] Email address for notifications

### What You Need:
- [ ] Admin access to current repository: `Dodyspy/oculus-sante`
- [ ] Client's GitHub username/email

---

## 🎯 OPTION 1: TRANSFER REPOSITORY OWNERSHIP (RECOMMENDED)

This transfers the entire repository to the client's GitHub account, preserving all history.

### Step 1: Prepare the Client's GitHub Account

**Client actions:**
1. Go to [github.com](https://github.com)
2. Sign up for a free account (if they don't have one)
3. Verify email address
4. Send you their **GitHub username** (e.g., `client-username`)

### Step 2: Transfer the Repository

**Your actions:**
1. Go to your repository: `https://github.com/Dodyspy/oculus-sante`
2. Click **Settings** (top right)
3. Scroll down to **Danger Zone** (bottom of page)
4. Click **Transfer ownership**
5. Enter the new owner's username: `[CLIENT_GITHUB_USERNAME]`
6. Type the repository name to confirm: `oculus-sante`
7. Click **I understand, transfer this repository**

**What happens:**
- GitHub sends an email to the client
- Client must accept the transfer within 7 days
- All commit history, branches, and settings are preserved
- Repository URL changes to: `https://github.com/[CLIENT_USERNAME]/oculus-sante`

### Step 3: Client Accepts Transfer

**Client actions:**
1. Check email for GitHub transfer notification
2. Click **Accept transfer** in the email
3. Confirm acceptance on GitHub
4. Repository now appears in their account

### Step 4: Update Local Git Remote (Optional - if client will make changes)

**Client actions (if they want to work locally):**
```bash
# Clone the repository to their computer
git clone https://github.com/[CLIENT_USERNAME]/oculus-sante.git
cd oculus-sante

# Install dependencies
npm install

# Test locally
npm run dev
# Open http://localhost:3000
```

---

## 🎯 OPTION 2: FORK/DUPLICATE REPOSITORY (ALTERNATIVE)

Use this if you want to keep a copy in your account.

### Step 1: Client Creates GitHub Account
Same as Option 1, Step 1.

### Step 2: You Create a Template/Fork

**Your actions:**
1. Go to `https://github.com/Dodyspy/oculus-sante`
2. Click **Use this template** → **Create a new repository**
   - OR click **Fork** (if you want to keep connection)
3. Owner: Select client's username (if they've added you as collaborator)
   - OR: You create it, then transfer (see Option 1)

### Step 3: Share Access

**Your actions:**
1. Go to repository **Settings** → **Collaborators**
2. Click **Add people**
3. Enter client's GitHub username
4. Select **Admin** role
5. Client receives invitation email

**Client actions:**
1. Accept collaboration invitation
2. Now has full access to repository

---

## 🚀 DEPLOY TO VERCEL (AFTER TRANSFER)

### Step 1: Client Creates Vercel Account

**Client actions:**
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access GitHub
5. Select **All repositories** or just `oculus-sante`

### Step 2: Import Project to Vercel

**Client actions:**
1. In Vercel dashboard, click **Add New...** → **Project**
2. Find `oculus-sante` in the repository list
3. Click **Import**

### Step 3: Configure Build Settings

**Client actions:**
Vercel auto-detects Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `./` (leave default) |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x |

### Step 4: Environment Variables (OPTIONAL)

**Client actions:**
- **For public website:** Skip this step (leave empty)
- **For password-protected previews:** Add these:
  - `BASIC_AUTH_USER` = `choose_username`
  - `BASIC_AUTH_PASS` = `choose_password`

**Important:** Production site works perfectly **without** any environment variables.

### Step 5: Deploy

**Client actions:**
1. Click **Deploy**
2. Wait 2-3 minutes for build to complete
3. Vercel shows success message with URL
4. Click **Visit** to see the live site
5. Temporary URL: `https://oculus-sante-xxx.vercel.app`

---

## 🌐 CONNECT CUSTOM DOMAIN (GANDI)

### Step 1: Add Domain in Vercel

**Client actions:**
1. In Vercel project, go to **Settings** → **Domains**
2. Enter domain: `oculus-sante.fr`
3. Click **Add**
4. Vercel shows DNS records to configure

**Vercel will provide these records:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Step 2: Configure DNS in Gandi

**Client actions:**
1. Log in to [gandi.net](https://www.gandi.net)
2. Go to **Domain** → Select `oculus-sante.fr`
3. Click **DNS Records**
4. **Delete** any existing A or CNAME records for `@` and `www`
5. Click **Add** and create these records:

**Record 1 (Root domain):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `300` (or default)

**Record 2 (WWW subdomain):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `300` (or default)

6. Click **Save** for each record

### Step 3: Verify Domain

**Client actions:**
1. Return to Vercel dashboard
2. Click **Refresh** next to the domain
3. Wait 5-60 minutes for DNS propagation
4. Status changes to **Valid** when ready
5. Vercel automatically provisions SSL certificate

### Step 4: Test

**Client actions:**
1. Open browser (incognito mode recommended)
2. Visit `https://oculus-sante.fr`
3. Visit `https://www.oculus-sante.fr`
4. Both should work with HTTPS (🔒 padlock icon)

---

## ✅ POST-DEPLOYMENT CHECKLIST

**Client should verify:**
- [ ] Website loads at custom domain
- [ ] HTTPS/SSL working (green padlock)
- [ ] All pages accessible (test navigation)
- [ ] Contact form/Doctolib links working
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (press F12 in browser)

---

## 🔧 ONGOING MAINTENANCE

### How Auto-Deployment Works

**After setup:**
1. Client makes changes to code (or hires developer)
2. Changes are committed to GitHub `main` branch
3. Vercel **automatically detects** the push
4. Vercel **automatically builds** and deploys
5. New version live in 2-3 minutes

**No manual deployment needed!**

### Making Content Changes

**Client actions (or their developer):**
1. Clone repository locally (if not already done)
2. Make changes to files in `/src/app/` directory
3. Test locally: `npm run dev`
4. Commit changes: `git add .` → `git commit -m "Update content"`
5. Push to GitHub: `git push origin main`
6. Vercel auto-deploys in 2-3 minutes

### Key Files to Edit

| Content | File Location |
|---------|---------------|
| Services | `/src/app/services/page.tsx` |
| Team | `/src/app/equipe/page.tsx` |
| About | `/src/app/a-propos/page.tsx` |
| Contact info | `/src/components/Footer.tsx` |
| Homepage | `/src/app/page.tsx` |
| Legal info | `/src/app/mentions-legales/page.tsx` |

---

## 🆘 TROUBLESHOOTING

### Transfer Not Received
**Problem:** Client didn't receive transfer email  
**Solution:**
- Check spam/junk folder
- Verify GitHub email is confirmed
- You can resend transfer from GitHub settings

### Build Fails on Vercel
**Problem:** Deployment shows errors  
**Solution:**
- Check build logs in Vercel dashboard
- Verify Node.js version is 20.x
- Contact Vercel support (free tier has support)

### Domain Not Connecting
**Problem:** Domain shows error or doesn't load  
**Solution:**
- Wait 30-60 minutes for DNS propagation
- Verify DNS records match exactly (no typos)
- Use [dnschecker.org](https://dnschecker.org) to verify propagation
- Clear browser cache (Ctrl+Shift+Delete)

### SSL Certificate Issues
**Problem:** "Not Secure" warning  
**Solution:**
- Wait 10-15 minutes after domain verification
- Vercel auto-provisions SSL (Let's Encrypt)
- Check Vercel dashboard → Domains → SSL status

---

## 📞 SUPPORT CONTACTS

### For Technical Issues:
- **Vercel Support:** [vercel.com/support](https://vercel.com/support) (Free tier included)
- **GitHub Support:** [support.github.com](https://support.github.com)
- **Gandi Support:** [gandi.net/support](https://www.gandi.net/support)

### For Code Questions:
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **React Docs:** [react.dev](https://react.dev)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 📋 QUICK REFERENCE CHECKLIST

Print this for the client:

### Initial Setup (One-time)
- [ ] Client creates GitHub account
- [ ] You transfer repository to client
- [ ] Client accepts transfer
- [ ] Client creates Vercel account (via GitHub)
- [ ] Client imports project to Vercel
- [ ] Client deploys (no env vars needed)
- [ ] Client adds domain in Vercel
- [ ] Client configures DNS in Gandi
- [ ] Wait for DNS propagation (30-60 min)
- [ ] Verify HTTPS works
- [ ] Test all pages

### Monthly Checks (Recommended)
- [ ] Verify site is loading correctly
- [ ] Check Vercel dashboard for any alerts
- [ ] Review bandwidth usage (should be <10% of 100GB)
- [ ] Test contact forms/links still work
- [ ] Verify SSL certificate is valid

---

## 💰 COST SUMMARY

| Service | Plan | Monthly Cost |
|---------|------|--------------|
| GitHub | Free | $0 |
| Vercel | Hobby (Free) | $0 |
| Gandi Domain | Paid | ~€15-20/year |
| **Total** | | **~€1.50/month** |

**Note:** Only the domain costs money. Hosting is completely free.

---

## 🎉 FINAL NOTES

**This website is:**
- ✅ Production-ready
- ✅ Fully tested
- ✅ Optimized for free tier
- ✅ Auto-deploying
- ✅ SSL-secured
- ✅ Mobile-responsive
- ✅ SEO-optimized

**The client can:**
- ✅ Deploy in 10 minutes
- ✅ Run on free tier indefinitely
- ✅ Make content updates easily
- ✅ Scale without additional costs

**You've delivered a professional, production-grade website that will serve the client well for years to come.**

---

**Questions?** Refer to the main `README.md` for additional technical details.
