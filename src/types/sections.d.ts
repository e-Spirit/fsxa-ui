import { Component } from "vue-tsx-support";
import {
  ImageRef,
  NewsTeaserItemProps,
  RenderedType,
  SliderControlParams,
} from "./components";

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
   * The button is only rendered when `buttonText` is provided.
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderSectionEvents {}

export interface HeaderSectionSlots {
  backgroundImage?: ImageRef;
  breadcrumbs?: Breadcrumb[];
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

export interface FullWidthSliderSectionSlide<MediaType> {
  /**
   * A resolution map which provides the width / height and url for each resolution
   *
   * The Section will automatically make sure, that the correct image is referenced
   */
  media: MediaType;
  /**
   * The title of the slide that will be animated in.
   *
   * Note: This can contain RichText
   */
  title: RenderedType;
  /**
   * The description that will be animated. Make sure that you do not use too much text.
   *
   * Note: This can contain RichText
   */
  teaser: RenderedType;
  /**
   * The label of the button that should be displayed.
   */
  buttonContent: RenderedType;
}
export interface FullWidthSliderSectionEventsWithOn<MediaType> {
  /**
   * This Event will be invoked, when the CTA-Button of a slide is clicked. The displayed slide will be passed as parameter.
   */
  onClick: FullWidthSliderSectionSlide<MediaType>;
}
export interface FullWidthSliderSectionSlots<MediaType> {
  title: RenderedType;
  teaser: RenderedType;
  button?: { content: RenderedType; onClick: () => void };
  media?: MediaType;
  controls?: SliderControlParams;
  arrowButton?: {
    position: "left" | "right";
    slideNumber: number | null;
    media: MediaType | null;
  };
  arrowButtonContent?: {
    position: "left" | "right";
    slideNumber: number | null;
    media: MediaType | null;
  };
  stepper?: SliderControlParams & {
    slides: FullWidthSliderSectionSlide<MediaType>[];
  };
  stepperStep?: SliderControlParams & {
    index: number;
    slide: FullWidthSliderSectionSlide<MediaType>;
  };
}
export interface FullWidthSliderSectionProps<MediaType> {
  /**
   * Specify if the default padding should be removed from the wrapped content
   */
  removeDefaultPadding?: boolean;
  /**
   * The slides that should be displayed. You can add additional properties to the slide-objects as well.
   */
  slides: FullWidthSliderSectionSlide<MediaType>[];
}
export class FullWidthSliderSection<MediaType> extends Component<
  FullWidthSliderSectionProps<MediaType>,
  FullWidthSliderSectionEventsWithOn<MediaType>,
  FullWidthSliderSectionSlots<MediaType>
> {}

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
  items: Array<{ title: string; text: string }>;
}
export class AccordionSection extends Component<AccordionSectionProps> {}

export interface GoogleMapsSectionProps {
  /**
   * Your GoogleMaps apikey
   */
  apikey: string;
  /**
   * The optional starting location where the map will be centered to.
   * If not set, the user will be prompted to allow the page access to their location and the map will be centered on the users location.
   */
  startLocation?: MapsPosition;
  /**
   * The title text to be displayed above the map container
   */
  title?: string;
  /**
   * A number between 1 and 20 representing approximately the following zoom levels
   * 1: World
   * 5: Landmass/Continent
   * 10: City
   * 15: Streets
   * 20: Buildings
   * Default is 15
   */
  zoom?: number;
  /**
   * The language for the map. Default is "en".
   * See also the list of supported languages.
   * https://developers.google.com/maps/faq#languagesupport
   */
  language: string;
  /**
   * An array of locations. This component will place markers at these locations which can be clicked to display additional information.
   */
  locations?: MapsLocation[];
  /**
   * The label to be displayed on the buttons in each info window.
   * If you set this prop, you also have to set the handleButtonClick prop.
   */
  buttonLabel?: string;
  /**
   * A function to handle the press of the button in the description of each location.
   * When the function is called the current location data is passed in.
   * If you set this prop, you also have to set the buttonLabel prop.
   */
  handleButtonClick?: (event: MouseEvent, location: MapsLocation) => void;
  /**
   * Url to a 50x50 image that will be used as a marker or image data loaded with some kind of image loader.
   */
  markerIcon?: string;
  /**
   * You can define your own map style using https://mapstyle.withgoogle.com/
   */
  mapStyles?: any;
  /**
   * You can optionally render your own info window using this handle.
   * The component will call this function and pass in a location with metadata and expect a div Element as node to be returned.
   */
  renderInfoWindow?: (location: MapsLocation) => Node;
}
export interface MapsPosition {
  lat: number;
  lng: number;
}
export interface MapsLocation {
  position: MapsPosition;
  city: string;
  street: string;
  description?: string;
  name: string;
}
export class GoogleMapsSection extends Component<GoogleMapsSectionProps> {}
