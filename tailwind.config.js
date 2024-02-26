/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'footer': { 'max': '500px' },
        'home': { 'max': '500px' },
      },
      fontSize: {
        '60': '60px',
        '10': '10px',
        '15': '15px',
      },
      width:{
        '100':'100px'
      }
    },
  },
  plugins: [],
}

