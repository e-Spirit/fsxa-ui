// eslint-disable-next-line
const path = require("path");

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
    "@storybook/addon-knobs",
    "@storybook/addon-links"
  ]
};
