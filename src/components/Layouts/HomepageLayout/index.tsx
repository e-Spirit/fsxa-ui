import { HomepageLayoutProps } from "@/types/layouts";
import BaseLayout from "@/components/Layouts/BaseLayout";
import { Component } from "vue-property-decorator";

@Component({
  name: "HomepageLayout",
})
class HomepageLayout extends BaseLayout<HomepageLayoutProps> {
  render() {
    return <div class="w-full">{this.renderContentElements(0)}</div>;
  }
}
export default HomepageLayout;
