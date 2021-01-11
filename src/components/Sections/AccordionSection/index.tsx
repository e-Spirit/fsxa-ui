import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Accordion from "@/components/Accordion";
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

  toggleCollapse(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
  render() {
    return (
      <div class="Accordion-Section md">
        {this.title && <h3 class="Accordion-Section--Title">{this.title}</h3>}
        {this.title && <div class="Accordion-Section--Separator"></div>}
        {this.items.map((item, index) => (
          <Accordion
            dark={this.dark}
            title={item.title}
            open={index === this.selectedIndex}
            on-toggleCollapse={this.toggleCollapse.bind(this, index)}
          >
            <p>{item.text}</p>
          </Accordion>
        ))}
      </div>
    );
  }
}
export default AccordionSection;
