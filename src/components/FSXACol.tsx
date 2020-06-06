import FSXABaseComponent from "@/components/FSXABaseComponent";
import { Prop, Component } from "vue-property-decorator";

const getClassName = (width?: Widths, prefix?: string) => {
  const className = `col-span-${width || 12}`;
  return prefix ? `${prefix}:${className}` : className;
};

export type Widths =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
export interface FSXAColProps {
  width?: Widths;
  sm_width?: Widths;
  md_width?: Widths;
  lg_width?: Widths;
  xl_width?: Widths;
}
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
