import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/slide-card-display/',
  plugins: [svelte()],
  build: {
    outDir: './docs'
  }
})
