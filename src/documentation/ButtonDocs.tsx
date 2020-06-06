import Component from "vue-class-component";
import { FSXABaseComponent } from "@/types/components";

@Component({
  name: "ButtonDocs",
})
class ButtonDocs extends FSXABaseComponent<{}> {
  render() {
    return (
      <div class="w-full h-full p-10">
        <h1 class="text-lg uppercase">Button</h1>
        <p>Hier kommt die Description hin</p>
        <div>Properties incoming</div>
      </div>
    );
  }
}
export default ButtonDocs;
