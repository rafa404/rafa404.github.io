import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import seoGraph from '@jdevalk/astro-seo-graph/integration';

export default defineConfig({
  site: 'https://rafa404.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      validateMetadataLength: true,
      validateInternalLinks: true,
      llmsTxt: {
        title: 'M. M. Golam Hafiz — Academic Research Portfolio',
        siteUrl: 'https://rafa404.github.io',
        summary: 'Verified public research in medical image analysis, federated learning, uncertainty quantification, and explainable AI.',
        filter: (url) => !new URL(url).pathname.startsWith('/404'),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
