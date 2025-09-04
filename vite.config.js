import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping/",  // <-- must match your old repo name
  plugins: [react()],
})
