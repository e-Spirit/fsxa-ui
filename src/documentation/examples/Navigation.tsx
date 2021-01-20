import Vue from "vue";
import Component from "vue-class-component";

import { Navigation } from "fsxa-ui";
import { FirstLevelNavigationItem } from "@/types/components";

@Component
export default class App extends Vue {
  currentItem: any = null;
  render() {
    const navItems: FirstLevelNavigationItem[] = [
      {
        key: "home",
        path: "/",
        label: "Home",
        children: [],
      },
      {
        key: "solutions",
        path: "/solutions",
        label: "Our Solutions",
        children: [
          {
            key: "products.interior",
            path: "/products",
            label: "Interior Equipment",
          },
          {
            key: "products.indoor_cams",
            path: "/products",
            label: "Indoor Cams",
          },
          {
            key: "products.outdoor_cams",
            path: "/products",
            label: "Outdoor Cams",
          },
          {
            key: "products.thermostats",
            path: "/products",
            label: "Thermostats",
          },
        ],
      },
      {
        key: "products",
        path: "/products",
        label: "Products",
        childPlacement: "right",
        children: [
          {
            key: "products.interior",
            path: "/products",
            label: "Interior Equipment",
          },
          {
            key: "products.indoor_cams",
            path: "/products",
            label: "Indoor Cams",
          },
          {
            key: "products.outdoor_cams",
            path: "/products",
            label: "Outdoor Cams",
          },
          {
            key: "products.thermostats",
            path: "/products",
            label: "Thermostats",
          },
        ],
      },
      {
        key: "language",
        path: "#",
        label: (
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ),
        children: [
          {
            key: "language.de",
            label: "German",
            path: "#",
          },
          {
            key: "language.en",
            label: "English",
            path: "#",
          },
        ],
        childPlacement: "right",
      },
    ];
    return (
      <div style="height: 220px">
        <div class="space-x-5 lg:pr-20 mt-10 mb-20 h-16 bg-gray-100">
          <Navigation
            items={navItems}
            activeItemKeys={["products"]}
            onItemClicked={item => console.log(item)}
          />
        </div>
      </div>
    );
  }
}
