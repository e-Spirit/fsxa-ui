import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";

export const title = "Button";
export const subtitle =
  "Buttons allow users to take actions and make choices, with a single tap.";

@Component
export class ButtonDocs extends BaseComponent {
  render() {
    return <div>Bla</div>;
  }
}
export default ButtonDocs;
