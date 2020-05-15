import { ButtonProps } from "./button";
import { NavigationProps, NavigationItemBase } from "./navigation";
import { InteractiveComponentProps } from "./internal";
import * as tsx from "vue-tsx-support";

export class FSXAButton extends tsx.Component<ButtonProps> {}
export class FSXANavigation<
  T extends NavigationItemBase<T> = any
> extends tsx.Component<NavigationProps<T>> {}
export class InteractiveComponent<T> extends tsx.Component<
  InteractiveComponentProps<T>
> {}

export * from "./internal";
export * from "./navigation";
export * from "./button";
