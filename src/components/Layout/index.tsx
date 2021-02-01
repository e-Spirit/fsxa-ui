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
        class={`ui-flex ui-flex-row ${
          this.gutter ? "ui--mx-2 md:ui--mx-4 lg:ui--mx-6" : ""
        } ${this.wrap ? "ui-flex-wrap" : ""}`}
        data-testid="layout-test"
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default Layout;
export { LayoutItem };
