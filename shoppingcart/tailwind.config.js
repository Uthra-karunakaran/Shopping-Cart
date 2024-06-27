/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      maxWidth: {
        'cartItemWidth': "36.563rem",
        'mdLogow': '135px', 
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: "class",
};
