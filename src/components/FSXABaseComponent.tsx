import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";

@Component
class FSXABaseComponent<Props = {}> extends tsx.Component<Props> {
  render() {
    throw new Error("Please specify your own render method.");
  }
}
export default FSXABaseComponent;
