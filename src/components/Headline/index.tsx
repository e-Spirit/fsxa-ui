import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import BaseComponent from "../BaseComponent";
import { HeadlineProps } from "@/types/fsxa-ui";

@Component({
  name: "Headline",
})
class Headline extends BaseComponent<HeadlineProps> {
  @Prop({ default: "h1" }) as!: HeadlineProps["as"];
  @Prop() size!: HeadlineProps["size"];
  @Prop({ default: "bold" }) weight!: HeadlineProps["weight"];
  @Prop({ default: true }) uppercase!: HeadlineProps["uppercase"];
  @Prop({ default: true }) includeMargin!: HeadlineProps["includeMargin"];
  @Prop() handleClick!: HeadlineProps["handleClick"];

  render() {
    const Component: any = this.as;
    return (
      <Component
        class={`Headline ${this.size} ${this.weight} ${
          this.uppercase ? "uppercase" : ""
        } ${this.includeMargin ? "include-margin" : ""}`}
        onClick={() => this.handleClick && this.handleClick()}
      >
        {this.$slots.default}
      </Component>
    );
  }
}
export default Headline;
