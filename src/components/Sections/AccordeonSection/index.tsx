import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Accordeon from "./Accordeon";
import { AccordeonSectionProps } from "@/types/sections";

@Component({
  name: "AccordeonSection",
})
class AccordeonSection extends BaseComponent<AccordeonSectionProps> {
  @Prop({ type: Boolean, default: false })
  dark: AccordeonSectionProps["dark"];
  @Prop({ required: true }) items!: AccordeonSectionProps["items"];
  @Prop() title: AccordeonSectionProps["title"];
  render() {
    return (
      <div class="md px-4">
        {this.title && <h3>this.title</h3>}
        {this.items.map(item => (
          <Accordeon dark={this.dark} title={item.title} text={item.text} />
        ))}
      </div>
    );
  }
}
export default AccordeonSection;
