/** @type {import('tailwindcss').Config} */

const plugins = require("tailwind-react-ui/plugins");

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    ...Object.keys(plugins).map(name => plugins[name]()),
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
};
