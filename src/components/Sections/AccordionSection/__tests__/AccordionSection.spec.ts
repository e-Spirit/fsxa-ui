import { render, fireEvent } from "@testing-library/vue";
import AccordionSection from "..";

describe("components/sections/accordion-section", () => {
  describe("dark mode", () => {
    it.skip("renders a div with background-color black and white text when dark is set to true", () => {
      const { container } = render(AccordionSection, {
        slots: { default: "Content" },
        props: {
          dark: true,
          items: [
            {
              title: "test",
              text: "This is a test text to test text rendering",
            },
          ],
        },
      });
      const firstAccordion = container.querySelector(".Accordion");
      const classList = firstAccordion?.firstElementChild?.classList;
      expect(classList).toContain("bg-black");
      expect(classList).toContain("text-white");
    });
  });
  describe("items prop", () => {
    it.skip("renders one div containing a title for each item in the array");
  });
});
