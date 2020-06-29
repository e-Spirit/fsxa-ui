export default {
  title: "Variants",
  description: () => <span>This is my description</span>,
  render: require("./code").default,
  stringifiedRender: require("!!raw-loader!./code").default,
};
