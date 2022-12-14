/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#fce7e9",
          100: "#f8c4c8",
          200: "#f39ca3",
          300: "#ee747e",
          400: "#ea5762",
          500: "#e63946",
          600: "#e3333f",
          700: "#df2c37",
          800: "#db242f",
          900: "#d51720",
        },
        cyan: {
          50: "#a8dadc",
          100: "#a8dadc",
          200: "#a8dadc",
          300: "#a8dadc",
          400: "#a8dadc",
          500: "#a8dadc",
          600: "#a8dadc",
          700: "#a8dadc",
          800: "#a8dadc",
          900: "#a8dadc",
        },
        blue: {
          50: "#457b9d",
          100: "#457b9d",
          200: "#457b9d",
          300: "#457b9d",
          400: "#457b9d",
          500: "#457b9d",
          600: "#457b9d",
          700: "#457b9d",
          800: "#457b9d",
          900: "#457b9d",
        },
        indigo: {
          50: "#1d3557",
          100: "#1d3557",
          200: "#1d3557",
          300: "#1d3557",
          400: "#1d3557",
          500: "#1d3557",
          600: "#1d3557",
          700: "#1d3557",
          800: "#1d3557",
          900: "#1d3557",
        },
      },
      // colors: {
      //   "lightBlue": "#f1faee",
      // },
    },
  },
  plugins: [],
});
