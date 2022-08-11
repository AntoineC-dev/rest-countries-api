/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{svelte,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        100: "hsl(209, 23%, 22%)",
        200: "hsl(207, 26%, 17%)",
        300: "hsl(200, 15%, 8%)",
      },
      gray: {
        100: "hsl(0, 0%, 98%)",
        200: "hsl(0, 0%, 52%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    fontWeight: {
      light: "300",
      normal: "600",
      bold: "800",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito\\ Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
