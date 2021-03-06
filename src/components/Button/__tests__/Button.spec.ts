import { render, fireEvent } from "@testing-library/vue";
import Button from "./../";

describe("components/Button", () => {
  it("renders passed content as button content", () => {
    const content = "This is my test";
    const { getByText } = render(Button, {
      slots: { default: content },
    });
    expect(getByText(content)).toBeTruthy();
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

  it("throws error when variant is not available", async () => {
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);

    expect(() =>
      render(Button, {
        props: {
          variant: "TEST",
        },
      }),
    ).toThrowError();

    spy.mockRestore();
  });
});
