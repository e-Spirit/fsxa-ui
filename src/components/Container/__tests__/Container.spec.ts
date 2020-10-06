import { render } from "@testing-library/vue";
import Container from "./../";

describe("components/Container", () => {
  const defaultClasses = [
    "px-6",
    "md:px-10",
    "lg:px-12",
    "py-6",
    "md:py-12",
    "lg:py-24",
  ];

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

  it("should have a specific list of classes when horizontalPadding and verticalPadding are set (default)", () => {
    const { getByTestId } = render(Container, {
      slots: { default: "Some content" },
    });
    const containerClasses = getByTestId("container").classList;
    defaultClasses.forEach(element => {
      expect(containerClasses.contains(element)).toBe(true);
    });
  });

  it("should not have any of the default list of classes when horizontalPadding and verticalPadding are set to false", () => {
    const { getByTestId } = render(Container, {
      slots: { default: "Some content" },
      props: {
        verticalPadding: false,
        horizontalPadding: false,
      },
    });
    const containerClasses = getByTestId("container").classList;
    defaultClasses.forEach(element => {
      expect(containerClasses.contains(element)).toBe(false);
    });
  });
});
