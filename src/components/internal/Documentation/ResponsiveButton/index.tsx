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
        class={`ui-px-4 ui-py-2 ui-shadow-2xl ui-rounded ui-cursor-pointer ui-border  ${
          this.pressed ? "ui-text-espirit" : this.dark ? "ui-text-white" : ""
        }`}
        onClick={this.handleOnClick}
      >
        {this.$slots.default}
      </div>
    );
  }
}

export default ResponsiveButton;
