# Milesnick Law — Site Deployment Guide

Built by Claude. Deployed by you. Here's every step.

---

## What's in This Package

| File | Purpose |
|------|---------|
| index.html | Homepage |
| fca.html | False Claims Act practice area page |
| title-vii.html | Employment discrimination practice area page |
| about.html | Rob's bio page |
| intake.html | AI intake screener page |
| style.css | Shared stylesheet — all pages use this |
| cf-worker.js | Cloudflare Worker proxy for the AI screener |
| README.md | This file |

---

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the green **New** button (top left, or the **+** menu → New repository)
3. Name it: `milesnick-law`
4. Leave everything else as default
5. Click **Create repository**

---

## Step 2: Upload Your Files

1. On the repository page, look for the link that says **"uploading an existing file"** — click it
2. Drag ALL the files from this package onto the dotted upload area
3. Wait for them to upload — you'll see them listed
4. Scroll down to the **Commit changes** section
5. Leave the default commit message or write "Initial site upload"
6. Click **Commit changes**

You'll now see all your files listed in the repository. 

---

## Step 3: Turn on GitHub Pages

1. Click **Settings** in the top menu of your repository
2. Click **Pages** in the left sidebar (under "Code and automation")
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and keep the folder as **/ (root)**
5. Click **Save**

GitHub will show a yellow banner saying it's building. Wait about 60 seconds and refresh — you'll see a green banner with your site URL. It will look like:

`https://[your-github-username].github.io/milesnick-law/`

Your site is now live at that URL.

---

## Step 4: Connect Your Domain (milesnick.law)

To use milesnick.law instead of the github.io address:

**In GitHub:**
1. Settings → Pages → Custom domain
2. Type: `milesnick.law`
3. Click Save
4. Check **Enforce HTTPS** (may take a few minutes to appear)

**In your domain registrar (Namecheap or wherever you registered milesnick.law):**

Go to DNS settings and add these records:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | [your-username].github.io |

DNS changes take 15 minutes to a few hours to propagate. Once they do, https://milesnick.law will load your site.

---

## Step 5: Activate the AI Intake Screener

The screener on intake.html currently runs in demo mode — it shows example responses but doesn't call the real AI. To make it live:

### Part A — Get an Anthropic API Key
1. Go to https://console.anthropic.com
2. Sign up or sign in
3. Click **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`) — you won't see it again, save it somewhere safe

### Part B — Deploy the Cloudflare Worker Proxy
(This is a free service that connects the site to the AI without exposing your API key)

1. Go to https://workers.cloudflare.com — create a free account
2. Click **Create Worker**
3. Delete all the default code in the editor
4. Copy everything from **cf-worker.js** in this package and paste it in
5. Click **Save and Deploy**
6. Click **Settings** → **Variables and Secrets**
7. Click **Add variable**:
   - Variable name: `ANTHROPIC_API_KEY`
   - Value: paste your API key from Part A
   - Click **Encrypt**
8. Click **Save**
9. Copy your Worker's URL from the top of the page — it looks like:
   `https://milesnick-intake.yourname.workers.dev`

### Part C — Connect the Site to the Worker
1. Go to your GitHub repository
2. Click on `intake.html`
3. Click the pencil icon (Edit) in the top right
4. Find this line (near the bottom of the file, in the script section):
   ```
   const PROXY_URL = 'YOUR_CLOUDFLARE_WORKER_URL_HERE';
   ```
5. Replace `YOUR_CLOUDFLARE_WORKER_URL_HERE` with your Worker URL from Part B
6. Scroll down and click **Commit changes**

The screener is now fully live with real AI. Test it by visiting intake.html and having a conversation.

---

## How to Update Site Content Later

To change any text on any page:

1. Go to your GitHub repository at github.com
2. Click the file you want to edit (e.g., index.html)
3. Click the pencil icon (Edit this file)
4. Find the text you want to change — use Ctrl+F / Cmd+F to search
5. Make your changes
6. Scroll down and click **Commit changes**

The site updates within about 60 seconds. No software needed.

---

## Update Checklist Before Going Live

Before sending anyone to the site, confirm:

- [ ] `rob@milesnick.law` email address is working (update in intake.html if different)
- [ ] Oregon and Washington bar admission is current
- [ ] craftmediation.com link in about.html points to your actual site
- [ ] Test the intake screener end-to-end with a sample case
- [ ] Google Analytics ID added (optional — paste one line of code into each HTML file's `<head>` section)

---

## Adding a Partner Later

When a partner joins, update the following:

1. **style.css** — no changes needed
2. **All HTML files** — find "Milesnick Law" and update to new firm name
3. **about.html** — add partner bio section
4. **nav** in each file — update firm name in navigation
5. **Footer** in each file — update firm name and bar admissions

A simple Find & Replace across all files handles 80% of it.

---

## Questions?

Bring the site files back to Claude and describe what you want to change. Claude can update any page, add new content, adjust the screener logic, or add new practice area pages.

The screener's case criteria (FCA knockouts, Title VII thresholds, geographic scope) are in the system prompt inside intake.html — update that section if your case selection standards change.

---

*Built May 2026. Milesnick Law.*

