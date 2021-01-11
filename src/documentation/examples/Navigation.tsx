import Vue from "vue";
import Component from "vue-class-component";

import { Navigation } from "fsxa-ui";
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
        label: "Link 2.1.",
        children: [],
      },
      {
        id: "6",
        path: "/",
        label: "Link 2.2",
        children: [
          {
            id: "6",
            path: "/",
            label: "Link 2.1.1",
            children: [],
          },
        ],
      },
    ],
  },
];

@Component
export default class App extends Vue {
  currentItem: any = null;
  render() {
    return (
      <div class="space-x-5 mb-64 ml-64 mt-10">
        <Navigation
          isActiveItem={item => item.id === "1"}
          depth={3}
          items={navItems}
          handleNavClick={navItem => {
            this.currentItem = navItem;
          }}
        />
      </div>
    );
  }
}
