// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js - Setting up proxy to avoid CORS issues during development
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000',  // Flask server address
    }
  }
}
