import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  build:{
    site: 'https://dominus10.github.io/',
  },
  integrations: [react()],
  output: "static",
  adapter: node({
    mode: "standalone"
  }),
  plugins: [react({ jsxImportSource: '@emotion/react' })],
});