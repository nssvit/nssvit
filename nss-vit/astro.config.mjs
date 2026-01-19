/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ astro.config.mjs
 * ╹ root/
 */

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Server mode for Sanity Studio, pages prerender by default
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  prefetch: {
    prefetchAll: true, // Prefetch all links on hover
    defaultStrategy: 'hover', // Start loading when user hovers
  },
  integrations: [
    react(),
    sanity({
      projectId: 'o3z0h95j',
      dataset: 'production',
      useCdn: true, // Use CDN for faster reads
      studioBasePath: '/admin', // Sanity Studio at /admin
    }),
  ],
});