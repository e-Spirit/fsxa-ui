import { SingleColumnLayoutProps } from "@/types/layouts";
import { Component } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

@Component({
  name: "SingleColumnLayout",
})
class SingleColumnLayout extends BaseComponent<SingleColumnLayoutProps> {
  render() {
    return <div class="w-full">{this.$slots.default}</div>;
  }
}
export default SingleColumnLayout;
