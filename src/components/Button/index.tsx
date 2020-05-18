import * as tsx from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import { ButtonProps } from "@/types/button";

@Component({
  name: "Button"
})
class Button extends tsx.Component<ButtonProps> {
  @Prop({ type: String, default: "default" }) variant!: ButtonProps["variant"];

  render() {
    const content = this.$slots.default;
    return (
      <button class={`Button Button--variant--${this.variant}`}>
        {this.variant === "animated"
          ? [<span>{content}</span>, <em />]
          : content}
      </button>
    );
  }
}
export default Button;
