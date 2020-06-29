import FSXABaseComponent from "@/components/FSXABaseComponent";
import LayoutItem from "./components/LayoutItem";
import { Prop, Component } from "vue-property-decorator";

export interface LayoutProps {
  /**
   * Should spacing be added
   * Default: true
   **/
  gutter?: boolean;
  /**
   * Wrap overflowing columns or shrink all relative to their defined size?
   * Default: false
   */
  wrap?: boolean;
}
@Component({
  name: "Layout",
})
class Layout extends FSXABaseComponent<LayoutProps> {
  static LayoutItem = LayoutItem;

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
