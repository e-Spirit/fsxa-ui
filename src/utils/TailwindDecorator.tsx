import Component from "vue-class-component";
import "./../assets/tailwind.css";
import FSXABaseComponent from "@/components/FSXABaseComponent";

/**
 * This class is used for Storybook only. It will help inject the generated tailwind css
 */
@Component({
  name: "TailwindDecorator",
})
class TailwindDecorator extends FSXABaseComponent<{}> {
  render() {
    return <div class="w-full h-full">{this.$slots.default}</div>;
  }
}
export default TailwindDecorator;
