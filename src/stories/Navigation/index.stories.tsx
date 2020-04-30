import Navigation from "@/components/Navigation";
import { CreateElement } from "vue";
import { decorate } from "@storybook/addon-actions";

export default {
  title: "Navigation",
  component: Navigation
};
const activePath = "/home";
const firstArg = decorate([args => args.slice(0, 1)]);
export const withText = () => ({
  render: (h: CreateElement) => (
    <div class="bg-gray-200 w-full h-full">
      <Navigation
        items={[
          {
            label: "Home",
            path: "/home",
            children: []
          },
          {
            label: "Security",
            path: "/security",
            children: []
          },
          {
            label: "Products",
            path: "/products",
            children: [
              {
                label: "Smart Door Lock",
                path: "/products/smart-door-lock",
                children: [
                  {
                    label: "Smart Door Lock",
                    path: "/products/smart-door-lock",
                    children: []
                  },
                  {
                    label: "Motion Detector",
                    path: "/products/motion-detector",
                    children: []
                  }
                ]
              },
              {
                label: "Motion Detector",
                path: "/products/motion-detector",
                children: []
              }
            ]
          }
        ]}
        activePath={activePath}
        handleNavClick={firstArg.action("handleNavClick")}
      />
    </div>
  )
});
