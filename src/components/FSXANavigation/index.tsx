import "./style.css";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";
import { FSXANavigationProps, FSXANavigationItem } from "@/types/components";
import FSXABaseComponent from "../FSXABaseComponent";

@Component({
  name: "FSXANavigation",
})
class FSXANavigation extends FSXABaseComponent<FSXANavigationProps> {
  @Prop({
    type: Array as PropType<FSXANavigationProps["items"]>,
    required: true,
  })
  items!: FSXANavigationProps["items"];
  @Prop({ type: Function, required: true })
  handleNavClick!: FSXANavigationProps["handleNavClick"];
  @Prop({ type: Function })
  isActiveItem: FSXANavigationProps["isActiveItem"];
  @Prop({ type: Number, default: 3 }) depth!: number;

  renderItem(item: FSXANavigationItem, currentDepth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    return (
      <li class="FSXANavigation--Item">
        <a
          class={`FSXANavigation--Link ${isActive ? "active" : ""}`}
          href="#"
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
        </a>
        {item.children && currentDepth < this.depth && (
          <ul class="FSXANavigation--Navigation">
            {item.children.map(item => this.renderItem(item, currentDepth + 1))}
          </ul>
        )}
      </li>
    );
  }

  render() {
    return (
      <ul class="FSXANavigation--Navigation">
        {this.items.map(item => this.renderItem(item, 0))}
      </ul>
    );
  }
}
export default FSXANavigation;
