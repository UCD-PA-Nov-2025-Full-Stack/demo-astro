// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//export default defineConfig({});

// see https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  outDir: './docs',
  site: 'https://ucd-pa-nov-2025-full-stack.github.io',
  base: '/demo-astro',
});


