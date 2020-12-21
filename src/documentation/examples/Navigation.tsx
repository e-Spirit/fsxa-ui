import Vue from "vue";
import Component from "vue-class-component";

import { Navigation } from "fsxa-ui";
import { FirstLevelNavigationItem } from "@/types/components";

const navItems: FirstLevelNavigationItem[] = [
  {
    key: "1",
    path: "/",
    label: "Link 1",
    children: [
      {
        key: "3",
        path: "/",
        label: "Link 1.1",
      },
      {
        key: "10",
        path: "/",
        label: "Link 1.2",
      },
    ],
  },
  {
    key: "2",
    path: "/",
    label: "Link 2",
    children: [
      {
        key: "5",
        path: "/",
        label: "Link 2.1.",
      },
      {
        key: "6",
        path: "/",
        label: "Link 2.2",
      },
    ],
  },
  {
    key: "8",
    path: "/",
    label: "Link 8",
    children: [
      {
        key: "9",
        path: "/",
        label: "Link 8.1",
      },
      {
        key: "11",
        path: "/",
        label: "Link 8.2",
      },
    ],
  },
];

@Component
export default class App extends Vue {
  currentItem: any = null;
  render() {
    return (
      <div>
        <div class="space-x-5 p-2 lg:pr-20 mt-10 mb-20 h-64 bg-blue-100">
          <Navigation items={navItems} />
        </div>
      </div>
    );
  }
}
