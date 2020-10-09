import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import { AccordeonSectionProps, Accordeon } from "@/types/sections";

@Component({
  name: "AccordeonSection",
})
class AccordeonSection extends BaseComponent<AccordeonSectionProps> {
  @Prop({ type: Boolean, default: false })
  dark: AccordeonSectionProps["dark"];
  @Prop({ type: Array, default: [{ title: "title", text: "lorem ipsum" }] })
  items: AccordeonSectionProps["items"];
  render() {
    return (
      <div class="md p-4">
        {this.items.map(item => this.renderAccordeon(item))}
      </div>
    );
  }
  renderAccordeon(item: Accordeon) {
    const colorClasses = this.dark
      ? "bg-black text-white"
      : "bg-transparent text-black";
    return (
      <div class="w-full">
        <div class={colorClasses + " p-2 w-full clearfix"}>
          <h6 class="float-left w-2/3 whitespace-no-wrap overflow-hidden">
            {item.title}
          </h6>
          <span class="indicator float-right">
            <i class="fa fa-plus"></i>
          </span>
        </div>
        <div>
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
}
export default AccordeonSection;
