import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  site: 'https://dominus10.github.io',
  plugins: [react({ jsxImportSource: '@emotion/react' })],
});