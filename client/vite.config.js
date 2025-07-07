import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Enables access via local network IP
    port: 5173,      // Optional: default port is fine
  }
})
