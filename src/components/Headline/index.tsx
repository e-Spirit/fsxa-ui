import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "../BaseComponent";
import { HeadlineProps } from "@/types/fsxa-ui";

@Component({
  name: "Headline",
})
class Headline extends BaseComponent<HeadlineProps> {
  @Prop({ default: "h1" }) as: HeadlineProps["as"];
  @Prop({ default: "lg" }) size: HeadlineProps["size"];
  @Prop({ default: "bold" }) weight!: HeadlineProps["weight"];
  @Prop({ default: true }) uppercase!: HeadlineProps["uppercase"];
  @Prop({ default: true }) includeMargin!: HeadlineProps["includeMargin"];
  @Prop() handleClick!: HeadlineProps["handleClick"];

  render() {
    const sizeClasses = {
      xs: "ui-text-base",
      sm: "ui-text-xl",
      md: "ui-text-2xl",
      lg: "ui-text-3xl",
      xl: "ui-text-4xl",
      xxl: "ui-text-5xl",
    };

    const marginClasses = {
      xs: "ui-mb-2",
      sm: "ui-mb-3",
      md: "ui-mb-4",
      lg: "ui-mb-5",
      xl: "ui-mb-6",
      xxl: "ui-mb-8",
    };

    const weightClasses = {
      light: "ui-font-light",
      semibold: "ui-font-semibold",
      bold: "ui-font-bold",
    };

    const Component: any = this.as;
    return (
      <Component
        class={`Headline ui-block ${
          this.size ? sizeClasses[this.size] : sizeClasses["lg"]
        } ${this.weight ? weightClasses[this.weight] : ""}
        ${this.uppercase ? "ui-uppercase" : ""} ${
          this.includeMargin
            ? this.size
              ? marginClasses[this.size]
              : marginClasses["lg"]
            : ""
        }`}
        onClick={() => this.handleClick && this.handleClick()}
      >
        {this.$slots.default}
      </Component>
    );
  }
}
export default Headline;
