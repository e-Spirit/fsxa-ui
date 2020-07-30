import { StandardLayoutProps } from "@/types/layouts";
import BaseLayout from "@/components/Layouts/BaseLayout";
import { Component } from "vue-property-decorator";

@Component({
  name: "StandardLayout",
})
class StandardLayout extends BaseLayout<StandardLayoutProps> {
  render() {
    return <div class="w-full">{this.renderContentElements(0)}</div>;
  }
}
export default StandardLayout;
