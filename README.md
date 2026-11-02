# M. M. Golam Hafiz — Academic Research Portfolio

A static Astro portfolio for research in medical image analysis, federated learning, uncertainty quantification, and explainable AI. The site uses a restrained editorial system built around publications, research systems, and original architecture figures.

## Design system

- Display: Literata Variable
- Body and interface: Schibsted Grotesk Variable
- Technical metadata: IBM Plex Mono
- Palette: cool paper, carbon ink, deep teal, mineral blue, and a restrained terracotta signal color
- Layout: research-journal typography, clear publication lists, and original architecture plates

Fonts are self-hosted through Fontsource. The site contains no analytics, tracking scripts, contact forms, or third-party font requests.

## Content

- Publications are grouped as published, in press, preprint, or under review.
- Detail pages include abstracts, publication information, and official links where available.
- Architecture figures are displayed from the original supplied assets with responsive AVIF/WebP delivery.

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

The public CV PDF can be regenerated from the local preview with:

```bash
npm run generate:cv
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
