import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import BaseComponent from "../BaseComponent";
import { RichTextProps } from "@/types/components";

@Component({
  name: "RichText",
})
class RichText extends BaseComponent<RichTextProps> {
  @Prop({ required: true }) content!: RichTextProps["content"];
  @Prop({ required: false, default: false }) inline!: RichTextProps["inline"];

  render() {
    return (
      <div
        class={`RichText ${this.inline ? "RichText--inline" : ""}`}
        domPropsInnerHTML={this.content}
        data-testid="richtext-content"
      />
    );
  }
}
export default RichText;
