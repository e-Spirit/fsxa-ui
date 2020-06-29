import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { LayoutItemProps } from "@/types/fsxa-ui";
import { Prop } from "vue-property-decorator";

@Component({
  name: "LayoutItem",
})
class LayoutItem extends FSXABaseComponent<LayoutItemProps> {
  @Prop() width: LayoutItemProps["width"];
  @Prop() width_sm: LayoutItemProps["width_sm"];
  @Prop() width_md: LayoutItemProps["width_md"];
  @Prop() width_lg: LayoutItemProps["width_lg"];
  @Prop() width_xl: LayoutItemProps["width_xl"];

  get useGutter() {
    const parentName = this.$parent.$options.name;
    if (parentName !== "Layout")
      throw new Error(
        "A LayoutItem can only be used inside of the Layout-Component",
      );
    return this.$parent.$props.gutter || false;
  }

  get classNames() {
    const classNames = this.useGutter ? ["p-2 md:p-4 lg:p-6"] : [];
    classNames.push(this.width ? `w-${this.width}` : "flex flex-1");
    if (this.width_sm) classNames.push(`sm:w-${this.width_sm} flex-0`);
    if (this.width_md) classNames.push(`md:w-${this.width_md} flex-0`);
    if (this.width_lg) classNames.push(`lg:w-${this.width_lg} flex-0`);
    if (this.width_xl) classNames.push(`xl:w-${this.width_xl} flex-0`);
    return classNames.join(" ");
  }
  render() {
    console.log();
    return <div class={this.classNames}>LayoutItem</div>;
  }
}
export default LayoutItem;
