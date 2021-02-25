import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import { BreadcrumbsProps } from "@/types/sections";

@Component({
  name: "BreadcrumbsProps",
})
class Breadcrumbs extends BaseComponent<BreadcrumbsProps> {
  @Prop({ required: true }) items!: BreadcrumbsProps["items"];
  @Prop() handleItemClick: BreadcrumbsProps["handleItemClick"];

  render() {
    return (
      <nav class="ui-text-xs ui-text-white" aria-label="breadcrumb">
        <ul>
          {this.items.map((item, index) => (
            <li class="ui-inline-block ui-mr-2 last:ui-mr-0">
              <a
                data-testid={`item-${
                  item.referenceId ? item.referenceId : item.label
                }`}
                href={item.path}
                class="ui-inline-flex ui-group ui-justify-center ui-items-center"
                aria-current={index === this.items.length - 1 ? "page" : ""}
                onClick={event => {
                  event.preventDefault();
                  this.handleItemClick && this.handleItemClick(item);
                }}
              >
                <span class="group-hover:ui-text-gray-600 ui-transform ui-transition-colors ui-duration-200">
                  {item.label}
                </span>
                {index < this.items.length - 1 && (
                  <svg
                    class="ui-ml-2 ui-w-3 ui-h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default Breadcrumbs;
