/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@material-tailwind/html/**/*.js',
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@material-tailwind/html/utils/withMT')],
};
