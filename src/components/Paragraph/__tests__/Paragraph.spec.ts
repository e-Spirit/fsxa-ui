import { render } from "@testing-library/vue";
import Paragraph from "./../";

describe("components/Paragraph", () => {
  it("renders passed content as paragraph content", () => {
    const content = "This is my test for paragraph";
    const { getByText } = render(Paragraph, {
      slots: { default: content },
    });
    const paragraphText = getByText(content);
    expect(paragraphText).toBeTruthy();
  });
  it("check the paragraph properties", () => {
    const content = "This is my test for paragraph";
    const size = "lg";
    const weight = "bold";
    const { container } = render(Paragraph, {
      slots: { default: content },
      props: {
        size,
        weight,
      },
    });
    const propsTest = container.querySelector(`.text-${size}.font-${weight}`);
    expect(propsTest).toBeTruthy();
  });
});
