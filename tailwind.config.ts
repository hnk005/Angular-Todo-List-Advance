/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@material-tailwind/html/**/*.js',
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c0a09',
        secondary: '#57534e',
        tertiary: '#a8a29e',
      },
    },
  },
  plugins: [require('@material-tailwind/html/utils/withMT')],
};
