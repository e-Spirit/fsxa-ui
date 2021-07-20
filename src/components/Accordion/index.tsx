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

  isOpen = this.open;

  mounted() {
    if (this.open) {
      this.openAccordion(this.$refs.accordionTextBox! as HTMLElement);
    }
  }

  @Watch("open")
  onOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
  }

  @Watch("isOpen")
  toggleOpen(isOpen: boolean): void {
    const accordion = this.$refs.accordionTextBox! as HTMLElement;
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
          class={`ui-flex ui-flex-row ui-items-center ui-justify-start ui-cursor-pointer ${
            this.dark ? "Accordion--Dark" : "Accordion--Light"
          } Accordion--Header`}
          onClick={(event) => {
            event.preventDefault();
            typeof this.$listeners?.toggleCollapse === "function"
              ? this.$emit("toggleCollapse")
              : (this.isOpen = !this.isOpen);
          }}
          data-testid="darkmode"
        >
          <span
            class={`ui-flex-grow ui-text-xs ui-tracking-wider ui-font-bold ui-whitespace-no-wrap ui-overflow-hidden ui-uppercase`}
          >
            {this.title}
          </span>
          <svg
            class="ui-w-6 ui-h-6 Accordion--Indicator ui-flex-shrink-0 ui-origin-center"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          ref="accordionTextBox"
          class="Accordion--Text-Box ui-text-sm ui-px-3"
        >
          {this.$slots.default}
        </div>
      </div>
    );
  }
}

export default Accordion;
