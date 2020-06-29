import { Component } from "vue-tsx-support";
import { InteractiveComponentProps } from "./internal";

export class FSXABaseComponent<Props> extends Component<Props> {}

export interface FSXAImageReference {
  src: string;
  previewId: string;
}

export interface FSXAButtonProps {
  /**
   * Specify the variant the button should be displayed in.
   *
   * Possible values are: **default** | **inverted** | **tag** | **animated**
   */
  variant?: "default" | "inverted" | "tag" | "animated";
  /**
   * Optional callback that will be triggered, when the button is clicked
   */
  handleClick?: () => void;
}
export class FSXAButton extends FSXABaseComponent<FSXAButtonProps> {}

export interface FSXACounterProps {
  value: number;
  label: string;
}
export class FSXACounter extends FSXABaseComponent<FSXACounterProps> {}

export interface FSXAHeadlineProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "span";
  size: "xxl" | "xl" | "lg" | "md" | "sm";
  weight?: "bold" | "light";
  handleClick?: () => void;
}
export class FSXAHeadline extends FSXABaseComponent<FSXAHeadlineProps> {}

export interface FSXAImageProps {
  src?: string;
  opacity?: "0" | "40" | "80" | "100";
  zoom?: boolean;
}
export class FSXAImage extends FSXABaseComponent<FSXAImageProps> {}

export interface FSXARichTextProps {
  text: string;
}
export class FSXARichText extends FSXABaseComponent<FSXARichTextProps> {}

export interface FSXANavigationItem {
  id: string;
  label: string;
  path: string;
  children: FSXANavigationItem[];
}
export interface FSXANavigationProps {
  /**
   * Pass in a callback to determine if the passed item is active
   *
   * With this you can return true for multiple items.
   * For example to show an active parent-child path
   */
  isActiveItem?: (item: FSXANavigationItem) => boolean;
  /**
   * If an item is clicked this callback will be invoked
   *
   * The Component will not make any decision about your routing strategy
   * so you have to route yourself
   */
  handleNavClick: (item: FSXANavigationItem) => void;
  /**
   * The items that should be displayed
   */
  items: FSXANavigationItem[];
  /**
   * Optional depth property
   *
   * The default depth after the children are cut is 3
   */
  depth?: number;
}
export class FSXANavigation extends FSXABaseComponent<FSXANavigationProps> {}

export interface FSXAParagraphProps {
  size: "xs" | "sm" | "md" | "lg";
}
export class FSXAParagraph extends FSXABaseComponent<FSXAParagraphProps> {}

export interface FSXANewsTeaserItemProps {
  title: string;
  date: string;
  description: string;
  handleClick?: () => void;
  image?: FSXAImageReference;
  latest?: boolean;
}
export class FSXANewsTeaser extends FSXABaseComponent<
  FSXANewsTeaserItemProps
> {}

export interface FSXAContainerProps {
  paddingOnly?: boolean;
}
export class FSXAContainer extends FSXABaseComponent<FSXAContainerProps> {}

export interface FSXAFooterLink {
  referenceId: string;
  referenceType: "page" | "fragment";
  isActive: boolean;
  label: string;
}
export interface FSXAFooterProps {
  copyright: string;
  handleClick: (item: FSXAFooterLink) => void;
  links: FSXAFooterLink[];
}
export class FSXAFooter extends FSXABaseComponent<FSXAFooterProps> {}

export class InteractiveComponent extends FSXABaseComponent<
  InteractiveComponentProps
> {}

export interface Breadcrumb {
  referenceId: string;
  referenceType: string;
  label: string;
}

export interface FSXABreadcrumbsProps {
  items: Breadcrumb[];
  handleItemClick?: (item: Breadcrumb) => void;
}
export class FSXABreadcrumbs extends FSXABaseComponent<FSXABreadcrumbsProps> {}

export type FSXAColWidths =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
export interface FSXAColProps {
  width?: FSXAColWidths;
  sm_width?: FSXAColWidths;
  md_width?: FSXAColWidths;
  lg_width?: FSXAColWidths;
  xl_width?: FSXAColWidths;
}
export class FSXACol extends FSXABaseComponent<FSXAColProps> {}

export interface FSXARowProps {
  reverse?: boolean;
}
export class FSXARow extends FSXABaseComponent<FSXARowProps> {}

export class FSXADevInfo extends FSXABaseComponent<{}> {}

export type LayoutItemWidths =
  | "0"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/11"
  | "full"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "auto";

export interface LayoutItemProps {
  width?: LayoutItemWidths;
  width_sm?: LayoutItemWidths;
  width_md?: LayoutItemWidths;
  width_lg?: LayoutItemWidths;
  width_xl?: LayoutItemWidths;
  verticalAlign?: string;
  horizontalAlign?: string;
}
export class LayoutItem extends FSXABaseComponent<LayoutItemProps> {}
export interface LayoutProps {
  gutter: boolean;
  verticalAlign: string;
  horizontalAlign: string;
}
export class Layout extends FSXABaseComponent<LayoutProps> {
  static LayoutItem: LayoutItem;
}
