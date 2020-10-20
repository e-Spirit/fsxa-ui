import { render, fireEvent } from "@testing-library/vue";
import Dropdown from "..";

describe("components/Dropdown", () => {
  it("should handle a callback on click", async () => {
    const spy = jest.fn();
    const { getByTestId } = render(Dropdown, {
      slots: { default: "Content" },
      props: {
        handleChange: spy,
        value: "opt1",
        options: [
          { key: "opt1", label: "Option 1", path: "path1" },
          { key: "opt2", label: "Option 2", path: "path2" },
          { key: "opt3", label: "Option 3", path: "path3" },
        ],
      },
    });

    const option1 = getByTestId("option-opt1");

    expect(option1.innerHTML).toEqual("Option 1");
    await fireEvent(option1!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });

  it("should render as many options as are provided", async () => {
    const { container } = render(Dropdown, {
      slots: { default: "Selection" },
      props: {
        handleChange: null,
        value: "opt2",
        options: [
          { key: "opt1", label: "Option 1", path: "path1" },
          { key: "opt2", label: "Option 2", path: "path2" },
          { key: "opt3", label: "Option 3", path: "path3" },
        ],
      },
    });

    // const option1 = container.querySelector("Dropdown");
    const optionList = container
      .getElementsByClassName("Dropdown")[0]
      .getElementsByTagName("ul")[0];
    console.log(optionList?.innerHTML);
    expect(optionList.getElementsByTagName("li").length).toBe(4);
  });
});
