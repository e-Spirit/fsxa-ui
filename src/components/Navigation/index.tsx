import { TsxComponent } from "@/types";
import "./style.css";
import Component from "vue-class-component";
import { NavigationProps, BaseNavigationItem } from "@/types/navigation";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";

@Component({
  name: "Navigation"
})
class Navigation<Item extends BaseNavigationItem> extends TsxComponent<
  NavigationProps<Item>
> {
  @Prop({
    type: Array as PropType<NavigationProps<Item>["items"]>,
    required: true
  })
  items!: NavigationProps<Item>["items"];
  @Prop({ type: Function, required: true })
  handleNavClick!: NavigationProps<Item>["handleNavClick"];
  @Prop({ type: Function })
  isActiveItem: NavigationProps<Item>["isActiveItem"];
  @Prop({ type: Number, default: 3 }) depth!: number;

  renderItem(item: Item, depth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    return (
      <li class="navigation-item">
        <a
          class={`nav-link ${isActive ? "active" : ""}`}
          href="#"
          onClick={() => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
          {item.children && depth < this.depth && (
            <ul class="navigation">
              {item.children.map(item =>
                this.renderItem(item as Item, depth + 1)
              )}
            </ul>
          )}
        </a>
      </li>
    );
  }

  render() {
    return (
      <ul class="navigation">
        {this.items.map(item => this.renderItem(item, 0))}
      </ul>
    );
  }
}
export default Navigation;
