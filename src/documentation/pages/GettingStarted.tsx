import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";

export const title = "Getting Started";
export const subtitle = "This is my little subtitle";

@Component({
  name: "GettingStarted",
})
class GettingStarted extends FSXABaseComponent {
  render() {
    return <div>GettingStarted</div>;
  }
}
export default GettingStarted;
