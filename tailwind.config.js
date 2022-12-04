/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#002D27",
        second: "#d10a20",
        third: "#EFFEFF",
        fourth: "#00FFDD",
      },
    },
  },
  plugins: [],
};
