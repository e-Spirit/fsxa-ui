import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";
import "./../assets/tailwind.css";

/**
 * This class is used for Storybook only. It will help inject the generated tailwind css
 */
@Component({
  name: "TailwindDecorator"
})
class TailwindDecorator extends tsx.Component<{}> {
  render() {
    return <div class="w-full h-full">{this.$slots.default}</div>;
  }
}
export default TailwindDecorator;
