import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import { AccordeonSectionProps } from "@/types/sections";

@Component({
  name: "AccordeonSection",
})
class AccordeonSection extends BaseComponent<AccordeonSectionProps> {
  @Prop({ type: Boolean, default: false })
  dark: AccordeonSectionProps["dark"];
  @Prop({ type: Array, default: [{ title: "title", text: "lorem ipsum" }] })
  items: AccordeonSectionProps["items"];
  render() {
    return <h1>This is an accordeon</h1>;
  }
}
export default AccordeonSection;
