import { render, fireEvent } from "@testing-library/vue";
import Button from "./../";

describe("components/Button", () => {
  it("renders passed content as button content", () => {
    const content = "This is my test";
    const { getByText } = render(Button, {
      slots: { default: content },
    });
    getByText(content);
  });

  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
    const { getByRole } = render(Button, {
      slots: { default: "Content" },
      props: {
        handleClick: spy,
      },
    });
    const button = getByRole("button");
    await fireEvent(button, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
});
