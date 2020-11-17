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
  @Prop({ default: false }) open!: AccordionProps["open"];

  private isOpen = this.open;

  @Watch("open")
  onOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
  }

  @Watch("isOpen")
  toggleOpen(isOpen: boolean): void {
    // eslint-disable-next-line
    const accordion = this.$el.querySelector(
      ".Accordion--Text-Box",
    )! as HTMLElement;
    if (isOpen) {
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
      if (this.$el.classList.contains("Accordion--Open")) {
        accordion.style.height = "auto";
      }
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
      <div class={`Accordion ${this.isOpen ? "Accordion--Open" : ""}`}>
        <div
          class={`${
            this.dark ? "Accordion--Dark" : "Accordion--Light"
          } Accordion--Header clearfix`}
          onClick={() => {
            typeof this.$listeners?.toggleCollapse === "function"
              ? this.$emit("toggleCollapse")
              : (this.isOpen = !this.isOpen);
          }}
        >
          <h6
            class={`float-left w-2/3 whitespace-no-wrap overflow-hidden uppercase`}
          >
            {this.title}
          </h6>
          <span class="Accordion--Indicator float-right">
            <i class="fa fa-plus"></i>
          </span>
        </div>
        <div class="Accordion--Text-Box">{this.$slots.default}</div>
      </div>
    );
  }
}

export default Accordion;
