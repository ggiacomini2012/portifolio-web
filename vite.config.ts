/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
  },
  server: { host: true },
  test: {
    exclude: ['react/templates/page/template.test.tsx' ],
    globals: true,
    setupFiles: '../setupTests.ts',
    reporters: 'verbose',
    coverage: {
      reporter: ['text', 'html'],
      reportsDirectory: '../coverage',
    },
    watch: false,
    environment: 'jsdom',
  },
});

