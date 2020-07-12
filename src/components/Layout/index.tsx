import BaseComponent from "@/components/BaseComponent";
import { Prop, Component } from "vue-property-decorator";
import { LayoutProps } from "@/types/fsxa-ui";
import LayoutItem from "./LayoutItem";

/**
 * TODO: Allow to set gutter and wrap for specific breakpoints as well
 */

@Component({
  name: "Layout",
})
class Layout extends BaseComponent<LayoutProps> {
  @Prop({ default: true }) gutter!: LayoutProps["gutter"];
  @Prop({ default: false }) wrap!: LayoutProps["wrap"];

  render() {
    return (
      <div
        class={`flex flex-row ${this.gutter ? "-mx-2 md:-mx-4 lg:-mx-6" : ""} ${
          this.wrap ? "flex-wrap" : ""
        }`}
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default Layout;
export { LayoutItem };
