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

  renderItem(item: NavigationItem, currentDepth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    return (
      <li class="Navigation--Item">
        <a
          class={`Navigation--Link ${isActive ? "active" : ""}`}
          href={item.path}
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
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
      <div class="flex flex-row items-center justify-center">
        <ul class="Navigation--Navigation hidden lg:block">
          {this.items.map(item => this.renderItem(item, 0))}
        </ul>
        <div class="Navigation--Mobile w-full flex items-center justify-end lg:hidden hover:text-gray-600 text-xl cursor-pointer">
          <i class="fas fa-bars" />
        </div>
        {this.$slots.default}
      </div>
    );
  }
}
export default Navigation;
