import { preset } from 'lilasia-ui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/lilasia-ui/dist/**/*.js'
  ],
  presets: [preset],
  theme: {
    extend: {}
  },
  plugins: []
}
