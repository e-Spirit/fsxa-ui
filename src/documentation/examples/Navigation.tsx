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
    children: [],
  },
];

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5 mb-10 ml-64">
        <Navigation
          isActiveItem={item => item.id === "1"}
          depth={3}
          items={navItems}
          handleNavClick={() => {
            return;
          }}
        />
      </div>
    );
  }
}
