import { render, fireEvent, getByText } from "@testing-library/vue";
import Dropdown from "..";

describe("components/Dropdown", () => {
  it("should handle a callback on click", async () => {
    const opt1 = { key: "opt1", label: "Option 1", path: "path1" };
    const spy = jest.fn();
    const { getByTestId } = render(Dropdown, {
      slots: { default: "Content" },
      props: {
        handleChange: spy,
        value: "opt1",
        options: [
          opt1,
          { key: "opt2", label: "Option 2", path: "path2" },
          { key: "opt3", label: "Option 3", path: "path3" },
        ],
      },
    });

    const option1 = getByTestId("option-opt1");

    expect(option1.innerHTML).toEqual(opt1.label);
    await fireEvent(option1, new Event("click"));
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0]).toEqual(opt1);
  });

  it("should render all the options provided", async () => {
    const optionItems = [
      { key: "opt1", label: "Option 1", path: "path1" },
      { key: "opt2", label: "Option 2", path: "path2" },
      { key: "opt3", label: "Option 3", path: "path3" },
    ];
    const { container } = render(Dropdown, {
      slots: { default: "Selection" },
      props: {
        handleChange: null,
        value: "opt2",
        options: optionItems,
      },
    });
    optionItems.forEach((element) => {
      expect(getByText(container as HTMLElement, element.label)).toBeTruthy();
    });
  });
});
