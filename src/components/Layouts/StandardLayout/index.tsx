import { StandardLayoutProps } from "@/types/layouts";
import { Component } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

@Component({
  name: "StandardLayout",
})
class StandardLayout extends BaseComponent<StandardLayoutProps> {
  render() {
    return <div class="w-full">{this.$slots.default}</div>;
  }
}
export default StandardLayout;
