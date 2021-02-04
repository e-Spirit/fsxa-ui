import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ParagraphProps } from "@/types/fsxa-ui";

@Component({
  name: "Paragraph",
})
class Paragraph extends BaseComponent<ParagraphProps> {
  @Prop({ default: "base" }) size!: ParagraphProps["size"];
  @Prop({ default: "normal" }) weight!: ParagraphProps["weight"];

  render() {
    const sizeClasses = {
      xs: "ui-text-xs",
      sm: "ui-text-sm",
      base: "ui-text-base",
      md: "ui-text-base",
      lg: "ui-text-lg",
      xl: "ui-text-xl",
    };

    const weightClasses = {
      light: "ui-font-light",
      normal: "ui-font-normal",
      bold: "ui-font-bold",
    };

    return (
      <div
        class={`${this.size ? sizeClasses[this.size] : ""} ${
          this.weight ? weightClasses[this.weight] : ""
        }`}
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default Paragraph;
