/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#57534e",
        secondary: "#0c0a09",
        tertiary: "#a8a29e",
        active: "#0c0a09",
      },
    },
  },
  plugins: [],
};
