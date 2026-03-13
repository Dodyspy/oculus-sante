# 🔄 COMPLETE HANDOVER GUIDE
## GitHub Repository + Vercel + Gandi Domain Transfer

This guide covers the **complete handover** of the Oculus Santé website to the client:
1. ✅ GitHub repository transfer
2. ✅ Vercel deployment setup
3. ✅ Gandi domain transfer

---

## 📋 PREREQUISITES

### What the Client Needs:
- [ ] GitHub account (free tier is fine)
- [ ] Vercel account (free tier)
- [ ] Gandi account (for receiving domain)
- [ ] Email address for notifications
- [ ] Payment method for Gandi (domain renewal ~€15-20/year)

### What You Need:
- [ ] Admin access to current repository: `Dodyspy/oculus-sante`
- [ ] Client's GitHub username/email
- [ ] Admin access to Gandi account with `oculus-sante.fr` domain
- [ ] Client's Gandi account email/username
- [ ] Authorization code from Gandi (for domain transfer)

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

## � PART 3: GANDI DOMAIN TRANSFER

**IMPORTANT:** Domain transfer is a separate process from DNS configuration. This section covers transferring domain **ownership** from your Gandi account to the client's Gandi account.

### Prerequisites for Domain Transfer

**Before starting:**
- [ ] Domain is unlocked in your Gandi account
- [ ] Domain is not within 60 days of registration or previous transfer
- [ ] Client has created a Gandi account
- [ ] You have client's Gandi account email/username
- [ ] Domain auto-renewal is disabled (optional, but recommended)

### Step 1: Client Creates Gandi Account

**Client actions:**
1. Go to [gandi.net](https://www.gandi.net)
2. Click **Create an account**
3. Fill in details:
   - Email address (they'll use this to manage domain)
   - Password
   - Contact information (must be accurate for domain ownership)
4. Verify email address
5. **Send you their Gandi account email/username**

### Step 2: Prepare Domain for Transfer (Your Side)

**Your actions in Gandi dashboard:**

1. **Log in to Gandi:** [gandi.net](https://www.gandi.net)

2. **Go to Domain Management:**
   - Click **Domain** in top menu
   - Select `oculus-sante.fr`

3. **Unlock the Domain:**
   - Go to **Security** tab
   - Find **Transfer Lock** section
   - Click **Disable** (if enabled)
   - Confirm the action
   - Wait 5 minutes for changes to propagate

4. **Get Authorization Code:**
   - Still in **Security** tab
   - Find **Authorization Code** section
   - Click **Generate** or **Show**
   - **Copy this code** (you'll need it for transfer)
   - Example format: `ABC123XYZ789` (12-16 characters)

5. **Disable Auto-Renewal (Recommended):**
   - Go to **Automatic Renewal** tab
   - Click **Disable**
   - This prevents charges to your account after transfer

6. **Verify Contact Information:**
   - Go to **Contacts** tab
   - Ensure all contact info is accurate
   - This transfers with the domain

### Step 3: Initiate Domain Transfer (Client Side)

**Client actions in their Gandi account:**

1. **Log in to Gandi:** [gandi.net](https://www.gandi.net)

2. **Start Transfer Process:**
   - Click **Domain** → **Transfer a domain**
   - OR go directly to: [gandi.net/domain/transfer](https://www.gandi.net/domain/transfer)

3. **Enter Domain Name:**
   - Type: `oculus-sante.fr`
   - Click **Check**

4. **Enter Authorization Code:**
   - Paste the code you provided: `[AUTH_CODE_FROM_STEP_2]`
   - Click **Continue**

5. **Review Transfer Details:**
   - Verify domain name is correct
   - Check transfer price (usually includes 1-year renewal: ~€15-20)
   - Review contact information

6. **Complete Payment:**
   - Add to cart
   - Proceed to checkout
   - Enter payment details
   - Confirm purchase

7. **Confirm Transfer:**
   - Gandi sends confirmation email
   - Click confirmation link in email
   - Transfer process begins

### Step 4: Approve Transfer (Your Side)

**Your actions:**

1. **Check Email:**
   - Look for email from Gandi: "Transfer request for oculus-sante.fr"
   - Check spam/junk folder if not in inbox

2. **Approve Transfer:**
   - Open the email
   - Click **Approve Transfer** link
   - OR log in to Gandi and approve in dashboard
   - Confirm approval

3. **What Happens:**
   - Transfer can take 5-10 days (standard ICANN process)
   - Usually completes in 24-48 hours if approved quickly
   - Domain remains functional during transfer
   - DNS settings are preserved

### Step 5: Monitor Transfer Progress

**Client actions:**

1. **Check Transfer Status:**
   - Log in to Gandi
   - Go to **Domain** → **Transfers in progress**
   - Status shows: "Pending", "In progress", or "Completed"

2. **Receive Confirmation:**
   - Gandi sends email when transfer completes
   - Domain appears in client's domain list
   - Client now has full ownership

### Step 6: Post-Transfer Verification

**Client actions after transfer completes:**

1. **Verify Domain Ownership:**
   - Log in to Gandi
   - Go to **Domain** → `oculus-sante.fr`
   - Confirm you can access all settings

2. **Check DNS Records:**
   - Go to **DNS Records** tab
   - Verify Vercel DNS records are still in place:
     - `A` record: `@` → `76.76.21.21`
     - `CNAME` record: `www` → `cname.vercel-dns.com`
   - If missing, re-add them (see "Connect Custom Domain" section above)

3. **Test Website:**
   - Visit `https://oculus-sante.fr`
   - Verify site loads correctly
   - Check HTTPS/SSL is working

4. **Enable Auto-Renewal (Recommended):**
   - Go to **Automatic Renewal** tab
   - Click **Enable**
   - Set payment method
   - Prevents domain expiration

5. **Update Contact Information (If Needed):**
   - Go to **Contacts** tab
   - Update owner, admin, technical, billing contacts
   - Use client's information

### Alternative: Change Account Ownership (Faster)

If you and the client prefer a faster method (no 5-10 day wait):

**Option: Change Owner Contact**

1. **Your actions in Gandi:**
   - Go to domain → **Contacts** tab
   - Click **Change owner**
   - Enter client's contact information
   - Submit change

2. **Verification:**
   - Both you and client receive verification emails
   - Both must approve the change
   - Ownership transfers in 24-48 hours

3. **Limitations:**
   - Domain stays in your Gandi account
   - Client doesn't get their own Gandi dashboard access
   - Not recommended for full handover

**Recommendation:** Use the full transfer process (Steps 1-6) for complete client independence.

### Important Notes About Domain Transfer

**During Transfer (5-10 days):**
- ✅ Website remains online and functional
- ✅ Email continues working (if configured)
- ✅ DNS settings are preserved
- ✅ SSL certificate remains valid
- ⚠️ Cannot modify DNS during transfer
- ⚠️ Cannot transfer to another registrar during this time

**After Transfer:**
- ✅ Client has full control in their Gandi account
- ✅ Client receives renewal notices
- ✅ Client can update DNS, contacts, settings
- ✅ You no longer have access or responsibility
- ✅ Domain renewal charges go to client's payment method

**Transfer Costs:**
- Transfer fee: ~€15-20 (includes 1-year renewal)
- Extends domain expiration by 1 year
- Client pays this fee during transfer

**Timeline:**
- Authorization code generation: Instant
- Transfer initiation: 5 minutes
- Transfer approval: 24 hours (if you approve quickly)
- Transfer completion: 5-10 days (ICANN standard)
- Fast-track possible: 24-48 hours with quick approval

---

## � TROUBLESHOOTING

### GitHub Transfer Not Received
**Problem:** Client didn't receive GitHub transfer email  
**Solution:**
- Check spam/junk folder
- Verify GitHub email is confirmed
- You can resend transfer from GitHub settings

### Domain Transfer Stuck/Delayed
**Problem:** Domain transfer taking longer than expected  
**Solution:**
- Check if you approved the transfer in your Gandi account
- Verify authorization code was entered correctly
- Contact Gandi support (both parties can expedite)
- Standard wait time is 5-10 days (ICANN requirement)

### Domain Transfer Rejected
**Problem:** Transfer was rejected or failed  
**Solution:**
- Verify domain is unlocked in your Gandi account
- Check domain is not within 60 days of registration
- Ensure authorization code is still valid (regenerate if needed)
- Confirm client entered correct domain name
- Check both email accounts for rejection notices

### DNS Records Lost After Domain Transfer
**Problem:** Website not loading after domain transfer completes  
**Solution:**
- Log in to client's Gandi account
- Go to Domain → DNS Records
- Re-add Vercel DNS records:
  - `A` record: `@` → `76.76.21.21`
  - `CNAME` record: `www` → `cname.vercel-dns.com`
- Wait 30-60 minutes for propagation

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

**Phase 1: GitHub Transfer**
- [ ] Client creates GitHub account
- [ ] You transfer repository to client
- [ ] Client accepts transfer

**Phase 2: Vercel Deployment**
- [ ] Client creates Vercel account (via GitHub)
- [ ] Client imports project to Vercel
- [ ] Client deploys (no env vars needed)
- [ ] Verify deployment successful

**Phase 3: Domain Transfer**
- [ ] Client creates Gandi account
- [ ] You unlock domain in Gandi
- [ ] You generate authorization code
- [ ] You disable auto-renewal (optional)
- [ ] Client initiates transfer in their Gandi
- [ ] Client pays transfer fee (~€15-20)
- [ ] You approve transfer via email
- [ ] Wait 1-10 days for transfer completion
- [ ] Client verifies domain ownership

**Phase 4: DNS & Final Setup**
- [ ] Client adds domain in Vercel
- [ ] Client configures DNS in Gandi (A + CNAME records)
- [ ] Wait for DNS propagation (30-60 min)
- [ ] Verify HTTPS works
- [ ] Test all pages
- [ ] Client enables auto-renewal in Gandi

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
