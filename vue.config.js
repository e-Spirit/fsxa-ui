// eslint-disable-next-line
const path = require("path");
module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    config.resolve.alias.set("vue", path.resolve("./node_modules/vue"));
    config.resolve.alias.set("fsxa-ui", path.resolve("./src/index.ts"));
    config.module
      .rule("mdx")
      .test(/.mdx?$/)
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("@mdx-js/vue-loader")
      .loader("@mdx-js/vue-loader")
      .end();
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: Infinity }));
  },
};
