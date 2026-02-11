/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#34D399'
        },
        dark: {
          DEFAULT: '#0F1419',
          secondary: '#1A1F2E',
          tertiary: '#242938'
        }
      }
    },
  },
  plugins: [],
}
