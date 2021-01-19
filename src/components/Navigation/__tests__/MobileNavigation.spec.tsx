import { render, fireEvent, waitFor } from "@testing-library/vue";
import MobileNavigation from "../components/MobileNavigation";
describe("components/MobileNavigation", () => {
  it("should render the hamburger icon in its default state", () => {
    const { getByTestId } = render(MobileNavigation, {
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
                label: "Link 3",
              },
            ],
          },
        ],
      },
    });
    const hamburgerIcon = getByTestId("hamburger-icon");
    expect(hamburgerIcon.classList).toContain("origin-center");
  });
  it("should rotate the hamburger icon and render its items children when the icon is clicked", async () => {
    const { getByTestId, getByText } = render(MobileNavigation, {
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
                label: "Link 3",
              },
            ],
          },
        ],
      },
    });
    expect(() => getByText("Link 3")).toThrow();

    const hamburgerIcon = getByTestId("hamburger-icon");
    await fireEvent(hamburgerIcon.parentElement!, new Event("click"));
    waitFor(() => {
      expect(hamburgerIcon.classList).toContain("rotate-180");
    });
    waitFor(() => {
      expect(() => getByText("Link 3")).not.toThrow();
    });
  });
  it("should call the event handler when an item is clicked", async () => {
    const { getByText, emitted } = render(MobileNavigation, {
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
    await fireEvent(navigation.parentElement!, new Event("click"));
    expect(emitted().itemClicked[0][0].key).toEqual("1");
  });
  it("should render all items as collapsed", () => {
    const { getByText } = render(MobileNavigation, {
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
                label: "Link 3",
              },
            ],
          },
          {
            key: "2",
            path: "/",
            label: "Link 2",
            children: [
              {
                key: "4",
                path: "/",
                label: "Link 4",
              },
            ],
          },
        ],
      },
    });
    //when a menu item is collapsed, its children are rendered as undefined, getByText throws an error if it can't find an element with the text
    expect(() => getByText("Link 3")).toThrow();
    expect(() => getByText("Link 4")).toThrow();
  });
  it("should render an active item with data-active true", () => {
    const { getByText } = render(MobileNavigation, {
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
    const activeItem = getByText("Link 1");
    expect(activeItem.dataset.active).toEqual("true");
  });
});
