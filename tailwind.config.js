/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue: {
          500: "#3C72FF"
        },
        gray: {
          100: "#D9D9D9",
          500: "#7A808D",
          700: "#313339",
          900: "#26282C"
        }
      },
      fontFamily: {
        sans: "Fira code, sans-serif",
      },
      boxShadow: {
        '3xl': '9px 13px 8px rgba(0, 0, 0, 0.50)'
      }
    },
  },
  plugins: [],
};
