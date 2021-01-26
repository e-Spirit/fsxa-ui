import { render } from "@testing-library/vue";
import Container from "./../";

describe("components/Container", () => {
  it("renders passed content as container content", () => {
    const content = "This is my Container test";
    const { getByText } = render(Container, {
      slots: { default: content },
    });
    const container = getByText(content);
    expect(container).toBeTruthy();
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

  it("renders passed children in default slot", async () => {
    const content =
      "My container content with <span>two</span> <span>children</span>";
    const { getByTestId } = render(Container, {
      slots: { default: content },
    });
    const container = getByTestId("container");
    expect(container.getElementsByTagName("span")).toHaveLength(2);
  });
});
