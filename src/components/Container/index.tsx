import BaseComponent from "../BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import { ContainerProps } from "@/types/components";

@Component({
  name: "Container",
})
class Container extends BaseComponent<ContainerProps> {
  @Prop({ default: false }) fluid!: ContainerProps["fluid"];
  @Prop({ default: true }) verticalPadding!: ContainerProps["verticalPadding"];
  @Prop({ default: true })
  horizontalPadding!: ContainerProps["horizontalPadding"];

  render() {
    return (
      <div
        class={`ui-mx-auto ui-relative ${
          this.fluid ? "ui-w-full" : "sm:ui-container"
        } ${this.horizontalPadding ? "ui-px-6 md:ui-px-10 lg:ui-px-12" : ""} ${
          this.verticalPadding ? "ui-py-6 md:ui-py-12 lg:ui-py-24" : ""
        }`}
        data-testId="container"
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default Container;
