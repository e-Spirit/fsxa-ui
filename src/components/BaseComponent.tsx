import { Component as TsxComponent } from "vue-tsx-support";
import Component from "vue-class-component";

@Component
class BaseComponent<
  Props = {},
  EventsWithOn = {},
  Slots = {}
> extends TsxComponent<Props, EventsWithOn, Slots> {
  render() {
    throw new Error(
      "A render method has to be specified. Did you use the @Component-Decorator?",
    );
  }
}
export default BaseComponent;
