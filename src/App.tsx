import { Component } from "vue-property-decorator";
import Vue from "vue";
import Documentation from "./documentation";
import { Navigation } from "./components";
import { NavigationItem } from "@/types/components";

const navItems: NavigationItem[] = [
  {
    id: "1",
    path: "/",
    label: "Link 1",
    children: [
      {
        id: "3",
        path: "/",
        label: "Link 1.1",
        children: [
          {
            id: "4",
            path: "/",
            label: "Link 1.1.1",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    path: "/",
    label: "Link 2",
    children: [
      {
        id: "5",
        path: "/",
        label: "Link 2.1",
        children: [],
      },
    ],
  },
];
@Component
class App extends Vue {
  render() {
    return <Documentation />;
  }
}
export default App;
