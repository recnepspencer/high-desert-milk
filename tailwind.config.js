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
        },
      },
      fontFamily: {
        home: "var(--rslab)",
      },
    },
  },
  plugins: [],
};
