import { render, fireEvent } from "@testing-library/vue";
import Footer from "./../";

describe("components/Footer", () => {
  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
    const copyright = "this is my copyright";
    const { container } = render(Footer, {
      props: {
        copyright: copyright,
        links: [
          {
            referenceId: 1,
            referenceType: "page",
            isActive: true,
            label: "footer1",
          },
          {
            referenceId: 2,
            referenceType: "page",
            isActive: false,
            label: "footer2",
          },
        ],
        handleClick: spy,
      },
    });
    const footer = container.querySelector(
      ".FSXAFooter--LinkWrapper [data-testid='footer-1']",
    );
    await fireEvent(footer!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
});
