import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";

@Component
class FSXABaseComponent<Props = {}> extends tsx.Component<Props> {
  render() {
    throw new Error(
      "A render method has to be specified. Did you use the @Component-Decorator?",
    );
  }
}
export default FSXABaseComponent;
