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
<<<<<<< HEAD
      <div class="space-x-5 mb-10 ml-64">
        <Navigation
          isActiveItem={item => item.id === "1"}
          depth={3}
=======
      <div class="space-x-5 py-10" style={{ height: "500px" }}>
        <Navigation
          isActiveItem={item =>
            this.currentItem && item.id === this.currentItem.id
          }
          depth={2}
>>>>>>> ab6e45d... added styling for mobile Navigation and the 3rd depth
          items={navItems}
          handleNavClick={navItem => {
            this.currentItem = navItem;
          }}
        />
      </div>
    );
  }
}
