import { NavigationItem } from "@/types/fsxa-ui";
import Component from "vue-class-component";
import BaseNavigation from "./BaseNavigation";

@Component({
  name: "MobileNavigation",
})
class MobileNavigation extends BaseNavigation {
  collapsedItems: NavigationItem["key"][] = [];

  render() {
    return (
      <div class="ui-w-full ui-max-h-full ui-border-t ui-border-b ui-border-gray-300 ui-flex ui-items-stretch ui-justify-start ui-font-sans ui-flex-col ui-overflow-y-auto">
        {this.items.map(item => {
          const isActive = this.activeItemKeys?.includes(item.key);
          return (
            <div class="last:ui-border-b-0 ui-relative ui-border-b ui-border-gray-300 ui-bg-white">
              <a
                href="#"
                onClick={event => {
                  event.preventDefault();
                  this.triggerItemClick(item);
                }}
                class={`ui-block ui-px-5 ui-py-3 ui-tracking-xl hover:ui-bg-gray-200 ui-transition-colors ui-duration-200 ui-relative ui-uppercase ui-font-semibold ui-text-xs`}
              >
                <span
                  data-active={isActive}
                  class={`ui-flex-grow ui-leading-3 ${
                    isActive ? "ui-text-gray-900" : "ui-text-gray-600"
                  }`}
                >
                  {item.label}
                </span>
                {item.children.length ? (
                  <span
                    class="ui-absolute ui-top-1/2 ui-right-0 ui--mt-4 ui-mr-3 ui-p-1 hover:ui-bg-white hover:ui-shadow ui-rounded-full"
                    onClick={event => {
                      event.preventDefault();
                      event.stopImmediatePropagation();
                      const currentIndex = this.collapsedItems.indexOf(
                        item.key,
                      );
                      if (currentIndex === -1) {
                        this.collapsedItems.push(item.key);
                      } else {
                        const nextCollapsedItems = [...this.collapsedItems];
                        nextCollapsedItems.splice(currentIndex, 1);
                        this.collapsedItems = nextCollapsedItems;
                      }
                    }}
                  >
                    {/** hamburger icon from heroicons.com */}
                    <svg
                      class={`ui-w-6 ui-h-6 ui-transform ui-duration-200 ui-transition-transform ${
                        this.collapsedItems.includes(item.key)
                          ? "rotate-180"
                          : ""
                      } origin-center`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-testid="hamburger-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                ) : null}
              </a>
              {item.children.length > 0 &&
              this.collapsedItems.includes(item.key) ? (
                <div class="ui-block ui-border-t ui-border-gray-300">
                  {item.children.map(child => (
                    <a
                      href={child.path}
                      onClick={event => {
                        event?.preventDefault();
                        event.stopImmediatePropagation();
                        this.triggerItemClick(child);
                      }}
                      class="last:ui-border-b-0 ui-scroll ui-border-b ui-border-gray-300 ui-block ui-pl-5 ui-py-3 ui-bg-gray-100 hover:ui-bg-gray-200 ui-transition-colors ui-duration-200 ui-text-gray-900 ui-text-xs"
                    >
                      <span class="ui-flex-grow ui-leading-3">
                        {child.label}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                undefined
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
export default MobileNavigation;
