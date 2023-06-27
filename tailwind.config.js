const {fontFamily } = require("tailwindcss/defaultTheme")


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        home: {
          blue: "#011657",
          orange: "#E07D28",
          productBlue: "#67ADF4",
          productYellow: "#EAC52B",
          recipeRed: "#CE2229",
          recipeOrange: "#E07D28",
          recipeBlue: "#67ADF4",
          impactYellow: "#EAC52B",
          sustainGreen: "#47B526"
        },
      },
      fontFamily: {
        home: "var(--rslab)",
      },
      gridTemplateColumns: {
        '3': "2/5, 1/5, 2/5"
      }
    },
  },
  plugins: [],
};
