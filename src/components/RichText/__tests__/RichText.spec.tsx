import { render } from "@testing-library/vue";
import RichText from "./../";

describe("components/RichText", () => {
  it("checks if the content will be passed in", () => {
    const content = "test";
    const { getByText } = render(RichText, {
      props: {
        content,
      },
    });
    const contentTest = getByText("test");
    expect(contentTest).toBeTruthy;
  });
  it("checks if inline works", () => {
    const content = "test";
    const inline = true;
    const { getByTestId } = render(RichText, {
      props: { content, inline },
    });

    const inlineTest = getByTestId("richtext-content");
    expect(inlineTest.classList.contains("inline")).toBe(true);
  });
});
