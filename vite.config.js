import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the base to your repo name
export default defineConfig({
  base: '/e-plantShopping/',
  plugins: [react()],
})
