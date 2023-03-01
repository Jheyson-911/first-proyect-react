/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mobile-black': '#222222',
        'title-color': '#777777',
        'content-color': '#888888',
        'green-main': '#4acaa8',
        'white-main': '#ffffff',
      },
      transitionProperty: {
        drawer: 'display, transform',
      },
      screens: {
        celular: '320px',
        cel: '500px',
      },
    },
  },
  plugins: [],
};
