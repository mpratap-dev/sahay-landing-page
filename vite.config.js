import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const GITHUB_PAGES_STATIC_ROUTES = ['privacy-policy', 'delete-account', 'contact'];

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const indexHtml = resolve('dist/index.html');
      if (!existsSync(indexHtml)) {
        return;
      }

      copyFileSync(indexHtml, resolve('dist/404.html'));

      for (const route of GITHUB_PAGES_STATIC_ROUTES) {
        const routeIndex = resolve('dist', route, 'index.html');
        mkdirSync(dirname(routeIndex), { recursive: true });
        copyFileSync(indexHtml, routeIndex);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: '/',
});
