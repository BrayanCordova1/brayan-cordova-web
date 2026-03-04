// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://brayan-cordova.vercel.app/",
  trailingSlash: "always",
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});