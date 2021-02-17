const components = [
  {
    label: "Accordion",
    path: "/components/accordion",
    meta: {
      description:
        "provides an item with a title which, when clicked, expands to show the element text.",
    },
    children: [],
  },
  {
    label: "Button",
    path: "/components/button",
    meta: {
      description:
        "shows a button allowing users to take actions and make choices with a single tap (or click).",
    },
    children: [],
  },
  {
    label: "Container",
    path: "/components/container",
    meta: {
      description: "provides a basic layout element to structure your site.",
    },
    children: [],
  },
  {
    label: "Counter",
    path: "/components/counter",
    meta: {
      description:
        "displays a layout block showing a number with a corresponding text (usually somthing countable).",
    },
    children: [],
  },
  {
    label: "Dropdown",
    path: "/components/dropdown",
    meta: {
      description: "displays a dropdown list with a number of options.",
    },
    children: [],
  },
  {
    label: "Headline",
    path: "/components/headline",
    meta: {
      description:
        "is a structuring element representing a page's or section's title.",
    },
    children: [],
  },
  {
    label: "Image",
    path: "/components/image",
    meta: {
      description: "displays a picture with optional dimming and zoom effect.",
    },
    children: [],
  },
  {
    label: "ImageSlider",
    path: "/components/image-slider",
    meta: {
      description: "provides a slider to showcase your images.",
    },
    children: [],
  },
  {
    label: "Navigation",
    path: "/components/navigation",
    meta: {
      description: "allows users to navigate through your site's structure.",
    },
    children: [],
  },
  {
    label: "NewsDetail",
    path: "/components/news-detail",
    meta: {
      description:
        "a news section consisting of title, teaser, text, an image, and some other elements.",
    },
    children: [],
  },
  {
    label: "Quote",
    path: "/components/quote",
    meta: {
      description:
        "displays some text in a colored box next to a quotation mark.",
    },
    children: [],
  },
  {
    label: "ProductListItem",
    path: "/components/product-list-item",
    meta: {
      description:
        "is used to display product information in the context of a ListSection. It will be as wide as the surrounding element.",
    },
    children: [],
  },
  {
    label: "LineSeparator",
    path: "/components/line-separator",
    meta: {
      description:
        "can be used to separate content sections with a horizontal bar.",
    },
    children: [],
  },
  {
    label: "Slider",
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
    label: "AccordionSection",
    path: "/sections/accordion-section",
    meta: {
      description:
        "consists of multiple connected text accordions which open and close when clicked on.",
    },
    children: [],
  },
  {
    label: "FullWidthSliderSection",
    path: "/sections/full-width-slider-section",
    meta: {
      description:
        "provides a customizable section with a big slider component, for images or other content you want to showcase.",
    },
    children: [],
  },
  {
    label: "GoogleMapsSection",
    path: "/sections/google-maps-section",
    meta: {
      description:
        "for showing Google Maps, typically showing a set of locations highlighted with markers.",
    },
    children: [],
  },
  {
    label: "HeaderSection",
    path: "/sections/header-section",
    meta: {
      description:
        "displays a title together with a background image and (optionally) breadcrumbs.",
    },
    children: [],
  },
  {
    label: "InterestingFactsSection",
    path: "/sections/interesting-facts-section",
    meta: {
      description:
        "displays a text together with a background image and counter elements.",
    },
    children: [],
  },
  {
    label: "ListSection",
    path: "/sections/list-section",
    meta: {
      description:
        "displays numerous items, with the possibility to also specify and display filters for them.",
    },
    children: [],
  },
  {
    label: "ProductDetailSection",
    path: "/sections/product-detail-section",
    meta: {
      description:
        "displays a detailed product description including a collection of pictures and additional information.",
    },
    children: [],
  },
  {
    label: "TeaserSection",
    path: "/sections/teaser-section",
    meta: {
      description: "displays information next to a picture.",
    },
    children: [],
  },
];

const routes = [
  {
    label: "Getting Started",
    path: "/getting-started",
    children: [],
  },
  {
    label: "Components",
    path: "/components",
    children: components.sort((a, b) => a.label.localeCompare(b.label)),
  },
  {
    label: "Sections",
    path: "/sections",
    children: sections.sort((a, b) => a.label.localeCompare(b.label)),
  },
];

export default routes;
