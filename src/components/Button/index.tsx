import * as tsx from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import { ButtonProps } from "@/types/button";

@Component({
  name: "Button"
})
class Button extends tsx.Component<ButtonProps> {
  @Prop({ type: String, default: "default" }) variant!: ButtonProps["variant"];
  @Prop({ type: String, default: "lg" }) size!: ButtonProps["size"];

  render() {
    return (
      <button
        class={`Button Button--size--${this.size} Button--variant--${this.variant}`}
      >
        {this.$slots.default && this.$slots.default}
      </button>
    );
  }
}
export default Button;
