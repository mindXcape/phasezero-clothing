/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      apis: '/src/apis',
      assets: '/src/assets',
      components: '/src/components',
      context: '/src/context',
      data: '/src/data',
      hooks: '/src/hooks',
      layouts: '/src/layouts',
      pages: '/src/pages',
      provider: '/src/provider',
      routes: '/src/routes',
      scss: '/src/scss',
      utils: '/src/utils',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
