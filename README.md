# Rahul Kushwaha — Portfolio

A single-page portfolio built with Next.js 14 (App Router) + Tailwind CSS, featuring an interactive
"live classifier" hero widget (drag your cursor across the scatter plot to see a decision boundary
and confidence score update in real time — a nod to the classification work in the projects below).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js      → fonts, metadata
  page.js        → the entire single-page site
  globals.css    → design tokens (colors, grid background) as CSS
components/
  Classifier.jsx → the interactive hero widget
lib/
  data.js        → ALL your content (experience, projects, skills, etc.) lives here
public/
  resume.pdf     → your resume, wired to the "Resume" button in the nav
tailwind.config.js → color palette + font family tokens
```

## Editing your content

Everything text-based lives in `lib/data.js` — update your experience, projects, skills,
education, certifications, and achievements there. The page (`app/page.js`) just renders it,
so you don't need to touch layout code to update content.

To swap the resume PDF, replace `public/resume.pdf` with your latest file (keep the same filename,
or update the `href` in `app/page.js`'s nav).

## Deploying to Vercel

**Option A — via GitHub (recommended)**
1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, sign in with GitHub, and import the repository.
3. Vercel auto-detects Next.js — leave the defaults and click **Deploy**.
4. You'll get a live URL like `your-portfolio.vercel.app`. You can attach a custom domain
   later from the project's Settings → Domains.

**Option B — via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to production
```

## Design notes

- **Palette**: deep navy background (`#090C12`) with a signal-blue accent (`#4C7DFF`) for
  interactive/technical elements and a calibration-amber (`#F5A94C`) + accuracy-green (`#34D399`)
  used sparingly for metrics — echoing a model-evaluation color language rather than a generic
  dark/neon theme.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (data/metric labels) — all
  self-hosted via `@fontsource` so there's no runtime dependency on Google Fonts.
- **Signature element**: the hero's live classifier — real math (nearest-centroid distance +
  a perpendicular-bisector decision boundary), not a decorative animation.
