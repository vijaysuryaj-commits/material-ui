import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/bundle-analysis.html',  // output file
      open: true,  // open report automatically after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
})
