// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set SITE_URL at build time to emit canonical, hreflang and absolute Open Graph URLs.
  site: process.env.SITE_URL || undefined,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  image: {
    domains: ['avatars.githubusercontent.com'],
  },
});
