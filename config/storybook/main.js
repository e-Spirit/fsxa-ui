// eslint-disable-next-line
const path = require("path");
require("vue-tsx-support/enable-check");

module.exports = {
  stories: ["../../src/**/*.stories.(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        vueDocgenOptions: {
          alias: {
            "@": path.resolve(__dirname, "../")
          }
        },
        babelOptions: {
          presets: [
            [
              "@vue/cli-plugin-babel/preset",
              {
                jsx: true
              }
            ]
          ]
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-viewport"
  ]
};
