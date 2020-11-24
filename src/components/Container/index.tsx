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
        class={`mx-auto relative ${this.fluid ? "w-full" : "container"} ${
          this.horizontalPadding ? "px-6 md:px-10 lg:px-12" : ""
        } ${this.verticalPadding ? "py-6 md:py-12 lg:py-24" : ""}`}
        data-testId="container"
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default Container;
