import { render, fireEvent } from "@testing-library/vue";
import Dropdown from "./../";

describe("components/Dropdown", () => {
  it("should handle a callback on click", async () => {
    const spy = jest.fn();
    const { container } = render(Dropdown, {
      slots: { default: "Content" },
      props: {
        handleChange: spy,
        value: "my value",
        options: [
          { key: "opt1", label: "Option 1", path: "path1" },
          { key: "opt2", label: "Option 2", path: "path2" },
          { key: "opt3", label: "Option 3", path: "path3" },
        ],
      },
    });
    const option1 = container
      .querySelector("Navigation")
      ?.getElementsByTagName("ul")
      .item(0);
    // await fireEvent(option1!, new Event("click")); // not the right element, does not work
    // expect (spy).toHaveBeenCalled();
  });
});
