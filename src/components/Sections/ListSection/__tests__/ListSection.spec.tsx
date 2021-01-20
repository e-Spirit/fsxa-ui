import {
  fireEvent,
  render,
  getAllByTestId,
  RenderOptions,
} from "@testing-library/vue";
import { ListSectionProps, ListSectionSlots } from "@/types/sections.d.ts";
import ListSection from "..";

describe("components/ListSection", () => {
  const filterChange = () => {
    return;
  };

  const testFilters = [
    [
      {
        key: "news",
        value: "News",
      },
      {
        key: "events",
        value: "Events",
      },
      {
        key: "business",
        value: "Business",
      },
    ],
    [
      {
        key: "usa",
        value: "USA",
      },
      {
        key: "europe",
        value: "Europe",
      },
      {
        key: "asia",
        value: "Asia",
      },
    ],
  ];

  const defaultScopedSlots = {
    item: `<div data-testId="rendered-item">{{props.title}}</div>`,
  };
  const scopedSlotsWithFilter = {
    item: `<div data-testId="rendered-item">{{props.title}}</div>`,
    filter: `<button class="Button" :onClick="props.handleClick()" data-testid="rendered-filter"></button>`,
  };
  const scopedSlotsWithHeadline = {
    ...defaultScopedSlots,
    headline: `<h3 data-testId="rendered-headline">{{props}}</h3>`,
  };

  const defaultProps = {
    headline: "Test headline",
    filters: testFilters,
    selectedFilters: ["news"],
    handleFilterChange: filterChange,
    items: [
      {
        title: "Product 1",
        description:
          "The D1R7-TR4P cleaning robot helps you keeping your house free of dirt. It's low height and flexible design means no space will be left out.",
        price: "$99",
        image: {
          src:
            "https://images.pexels.com/photos/4013157/pexels-photo-4013157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        url: "#",
      },
      {
        title: "Product 2",
        description: "p2 description",
        price: "9.99 €",
        image: {
          src:
            "https://images.pexels.com/photos/1068349/pexels-photo-1068349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      },
      {
        title: "Product 3",
        description: "p3 description",
        image: {
          src:
            "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      },
    ],
  };

  const testSetup: RenderOptions<ListSection> = {
    slots: { default: "" },
    scopedSlots: defaultScopedSlots,
    props: defaultProps,
  };

  it("should render as many items as provided", async () => {
    const { getAllByTestId } = render(ListSection, testSetup);
    expect(getAllByTestId("rendered-item").length).toBe(3);
  });

  it("should render the provided headline", async () => {
    const { container } = render(ListSection, testSetup);
    expect(container.getElementsByTagName("h1").item(0)?.innerHTML).toEqual(
      "Test headline",
    );
  });

  it("should render all filter buttons", async () => {
    const { container } = render(ListSection, testSetup);
    expect(container.querySelectorAll(".Button").length).toBe(6);
  });

  it("should optionally render filter buttons using the scopedSlot template", () => {
    const { getAllByTestId } = render(ListSection, {
      scopedSlots: scopedSlotsWithFilter,
      props: defaultProps,
    });
    const numOfFilters = defaultProps.filters.reduce(
      (sum, filters) => sum + filters.length,
      0,
    );
    expect(getAllByTestId("rendered-filter").length).toBe(numOfFilters);
  });

  it("should call handleFilterChange callback on (filter) button click", async () => {
    const executeTest = async (scopedSlots: any) => {
      const spy = jest.fn();
      const props = defaultProps;
      props.handleFilterChange = spy;
      const { container } = render(ListSection, {
        scopedSlots,
        props,
      });
      const aButton = container.querySelector(".Button");
      if (aButton) {
        await fireEvent(aButton, new Event("click"));
        expect(spy).toHaveBeenCalled();
      } else {
        fail("No (filter) button found");
      }
    };
    await executeTest(defaultScopedSlots);
    await executeTest(scopedSlotsWithFilter);
  });

  it("should render passed content as default content", () => {
    const content = "This is my test";
    const { getByText } = render(ListSection, {
      ...testSetup,
      slots: { default: content },
    });
    expect(getByText(content)).toBeTruthy();
  });

  it("should override headline rendering when a scoped slot is passed", () => {
    const { getByText, getByTestId } = render(ListSection, {
      ...testSetup,
      scopedSlots: scopedSlotsWithHeadline,
    });
    console.log(getByText("Test headline"));
    expect(getByText("Test headline").tagName).not.toBe("H1");
    expect(getByTestId("rendered-headline")).toBeTruthy();
  });
});
