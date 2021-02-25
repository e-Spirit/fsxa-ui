import "vue-tsx-support/enable-check";
import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

interface ResponsiveButtonProps {
  handleOnClick: () => void;
  pressed?: boolean;
  dark?: boolean;
  title?: string;
}

@Component({
  name: "ResponsiveButton",
})
class ResponsiveButton extends BaseComponent<ResponsiveButtonProps> {
  @Prop({ required: true })
  handleOnClick!: ResponsiveButtonProps["handleOnClick"];
  @Prop({ default: false }) pressed!: ResponsiveButtonProps["pressed"];
  @Prop({ default: false }) dark!: ResponsiveButtonProps["dark"];
  @Prop() title: ResponsiveButtonProps["title"];

  render() {
    return (
      <div
        class={`ui-px-2 ui-py-1 ui-text-sm ui-shadow-2xl ui-rounded ui-cursor-pointer ui-border  ${
          this.pressed ? "ui-text-espirit" : this.dark ? "ui-text-white" : ""
        }`}
        onClick={this.handleOnClick}
        title={this.title ? this.title : ""}
      >
        {this.$slots.default}
      </div>
    );
  }
}

export default ResponsiveButton;
