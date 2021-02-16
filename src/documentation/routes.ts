const components = [
  {
    name: "Accordion",
    path: "/components/accordion",
    meta: {
      description:
        "provides an item with a title which, when clicked, expands to show the element text.",
    },
    children: [],
  },
  {
    name: "Button",
    path: "/components/button",
    meta: {
      description:
        "shows a button allowing users to take actions and make choices with a single tap (or click).",
    },
    children: [],
  },
  {
    name: "Container",
    path: "/components/container",
    meta: {
      description: "provides a basic layout element to structure your site.",
    },
    children: [],
  },
  {
    name: "Counter",
    path: "/components/counter",
    meta: {
      description:
        "displays a layout block showing a number with a corresponding text (usually somthing countable).",
    },
    children: [],
  },
  {
    name: "Dropdown",
    path: "/components/dropdown",
    meta: {
      description: "displays a dropdown list with a number of options.",
    },
    children: [],
  },
  {
    name: "Headline",
    path: "/components/headline",
    meta: {
      description:
        "is a structuring element representing a page's, section's, subsection's, ... title.",
    },
    children: [],
  },
  {
    name: "Image",
    path: "/components/image",
    meta: {
      description: "displays a picture with optional dimming and zoom effect.",
    },
    children: [],
  },
  {
    name: "ImageSlider",
    path: "/components/image-slider",
    meta: {
      description: "provides a slider to showcase your images.",
    },
    children: [],
  },
  {
    name: "Navigation",
    path: "/components/navigation",
    meta: {
      description: "allows users to navigate through your site's structure.",
    },
    children: [],
  },
  {
    name: "NewsDetail",
    path: "/components/news-detail",
    meta: {
      description:
        "a news section consisting of title, teaser, text, an image, and some other elements.",
    },
    children: [],
  },
  {
    name: "Quote",
    path: "/components/quote",
    meta: {
      description:
        "displays some text in a colored box next to a quotation mark.",
    },
    children: [],
  },
  {
    name: "ProductListItem",
    path: "/components/product-list-item",
    meta: {
      description:
        "is used to display product information in the context of a ListSection. It will be as wide as the surrounding element.",
    },
    children: [],
  },
  {
    name: "LineSeparator",
    path: "/components/line-separator",
    meta: {
      description:
        "can be used to separate content sections with a horizontal bar.",
    },
    children: [],
  },
  {
    name: "Slider",
    path: "/components/slider",
    meta: {
      description:
        "provides a fully functional slider to display your contents.",
    },
    children: [],
  },
];

const sections = [
  {
    name: "AccordionSection",
    path: "/sections/accordion-section",
    meta: {
      description:
        "consists of multiple connected text accordions which open and close when clicked on.",
    },
    children: [],
  },
  {
    name: "FullWidthSliderSection",
    path: "/sections/full-width-slider-section",
    meta: {
      description:
        "provides a customizable section with a big slider component, for images or other content you want to showcase.",
    },
    children: [],
  },
  {
    name: "GoogleMapsSection",
    path: "/sections/google-maps-section",
    meta: {
      description:
        "for showing Google Maps, typically showing a set of locations highlighted with markers.",
    },
    children: [],
  },
  {
    name: "HeaderSection",
    path: "/sections/header-section",
    meta: {
      description:
        "displays a title together with a background image and (optionally) breadcrumbs.",
    },
    children: [],
  },
  {
    name: "InterestingFactsSection",
    path: "/sections/interesting-facts-section",
    meta: {
      description:
        "displays a text together with a background image and counter elements.",
    },
    children: [],
  },
  {
    name: "ListSection",
    path: "/sections/list-section",
    meta: {
      description:
        "displays numerous items, with the possibility to also specify and display filters for them.",
    },
    children: [],
  },
  {
    name: "ProductDetailSection",
    path: "/sections/product-detail-section",
    meta: {
      description:
        "displays a detailed product description including a collection of pictures and additional information.",
    },
    children: [],
  },
  {
    name: "TeaserSection",
    path: "/sections/teaser-section",
    meta: {
      description: "displays information next to a picture.",
    },
    children: [],
  },
];

const routes = [
  {
    name: "Introduction",
    path: "/",
    children: [],
  },
  {
    name: "Getting Started",
    path: "/getting-started",
    children: [],
  },
  {
    name: "Components",
    path: "/components",
    children: components.sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    name: "Sections",
    path: "/sections",
    children: sections.sort((a, b) => a.name.localeCompare(b.name)),
  },
];

export default routes;
