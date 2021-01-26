import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import { version } from "./../../package.json";
import MDXWrapper from "@/components/internal/Documentation/MDXWrapper";

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
        children: [],
      },
      {
        label: "Button",
        path: "/components/button",
        children: [],
      },
      {
        label: "Container",
        path: "/components/container",
        children: [],
      },
      {
        label: "Counter",
        path: "/components/counter",
        children: [],
      },
      {
        label: "Dropdown",
        path: "/components/dropdown",
        children: [],
      },
      {
        label: "Headline",
        path: "/components/headline",
        children: [],
      },
      {
        label: "Image",
        path: "/components/image",
        children: [],
      },
      {
        label: "ImageSlider",
        path: "/components/image-slider",
        children: [],
      },
      {
        label: "Navigation",
        path: "/components/navigation",
        children: [],
      },
      {
        label: "NewsDetail",
        path: "/components/news-detail",
        children: [],
      },
      {
        label: "Quote",
        path: "/components/quote",
        children: [],
      },
      {
        label: "ProductListItem",
        path: "/components/product-list-item",
      },
      {
        label: "LineSeparator",
        path: "/components/line-separator",
        children: [],
      },
      {
        label: "Slider",
        path: "/components/slider",
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
        children: [],
      },
      {
        label: "FullWidthSliderSection",
        path: "/sections/full-width-slider-section",
        children: [],
      },
      {
        label: "GoogleMapsSection",
        path: "/sections/google-maps-section",
        children: [],
      },
      {
        label: "HeaderSection",
        path: "/sections/header-section",
        children: [],
      },
      {
        label: "InterestingFactsSection",
        path: "/sections/interesting-facts-section",
        children: [],
      },
      {
        label: "ListSection",
        path: "/sections/list-section",
        children: [],
      },
      {
        label: "ProductDetailSection",
        path: "/sections/product-detail-section",
        children: [],
      },
      {
        label: "TeaserSection",
        path: "/sections/teaser-section",
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
        <div
          class="ui-bg-espirit-blue ui-text-gray-100 ui-px-2 ui-py-2"
          onClick={() => this.$router.push("/")}
        >
          <div class="ui-flex ui-items-center ui-ml-64 ui-space-x-4">
            <div class="ui-w-12 ui-h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <div class="ui-font-hairline ui-flex ui-flex-col ui-h-full">
              <div class="ui-text-2xl ui-cursor-pointer">FSXA-UI</div>
              <div class="ui-text-right ui-text-xs ui--mt-2">{version}</div>
            </div>
            <div class="ui-text-3xl ui-font-hairline">⸺ Component Library</div>
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
