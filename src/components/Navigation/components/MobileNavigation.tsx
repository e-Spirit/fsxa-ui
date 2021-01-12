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
      <div class="w-full max-h-full border-t border-b border-gray-300 flex items-stretch justify-start font-sans flex-col overflow-y-auto">
        {this.items.map(item => (
          <div class="last:border-b-0 relative border-b border-gray-300 bg-white">
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                this.triggerItemClick(item);
              }}
              class="block px-5 py-3 tracking-xl hover:bg-gray-200 transition-colors duration-200 relative uppercase font-semibold text-gray-600 text-xs"
            >
              <span class="flex-grow leading-3">{item.label}</span>
              {item.children.length ? (
                <span
                  class="absolute top-1/2 right-0 -mt-4 mr-3 p-1 hover:bg-white hover:shadow rounded-full"
                  onClick={event => {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    const currentIndex = this.collapsedItems.indexOf(item.key);
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
                    class={`w-6 h-6 transform duration-200 transition-transform ${
                      this.collapsedItems.includes(item.key) ? "rotate-180" : ""
                    } origin-center`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
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
              <div class="block border-t border-gray-300">
                {item.children.map(child => (
                  <a
                    href={child.path}
                    onClick={event => {
                      event?.preventDefault();
                      event.stopImmediatePropagation();
                      this.triggerItemClick(child);
                    }}
                    class="last:border-b-0 scroll border-b border-gray-300 block pl-5 py-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-900 text-xs"
                  >
                    <span class="flex-grow leading-3">{child.label}</span>
                  </a>
                ))}
              </div>
            ) : (
              undefined
            )}
          </div>
        ))}
      </div>
    );
  }
}
export default MobileNavigation;
