import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Change 'ct-reporting' to match your GitHub repository name exactly
export default defineConfig({
  base: '/ct-reporting/',
  plugins: [react(), tailwindcss()],
})
