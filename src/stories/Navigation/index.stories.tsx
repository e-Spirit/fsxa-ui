import Navigation from "@/components/Navigation";
import { CreateElement } from "vue";
import { decorate } from "@storybook/addon-actions";
import { NavigationItemBase } from "@/types/navigation";

export interface NavigationItem extends NavigationItemBase<NavigationItem> {
  id: string;
}

export default {
  title: "Navigation",
  component: Navigation
};
const firstArg = decorate([args => args.slice(0, 1)]);
export const withText = () => ({
  render: (h: CreateElement) => (
    <div class="bg-gray-200 w-full h-full">
      <Navigation<NavigationItem>
        items={[
          {
            id: "123",
            label: "Home",
            children: []
          },
          {
            id: "124",
            label: "Security",
            children: []
          },
          {
            id: "125",
            label: "Products",
            children: [
              {
                id: "126",
                label: "Smart Door Lock",
                children: [
                  {
                    id: "127",
                    label: "Smart Door Lock",
                    children: []
                  },
                  {
                    id: "128",
                    label: "Motion Detector",
                    children: []
                  }
                ]
              },
              {
                id: "129",
                label: "Motion Detector",
                children: []
              }
            ]
          }
        ]}
        isActiveItem={item => item.id === "123"}
        handleNavClick={firstArg.action("handleNavClick")}
      />
    </div>
  )
});
