import Component from "vue-class-component";
import BaseNavigation from "./BaseNavigation";

@Component({
  name: "Navigation",
})
class Navigation extends BaseNavigation {
  render() {
    return (
      <div class="ui-flex ui-flex-row ui-h-full">
        {this.items.map((item, index) => {
          const isActive = this.activeItemKeys?.includes(item.key);
          return (
            <div class="ui-relative ui-group ui-overflow-hidden hover:ui-overflow-visible">
              <a
                href={item.path}
                onClick={event => {
                  event.preventDefault();
                  this.triggerItemClick(item);
                }}
                data-active={isActive}
                class={`ui-h-full ui-flex ui-items-center ui-justify-center ui-px-5 ui-py-4 ui-uppercase ui-tracking-widest ui-text-xs ${
                  isActive ? "ui-text-gray-500" : ""
                }`}
              >
                {item.label}
              </a>
              {item.children.length > 0 ? (
                <div
                  class={`ui-absolute ui-top-100 ${
                    item.childPlacement === "right" ? "right-0" : "left-0"
                  }`}
                  data-testId={`childrenContainer-${index}`}
                >
                  <ul class="ui-translate-y-8 group-hover:ui-translate-y-0 ui-bg-white ui-border ui-border-gray-300 ui-w-56 ui-text-sm ui-shadow ui-transform ui-transition-transform ui-duration-300 ui-leading-5">
                    {item.children.map(child => (
                      <li class="last:ui-border-b-0 ui-border-b ui-border-gray-300">
                        <a
                          href={child.path}
                          onClick={event => {
                            event.preventDefault();
                            this.triggerItemClick(child);
                          }}
                          class="ui-block ui-px-5 ui-py-2 ui-bg-white hover:ui-bg-gray-200 ui-text-xs"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Navigation;
