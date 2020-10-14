import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Accordion from "./Accordion";
import { AccordionSectionProps } from "@/types/sections";

@Component({
  name: "AccordionSection",
})
class AccordionSection extends BaseComponent<AccordionSectionProps> {
  @Prop({ type: Boolean, default: false })
  dark: AccordionSectionProps["dark"];
  @Prop({ required: true }) items!: AccordionSectionProps["items"];
  @Prop() title: AccordionSectionProps["title"];
  render() {
    return (
      <div class="md px-4">
        {this.title && <h3>this.title</h3>}
        {this.items.map(item => (
          <Accordion dark={this.dark} title={item.title} text={item.text} />
        ))}
      </div>
    );
  }
}
export default AccordionSection;
