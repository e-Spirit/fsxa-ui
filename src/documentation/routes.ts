const routes = [
  {
    label: "Getting Started",
    path: "/getting-started",
    children: [],
  },
  {
    label: "Components",
    path: "/components",
    children: [
      {
        label: "Accordion",
        path: "/components/accordion",
        meta: {
          description:
            "provides an accordion item with a title and when clicked, additionally text is displayed.",
        },
        children: [],
      },
      {
        label: "Button",
        path: "/components/button",
        meta: {
          description:
            "allows users to take actions and make choices, with a single tap.",
        },
        children: [],
      },
      {
        label: "Container",
        path: "/components/container",
        meta: {
          description:
            "provides a basic layout element to structure your site.",
        },
        children: [],
      },
      {
        label: "Counter",
        path: "/components/counter",
        meta: {
          description: "displays a number with a corresponding text.",
        },
        children: [],
      },
      {
        label: "Dropdown",
        path: "/components/dropdown",
        meta: {
          description:
            "displays a dropdown list with a number of different options.",
        },
        children: [],
      },
      {
        label: "Headline",
        path: "/components/headline",
        meta: {
          description: "tells users what the page is about.",
        },
        children: [],
      },
      {
        label: "Image",
        path: "/components/image",
        meta: {
          description:
            "displays a picture with optional opacity and zoom effect.",
        },
        children: [],
      },
      {
        label: "ImageSlider",
        path: "/components/image-slider",
        meta: {
          description:
            "provides a fully functional slider where you can display your images.",
        },
        children: [],
      },
      {
        label: "Navigation",
        path: "/components/navigation",
        meta: {
          description:
            "allows users to navigate through your site. It also works on mobile devices.",
        },
        children: [],
      },
      {
        label: "NewsDetail",
        path: "/components/news-detail",
        meta: {
          description:
            "is a detailed view of a news and offers the user a variety of information.",
        },
        children: [],
      },
      {
        label: "Quote",
        path: "/components/quote",
        meta: {
          description:
            "displays some text within a colored box next to a quotation mark.",
        },
        children: [],
      },
      {
        label: "ProductListItem",
        path: "/components/product-list-item",
        meta: {
          description:
            "is used to display information about a product in the context of a ListSection. It will be as wide as the surrounding element.",
        },
        children: [],
      },
      {
        label: "LineSeparator",
        path: "/components/line-separator",
        meta: {
          description: "can be used to separate content sections.",
        },
        children: [],
      },
      {
        label: "Slider",
        path: "/components/slider",
        meta: {
          description:
            "provides a fully functional slider where you can display your elements.",
        },
        children: [],
      },
    ],
  },
  {
    label: "Sections",
    path: "/sections",
    children: [
      {
        label: "AccordionSection",
        path: "/sections/accordion-section",
        meta: {
          description:
            "consists of multiple accordions which open and close when clicked on.",
        },
        children: [],
      },
      {
        label: "FullWidthSliderSection",
        path: "/sections/full-width-slider-section",
        meta: {
          description:
            "helps you to build a beautiful full width image slider.",
        },
        children: [],
      },
      {
        label: "GoogleMapsSection",
        path: "/sections/google-maps-section",
        meta: {
          description:
            "allows to displays a google maps map optionally containing a set of locations to display as markers.",
        },
        children: [],
      },
      {
        label: "HeaderSection",
        path: "/sections/header-section",
        meta: {
          description:
            "allows to display a title of the page together with a background image and breadcrumbs.",
        },
        children: [],
      },
      {
        label: "InterestingFactsSection",
        path: "/sections/interesting-facts-section",
        meta: {
          description:
            "allows to display a text together with a background image and numerous counters.",
        },
        children: [],
      },
      {
        label: "ListSection",
        path: "/sections/list-section",
        meta: {
          description:
            "allows to display numerous items together with the possibility to specify filters for them.",
        },
        children: [],
      },
      {
        label: "ProductDetailSection",
        path: "/sections/product-detail-section",
        meta: {
          description:
            "allows to display a detailed description of a product including a collection of pictures and additional informations.",
        },
        children: [],
      },
      {
        label: "TeaserSection",
        path: "/sections/teaser-section",
        meta: {
          description: "allows to display informations next to a picture.",
        },
        children: [],
      },
    ],
  },
];

export default routes;
