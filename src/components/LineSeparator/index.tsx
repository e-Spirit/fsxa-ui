import { BaseComponent } from "@/components";
import { Component, Prop } from "vue-property-decorator";
import {
  LineSeparatorProps,
  LineSeparatorWidths,
  ScreenPrefixes,
} from "@/types/components";

const getClassName = (width?: LineSeparatorWidths, prefix?: ScreenPrefixes) => {
  const className = `w-${width || 16}`;
  return prefix ? `${prefix}:${className}` : className;
};

@Component({
  name: "LineSeparator",
})
class LineSeparator extends BaseComponent<LineSeparatorProps> {
  @Prop({ required: false, default: "16" })
  width!: LineSeparatorProps["width"];
  @Prop({ required: false, default: "2" })
  height!: LineSeparatorProps["height"];
  @Prop({ required: false }) sm_width: LineSeparatorProps["sm_width"];
  @Prop({ required: false }) md_width: LineSeparatorProps["md_width"];
  @Prop({ required: false }) lg_width: LineSeparatorProps["lg_width"];
  @Prop({ required: false }) xl_width: LineSeparatorProps["xl_width"];
  @Prop({ required: false, default: "left" })
  side: LineSeparatorProps["side"];

  render() {
    const baseClasses = `my-1 bg-black h-${this.height}`;
    const classNames = [baseClasses];
    classNames.push(getClassName(this.width));
    if (this.sm_width) classNames.push(getClassName(this.sm_width, "sm"));
    if (this.md_width) classNames.push(getClassName(this.md_width, "md"));
    if (this.lg_width) classNames.push(getClassName(this.lg_width, "lg"));
    if (this.xl_width) classNames.push(getClassName(this.xl_width, "xl"));

    return (
      <div class={`${this.side === "right" ? "flex flex-row-reverse" : ""}`}>
        <div class={classNames.join(" ")} />
      </div>
    );
  }
}
export default LineSeparator;
