import Component from "vue-class-component";
import BaseNavigation from "./BaseNavigation";
@Component({
  name: "Navigation",
})
class Navigation extends BaseNavigation {
  render() {
    return (
      <div class="flex flex-row h-full">
        {this.items.map(item => (
          <div class="relative group overflow-hidden hover:overflow-visible">
            <a
              href={item.path}
              onClick={event => {
                event.preventDefault();
                this.triggerItemClick(item);
              }}
              class="h-full flex items-center justify-center px-5 py-4 uppercase tracking-widest text-xs"
            >
              {item.label}
            </a>
            {item.children.length > 0 ? (
              <div
                class={`absolute top-100 ${
                  item.childPlacement === "right" ? "right-0" : "left-0"
                }`}
              >
                <ul class="translate-y-8 group-hover:translate-y-0 bg-white border border-gray-300 w-56 text-sm shadow transform transition-transform duration-300 leading-5">
                  {item.children.map(child => (
                    <li class="last:border-b-0 border-b border-gray-300">
                      <a
                        href={child.path}
                        onClick={event => {
                          event.preventDefault();
                          this.triggerItemClick(child);
                        }}
                        class="block px-5 py-2 bg-white hover:bg-gray-200 text-xs"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}
export default Navigation;
