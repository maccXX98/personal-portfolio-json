// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Used for canonical, hreflang and absolute Open Graph URLs. Override with SITE_URL.
  site: process.env.SITE_URL || 'https://portfoliomcastillo.netlify.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  image: {
    domains: ['avatars.githubusercontent.com'],
  },
});
