import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";

export const title = "ComponentsOverview";
export const subtitle = "Blakeks";
@Component({
  name: "ComponentsOverview",
})
class ComponentsOverview extends BaseComponent {
  render() {
    return <div>Components-Overview</div>;
  }
}
export default ComponentsOverview;
