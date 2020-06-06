import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

export interface HeadlineProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  handleClick?: () => void;
}
@Component({
  name: "Headline",
})
class Headline extends FSXABaseComponent<HeadlineProps> {
  @Prop({ default: "h1" }) as!: HeadlineProps["as"];
  @Prop() handleClick!: HeadlineProps["handleClick"];

  render() {
    const Element = this.as;
    return (
      <Element onClick={() => this.handleClick && this.handleClick()}>
        {this.$slots.default}
      </Element>
    );
  }
}
export default Headline;
