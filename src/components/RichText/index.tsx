import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";
import { RichTextProps } from "@/types/richtext";
import BaseComponent from "../BaseComponent";

@Component({
  name: "RichText"
})
class RichText extends BaseComponent<RichTextProps> {
  @Prop({ required: true }) text!: RichTextProps["text"];
  render() {
    return <div class="RichText" domPropsInnerHTML={this.text} />;
  }
}
export default RichText;
