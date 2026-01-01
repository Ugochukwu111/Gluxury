import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
   server: {
    host: true,    // This replaces the CLI flag and forces the exposure
    strictPort: true, 
  }
})
