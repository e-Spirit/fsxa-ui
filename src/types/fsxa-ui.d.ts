import { ButtonProps } from "./button";
import { NavigationProps, NavigationItemBase } from "./navigation";
import { InteractiveComponentProps } from "./internal";
import * as tsx from "vue-tsx-support";
import { FSXAImageProps } from "./image";
import { RichTextProps } from "./richtext";
import { CounterProps } from "./counter";

export class FSXAButton extends tsx.Component<ButtonProps> {}
export class FSXANavigation<
  T extends NavigationItemBase<T> = any
> extends tsx.Component<NavigationProps<T>> {}
export class FSXAPreviewMode extends tsx.Component<{}> {}
export class FSXAImage extends tsx.Component<FSXAImageProps> {}
export class FSXARichText extends tsx.Component<RichTextProps> {}
export class FSXACounter extends tsx.Component<CounterProps> {}

export class InteractiveComponent<T> extends tsx.Component<
  InteractiveComponentProps<T>
> {}

export * from "./button";
export * from "./image";
export * from "./internal";
export * from "./navigation";
export * from "./richtext";
