import { TsxComponent } from "@/types";
import "./style.css";
import Component from "vue-class-component";
import { NavigationProps, NavigationItem } from "@/types/navigation";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";

@Component({
  name: "Navigation"
})
class Navigation extends TsxComponent<NavigationProps> {
  @Prop({
    type: Array as PropType<NavigationProps["items"]>,
    required: true
  })
  items!: NavigationProps["items"];
  @Prop({ type: String }) activePath!: NavigationProps["activePath"];
  @Prop({ type: Function, required: true })
  handleNavClick!: NavigationProps["handleNavClick"];

  renderItem(item: NavigationItem, depth: number, maxDepth = 3) {
    return (
      <li class="navigation-item">
        <a
          class={`nav-link ${item.path === this.activePath && "active"}`}
          href={item.path}
          onClick={() => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
          {item.children && depth < maxDepth && (
            <ul class="navigation">
              {item.children.map(item =>
                this.renderItem(item, depth + 1, maxDepth)
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
