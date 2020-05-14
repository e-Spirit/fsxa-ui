import Button from "@/components/Button";
import "./../utils.css";
import { CreateElement } from "vue";
import InteractiveComponent from "@/components/internal/InteractiveComponent";
import { ButtonProps } from "@/types/button";

export default {
  title: "Button",
  component: Button
};

export const Variants = () => ({
  render: (h: CreateElement) => (
    <div class="w-full bg-gray-200 p-20 space-x-2">
      <h2>Variants</h2>
      <Button variant="default">Variant = default</Button>
      <Button variant="inverted">Variant = inverted</Button>
      <Button variant="tag">Variant = Tag</Button>
      <h2>Sizes</h2>
      <Button size="sm" variant="tag">
        Size = sm
      </Button>
      <Button size="md">Size = md</Button>
      <Button size="lg">Size = lg</Button>
    </div>
  )
});

export const Sizes = () => ({
  render: (h: CreateElement) => (
    <div class="w-full p-20 space-x-2">
      <Button size="sm">Size = sm</Button>
      <Button size="md">Size = md</Button>
      <Button size="lg">Size = lg</Button>
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
          return <Button {...{ props }}>Das ist mein Button</Button>;
        }}
        changeableProps={[
          {
            key: "variant",
            type: "select",
            label: "Variant",
            options: ["default", "inverted", "tag"],
            default: "default"
          },
          {
            key: "size",
            type: "select",
            label: "Size",
            options: ["sm", "md", "lg"],
            default: "md"
          }
        ]}
      />
    </div>
  )
});
