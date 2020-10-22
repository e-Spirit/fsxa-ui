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
  @Prop({ required: true }) index!: AccordionProps["index"];
  @Prop({ default: false }) open!: AccordionProps["open"];

  render() {
    return (
      <div class={"Accordion" + `${this.open ? " Accordion--Open" : ""}`}>
        <div
          class={`${
            this.dark ? "Accordion--Dark" : "Accordion--Light"
          } Accordion--Header clearfix`}
          onClick={() => {
            this.$emit("toggleCollapse", this.index);
          }}
        >
          <h6 class="float-left w-2/3 whitespace-no-wrap overflow-hidden">
            {this.title}
          </h6>
          <span class="Accordion--Indicator float-right">
            <i class="fa fa-plus"></i>
          </span>
        </div>
        <div class="Accordion--Text-Box">
          <p>{this.text}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
