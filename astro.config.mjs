// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react(), partytown()],
});
