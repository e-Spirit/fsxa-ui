// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "ui-",
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.html",
      "./public/index.html",
      "./src/**/*.vue",
      "./src/**/*.tsx",
      "./src/**/*.ts",
    ],
    options: {
      whitelistPatterns: [
        /^ui-w-/,
        /^xs:ui-w/,
        /^sm:ui-w-/,
        /^md:ui-w-/,
        /^lg:ui-w-/,
        /^xl:ui-w-/,
        /^xxl:ui-w-/,
      ],
    },
  },
  theme: {
    extend: {
      borderWidth: {
        30: "30px",
      },
      screens: {
        ...defaultTheme.screens,
        xs: "20rem",
      },
      colors: {
        espirit: "#810444",
        "espirit-blue": "#272838",
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
      minWidth: {
        "64": "16rem",
      },
    },
  },
  variants: {
    textColor: ["group-hover", "hover"],
    opacity: ["hover", "group-hover"],
    overflow: ["hover"],
    translate: ["hover", "group-hover"],
  },
  plugins: [],
};
