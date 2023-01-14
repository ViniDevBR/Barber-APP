/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          350: '#D8D8D8',
          950: '#151515'
        },
        green: {
          450: '#00B929'
        }
      }
    },
  },
  plugins: [],
}
