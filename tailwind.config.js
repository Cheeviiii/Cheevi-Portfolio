/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      backgroundImage: {
        bgmain: "url(../assets/bg.jpg)",
      },
    },
  },
  plugins: [],
};
