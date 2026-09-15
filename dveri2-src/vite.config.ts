import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Source lives in dveri2-src/, built static site is emitted as a sibling
// folder (../dveri2) so GitHub Pages can serve it directly at /dveri2/.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: '../dveri2',
    emptyOutDir: true,
  },
})
