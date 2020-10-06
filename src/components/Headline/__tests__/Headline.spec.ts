import { render, fireEvent, getByText } from "@testing-library/vue";
import Headline from "./../";

describe("components/Headline", () => {
  it("renders passed content as headline content", () => {
    const content = "This is my test";
    const { getByText } = render(Headline, {
      slots: { default: content },
    });
    expect(getByText(content)).toBeTruthy();
  });

  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
    const { getByText } = render(Headline, {
      slots: { default: "Content" },
      props: {
        handleClick: spy,
      },
    });
    const headline = getByText("Content");
    // Class("headline");
    await fireEvent(headline, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });

  it("should use the correct html element", async () => {
    const possibleElements = ["H1", "H2", "H3", "H4", "H5", "SPAN"];
    for (const element of possibleElements) {
      const { getByText } = render(Headline, {
        slots: { default: "Content " + element },
        props: {
          as: element,
        },
      });
      const headline = getByText("Content " + element);
      expect(headline.tagName).toEqual(element);
    }
  });

  it("is rendered as h1 with margin in uppercase and bold by default", async () => {
    const { getByText } = render(Headline, {
      slots: { default: "Content" },
    });
    const headline = getByText("Content");
    expect(headline.tagName).toEqual("H1");

    expect(headline.classList).toContain("include-margin");
    expect(headline.classList).toContain("uppercase");
    expect(headline.classList).toContain("bold");
  });
});
