import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce-app/', // هذا موجود عندك
  publicDir: 'img'         // ★ هذا هو السطر الجديد والمهم جداً ★
})