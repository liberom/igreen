import { defineConfig } from 'astro/config';

// Static slide-deck site for iGreen Energy.
// No SSR adapter needed: everything is pre-rendered to HTML at build time.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: 'https://liberom.github.io',
  base: '/igreen',
});
