import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hbase-35-snapshot/',
  server: {
    port: 54335,
  },
})
