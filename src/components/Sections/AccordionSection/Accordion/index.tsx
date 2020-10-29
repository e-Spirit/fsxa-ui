import { Component, Prop, Watch } from "vue-property-decorator";
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
  @Prop({ default: false }) open!: AccordionProps["open"];

  @Watch("open")
  toggleOpen(open: boolean): void {
    // eslint-disable-next-line
    const accordion = this.$el.querySelector(
      ".Accordion--Text-Box",
    )! as HTMLElement;
    if (open) {
      this.openAccordion(accordion);
    } else {
      this.closeAccordion(accordion);
    }
  }

  closeAccordion(accordion: HTMLElement): void {
    const height = accordion.scrollHeight;

    const transition = accordion.style.transition;
    accordion.style.transition = "";

    requestAnimationFrame(() => {
      accordion.style.height = height + "px";
      accordion.style.transition = transition;

      requestAnimationFrame(() => (accordion.style.height = "0px"));
    });
  }

  openAccordion(accordion: HTMLElement): void {
    const height = accordion.scrollHeight;
    accordion.style.height = height + "px";

    const handleTransitionEnd = () => {
      accordion.style.height = "auto";
    };

    accordion.addEventListener(
      "transitionend",
      () => {
        handleTransitionEnd();
      },
      { once: true },
    );
  }

  render() {
    return (
      <div class={`Accordion ${this.open ? "Accordion--Open" : ""}`}>
        <div
          class={`${
            this.dark ? "Accordion--Dark" : "Accordion--Light"
          } Accordion--Header clearfix`}
          onClick={() => {
            this.$emit("toggleCollapse");
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
