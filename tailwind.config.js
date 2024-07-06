const colors = require("./src/assets/styles/config/colors");
const backgroundImage = require("./src/assets/styles/config/backgroundImage");
const boxShadow = require("./src/assets/styles/config/boxShadow");
const keyframes = require("./src/assets/styles/config/keyframes");
const animation = require("./src/assets/styles/config/animation");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "var(--container-space)",
      },
    },
    extend: {
      screens: {
        "3xl": "1800px",
      },
      spacing: {
        header: "var(--header-height)",
        "container-space": "var(--container-space)",
      },
      height: {
        "screen-minus-header": "calc(100vh-var(--header-height))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - .1em)",
        sm: "calc(var(--radius) - .25em)",
      },
      backgroundImage: { ...backgroundImage },
      boxShadow: { ...boxShadow },
      colors: { ...colors },
      keyframes: { ...keyframes },
      animation: { ...animation },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
