import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Source lives in dveri-src/, built static site is emitted as a sibling
// folder (../dveri) so GitHub Pages can serve it directly at /dveri/.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: '../dveri',
    emptyOutDir: true,
  },
})
