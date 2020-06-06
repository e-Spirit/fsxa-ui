import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { FSXARichTextProps } from "@/types/components";

@Component({
  name: "FSXARichText",
})
class FSXARichText extends FSXABaseComponent<FSXARichTextProps> {
  @Prop({ required: true }) text!: FSXARichTextProps["text"];
  render() {
    return <div class="FSXARichText" domPropsInnerHTML={this.text} />;
  }
}
export default FSXARichText;
