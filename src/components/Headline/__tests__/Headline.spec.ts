import { render, fireEvent } from "@testing-library/vue";
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
    const possibleElements = ["h1", "h2", "h3", "h4", "h5", "h6", "span"];
    for (const element of possibleElements) {
      const { getByText } = render(Headline, {
        slots: { default: "Content " + element },
        props: {
          as: element,
        },
      });
      const headline = getByText("Content " + element);
      expect(headline.tagName.toLowerCase()).toEqual(element);
    }
  });

  it("is rendered as h1 by default", async () => {
    const { getByText } = render(Headline, {
      slots: { default: "Content" },
    });
    const headline = getByText("Content");
    expect(headline.tagName).toEqual("H1");
  });
});

describe("components/Headline ErrorHandling", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should throw error when 'as' is not available", async () => {
    expect(() =>
      render(Headline, {
        props: {
          as: "p",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'size' is not available", async () => {
    expect(() =>
      render(Headline, {
        props: {
          size: "2xl",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'weigth' is not available", async () => {
    expect(() =>
      render(Headline, {
        props: {
          weight: "thin",
        },
      }),
    ).toThrowError();
  });
});
