/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1F7A8C',
        'dark-blue': '#022B3A',
        'light-blue': '#BFDBF7',
      }
    },
  },
  plugins: [],
}

