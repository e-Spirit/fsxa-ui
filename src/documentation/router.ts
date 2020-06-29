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
  .filter(route => route);

// generate dynamic routes
/**const componentRoutes = Object.keys(ComponentPages).map(key => {
  const Component = (ComponentPages as any)[key];
  return {
    path: key.toLowerCase(),
    route: `/components/${key.toLowerCase()}`,
    label: key,
    component: Component.default,
    meta: {
      title: Component.title,
      subtitle: Component.subtitle,
    },
    parent: "component",
  };
});
export const routes = [
  {
    path: "/installation",
    label: "Installation",
    component: Installation.default,
    meta: {
      title: Installation.title,
      subtitle: Installation.subtitle,
    },
  },
  {
    path: "/getting-started",
    label: "Getting Started",
    component: GettingStarted.default,
    meta: {
      title: GettingStarted.title,
      subtitle: GettingStarted.subtitle,
    },
  },
  {
    path: "/components",
    route: "/components",
    label: "Components",
    component: ComponentPage,
    children: [
      {
        path: "",
        route: "",
        component: ComponentsOverview.default,
        meta: {
          title: ComponentsOverview.title,
          subtitle: ComponentsOverview.subtitle,
        },
        label: "",
      },
      ...componentRoutes,
    ],
  },
];**/
const router = new VueRouter({
  routes,
});

export default router;
