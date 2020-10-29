import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Accordion from "./Accordion";
import { AccordionSectionProps } from "@/types/sections";
import "./style.css";

@Component({
  name: "AccordionSection",
})
class AccordionSection extends BaseComponent<AccordionSectionProps> {
  @Prop({ default: false }) dark: AccordionSectionProps["dark"];
  @Prop({ required: true }) items!: AccordionSectionProps["items"];
  @Prop() title: AccordionSectionProps["title"];

  selectedIndex: number | null = null;
  state = this.items.map((item, index) => {
    return {
      title: item.title,
      text: item.text,
      open: false,
    };
  });

  toggleCollapse(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
  render() {
    return (
      <div class="Accordion-Section md">
        {this.title && <h3 class="Accordion-Section--Title">{this.title}</h3>}
        {this.title && <div class="Accordion-Section--Separator"></div>}
        {this.state.map((accordion, index) => (
          <Accordion
            dark={this.dark}
            title={accordion.title}
            text={accordion.text}
            open={index === this.selectedIndex}
            on-toggleCollapse={this.toggleCollapse.bind(this, index)}
          />
        ))}
      </div>
    );
  }
}
export default AccordionSection;
