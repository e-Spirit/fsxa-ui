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
      <nav class="FSXABreadcrumbs" aria-label="breadcrumb">
        <ul>
          {this.items.map((item, index) => (
            <li class="FSXABreadcrumbs--Item">
              <a
                href="#"
                class="FSXABreadcrumbs--Link"
                aria-current={index === this.items.length - 1 ? "page" : ""}
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
      </nav>
    );
  }
}
export default FSXABreadcrumbs;
