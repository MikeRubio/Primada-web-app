import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/.chrome-*/**', '**/.qa-assets/**', '**/*-preview*.png', '**/*-section.png'],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
