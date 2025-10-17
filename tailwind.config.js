/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})
