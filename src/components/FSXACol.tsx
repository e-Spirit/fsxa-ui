import FSXABaseComponent from "@/components/FSXABaseComponent";
import { Prop, Component } from "vue-property-decorator";
import { FSXAColWidths, FSXAColProps } from "@/types/components";

const getClassName = (width?: FSXAColWidths, prefix?: string) => {
  const className = `col-span-${width || 12}`;
  return prefix ? `${prefix}:${className}` : className;
};

@Component({
  name: "FSXACol",
})
class FSXACol extends FSXABaseComponent<FSXAColProps> {
  @Prop() width: FSXAColProps["width"];
  @Prop() sm_width: FSXAColProps["sm_width"];
  @Prop() md_width: FSXAColProps["md_width"];
  @Prop() lg_width: FSXAColProps["lg_width"];
  @Prop() xl_width: FSXAColProps["xl_width"];

  render() {
    const classNames = ["p-2 md:p-4 lg:p-6"];
    classNames.push(getClassName(this.width));
    if (this.sm_width) classNames.push(getClassName(this.sm_width, "sm"));
    if (this.md_width) classNames.push(getClassName(this.md_width, "md"));
    if (this.lg_width) classNames.push(getClassName(this.lg_width, "lg"));
    if (this.xl_width) classNames.push(getClassName(this.xl_width, "xl"));
    return <div class={classNames.join(" ")}>{this.$slots.default}</div>;
  }
}
export default FSXACol;
