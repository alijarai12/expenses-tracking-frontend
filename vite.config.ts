import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
   server: {
    host: '0.0.0.0', // Allows access from outside the container
    port: 5173,      // Ensure it runs on the expected port
  },
})
