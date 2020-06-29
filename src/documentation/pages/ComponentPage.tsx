import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";

@Component
class ComponentPage extends FSXABaseComponent {
  render() {
    return <router-view />;
  }
}
export default ComponentPage;
