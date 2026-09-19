import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite-plugin-imagemin is optional at build — skip if not installed
let viteImagemin
try {
  viteImagemin = (await import('vite-plugin-imagemin')).default
} catch {
  viteImagemin = null
}

const imageminPlugin = viteImagemin
  ? viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 82 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }],
      },
      webp: { quality: 82 },
    })
  : null

export default defineConfig({
  base: './',           // relative base — user sets repo path in GH Pages settings
  plugins: [react(), imageminPlugin].filter(Boolean),
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
