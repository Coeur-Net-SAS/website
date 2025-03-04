import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/

export default defineConfig({
  plugins: [vue(),react({
    jsxRuntime: 'classic' // Add this line
  })],
  base: './',
  server: {
    host: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
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
