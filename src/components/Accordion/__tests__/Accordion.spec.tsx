import { render } from "@testing-library/vue";
import Accordion from "./../";

describe("components/Accordion", () => {
  it("renders passed content as button content", () => {
    const content = "this is my test";
    const { getByText } = render(Accordion, {
      slots: { default: content },
      props: {
        title: "test",
      },
    });
    expect(getByText(content)).toBeTruthy();
  });
  it("checks if darkmode works properly", () => {
    const { container } = render(Accordion, {
      slots: { default: "Content" },
      props: {
        dark: true,
        title: "test",
      },
    });
    const darkmodeCheck = container.querySelector(".Accordion--Dark");

    expect(darkmodeCheck).toBeTruthy();
  });
});
