import { Component as TsxComponent } from "vue-tsx-support";
import Component from "vue-class-component";

// eslint-disable-next-line
// @ts-ignore
import tailwindConfig from "./../../tailwind.config";

@Component
class BaseComponent<Props = {}, Events = {}, Slots = {}> extends TsxComponent<
  Props,
  Events,
  Slots
> {
  get breakpoints() {
    return tailwindConfig.theme.extend.screens;
  }

  render() {
    throw new Error(
      "A render method has to be specified. Did you use the @Component-Decorator?",
    );
  }
}
export default BaseComponent;
