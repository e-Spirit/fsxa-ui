import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import { AccordionProps } from "@/types/components";
import "./style.css";

@Component({
  name: "Accordion",
})
class Accordion extends BaseComponent<AccordionProps> {
  @Prop({ default: false }) dark: AccordionProps["dark"];
  @Prop({ required: true }) title!: AccordionProps["title"];
  @Prop({ required: true }) text!: AccordionProps["text"];

  isCollapsed = true;
  textBoxClass = "Accordion--Text-Box";
  headerClass = "Accordion--Header";

  mounted() {
    console.log("mounted");
  }
  toggleClass(element: Element, className: string) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  render() {
    const colorClasses = this.dark ? "Accordion--Dark " : "Accordion--Light ";
    return (
      <div class="Accordion">
        <div
          class={colorClasses + this.headerClass + " clearfix"}
          onClick={event => {
            event?.preventDefault();
            this.isCollapsed = !this.isCollapsed;
            const header = event.currentTarget as HTMLElement;
            const textBox = header.nextElementSibling!;
            this.toggleClass(textBox, "Accordion--Collapsed");
          }}
        >
          <h6 class="float-left w-2/3 whitespace-no-wrap overflow-hidden">
            {this.title}
          </h6>
          <span class="Accordion--Indicator float-right">
            <i class="fa fa-plus"></i>
          </span>
        </div>
        <div class={`${this.textBoxClass} Accordion--Collapsed`}>
          <p>{this.text}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
