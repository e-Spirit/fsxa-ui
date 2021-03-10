import { BaseComponent } from "@/components";
import {
  LineSeparatorProps,
  LineSeparatorWidths,
  ScreenPrefixes,
} from "@/types/components";
import { checkPassedValue } from "../utils/PropertyChecker/PropertyChecker";
import { Component, Prop } from "vue-property-decorator";

const lsWidthClasses = {
  4: "ui-w-4",
  8: "ui-w-8",
  16: "ui-w-16",
  32: "ui-w-32",
  64: "ui-w-64",
  full: "ui-w-full",
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

  pushWidth(
    classNames: string[],
    width?: LineSeparatorWidths,
    prefix?: ScreenPrefixes,
  ) {
    if (width) {
      const className = lsWidthClasses[width];
      classNames.push(prefix ? `${prefix}:${className}` : className);
    }
  }

  mounted() {
    const possibleWidths = ["4", "8", "16", "32", "64", "full"];
    checkPassedValue(this.$el, possibleWidths, this.width, "width");
    checkPassedValue(this.$el, possibleWidths, this.sm_width, "sm_width");
    checkPassedValue(this.$el, possibleWidths, this.md_width, "md_width");
    checkPassedValue(this.$el, possibleWidths, this.lg_width, "lg_width");
    checkPassedValue(this.$el, possibleWidths, this.xl_width, "xl_width");
    checkPassedValue(this.$el, ["1", "2", "4"], this.height, "height");
    checkPassedValue(this.$el, ["left", "right"], this.side, "side");
  }

  render() {
    const heightClasses = {
      1: "ui-h-1",
      2: "ui-h-2",
      4: "ui-h-4",
    };

    const baseClasses = `ui-my-1 ui-bg-black${
      this.height ? " " + heightClasses[this.height] : ""
    }`;
    const classNames = [baseClasses];
    this.pushWidth(classNames, this.width);
    this.pushWidth(classNames, this.sm_width, "sm");
    this.pushWidth(classNames, this.md_width, "md");
    this.pushWidth(classNames, this.lg_width, "lg");
    this.pushWidth(classNames, this.xl_width, "xl");

    return (
      <div
        class={`${this.side === "right" ? "ui-flex ui-flex-row-reverse" : ""}`}
        data-testid="flex-test"
      >
        <div class={classNames.join(" ")} data-testid="separator-test" />
      </div>
    );
  }
}
export default LineSeparator;
