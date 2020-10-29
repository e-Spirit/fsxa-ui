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
      const darkAccordionClassList = container.querySelector(
        ".Accordion--Header",
      )?.classList;
      expect(darkAccordionClassList).toContain("Accordion--Dark");
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
      const lightAccordionClassList = container.querySelector(
        ".Accordion--Header",
      )?.classList;
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
      const darkNotSetClassList = container.querySelector(".Accordion--Header")
        ?.classList;
      expect(darkNotSetClassList).toContain("Accordion--Light");
    });
  });
  describe("title prop", () => {
    it("should render a title and a separator when the title prop is set", () => {
      const { container, getByText } = render(AccordionSection, {
        props: {
          title: "This is a title",
          items: [
            {
              title: "I love Luigi",
              text: "Mario sux",
            },
          ],
        },
      });
      expect(getByText("This is a title")).toBeTruthy();
      expect(
        container.querySelector(".Accordion-Section--Separator"),
      ).toBeTruthy();
    });
    it("should render no title and no separator when the title prop is not set", () => {
      const { container } = render(AccordionSection, {
        props: {
          items: [
            {
              title: "The hyrule handbook of Villains",
              text: "Chapter 1 - Ganondorf",
            },
          ],
        },
      });
      expect(container.querySelector(".Accordion-Section--Title")).toBeFalsy();
      expect(
        container.querySelector(".Accordion-Section--Separator"),
      ).toBeFalsy();
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
    let container;
    let accordions: HTMLCollectionOf<Element>;
    beforeEach(() => {
      container = render(AccordionSection, {
        props: { items },
      }).container;
      accordions = container.getElementsByClassName("Accordion");
    });

    it("should render one div with class 'Accordion' for each item in the array", () => {
      expect(accordions?.length).toEqual(items.length);
    });
    it("should render all of the items passed as prop", () => {
      items.forEach((item, index) => {
        const header = accordions[index].querySelector(".Accordion--Header");
        const textBox = accordions[index].querySelector("Accordion--Text-Box");
        expect(header?.innerHTML.includes(item.title)).toBe(true);
        expect(textBox?.innerHTML.includes(item.text)).toBe(true);
      });
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
