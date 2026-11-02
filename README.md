# M. M. Golam Hafiz — Academic Research Portfolio

A static Astro portfolio for verified public research in medical image analysis, federated learning, uncertainty quantification, and explainable AI. The visual direction is **Topology Atlas**: a restrained editorial system that maps methods to public research outcomes instead of presenting a generic chronological portfolio.

## Design system

- Display: Literata Variable
- Body and interface: Schibsted Grotesk Variable
- Technical metadata: IBM Plex Mono
- Palette: cool paper, carbon ink, deep teal, mineral blue, and a restrained terracotta signal color
- Layout: research-journal typography, evidence maps, publication ledgers, and original architecture plates

Fonts are self-hosted through Fontsource. The site contains no analytics, tracking scripts, contact forms, or third-party font requests.

## Evidence and privacy rules

- Published, in-press, public-preprint, and researcher-approved review-stage metadata are included in `src/data/publications.ts`.
- Publication status, venue, author order, DOI, and official links were checked against the canonical portfolio data and primary publisher or conference sources where available.
- Abstracts are reproduced from publisher-indexed or approved manuscript sources; each detail page identifies its source.
- Under-review entries expose only researcher-approved metadata. Anonymous submissions, confidential abstracts, manuscript files, reviewer details, and drafts are excluded from the website source and production output.
- Personal phone numbers, private email addresses, and the source CV PDF are not published.
- Architecture assets in `src/assets/research/` are exact embedded figures extracted from approved papers. They are not redrawn or AI-generated. Astro creates responsive AVIF/WebP delivery copies while leaving the source assets unchanged.

## Local development

Requirements: Node.js 22.22 or newer and npm 9.6.5 or newer.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run test:e2e
npm run audit:lighthouse
npm audit --audit-level=high
```

`npm run build` runs `astro check` before producing the static site in `dist/`.

## GitHub Pages

This directory is prepared to be the repository root for `rafa404/rafa404.github.io`:

1. Create or connect the `rafa404.github.io` repository.
2. Push this directory to its `main` branch.
3. In repository settings, set **Pages → Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys the static artifact.

The canonical site URL is configured as `https://rafa404.github.io` in `astro.config.mjs`. A scheduled link-check workflow is also included.

## Generated discovery files

The production build creates:

- `sitemap-index.xml`
- `robots.txt`
- `feed.xml`
- `llms.txt`
- Open Graph image at `og.jpg`
- JSON-LD for the researcher, website, profile page, and publication detail pages

Search Console, Bing Webmaster Tools, and IndexNow submission require control of the live site and are intentionally not automated in this local build.
