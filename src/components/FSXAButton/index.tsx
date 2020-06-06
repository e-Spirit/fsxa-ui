import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import { FSXAButtonProps } from "@/types/components";
import FSXABaseComponent from "@/components/FSXABaseComponent";

@Component({
  name: "FSXAButton",
})
class FSXAButton extends FSXABaseComponent<FSXAButtonProps> {
  @Prop({ type: String, default: "default" })
  variant!: FSXAButtonProps["variant"];
  @Prop({ type: Function, default: () => null })
  handleClick: FSXAButtonProps["handleClick"];
  render() {
    const content = this.$slots.default;
    return (
      <button
        class={`FSXAButton FSXAButton--variant--${this.variant}`}
        onClick={this.handleClick && this.handleClick}
      >
        {this.variant === "animated"
          ? [<span>{content}</span>, <em />]
          : content}
      </button>
    );
  }
}
export default FSXAButton;
