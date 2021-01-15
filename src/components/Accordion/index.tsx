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

  @Watch("open")
  onOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
  }

  @Watch("isOpen")
  toggleOpen(isOpen: boolean): void {
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
        <a
          href="#"
          class={`flex flex-row items-center justify-start ${
            this.dark ? "Accordion--Dark" : "Accordion--Light"
          } Accordion--Header`}
          onClick={event => {
            event.preventDefault();
            typeof this.$listeners?.toggleCollapse === "function"
              ? this.$emit("toggleCollapse")
              : (this.isOpen = !this.isOpen);
          }}
          data-testid="darkmode"
        >
          <span
            class={`flex-grow text-xs tracking-wider font-bold whitespace-no-wrap overflow-hidden uppercase`}
          >
            {this.title}
          </span>
          <svg
            class="w-6 h-6 Accordion--Indicator flex-shrink-0 origin-center"
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
        </a>
        <div class="Accordion--Text-Box text-sm">{this.$slots.default}</div>
      </div>
    );
  }
}

export default Accordion;
