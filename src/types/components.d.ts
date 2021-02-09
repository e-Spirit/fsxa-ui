import { VNode } from "vue";
import { Component } from "vue-tsx-support";

export type RenderedType =
  | JSX.Element
  | JSX.Element[]
  | string
  | null
  | undefined
  | VNode
  | VNode[];

export interface ButtonProps {
  /**
   * Specify the variant the button should be displayed in.
   *
   * Possible values are: **default** | **inverted** | **tag** | **tag-selected** | **animated**
   *
   * Default value is: **default**
   */
  variant?: "default" | "inverted" | "tag" | "tag-selected" | "animated";
  /**
   * Optional callback that will be triggered, when the button is clicked
   */
  handleClick?: () => void;
}
export class Button extends Component<ButtonProps> {}

export interface CodeProps {
  code: string;
  language?: string;
  exampleContent?: JSX.Element;
  filename?: string;
}
export class Code extends Component<CodeProps> {}

export interface ContainerProps {
  /**
   * If set to true, the container takes up all available space
   *
   * If set to false, the max-width will be set to match the min-width of the current breakpoint
   *
   * Default value is: **false**
   */
  fluid?: boolean;
  /**
   * If set to true, this will apply a default horizontal padding that depends on the current breakpoint
   *
   * This is especially useful on small screens, so that the content will not take up full available space
   *
   * Default value is: **true**
   */
  horizontalPadding?: boolean;
  /**
   * If set to true, this will apply a default vertical padding that depends on the current breakpoint
   *
   * Default value is: **true**
   */
  verticalPadding?: boolean;
}
export class Container extends Component<ContainerProps> {}

export interface FooterLink {
  referenceId: string;
  referenceType: "page" | "fragment";
  isActive: boolean;
  label: string;
}
export interface FooterProps {
  copyright: string;
  handleClick: (item: FooterLink) => void;
  links: FooterLink[];
}
export class Footer extends Component<FooterProps> {}

export interface HeadlineProps {
  /**
   * Specify which html-tag should be used
   *
   * Possible values are: **h1**, **h2**, **h3**, **h4**, **h5**, **h6**, **span**
   *
   * Default value is: **h1**
   *
   * Make sure to expose useful side structure information to crawlers by using the correct tag
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  /**
   * Specify the size of the headline
   *
   * Possible values are: **xxl**, **xl**, **lg**, **md**, **sm**, **xs**
   *
   * Default value is: **lg**
   */
  size: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
  /**
   * Should the headline be displayed in all uppercase letters?
   *
   * Default value is: **true**
   */
  uppercase?: boolean;
  /**
   * Which font-weight should be used?
   *
   * Possible values are: **bold**, **semibold**, **light**
   *
   * Default value is: **bold**
   */
  weight?: "semibold" | "bold" | "light";
  /**
   * Specify if the headline should add top and bottom margins taking size in account
   * Default value is: **true**
   */
  includeMargin?: boolean;
  /**
   * Optional callback that will be triggered, when the headline is clicked
   */
  handleClick?: () => void;
}
export class Headline extends Component<HeadlineProps> {}

export interface Dimensions {
  width: number;
  height: number;
}
export interface ImageRef {
  type: "image";
  /**
   * The src of the image that should be displayed.
   *
   * Note: If you are passing additional resolutions, this image src will be used as fallback
   */
  src: string;

  /**
   * Alternative text which describes the image.
   */
  alt?: string;

  previewId?: string;

  /**
   * All available resolutions of your image that will be combined into a srcset statement
   */
  resolutions?: Record<
    string,
    {
      url: string;
      width: number;
      height: number;
    }
  >;

  /**
   * Specfiy which size should be used with which viewport
   */
  sizes?: string;
}
export interface ImageProps extends Omit<ImageRef, "type"> {
  /**
   * Specify if the image should be loaded only if it is visible in the viewport
   *
   * Default value is: **false**
   */
  lazy?: boolean;
  /**
   * Should the shift / border effect be applied?
   *
   * Default value is: **false**
   */
  border?: boolean;
  /**
   * Should the zoom-effect be applied?
   *
   * Default value is: **false**
   */
  zoom?: boolean;

  /**
   * Should a black overlay with specified opacity be displayed on top?
   *
   * Possible values are: **25**, **50**, **75**, **80**
   */
  opacity?: "0" | "25" | "40" | "50" | "75" | "80";
}
export class Image extends Component<ImageProps> {}

export interface BreakpointSettings {
  /**
   * Specify the width for given breakpoint
   * See auto-completion for allowed values
   */
  width?: LayoutItemWidths;
  /**
   * Controls the direction of flex items
   *
   * **row**: position items horizontally
   *
   * **row-reverse**: position items horizontally in the opposite direction
   *
   * **col**: position items vertically
   *
   * **col-reverse**: position items vertically in the opposite direction
   *
   * Default value is: **col**
   */
  flexDirection?: "row" | "col" | "row-reverse" | "col-reverse";
}

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
  | "11/12"
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

export interface LayoutItemProps extends BreakpointSettings {
  /**
   * Settings for sm breakpoint.
   */
  sm?: BreakpointSettings;
  /**
   * Settings for md breakpoint.
   */
  md?: BreakpointSettings;
  /**
   * Settings for lg breakpoint.
   */
  lg?: BreakpointSettings;
  /**
   * Settings for xl breakpoint.
   */
  xl?: BreakpointSettings;
}

export class LayoutItem extends Component<LayoutItemProps> {}

export interface LayoutProps {
  /**
   * Should spacing be added
   * Default value is: **true**
   **/
  gutter?: boolean;
  /**
   * Wrap overflowing columns or shrink all relative to their defined size?
   * Default value is: **false**
   */
  wrap?: boolean;
}
export class Layout extends Component<LayoutProps> {}
export interface NavItem {
  key: string | number;
  label: any;
}
export interface NavProps {
  items: (NavItem & {
    childPlacement?: "left" | "right" | "center";
    children: NavItem[];
  })[];
}

export interface NavigationItem {
  key: string | number;
  label: any;
  path: string;
}

export interface FirstLevelNavigationItem extends NavigationItem {
  childPlacement?: "left" | "right";
  children: NavigationItem[];
}
export interface NavigationProps {
  /**
   * Pass in the keys of all items that should be marked as active
   */
  activeItemKeys?: (string | number)[];
  /**
   * The items that should be displayed
   */
  items: FirstLevelNavigationItem[];
}
export interface NavigationEventsWithOn {
  onItemClicked: NavigationItem | FirstLevelNavigationItem;
}
export class Navigation extends Component<
  NavigationProps,
  NavigationEventsWithOn
> {}
export class MobileNavigation extends Component<
  NavigationProps,
  NavigationEventsWithOn
> {}

export interface PageProps {
  logo?: ImageRef;
  renderNavigation: () => JSX.Element | null;
  renderFooter: () => JSX.Element | null;
}
export class Page extends Component<PageProps> {}

export interface ParagraphProps {
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  weight?: "bold" | "light" | "normal";
}
export class Paragraph extends Component<ParagraphProps> {}

export interface NewsTeaserItemProps {
  title: string;
  date: string;
  description: RenderedType;
  handleClick?: () => void;
  image?: ImageRef;
  latest?: boolean;
}
export class NewsTeaserItem extends Component<NewsTeaserItemProps> {}

export interface ProductListItemProps {
  /**
   * The title that will be displayed
   */
  title: string;
  /**
   * The description that will be displayed. Can contain RichText
   */
  description: RenderedType;
  /**
   * The price that will be displayed.
   */
  price: string;
  /**
   * The image of the product that will be displayed in the background
   */
  image: ImageRef;
  /**
   * The url that should be opened, when the item is clicked.
   *
   * Note: this will only be used, when SSR is active and JS is deactivated in the client
   */
  url: string;
  /**
   * Callback that will be invoked, when the item is clicked
   */
  handleClick: () => void;
}
export class ProductListItem extends Component<ProductListItemProps> {}

export interface LoaderProps {
  renderLoader?: () => JSX.Element | null;
}
export class Loader extends Component<LoaderProps> {}

export interface Option {
  key: string;
  label: string;
  path?: string;
}
export interface DropdownProps {
  value: string;
  options: Option[];
  handleChange: (option: Option) => void;
}
export class Dropdown extends Component<DropdownProps> {}

export interface Tag {
  /**
   * Label of the tag
   */
  label: string;
  /**
   * Id of the tag so that i can be identified
   */
  id?: number | string;
}

export interface SocialArea {
  /**
   * Title of the social area
   */
  title?: string;
  /**
   * social elements which should be displayed in the social area
   */
  items?: SocialElement[];
  /**
   * Callback for when a social element is clicked.
   */
  handleSocialClick?: (socialElement: SocialElement) => void;
}

export interface SocialElement {
  /**
   * Title of the social element which is displayed when no custom slot is used
   */
  title?: string;
  /**
   * Id of the social element so that i can be identified
   */
  id?: number | string;
  /**
   * Additional informations for one social element
   */
  options?: any;
}

export interface NewsDetailProps {
  /**
   * The given headline is displayed at the top
   */
  headline: string;
  /**
   * The given teaser is displayed between the headline and image
   */
  teaser?: string;
  /**
   * Object with a src attribute for the image.
   */
  image: ImageProps;
  /**
   * Date when the article is written. String should be ISO 8601 conform.
   */
  date?: string;
  /**
   * Name of the author of the arctile
   */
  author?: string;
  /**
   * Array of Tags which should be displayed
   */
  tags?: Tag[];
  /**
   * Callback when a tag is clicked.
   * @param tag clicked tag
   */
  handleTagClick?: (tag: Tag) => void;
  /**
   * Callback for when the return button is clicked.
   * Attention: When returnText is not defined, there will be no button where this callback is working
   */
  handleReturnClick?: () => void;
  /**
   * Text for the return Button.
   * Attention: When this is not defined, there will be no button where the callback handleReturnClick is working
   */
  returnText?: string;
  /**
   * Area for social elements displayed under the article
   */
  social?: SocialArea;
}

export interface NewsDetailSlots {
  /**
   * You can override the social area rendering of this component by specifying the slot social
   * It will receive the social-area-data as parameter
   */
  social: SocialArea;
}

export class NewsDetail extends Component<
  NewsDetailProps,
  {},
  NewsDetailSlots
> {}

export interface QuoteProps {
  /**
   * Side on which the quotation mark should be displayed
   */
  side?: "left" | "right";
}

export class Quote extends Component<QuoteProps> {}

export interface AccordionProps {
  /**
   * The title of the section is whats displayed in the clickable part and whats always visible
   */
  title: RenderedType;
  /**
   * Styling choice. Default is **false**
   */
  dark?: boolean;
  /**
   * Indicates whether the text is visible or not. Default is **false**
   */
  open?: boolean;
}
export class Accordion extends Component<AccordionProps> {}
export type ScreenPrefixes = "sm" | "md" | "lg" | "xl";

export type LineSeparatorWidths = "4" | "8" | "16" | "32" | "64" | "full";

export interface LineSeparatorProps {
  /**
   * Specify which width the separator should have
   *
   * Possible values are: **4** | **8** | **16** | **32** | **64** | **full**
   *
   * Default value is: **16**
   */
  width?: LineSeparatorWidths;
  /**
   * Specify which width the separator should have when the screen is small
   *
   * Possible values are: **4** | **8** | **16** | **32** | **64** | **full**
   */
  sm_width?: LineSeparatorWidths;
  /**
   * Specify which width the separator should have when the screen is medium
   *
   * Possible values are: **4** | **8** | **16** | **32** | **64** | **full**
   */
  md_width?: LineSeparatorWidths;
  /**
   * Specify which width the separator should have when the screen is large
   *
   * Possible values are: **4** | **8** | **16** | **32** | **64** | **full**
   */
  lg_width?: LineSeparatorWidths;
  /**
   * Specify which width the separator should have when the screen is extra large
   *
   * Possible values are: **4** | **8** | **16** | **32** | **64** | **full**
   */
  xl_width?: LineSeparatorWidths;
  /**
   * Specify which height the separator should have
   *
   * Possible values are: **1** | **2** | **4**
   *
   * Default value is: **2**
   */
  height?: "1" | "2" | "4";
  /**
   * Specify on which side the separator should be
   *
   * Possible values are: **left** | **right**
   *
   * Default value is: **left**
   */
  side?: "left" | "right";
}

export class LineSeparator extends Component<LineSeparatorProps> {}

export interface SliderControlParams {
  currentSlideIndex: number;
  nextSlideIndex: number | null;
  prevSlideIndex: number | null;
  showSlide: (index: number) => void;
}
export interface SliderProps {
  /**
   * Should the slide transition (horizontal transform) be animated?
   */
  animateSlideTransition?: boolean;
  /**
   * The number of visible slides
   */
  visibleElements?: number;
  /**
   * Should the slider start with the first slide again after reaching the last one?
   */
  infinite?: boolean;
  /**
   * Should the slider automatically start the transition between slides so that no user-interaction is needed?
   */
  animate?: boolean;
  /**
   * The delay in ms between the automatic slide transitions
   *
   * *Note*: This only has an impact, if animate is set to true
   */
  animationDelay?: number;
  /**
   * Specify which slide should initially be displayed
   *
   * Counting starts at 0
   */
  initialSlideIndex?: number;
  /**
   * The number of slides that should be rendered
   */
  slideCount: number;
  handleSlideAnimation?: (
    type: "animateIn" | "animateOut",
    params: { element: Element; slideIndex: number },
  ) => Promise<void>;
}
export interface SliderSlots {
  /**
   * You can render controls inside of the slider by specifying a scoped slot "controls"
   * It will receive an Object of type SliderControlParams as its parameter
   */
  controls?: SliderControlParams;
  slide: {
    index: number;
    params: SliderControlParams;
  };
}
export class Slider extends Component<SliderProps, {}, SliderSlots> {}

export interface ImageSliderProps<ImageType> {
  /**
   * You can enable automatic transitions between the images
   *
   * *Default*: true
   */
  animate?: boolean;
  /**
   * Pass the images that should be rendered
   */
  images: ImageType[];
}
export interface ImageSliderSlots<ImageType> {
  /**
   * You can override the image rendering of this component by specifying the slot image
   * It will receive the image-data as its first parameter
   */
  image?: {
    image: ImageType;
  };
  /**
   * You can override the controls of the slider by specifying a slot "controls"
   * It will receive an Object of type SliderControlParams as its first parameter
   */
  controls?: SliderControlParams;
}
export class ImageSlider<ImageType = ImageRef> extends Component<
  ImageSliderProps<ImageType>,
  {},
  ImageSliderSlots<ImageType>
> {}
