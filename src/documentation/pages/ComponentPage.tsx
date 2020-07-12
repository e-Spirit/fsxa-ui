import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";

@Component
class ComponentPage extends BaseComponent {
  render() {
    return <router-view />;
  }
}
export default ComponentPage;
