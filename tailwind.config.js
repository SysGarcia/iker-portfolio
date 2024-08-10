/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        forest:"#50b552",
        light_forest:"#6ad46c",
        stratos:"#000838"
      },
      screens: {
        'tall': { 'raw': '(max-width: 600px)' },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
