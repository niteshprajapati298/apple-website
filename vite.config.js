import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "jsm-6zg",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})