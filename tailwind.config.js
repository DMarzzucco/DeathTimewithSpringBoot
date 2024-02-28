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
        'About': { 'max': '950px' },
        'mini': { 'max': '300px' }
      },
      fontSize: {
        '60': '60px',
        '30': '30px',
        '20': '20px',
        '15': '15px',
        '10': '10px',
      },
      width: {
        '100': '100px',
        'tre': '300px',
        'dosh': '200px'
      },
      height: {
        'All': '100vh'
      },
      colors: {
        'blackGray': "#272a30",
        'Bg2': '#32363D',
        'Gr': '#969696',
        'sta': '#C3CBD3'
      }
    },
  },
  plugins: [],
}

