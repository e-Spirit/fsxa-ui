import "./style.css";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";
import BaseComponent from "@/components/BaseComponent";
import { NavigationProps, NavigationItem } from "@/types/components";

@Component({
  name: "Navigation",
})
class Navigation extends BaseComponent<NavigationProps> {
  @Prop({
    type: Array as PropType<NavigationProps["items"]>,
    required: true,
  })
  items!: NavigationProps["items"];
  @Prop({ type: Function, required: true })
  handleNavClick!: NavigationProps["handleNavClick"];
  @Prop({ type: Function })
  isActiveItem: NavigationProps["isActiveItem"];
  @Prop({ type: Number, default: 3 }) depth!: number;

  isCollapsed = false;

  renderItem(item: NavigationItem, currentDepth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    return (
      <li class="Navigation--Item">
        <a
          class={`Navigation--Link Nav--Mobile ${
            isActive ? "active" : "inactive"
          }`}
          href={item.path}
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
          {item.children.length > 0 ? (
            <span class="smallicon">
              <i class="fas fa-chevron-right ml-2"></i>
            </span>
          ) : null}
        </a>
        {item.children.length > 0 && currentDepth < this.depth && (
          <ul class="Navigation--Navigation">
            {item.children.map(item => this.renderItem(item, currentDepth + 1))}
          </ul>
        )}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul class="Navigation--Navigation hidden lg:block">
          {this.items.map(item => this.renderItem(item, 0))}
        </ul>
        <div class="Navigation--Mobile w-full flex justify-end lg:hidden hover:text-gray-600 text-xl cursor-pointer">
          <i
            class="fas fa-bars dropdown"
            onClick={(event: any) => {
              event?.preventDefault();
              this.isCollapsed = !this.isCollapsed;
            }}
          />
          <div
            class={` Mobile absolute text-left w-full mt-12 ${
              this.isCollapsed ? "collapsed" : ""
            }`}
          >
            <ul class="z-10 flex-initial left-0">
              {this.items.map(item => this.renderItem(item, 0))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
