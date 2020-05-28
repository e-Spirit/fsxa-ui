import Button from "@/components/Button";
import { CreateElement } from "vue";
import InteractiveComponent from "@/components/internal/InteractiveComponent";
import { ButtonProps } from "@/types/button";

export default {
  title: "Button",
  component: Button
};

export const Variants = () => ({
  render: (h: CreateElement) => (
    <div class="w-full bg-gray-200 p-20 space-x-5">
      <h2>Variants</h2>
      <Button variant="default">default</Button>
      <Button variant="inverted">inverted</Button>
      <Button variant="tag">tag</Button>
      <Button variant="animated">animated</Button>
    </div>
  )
});

export const playground = () => ({
  render: (h: CreateElement) => (
    <div class="w-full h-full p-5">
      <InteractiveComponent<ButtonProps>
        title="Button"
        subtitle="Check out the cool button features by playing with its properties"
        renderComponent={props => {
          return (
            <Button {...{ props }}>
              {(props.variant || "default").toUpperCase()}
            </Button>
          );
        }}
        changeableProps={[
          {
            key: "variant",
            type: "select",
            label: "Variant",
            options: ["default", "inverted", "tag", "animated"],
            default: "default"
          }
        ]}
      />
    </div>
  )
});
