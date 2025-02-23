// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    partytown({
    config: {
      forward: ["dataLayer.push"],
      },
    }), 
    sitemap()],
});
