import { render } from "@testing-library/vue";
import Container from "./../";

describe("components/Container", () => {
  it("renders passed content as container content, and has default class 'container'", () => {
    const content = "This is my Container test";
    const { getByText } = render(Container, {
      slots: { default: content },
    });
    const container = getByText(content);
    expect(container).toBeTruthy();
    expect(container.classList.contains("container")).toBe(true);
  });

  it("has class w-full instead of container when property fluid is set", async () => {
    const { getByTestId } = render(Container, {
      slots: { default: "Content" },
      props: {
        fluid: true,
      },
    });
    const container = getByTestId("container");
    expect(container.classList.contains("w-full")).toBe(true);
    expect(container.classList.contains("container")).toBe(false);
  });
});
