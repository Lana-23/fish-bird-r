/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#006994',
        'sea-green': '#2E8B57',
        'aqua-green': '#3CB371',
        'deep-blue': '#003366',
        'light-blue': '#87CEEB',
        'coral': '#FF7F50',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}