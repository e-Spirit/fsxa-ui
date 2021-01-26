import Vue from "vue";
import Component from "vue-class-component";

import { MobileNavigation } from "fsxa-ui";
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
        label: "Sprache",
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
      <div class="ui-py-12">
        <MobileNavigation
          items={navItems}
          activeItemKeys={["language"]}
          onItemClicked={item => console.log(item)}
        />
      </div>
    );
  }
}
