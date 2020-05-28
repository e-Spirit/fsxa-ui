import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";

@Component
class BaseComponent<P> extends tsx.Component<P> {
  render() {
    throw new Error("You have to implement your own render-method");
  }
}
export default BaseComponent;
