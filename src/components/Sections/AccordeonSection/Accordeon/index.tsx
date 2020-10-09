import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import { AccordeonProps } from "@/types/sections";
import "./style.css";

@Component
class Accordeon extends BaseComponent<Accordeon> {
  @Prop({ default: true }) dark: AccordeonProps["dark"];
  @Prop() title: AccordeonProps["title"];
  @Prop() text: AccordeonProps["text"];
  isCollapsed = true;
  render() {
    const colorClasses = this.dark
      ? "bg-black text-white"
      : "bg-transparent text-black";
    return (
      <div class="w-full my-4">
        <div
          class={colorClasses + " p-2 w-full clearfix cursor-pointer"}
          onClick={event => {
            event?.preventDefault();
            this.isCollapsed = !this.isCollapsed;
          }}
        >
          <h6 class="float-left w-2/3 whitespace-no-wrap overflow-hidden">
            {this.title}
          </h6>
          <span class="indicator float-right">
            <i class="fa fa-plus"></i>
          </span>
        </div>
        <div class={`${this.isCollapsed ? "Accordeon--collapsed" : ""}`}>
          <p>{this.text}</p>
        </div>
      </div>
    );
  }
}

export default Accordeon;
