import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";

@Component
class FSXABaseComponent<P = {}, E = {}> extends tsx.Component<P, E> {
  render() {
    throw new Error("You have to implement your own render-method");
  }
}
export default FSXABaseComponent;
