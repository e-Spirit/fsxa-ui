import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import {
  LayoutItemProps,
  BreakpointSettings,
  LayoutItemWidths,
} from "@/types/fsxa-ui";

const LAYOUT_WIDTHS: Record<LayoutItemWidths, string> = {
  "0": "w-0",
  "1/12": "w-1/12",
  "2/12": "w-2/12",
  "3/12": "w-3/12",
  "4/12": "w-4/12",
  "5/12": "w-5/12",
  "6/12": "w-6/12",
  "7/12": "w-7/12",
  "8/12": "w-8/12",
  "9/12": "w-9/12",
  "10/12": "w-10/12",
  "11/12": "w-11/12",
  full: "w-full",
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "2/6": "w-2/6",
  "3/6": "w-3/6",
  "4/6": "w-4/6",
  "5/6": "w-5/6",
  auto: "w-auto",
};

/**
 *
 * @param key breakpoint key, set to null if default breakpoint is targeted
 * @param settings Optional breakpoint settings that will be applied
 */
const getClassesForBreakpoint = (
  key: string | null,
  settings?: BreakpointSettings,
): string => {
  const classNames = [];
  // if no width is specified for default, set it to take as much space as possible
  if (!settings?.width && key === null) classNames.push("ui-flex ui-flex-1");
  // create classname that applies width to the LayoutItem
  if (settings?.width)
    classNames.push(
      `${key ? `${key}:ui-` : "ui-"}${LAYOUT_WIDTHS[settings.width]} ${
        key ? `${key}:` : ""
      }flex-initial`,
    );
  // apply flexDirection setting, if set
  if (!settings?.flexDirection && key === null) classNames.push("ui-flex-col");
  else if (settings?.flexDirection)
    classNames.push(`${key}:ui-flex-${settings.flexDirection}`);
  // join classes and return as string
  return classNames.join(" ");
};
@Component({
  name: "LayoutItem",
})
class LayoutItem extends BaseComponent<LayoutItemProps> {
  @Prop() width: LayoutItemProps["width"];
  @Prop() sm: LayoutItemProps["sm"];
  @Prop() md: LayoutItemProps["md"];
  @Prop() lg: LayoutItemProps["lg"];
  @Prop() xl: LayoutItemProps["xl"];

  get useGutter() {
    const parentName = this.$parent.$options.name;
    if (parentName !== "Layout")
      throw new Error(
        "A LayoutItem can only be used inside of the Layout-Component",
      );
    return this.$parent.$props.gutter || false;
  }

  get classNames() {
    const classNames = this.useGutter ? ["ui-p-2 md:ui-p-4 lg:ui-p-6"] : [];
    classNames.push(getClassesForBreakpoint(null, { width: this.width }));
    classNames.push(getClassesForBreakpoint("sm", this.sm));
    classNames.push(getClassesForBreakpoint("md", this.md));
    classNames.push(getClassesForBreakpoint("lg", this.lg));
    classNames.push(getClassesForBreakpoint("xl", this.xl));
    return classNames.join(" ");
  }

  render() {
    return <div class={this.classNames}>{this.$slots.default}</div>;
  }
}
export default LayoutItem;
