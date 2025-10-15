import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tlaccount/', // นี่คือการแก้ไขที่ถูกต้อง
})