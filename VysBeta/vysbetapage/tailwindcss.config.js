/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: '#e63946',
        brandBlue: '#1d3557',
      },
    },
  },
  plugins: [],
};
