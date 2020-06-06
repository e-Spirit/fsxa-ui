import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { FSXAParagraphProps } from "@/types/components";
import { Prop } from "vue-property-decorator";

@Component({
  name: "FSXAParagraph",
})
class FSXAParagraph extends FSXABaseComponent<FSXAParagraphProps> {
  @Prop({ default: "base" }) size!: FSXAParagraphProps["size"];

  render() {
    return <div class={`text-${this.size}`}>{this.$slots.default}</div>;
  }
}
export default FSXAParagraph;
