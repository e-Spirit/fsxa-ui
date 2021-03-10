import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ParagraphProps } from "@/types/fsxa-ui";
import { checkPassedValue } from "@/components/utils/PropertyChecker/PropertyChecker";

@Component({
  name: "Paragraph",
})
class Paragraph extends BaseComponent<ParagraphProps> {
  @Prop({ default: "base" }) size!: ParagraphProps["size"];
  @Prop({ default: "normal" }) weight!: ParagraphProps["weight"];

  mounted() {
    checkPassedValue(
      this.$el,
      ["xs", "sm", "base", "md", "lg", "xl"],
      this.size,
      "size",
    );
    checkPassedValue(
      this.$el,
      ["bold", "light", "normal"],
      this.weight,
      "weight",
    );
  }

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
