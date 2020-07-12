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
    return (
      <div class={`text-${this.size} font-${this.weight}`}>
        {this.$slots.default}
      </div>
    );
  }
}
export default Paragraph;
