import { Component } from "vue-tsx-support";
import { ImageRef } from "./utils";
import { AccordionProps, NewsTeaserItemProps } from "./components";

export interface NewsTeaserSectionProps {
  headline: string;
  items: Omit<NewsTeaserItemProps, "handleClick" | "latest">[];
  handleItemClick: (item: NewsTeaserItemProps) => void;
}
export class NewsTeaserSection extends Component<NewsTeaserSectionProps> {}

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
   * Url to a 50x50 image that will be used as a marker
   */
  //markerIcon?: string;
  /**
   * You can define your own map style using https://mapstyle.withgoogle.com/
   */
  //mapStyle?: google.maps.MapTypeStyle[] | string;
  /**
   * You can optionally render your own info window using this handle.
   * The component will call this function and pass in a location with metadata and expect a div Element as node to be returned.
   */
  //renderInfoWindow?: (location: MapsLocation) => Node;
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
