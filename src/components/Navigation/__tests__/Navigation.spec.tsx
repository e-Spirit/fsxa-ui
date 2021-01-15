import { render, fireEvent, getByTestId } from "@testing-library/vue";
import Navigation from "../components/Navigation";

describe("components/Navigation", () => {
  it("calls handleClick callback on click", async () => {
    const { getByText, emitted } = render(Navigation, {
      slots: { default: "Content" },
      props: {
        activeItemKeys: [],
        items: [
          {
            key: "1",
            path: "/",
            label: "Link 1",
            children: [
              {
                key: "3",
                path: "/",
                label: "Link 1.1",
              },
            ],
          },
        ],
      },
    });
    const navigation = getByText("Link 1");
    await fireEvent(navigation!, new Event("click"));
    expect(emitted().itemClicked[0][0].key).toEqual("1");
  });
  it("renders a child item with the according child placement", () => {
    const { getByTestId } = render(Navigation, {
      slots: { default: "content" },
      props: {
        activeItemKeys: [],
        items: [
          {
            key: "1",
            path: "/1",
            label: "Item 1",
            childPlacement: "right",
            children: [
              {
                key: "1.1",
                path: "/1/1",
                label: "Item 1.1",
              },
              {
                key: "1.2",
                path: "/1/2",
                label: "Item 1.2",
              },
            ],
          },
          {
            key: "2",
            path: "/2",
            label: "Item 2",
            childPlacement: "left",
            children: [
              {
                key: "2.1",
                path: "/2/1",
                label: "Item 2.1",
              },
              {
                key: "2.2",
                path: "/2/2",
                label: "Item 2.2",
              },
            ],
          },
        ],
      },
    });
    const childItemOnTheRight = getByTestId("childrenContainer-0");
    const childItemOnTheLeft = getByTestId("childrenContainer-1");
    expect(childItemOnTheRight.classList).toContain("right-0");
    expect(childItemOnTheLeft.classList).toContain("left-0");
  });
  it("renders an active item with data-active true", () => {
    const { getByText } = render(Navigation, {
      slots: { default: "Content" },
      props: {
        activeItemKeys: ["1"],
        items: [
          {
            key: "1",
            path: "/",
            label: "Link 1",
            children: [
              {
                key: "3",
                path: "/",
                label: "Link 1.1",
              },
            ],
          },
        ],
      },
    });
    const navigation = getByText("Link 1");
    expect(navigation.dataset.active).toEqual("true");
  });
});
