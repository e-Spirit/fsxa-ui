import { InteractiveComponentProps } from "./internal";
import * as tsx from "vue-tsx-support";

export class InteractiveComponent<T> extends tsx.Component<
  InteractiveComponentProps<T>
> {}
export * from "./internal";
export * from "./components";
import Sections from "./sections";
export { Sections };
