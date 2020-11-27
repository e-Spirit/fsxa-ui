import { render, fireEvent } from "@testing-library/vue";
import Footer from "./../";

describe("components/Footer", () => {
  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
    const copyright = "this is my copyright";
    const { getByTestId } = render(Footer, {
      props: {
        copyright,
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
    const footer = getByTestId("footer-1");
    await fireEvent(footer!, new Event("click"));
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0].referenceId).toEqual(1);
  });
  it("checks if all items have been rendered", async () => {
    const spy = jest.fn();
    const copyright = "this is my copyright";
    const links = [
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
    ];
    const { getAllByText } = render(Footer, {
      props: { copyright, links, handleClick: spy },
    });
    const matchedItems: Element[] = getAllByText(/footer/g);
    links.forEach((link, index) => {
      expect(matchedItems[index].textContent).toEqual(link.label);
    });
  });

  it("renders content which is passed in", () => {
    const spy = jest.fn();
    const copyright = "copyright";
    const { getByText } = render(Footer, {
      props: {
        copyright,
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
    const copyRightTest = getByText(`© ${copyright}`);
    expect(copyRightTest).toBeTruthy();
  });
});
