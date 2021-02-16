import kebabCase from "lodash.kebabcase";
import VueRouter from "vue-router";

const extractRoute = (route: string) => {
  const matched = route.match(/\.\/(.*?)\.mdx/);
  const path = matched ? matched[1] : null;
  if (!path) return null;
  const parts = path.replace(/\/index$/g, "").split("/");
  return {
    path: `/${parts.map(part => kebabCase(part)).join("/")}`,
    name: parts[parts.length - 1],
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
    name: "RawComponent" + parsedPath,
    component: examples(path).default,
    meta: {
      singleView: true,
    },
  };
});

export const routes: any = data
  .keys()
  .map(path => {
    let route = extractRoute(path);
    if (path === "./Index.mdx") {
      route = {
        path: "/",
        name: "Home",
      };
    }
    if (!route) return null;

    return {
      component: data(path).default,
      ...route,
    };
  })
  .filter(route => route)
  .concat(exampleRoutes);

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
