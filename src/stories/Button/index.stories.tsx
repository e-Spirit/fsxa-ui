import Button from "@/components/Button";
import "./../utils.css";
import { CreateElement } from "vue";

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
