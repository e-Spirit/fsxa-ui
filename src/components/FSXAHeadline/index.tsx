import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";
import { FSXAHeadlineProps } from "@/types/fsxa-ui";

@Component({
  name: "FSXAHeadline",
})
class FSXAHeadline extends FSXABaseComponent<FSXAHeadlineProps> {
  @Prop({ default: "h1" }) as!: FSXAHeadlineProps["as"];
  @Prop() size!: FSXAHeadlineProps["size"];
  @Prop() weight!: FSXAHeadlineProps["weight"];
  @Prop() handleClick!: FSXAHeadlineProps["handleClick"];

  render() {
    const Element = this.as;
    return (
      <Element
        class={`FSXAHeadline ${this.size} ${this.weight}`}
        onClick={() => this.handleClick && this.handleClick()}
      >
        {this.$slots.default}
      </Element>
    );
  }
}
export default FSXAHeadline;
