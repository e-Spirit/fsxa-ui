import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import { BreadcrumbsProps } from "@/types/sections";

@Component({
  name: "BreadcrumbsProps",
})
class Breadcrumbs extends BaseComponent<BreadcrumbsProps> {
  @Prop({ required: true }) items!: BreadcrumbsProps["items"];
  @Prop() handleItemClick: BreadcrumbsProps["handleItemClick"];

  render() {
    return (
      <nav class="Breadcrumbs" aria-label="breadcrumb">
        <ul>
          {this.items.map((item, index) => (
            <li class="Breadcrumbs--Item">
              <a
                href={item.path}
                class="Breadcrumbs--Link"
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
export default Breadcrumbs;
