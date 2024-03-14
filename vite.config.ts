import { vitePlugin } from '@remix-run/dev'
import { vercelPreset } from '@vercel/remix/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [vitePlugin({ presets: [vercelPreset()] }), tsConfigPaths()],
})
