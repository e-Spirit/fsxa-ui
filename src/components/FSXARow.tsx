import FSXABaseComponent from "./FSXABaseComponent";
import Component from "vue-class-component";

@Component({
  name: "FSXARow",
})
class FSXARow extends FSXABaseComponent {
  render() {
    return <div class="w-full flex flex-row">{this.$slots.default}</div>;
  }
}
export default FSXARow;
