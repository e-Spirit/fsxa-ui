import { render, fireEvent } from "@testing-library/vue";
import Breadcrumbs from "..";

describe("components/Breadcrumbs", () => {
  it("checks if handleclick has been called", async () => {
    const spy = jest.fn();
    const { container } = render(Breadcrumbs, {
      slots: { default: "Content" },
      props: {
        handleItemClick: spy,
        items: [
          {
            referenceId: "1",
            referenceType: "test",
            path: "/",
            label: "Link 1",
          },
          {
            referenceId: "2",
            referenceType: "test",
            path: "/",
            label: "Link 2",
          },
          {
            referenceId: "3",
            referenceType: "test",
            path: "/",
            label: "Link 3",
          },
        ],
      },
    });

    const breadcrumb = container.querySelector(
      ".Breadcrumbs--Item [data-testid='item-1']",
    );
    console.log(breadcrumb);
    await fireEvent(breadcrumb!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
});
