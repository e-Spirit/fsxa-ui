// eslint-disable-next-line
const postcssImportUrl = require("postcss-import-url");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-nested"),
    postcssImportUrl({
      resolveUrls: true,
      modernBrowser: true,
    }),
    require("autoprefixer"),
  ],
};
