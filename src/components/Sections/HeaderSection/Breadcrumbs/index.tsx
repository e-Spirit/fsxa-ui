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
      <nav class="text-xs text-white" aria-label="breadcrumb">
        <ul>
          {this.items.map((item, index) => (
            <li class="inline-block mr-2 last:mr-0">
              <a
                data-testid={`item-${item.referenceId}`}
                href={item.path}
                class="inline-flex group justify-center items-center"
                aria-current={index === this.items.length - 1 ? "page" : ""}
                onClick={event => {
                  event.preventDefault();
                  this.handleItemClick && this.handleItemClick(item);
                }}
              >
                <span class="group-hover:text-gray-600 transform transition-colors duration-200">
                  {item.label}
                </span>
                {index < this.items.length - 1 && (
                  <svg
                    class="ml-2 w-3 h-3"
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
