import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    vue(),
    react({
      jsxRuntime: 'classic'
    })
  ],
  base: './',
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        auth: 'auth.html',
        partners: 'partners.html',
        services: 'services.html',
        sig: "sig.html"
      },
    },
  }
})
