import { TsxComponent } from "./index";
import { ButtonProps } from "./button";
import { NavigationProps, BaseNavigationItem } from "./navigation";
export class Button extends TsxComponent<ButtonProps> {}
export class Navigation<
  Type extends BaseNavigationItem = BaseNavigationItem
> extends TsxComponent<NavigationProps<Type>> {}
export class BaseComponent<Props> extends TsxComponent<Props> {}
