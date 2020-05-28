import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import { ButtonProps } from "@/types/button";
import BaseComponent from "../BaseComponent";

@Component({
  name: "Button"
})
class Button extends BaseComponent<ButtonProps> {
  @Prop({ type: String, default: "default" }) variant!: ButtonProps["variant"];
  @Prop({ type: Function, default: () => null })
  handleClick: ButtonProps["handleClick"];

  render() {
    const content = this.$slots.default;
    return (
      <button
        class={`Button Button--variant--${this.variant}`}
        onClick={this.handleClick}
      >
        {this.variant === "animated"
          ? [<span>{content}</span>, <em />]
          : content}
      </button>
    );
  }
}
export default Button;
