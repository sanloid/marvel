/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'red-acid': 'rgb(207, 19, 19)'
      },
      fontFamily: {
        marvel: ['Marvel']
      },
      screens: {
        xxxsm: '280px',
        xxsm: '350px',
        xsm: '540px'
      }
    }
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
};
