import "vue-tsx-support/enable-check";
import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

interface ResponsiveButtonProps {
  handleOnClick: () => void;
  pressed?: boolean;
  dark?: boolean;
}

@Component({
  name: "ResponsiveButton",
})
class ResponsiveButton extends BaseComponent<ResponsiveButtonProps> {
  @Prop({ required: true })
  handleOnClick!: ResponsiveButtonProps["handleOnClick"];
  @Prop({ default: false }) pressed!: ResponsiveButtonProps["pressed"];
  @Prop({ default: false }) dark!: ResponsiveButtonProps["dark"];

  render() {
    return (
      <div
        class={`px-4 py-2 shadow-2xl rounded cursor-pointer border  ${
          this.pressed ? "text-espirit" : this.dark ? "text-white" : ""
        }`}
        onClick={this.handleOnClick}
      >
        {this.$slots.default}
      </div>
    );
  }
}

export default ResponsiveButton;
