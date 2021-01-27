import BaseComponent from "@/components/BaseComponent";
import MDXWrapper from "@/components/internal/Documentation/MDXWrapper";
import Component from "vue-class-component";
import { version } from "./../../package.json";

export const routes = [
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

@Component({
  name: "Documentation",
})
class Documentation extends BaseComponent {
  render() {
    return this.$route.meta.singleView ? (
      <router-view />
    ) : (
      <div class="ui-w-full ui-min-h-full ui-flex ui-flex-col">
        <div class="ui-bg-espirit-blue ui-text-gray-100 ui-px-2 ui-py-2">
          <div class="ui-flex ui-items-center md:ui-ml-64 ui-space-x-4">
            <div class="ui-w-12 ui-h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <router-link to="/">
              <div class="ui-font-hairline ui-flex ui-flex-col ui-h-full">
                <div class="ui-text-2xl ui-cursor-pointer">FSXA-UI</div>
                <div class="ui-text-right ui-text-xs ui--mt-2">{version}</div>
              </div>
            </router-link>
            <div class="sm:ui-text-3xl ui-font-hairline">
              ⸺ Component Library
            </div>
          </div>
        </div>
        <div class="ui-w-full ui-min-h-full ui-flex ui-flex-grow">
          <div class="ui-border-r ui-border-gray-300 ui-p-5">
            <ul class="ui-mt-5 ui-font-normal ui-text-sm">
              {routes.map((route: any) => (
                <li>
                  <router-link
                    to={route.path}
                    class="ui-px-5 ui-py-2 ui-block ui-mb-2 hover:ui-text-espirit"
                    activeClass="ui-text-espirit"
                  >
                    {route.label}
                  </router-link>
                  {route.children &&
                    this.$route.fullPath.indexOf(route.path) === 0 && (
                      <ul class="ui-border-gray-200">
                        {route.children
                          .filter((child: any) => child.path !== "")
                          .map((child: any) => (
                            <li>
                              <router-link
                                to={child.route || child.path}
                                class="ui-ml-5 ui-px-5 ui-py-2 ui-block ui-border-l-2 hover:ui-text-espirit"
                                activeClass="ui-border-espirit ui-text-espirit"
                              >
                                {child.label}
                              </router-link>
                            </li>
                          ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
          <div class="ui-flex ui-flex-1 ui-min-h-full ui-overflow-y-auto">
            <MDXWrapper>
              <router-view />
            </MDXWrapper>
          </div>
        </div>
        <footer class="ui-text-center ui-text-sm ui-bg-gray-300 ui-py-2">
          © 2005 - 2021 e-Spirit AG | Alle Rechte vorbehalten. |{" "}
          <a
            class="ui-text-espirit ui-underline"
            href="https://www.e-spirit.com/de/datenschutzerklaerung/"
          >
            Datenschutz
          </a>{" "}
          |{" "}
          <a
            class="ui-text-espirit ui-underline"
            href="https://www.e-spirit.com/de/impressum/"
          >
            Impressum
          </a>{" "}
          |{" "}
          <a
            class="ui-text-espirit ui-underline"
            href="https://www.e-spirit.com/de/kontakt/"
          >
            Kontakt
          </a>
        </footer>
      </div>
    );
  }
}
export default Documentation;
