// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/**/*.html",
    "./public/index.html",
    "./src/**/*.vue",
    "./src/**/*.tsx",
    "./src/**/*.ts",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        xs: "20rem",
      },
      colors: {
        espirit: "#810444",
        highlight: "var(--fsxa-text-highlight-color, #D5DD02)",
      },
      fontFamily: {
        awesome: ['"Font Awesome 5 Free"'],
      },
      inset: {
        "1/2": "50%",
      },
      opacity: {
        "20": "0.2",
        "40": "0.4",
        "80": "0.8",
        "90": "0.9",
      },
      scale: {
        "25": ".25",
      },
      transitionDelay: {
        "250": "250ms",
        "400": "400ms",
        "750": "750ms",
      },
      transitionDuration: {
        "250": "250ms",
        "10000": "10000ms",
      },
      transitionProperty: {
        size: "width, height",
      },
    },
  },
  variants: {
    textColor: ["group-hover"],
    opacity: ["group-hover"],
    overflow: ["hover"],
    translate: ["hover", "group-hover"],
  },
  plugins: [],
};
