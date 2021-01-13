import VueRouter from "vue-router";
import kebabCase from "lodash.kebabcase";

const extractRoute = (route: string) => {
  const matched = route.match(/\.\/(.*?)\.mdx/);
  const path = matched ? matched[1] : null;
  if (!path) return null;
  const parts = path.split("/");
  return {
    path: `/${parts.map(part => kebabCase(part)).join("/")}`,
    label: parts[parts.length - 1],
  };
};

// load page structure
const data = require.context("./docs", true, /[a-zA-Z0-9]+\.mdx$/);
const examples = require.context("./examples", true, /[a-zA-Z0-9]+\.tsx$/);

const exampleRoutes = examples.keys().map(path => {
  const parsedPath = path
    .replace(".tsx", "")
    .replace("./", "")
    .replace(".", "-");
  return {
    path: "/raw-component/" + parsedPath,
    label: "RawComponent",
    component: examples(path).default,
    meta: {
      singleView: true,
    },
  };
});

export const routes: any = data
  .keys()
  .map(path => {
    const route = extractRoute(path);
    if (!route) return null;
    return {
      component: data(path).default,
      ...route,
    };
  })
  .filter(route => route)
  .concat(exampleRoutes);

const router = new VueRouter({
  routes,
});

export default router;
