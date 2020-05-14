import { TsxComponent } from "./index";
import { ButtonProps } from "./button";
import { NavigationProps, NavigationItemBase } from "./navigation";
import { InteractiveComponentProps } from "./internal";

export class FSXAButton extends TsxComponent<ButtonProps> {}
export class FSXANavigation<
  T extends NavigationItemBase<T> = any
> extends TsxComponent<NavigationProps<T>> {}
export class InteractiveComponent<T> extends TsxComponent<
  InteractiveComponentProps<T>
> {}

export * from "./internal";
export * from "./navigation";
export * from "./button";
