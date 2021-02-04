import { Component as TsxComponent } from "vue-tsx-support";
import Component from "vue-class-component";
// eslint-disable-next-line
const breakpoints = require("tailwindcss/defaultTheme");

@Component
class BaseComponent<
  Props = {},
  EventsWithOn = {},
  Slots = {}
> extends TsxComponent<Props, EventsWithOn, Slots> {
  get breakpoints(): Record<"sm" | "md" | "lg" | "xl", string> {
    return breakpoints;
  }

  render() {
    throw new Error(
      "A render method has to be specified. Did you use the @Component-Decorator?",
    );
  }
}
export default BaseComponent;
