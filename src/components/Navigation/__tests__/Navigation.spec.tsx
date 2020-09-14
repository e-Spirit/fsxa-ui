import { render, fireEvent } from "@testing-library/vue";
import Navigation from "./../";

describe("components/Navigation", () => {
  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
    const { container, debug } = render(Navigation, {
      slots: { default: "Content" },
      props: {
        handleNavClick: spy,
        items: [
          {
            id: "1",
            path: "/",
            label: "Link 1",
            children: [
              {
                id: "3",
                path: "/",
                label: "Link 1.1",
                children: [
                  {
                    id: "4",
                    path: "/",
                    label: "Link 1.1.1",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
    const navigation = container.querySelector(
      ".Navigation--Mobile [data-testid='item-1']",
    );
    console.log(navigation);
    await fireEvent(navigation!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
});
