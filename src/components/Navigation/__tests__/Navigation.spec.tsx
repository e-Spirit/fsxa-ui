import { render, fireEvent } from "@testing-library/vue";
import Navigation from "./../";

describe("components/Navigation", () => {
  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
<<<<<<< HEAD
    const { container,} = render(Navigation, {
=======
    const { container, debug } = render(Navigation, {
>>>>>>> d18c64ed72666ca73655b137faf94b390ee07b51
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
<<<<<<< HEAD
      ".Navigation--Navigation [data-testid='item-1']",
    );
    const navigationMobile = container.querySelector(
      ".Navigation--Mobile [data-testid='item-1']",
    );
    await fireEvent(navigation!, new Event("click"));
    await fireEvent(navigationMobile!, new Event("click"));
=======
      ".Navigation--Mobile [data-testid='item-1']",
    );
    await fireEvent(navigation!, new Event("click"));
>>>>>>> d18c64ed72666ca73655b137faf94b390ee07b51
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0].id).toEqual("1");
  });
});
