import { Component } from "vue-tsx-support";
import { ImageRef } from "./utils";
import { AccordionProps, NewsTeaserItemProps } from "./components";

export interface NewsTeaserSectionProps {
  headline: string;
  items: Omit<NewsTeaserItemProps, "handleClick" | "latest">[];
  handleItemClick: (item: NewsTeaserItemProps) => void;
}
export class NewsTeaserSection extends Component<NewsTeaserSectionProps> {}
export interface ProductDetailItem {
  id: string;
  label: string;
}
export interface ProductDetailSectionProps {
  headline: string;
  description: string;
  price: string;
  categories?: ProductDetailItem[];
  compatibilities?: ProductDetailItem[];
  buttonText: string;
  image?: ImageRef;
  compatibilityHeadline: string;
  categoryHeadline: string;
}

export class ProductDetailSection extends Component<
  ProductDetailSectionProps
> {}

export interface InterestingFactsSectionProps {
  /**
   * Optional reference to the background-image that should be displayed
   */
  backgroundImage?: ImageRef;
  /**
   * Headline of the section
   */
  headline: string;
  /**
   * tagline that will be displayed on top of the headline
   */
  tagline: string;
  /**
   * text content that will be displayed in the info box
   */
  text: string;
  /**
   * counters that should be displayed
   */
  counters: Array<{
    value: number;
    label: string;
  }>;
}
export class InterestingFactsSection extends Component<
  InterestingFactsSectionProps
> {}

export interface TeaserSectionProps {
  /**
   * The headline of the Section
   */
  headline: string;
  /**
   * Specify a short kicker that is displayed on top of the headline
   */
  kicker: string;
  /**
   * Your text-content. It can contain RichText-Formatting
   */
  text: string;
  /**
   * Specify a text for the button
   *
   * The button is only rendered, when buttonText is provided.
   */
  buttonText?: string;
  /**
   * Tagline that is displayed under the section
   */
  tagline?: string;
  /**
   * Optional image that is displayed on the right side of the section
   */
  image?: ImageRef;
  /**
   * Optional callback that is triggered, when button is clicked
   *
   * Be aware that the button is only rendered, when `buttonText` is provided
   */
  handleButtonClick?: () => void;
}
export class TeaserSection extends Component<TeaserSectionProps> {}

export interface Breadcrumb {
  referenceId: string;
  referenceType: string;
  label: string;
  path: string;
}
export interface BreadcrumbsProps {
  items: Breadcrumb[];
  handleItemClick?: (item: Breadcrumb) => void;
}

export interface HeaderSectionProps {
  /**
   * The reference to the background-image that should be displayed
   */
  backgroundImage?: ImageRef;
  /**
   * The title of the page
   */
  title: string;
  /**
   * The items from which the breadcrumbs will be constructed
   */
  breadcrumbs: Breadcrumb[];
  /**
   * Optional callback that will be triggered, when an item is clicked
   */
  handleItemClick?: (item: Breadcrumb) => void;
}
export class HeaderSection extends Component<HeaderSectionProps> {}

export interface AccordionSectionProps {
  /**
   * Optional title string. When not set, there simply won't be a title for the section.
   */
  title?: string;
  /**
   * Styling choice. Default is **false**
   */
  dark?: boolean;
  /**
   * The individual subsections consist of a non-optional title and a non-optional text.
   */
  items: Pick<AccordionProps, "title" | "text">[];
}
export class AccordionSection extends Component<AccordionSectionProps> {}
