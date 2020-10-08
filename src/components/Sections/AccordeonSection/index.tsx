import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import { AccordeonSectionProps } from "@/types/sections";

@Component({
  name: "AccordeonSection",
})
class AccordeonSection extends BaseComponent<AccordeonSectionProps> {
  render() {
    return <h1>This is an accordeon</h1>;
  }
}
export default AccordeonSection;
