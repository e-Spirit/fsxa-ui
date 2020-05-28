import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";

@Component({
  name: "ButtonDocs"
})
class ButtonDocs extends tsx.Component<{}> {
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
