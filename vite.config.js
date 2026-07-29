import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce-app/',
  publicDir: 'img',
  build: {
    outDir: 'dist'  // ★ هذا السطر الجديد مهم جداً للنشر على Vercel ★
  }
})
