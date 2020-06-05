import FSXAButton from "@/components/FSXAButton";
import { CreateElement } from "vue";
import InteractiveComponent from "@/components/internal/InteractiveComponent";
import { FSXAButtonProps } from "@/types/components";

export default {
  title: "FSXAButton",
  component: FSXAButton,
};

export const Variants = () => ({
  render: (h: CreateElement) => (
    <div class="w-full bg-gray-200 p-20 space-x-5">
      <h2>Variants</h2>
      <FSXAButton variant="default">default</FSXAButton>
      <FSXAButton variant="inverted">inverted</FSXAButton>
      <FSXAButton variant="tag">tag</FSXAButton>
      <FSXAButton variant="animated">animated</FSXAButton>
    </div>
  ),
});

export const playground = () => ({
  render: (h: CreateElement) => (
    <div class="w-full h-full p-5">
      <InteractiveComponent<FSXAButtonProps>
        title="Button"
        subtitle="Check out the cool button features by playing with its properties"
        renderComponent={props => {
          return (
            <FSXAButton {...{ props }}>
              {(props.variant || "default").toUpperCase()}
            </FSXAButton>
          );
        }}
        changeableProps={[
          {
            key: "variant",
            type: "select",
            label: "Variant",
            options: ["default", "inverted", "tag", "animated"],
            default: "default",
          },
        ]}
      />
    </div>
  ),
});
