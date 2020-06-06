// eslint-disable-next-line
const path = require("path");
module.exports = {
  css: {
    extract: false,
  },
  chainWebpack: config => {
    config.resolve.symlinks(false);
    config.resolve.alias.set("vue", path.resolve("./node_modules/vue"));
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: Infinity }));
  },
};
