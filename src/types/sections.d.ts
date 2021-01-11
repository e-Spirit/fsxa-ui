import { Component } from "vue-tsx-support";
import { ImageRef, NewsTeaserItemProps } from "./components";

export interface NewsTeaserSectionProps {
  headline: string;
  items: Omit<NewsTeaserItemProps, "handleClick" | "latest">[];
  handleItemClick: (item: NewsTeaserItemProps) => void;
}
export class NewsTeaserSection extends Component<NewsTeaserSectionProps> {}

export interface ListSectionProps<Item> {
  /**
   * You can pass an optional headline that will be displayed in top of your items.
   * An additional separator will be rendered as well.
   */
  headline?: string;
  /**
   * The items that should be iterated over
   */
  items: Item[];
  /**
   * Render-Prop with which you must define, how your items should get rendered
   */
  renderItem: (item: Item) => JSX.Element | JSX.Element[] | null;
  /**
   * Optional filters that will be displayed between headline and items
   */
  filters?: {
    key: string;
    value: any;
  }[][];
  /**
   * Optional callback that will be invoked with the new selectedFilters-Array
   */
  handleFilterChange?: (selectedFilters: string[]) => void;
  /**
   * Optional Array of selected filter-keys
   */
  selectedFilters?: string[];
}

export interface ProductProperty {
  /**
   * Title for the list of product properties
   */
  title: string;
  /**
   * List of product properties
   */
  properties: Array<{
    /**
     * Identifier of the property
     */
    id: string;
    /**
     * Display name of the property
     */
    name: string;
  }>;
}
export interface ProductDetailSectionProps {
  /**
   * Headline of the product that will be displayed on top of the section
   */
  headline: string;
  /**
   * Description of the product that will be displayed under the headline
   */
  description: string;
  /**
   * Price of the product that will be displayed under the description
   */
  price: string;
  /**
   * Specify a text for the button
   *
   * The button is only rendered, when `buttonText` is provided.
   */
  buttonText?: string;
  /**
   * Optional list of product properties that will be rendered into bullet lists under the `price`.
   * Each `propertyList`-entry results in a new bullet list with a custom `title`.
   */
  propertyList?: ProductProperty[];
  /**
   * Optional list of image references that will be displayed on the left side of the section
   */
  images?: ImageRef[];
  /**
   * Optional list of key-value-pairs, e.g. `{ key1: "value1", key2: "value2" }` that renders to foldable (Accordion) elements
   * in the view. Utilizes the key as title and the value as foldable text content.
   *
   * The value can contain RichText-Formatting
   */
  foldableContentList?: Record<string, string>;
  /**
   * Optional callback that is triggered, when the button is clicked
   *
   * Be aware that the button is only rendered, when `buttonText` is provided
   */
  handleButtonClick?: () => void;
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

export interface FullWidthImageSliderSectionSlide {
  /**
   * A resolution map which provides the width / height and url for each resolution
   *
   * The Section will automatically make sure, that the correct image is referenced
   */
  image: Record<
    string,
    {
      url: string;
      width: number;
      height: number;
    }
  >;
  /**
   * The title of the slide that will be animated in.
   *
   * Note: This can contain RichText
   */
  title: string;
  /**
   * The description that will be animated. Make sure that you do not use too much text.
   *
   * Note: This can contain RichText
   */
  description: string;
  /**
   * The label of the button that should be displayed.
   */
  buttonText: string;
}
export interface FullWidthImageSliderSectionProps {
  /**
   * The slides that should be displayed. You can add additional properties to the slide-objects as well.
   */
  slides: FullWidthImageSliderSectionSlide[];
  /**
   * This callback will be invoked with the slide the button was clicked in
   */
  handleButtonClick: (slide: FullWidthImageSliderSectionSlide) => void;
}
export class FullWidthImageSliderSection extends Component<
  FullWidthImageSliderSection
> {}
