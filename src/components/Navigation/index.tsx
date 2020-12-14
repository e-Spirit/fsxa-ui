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
    const submenu =
      item.children.length === 0 ? (
        ""
      ) : (
        <div style="position:absolute;">
          <ul>
            {item.children.map(item => this.renderItem(item, currentDepth + 1))}
          </ul>
        </div>
      );
    return (
      <li
        class={`text-center lg:text-left ${
          currentDepth === 0 ? "lg:inline lg:float-left" : ""
        }`}
      >
        <a
          class={`Navigation--Link p-2 ${isActive ? "active" : ""} ${
            currentDepth === 0 ? "lg:pr-12" : ""
          }`}
          data-testid={`item-${item.id}`}
          href={item.path}
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
          {item.children.length > 0 ? (
            <span class="inline fas fa-chevron-right ml-2 lg:hidden" />
          ) : null}
        </a>
        {submenu}
      </li>
    );
  }

  render() {
    return (
      <div class="Navigation--Navigation text-right">
        <i
          class="fas fa-bars dropdown block lg:hidden"
          onClick={(event: any) => {
            event?.preventDefault();
            this.isCollapsed = !this.isCollapsed;
          }}
        />
        <br />
        <ul
          class={`mainMenu${
            this.isCollapsed ? " hidden" : ""
          } uppercase list-none leading-loose text-black float-right w-full text-2xl absolute lg:block lg:text-lg lg:relative lg:w-auto`}
        >
          {this.items.map(item => this.renderItem(item, 0))}
        </ul>
      </div>
    );
  }
}
export default Navigation;
