import { render, fireEvent } from "@testing-library/vue";
import AccordionSection from "..";

describe("components/sections/accordion-section", () => {
  describe("dark mode", () => {
    it("renders a div with its class list containing Accordion--Dark when dark is set to true", () => {
      const { container } = render(AccordionSection, {
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
      const darkAccordion = container.querySelector(".Accordion");
      const classList = darkAccordion?.firstElementChild?.classList;
      expect(classList).toContain("Accordion--Dark");
    });
    it("renders a div with its class list containing Accordion--Light when the dark property is set to false", () => {
      const lightProps = {
        dark: false,
        items: [
          {
            title: "test",
            text: "This is a test text to test text rendering",
          },
        ],
      };

      const { container } = render(AccordionSection, {
        props: lightProps,
      });
      const lightAccordionClassList = container.querySelector(".Accordion")
        ?.firstElementChild?.classList;

      expect(lightAccordionClassList).toContain("Accordion--Light");
    });
    it("renders a div with its class list containing Accordion--Light when the dark property is not set", () => {
      const darkNotSetProps = {
        items: [
          {
            title: "test",
            text: "This is a test text to test text rendering",
          },
        ],
      };
      const { container } = render(AccordionSection, {
        props: darkNotSetProps,
      });
      const darkNotSetClassList = container.querySelector(".Accordion")
        ?.firstElementChild?.classList;
      expect(darkNotSetClassList).toContain("Accordion--Light");
    });
  });
  describe("title prop", () => {
    let container, accordionSection: HTMLElement;
    beforeAll(() => {
      container = render(AccordionSection, {
        props: {
          title: "This is a title",
          items: [
            {
              title: "I love Luigi",
              text: "Mario sux",
            },
          ],
        },
      }).container;
      accordionSection = container.querySelector(
        ".Accordion-Section",
      )! as HTMLElement;
    });
    it("when the title prop is set the accordion-section has 3 children", () => {
      expect(accordionSection?.childElementCount).toBe(3);
    });
    it("renders a title and a separator when the title prop is set", () => {
      expect(accordionSection?.children[0].innerHTML).toBe("This is a title");
      expect(accordionSection?.children[1].classList).toContain(
        "Accordion-Section--Separator",
      );
    });
  });
  describe("items prop", () => {
    const items = [
      {
        title: "one",
        text: "This is a test text to test text rendering",
      },
      {
        title: "two",
        text: "This is a test text to test text rendering",
      },
    ];
    let container, firstAccordion: HTMLElement;
    let accordions: HTMLCollectionOf<Element>;
    beforeEach(() => {
      container = render(AccordionSection, {
        props: { items },
      }).container;
      accordions = container.getElementsByClassName("Accordion");
      firstAccordion = accordions[0] as HTMLElement;
    });

    it("renders one div with class 'Accordion' for each item in the array", () => {
      expect(accordions?.length).toEqual(items.length);
    });
    it("renders the title of an item in a div with class Accordion--Header", () => {
      const header = firstAccordion.firstElementChild;
      expect(header?.classList).toContain("Accordion--Header");
      expect(header?.firstElementChild).toBeInstanceOf(HTMLHeadingElement);
      expect(header?.firstElementChild?.innerHTML).toBe("one");
    });
    it("renders the text of an item in a div with class Accordion--Text-Box", () => {
      const textBox = firstAccordion.lastElementChild;
      expect(textBox?.classList).toContain("Accordion--Text-Box");
      expect(textBox?.firstElementChild?.innerHTML).toBe(
        "This is a test text to test text rendering",
      );
    });
  });
  describe("opening and closing", () => {
    it("should add the Accordion--open class when clicked", () => {
      const { container } = render(AccordionSection, {
        props: {
          items: [
            {
              title: "One",
              text: "When one accordion opens",
            },
            {
              title: "Two",
              text: "Another one closes",
            },
          ],
        },
      });
      const header = container.querySelector(".Accordion--Header")!;
      fireEvent(header, new MouseEvent("click")).then(() => {
        expect(header.classList).toContain("Accordion--Open");
      });
    });
    it("should close when another accordion opens", () => {
      const { container } = render(AccordionSection, {
        props: {
          items: [
            {
              title: "One",
              text: "When one accordion opens",
            },
            {
              title: "Two",
              text: "Another one closes",
            },
          ],
        },
      });
      const header = container.querySelector(".Accordion--Header")!;
      const theOtherHeader = container.querySelector(".Accordion--Header")!;
      fireEvent(header, new MouseEvent("click"))
        .then(() => {
          expect(header.classList).toContain("Accordion--Open");
        })
        .then(() => {
          fireEvent(theOtherHeader, new MouseEvent("click")).then(() => {
            expect(header.classList).not.toContain("Accordion--Open");
            expect(theOtherHeader.classList).toContain("Accordion--Open");
          });
        });
    });
  });
});
