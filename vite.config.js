import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Bind to IPv4 loopback: on some machines Node resolves "localhost" to ::1
  // only, and browsers going through IPv4 can't reach the dev server.
  server: { host: '127.0.0.1', port: 5173 },
  preview: { host: '127.0.0.1' },
})
