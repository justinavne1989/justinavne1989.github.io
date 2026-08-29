# Justin Avne — Product Portfolio

A static product-leadership portfolio for Justin Avne. Built with Vite, React, TypeScript, Tailwind CSS, and React Router. No backend, no database, no paid services. Suitable for GitHub Pages.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## 3. Image organization

Original screenshot folders at the repository root are **not** used by the site and should not be renamed or deleted:

- `quantum-gm-screenshots/`
- `atlas-command-center-screenshots/`
- `membership-intelligence-screenshots/`
- `showcase-screenshots/`

The site reads **deployment copies** from:

```
public/images/
  quantum-gm/
  ai-creative/
  subscription-intelligence/
  product-planning/
```

To add or replace a screenshot:

1. Copy the file into the matching `public/images/...` folder.
2. Give it a short descriptive filename (for example `dashboard.png`).
3. Register it in `src/data/projects.ts` (`hero` and `screenshots`).

Do not crop important UI. Prefer the image’s native aspect ratio.

## 4. Production build

```bash
npm run build
```

This typechecks the project, writes static files to `dist/`, and copies `index.html` to `dist/404.html` so GitHub Pages can fall back to the SPA on direct links.

Preview the production build:

```bash
npm run preview
```

## 5. GitHub Pages deployment

This is a static SPA. Direct routes such as `/work/quantum-gm` need a fallback.

The build already writes `dist/404.html` (a copy of `index.html`). A `.nojekyll` file is included so GitHub Pages does not process the site with Jekyll.

### Project site (`https://<user>.github.io/<repo>/`)

Set the Vite base path to the repository name, then build:

```bash
# PowerShell
$env:VITE_BASE_PATH="/<repo>/"
npm run build
```

```bash
# bash
VITE_BASE_PATH="/<repo>/" npm run build
```

Example: if the repo is `justin-portfolio`, use `/justin-portfolio/`.

Deploy the contents of `dist/` to GitHub Pages (Actions, `gh-pages` branch, or the Pages “deploy from folder” setting).

### User site (`https://<user>.github.io/`)

Leave the base path as `/` (the default) and deploy `dist/`.

Do not add a backend to solve routing. If you prefer hash URLs instead of the `404.html` fallback, switch `BrowserRouter` in `src/App.tsx` to `HashRouter` (and drop the `basename` prop).

## 6. Replacing the resume PDF

Place the file at:

```
public/resume/justin-avne-resume.pdf
```

The Resume links in navigation, footer, and About point to that path. If the file is missing, the site opens a short notice instead of a broken download.

## 7. Changing project content

Most copy, tags, routes, and screenshot captions live in:

- `src/data/projects.ts` — projects, screenshots, theses, tags
- `src/data/site.ts` — name, LinkedIn, focus areas, process steps, SEO defaults

Case-study narrative that is unique to a page lives in:

- `src/pages/work/QuantumGM.tsx`
- `src/pages/work/AiCreative.tsx`
- `src/pages/work/SubscriptionIntelligence.tsx`
- `src/pages/work/ProductPlanning.tsx`
- `src/pages/work/ConsumerApp.tsx`

Routes are declared in `src/App.tsx`.

## Stack

- Vite
- React 19
- TypeScript
- Tailwind CSS
- React Router
- Lucide icons
