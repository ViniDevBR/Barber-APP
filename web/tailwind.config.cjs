/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          350: '#D8D8D8',
          550: '#6F6F6F',
          950: '#151515'
        },
        green: {
          450: '#00B929'
        }
      }
    }
  },
  plugins: []
})
