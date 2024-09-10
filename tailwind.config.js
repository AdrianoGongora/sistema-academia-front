/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "a-blue": {
        DEFAULT: "#2271B3",
        light: "#A3D0F6",
        dark: "#004A89"
      },
      "white": {

      }
    }
  },
  plugins: [],
}