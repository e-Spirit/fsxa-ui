import { render, fireEvent, getByText } from "@testing-library/vue";
import Headline from "./../";

describe("components/Headline", () => {
  it("renders passed content as headline content", () => {
    const content = "Das ist mein Test";
    const { getByText } = render(Headline, {
      slots: { default: content },
    });
    getByText(content);
    expect(content).toBeTruthy();
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
    const headlineClasses = headline.getAttribute("class");
    if (headlineClasses == null) {
      fail("Headline has no class!");
    } else {
      const headlineClassesArray = headlineClasses.split(" ");
      expect(headlineClassesArray).toContain("include-margin");
      expect(headlineClassesArray).toContain("uppercase");
      expect(headlineClassesArray).toContain("bold");
    }
  });
});
