import "./style.css";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";
import { FSXANavigationProps, FSXANavigationItem } from "@/types/components";
import FSXABaseComponent from "@/components/FSXABaseComponent";

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
        {item.children.length > 0 && currentDepth < this.depth && (
          <ul class="FSXANavigation--Navigation">
            {item.children.map(item => this.renderItem(item, currentDepth + 1))}
          </ul>
        )}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul class="FSXANavigation--Navigation hidden lg:block">
          {this.items.map(item => this.renderItem(item, 0))}
        </ul>
        <div class="FSXANavigation--Mobile w-full flex items-center justify-end block lg:hidden hover:text-gray-600 text-xl cursor-pointer">
          <i class="fa fa-bars" />
        </div>
      </div>
    );
  }
}
export default FSXANavigation;
