import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import { LayoutItemProps, BreakpointSettings } from "@/types/fsxa-ui";

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
  if (!settings?.width && key === null) classNames.push("flex flex-1");
  // create classname that applies width to the LayoutItem
  if (settings?.width)
    classNames.push(
      `${key ? `${key}:` : ""}w-${settings.width} ${
        key ? `${key}:` : ""
      } flex-initial`,
    );
  // apply flexDirection setting, if set
  if (!settings?.flexDirection && key === null) classNames.push("flex-col");
  else if (settings?.flexDirection)
    classNames.push(`${key}:flex-${settings.flexDirection}`);
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
    const classNames = this.useGutter ? ["p-2 md:p-4 lg:p-6"] : [];
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
