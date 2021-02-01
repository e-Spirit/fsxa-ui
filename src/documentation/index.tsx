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
      {
        label: "Layout",
        path: "/components/layout",
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
      <div class="ui-w-full ui-min-h-full ui-flex">
        <div class="md:ui-w-1/3 lg:ui-w-1/4 md:ui-max-w-xs ui-border-r ui-border-gray-300 ui-hidden md:ui-block ui-p-5">
          <div class="ui-p-5 ui-flex ui-items-center">
            <span class="ui-text-espirit ui-text-2xl ui-inline-block ui-font-bold">
              FSXA-UI
            </span>
            <span class="ui-bg-gray-900 ui-px-2 ui-rounded-lg ui-inline-block ui-ml-4 ui-text-xs ui-text-white ui-leading-6 ui-tracking-widest">
              {version}
            </span>
          </div>
          <ul class="ui-mt-5 ui-font-normal ui-text-sm">
            {routes.map((route: any) => (
              <li class="">
                <router-link
                  to={route.path}
                  class="ui-px-5 ui-py-2 ui-block ui-mb-2"
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
                          <li class="">
                            <router-link
                              to={child.route || child.path}
                              class="ui-ml-5 ui-px-5 ui-py-2 ui-block ui-border-l-2"
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
    );
  }
}
export default Documentation;
