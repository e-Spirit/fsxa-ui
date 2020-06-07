import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { FSXABreadcrumbsProps } from "@/types/fsxa-ui";
import { Prop } from "vue-property-decorator";
import "./style.css";

@Component({
  name: "FSXABreadcrumbsProps",
})
class FSXABreadcrumbs extends FSXABaseComponent<FSXABreadcrumbsProps> {
  @Prop({ required: true }) items!: FSXABreadcrumbsProps["items"];
  @Prop() handleItemClick: FSXABreadcrumbsProps["handleItemClick"];

  render() {
    return (
      <ul class="FSXABreadcrumbs">
        {this.items.map(item => (
          <li class="FSXABreadcrumbs--Item">
            <a
              href="#"
              class="FSXABreadcrumbs--Link"
              onClick={event => {
                event.preventDefault();
                this.handleItemClick && this.handleItemClick(item);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
export default FSXABreadcrumbs;
