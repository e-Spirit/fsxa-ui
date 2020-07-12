import { Component as TsxComponent } from "vue-tsx-support";
import Component from "vue-class-component";

@Component
class BaseComponent<Props = {}> extends TsxComponent<Props> {
  render() {
    throw new Error(
      "A render method has to be specified. Did you use the @Component-Decorator?",
    );
  }
}
export default BaseComponent;
