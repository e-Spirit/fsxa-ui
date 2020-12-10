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

  isCollapsed = true;

  renderItem(item: NavigationItem, currentDepth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    // const menuClass = (currentDepth === 0 ? "main" : "sub");
    const submenu =
      item.children.length === 0 ? (
        ""
      ) : (
        // (currentDepth === 0 ? '<ul class="submenu">' : '<ul>');
        <ul>
          {item.children.map(item => this.renderItem(item, currentDepth + 1))}
        </ul>
      );
    return (
      <li class="block">
        <a
          data-testid={`item-${item.id}`}
          href={item.path}
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
          {item.children.length > 0 ? (
            <span class="inline">
              <i class="fas fa-chevron-right ml-2"></i>
            </span>
          ) : null}
        </a>

        {submenu}
      </li>
    );
  }

  render() {
    return (
      <div class="Navigation--Navigation">
        <i
          class="fas fa-bars dropdown block lg:hidden"
          onClick={(event: any) => {
            event?.preventDefault();
            this.isCollapsed = !this.isCollapsed;
          }}
        />
        <ul class={`mainMenu${this.isCollapsed ? " hidden" : ""} lg:block`}>
          {this.items.map(item => this.renderItem(item, 0))}
        </ul>
      </div>
    );
  }
}
export default Navigation;
