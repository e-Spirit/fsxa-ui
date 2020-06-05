import FSXANavigation from "@/components/FSXANavigation";
import { CreateElement } from "vue";
import { decorate } from "@storybook/addon-actions";

export default {
  title: "FSXANavigation",
  component: FSXANavigation,
};
const firstArg = decorate([args => args.slice(0, 1)]);
export const withText = () => ({
  render: (h: CreateElement) => (
    <div class="bg-gray-200 w-full h-full">
      <FSXANavigation
        items={[
          {
            id: "123",
            label: "Home",
            path: "/Home",
            children: [],
          },
          {
            id: "124",
            label: "Security",
            path: "/Security",
            children: [],
          },
          {
            id: "125",
            label: "Products",
            path: "/Products",
            children: [
              {
                id: "126",
                label: "Smart Door Lock",
                path: "/Products/Smart-Door-Lock",
                children: [
                  {
                    id: "127",
                    label: "Smart Door Lock",
                    path: "/Products/Smart-Door-Lock",
                    children: [],
                  },
                  {
                    id: "128",
                    label: "Motion Detector",
                    path: "/Products/Motion-Detector",
                    children: [],
                  },
                ],
              },
              {
                id: "129",
                label: "Motion Detector",
                path: "/Motion-Detector",
                children: [],
              },
            ],
          },
        ]}
        isActiveItem={item => item.id === "123"}
        handleNavClick={firstArg.action("handleNavClick")}
      />
    </div>
  ),
});
