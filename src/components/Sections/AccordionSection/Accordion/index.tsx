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

  render() {
    const colorClasses = this.dark ? "Accordion--Dark" : "Accordion--Light ";
    return (
      <div class="Accordion">
        <div
          class={colorClasses + " Accordion--Header clearfix"}
          onClick={event => {
            event?.preventDefault();
            this.isCollapsed = !this.isCollapsed;
          }}
        >
          <h6 class="float-left w-2/3 whitespace-no-wrap overflow-hidden">
            {this.title}
          </h6>
          <span class="Accordion--Indicator float-right">
            <i class="fa fa-plus"></i>
          </span>
        </div>
        <div class={`${this.isCollapsed ? "Accordion--Collapsed" : ""}`}>
          <p>{this.text}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
