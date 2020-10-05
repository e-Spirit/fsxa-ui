import { render, fireEvent, getByTestId } from "@testing-library/vue";
import Container from "./../";

describe("components/Container", () => {
  it("renders passed content as container content, and has default classes", () => {
    const content = "This is my Container test";
    const { getByText } = render(Container, {
      slots: { default: content },
    });
    const container = getByText(content);
    expect(container).toBeTruthy;
    expect(container.classList.contains("container")).toBeTruthy;
  });

  it("calls handleClick callback on click", async () => {
    const { getByTestId } = render(Container, {
      slots: { default: "Content" },
      props: {
        fluid: true,
      },
    });
    const container = getByTestId("container");
    expect(container.classList.contains("w-full")).toBeTruthy;
    expect(container.classList.contains("container")).toBeFalsy;
  });
});
