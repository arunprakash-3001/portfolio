import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This repository deploys at https://arunprakash-3001.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react()],
})
