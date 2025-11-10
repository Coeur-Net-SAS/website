/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html','./presse.html', './img/distinctions/*','./img/presse/*', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})
