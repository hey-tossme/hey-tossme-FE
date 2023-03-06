/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ec7357",
        "secondary": "#fdd692",
        "dark": "#754f44",
        "light": "#fbffb9",
        "color-gray-800": "#333333",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
