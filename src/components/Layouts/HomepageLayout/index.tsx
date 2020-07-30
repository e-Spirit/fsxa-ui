import { HomepageLayoutProps } from "@/types/layouts";
import { Component } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

@Component({
  name: "HomepageLayout",
})
class HomepageLayout extends BaseComponent<HomepageLayoutProps> {
  render() {
    return <div class="w-full">{this.$slots.default}</div>;
  }
}
export default HomepageLayout;
