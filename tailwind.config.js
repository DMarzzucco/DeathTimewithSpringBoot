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
        '40': '40px',
        '30': '30px',
        '20': '20px',
        '18': '18px',
        '16': '16px',
        '15': '15px',
        '10': '10px',
        '5': '5px',
      },
      fontFamily: {
        'jet': 'Jetbrains Mono'
      },
      width: {
        '100': '100px',
        'tre': '300px',
        'doshMed': '240px',
        'dosh': '200px',
      },
      height: {
        'All': '100vh',
        'tre': '300px',
        'dosh': '200px',
        'cin': '100px'
      },
      colors: {
        'blackGray': "#272a30",
        'Bg2': '#32363D',
        'Gr': '#969696',
        'sta': '#C3CBD3',
        'Orang': '#C96718'
      },
      margin: {
        'Load': { '15px': 'auto' }
      },
      borderRadius: {
        '50': '50%',
        '30': '30px'
      },
      boxShadow: {
        'den': '-24px 0px, 24px 0px',
      },
      keyframes: {
        'rote': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
      , animation: {
        'rote': 'rote 2s linear infinite'
      },
    },
  },
  plugins: [],
}

