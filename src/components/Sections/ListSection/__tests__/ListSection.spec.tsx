import ProductListItem from "@/components/ProductListItem";
import { ProductListItemProps } from "@/types/fsxa-ui";
import { fireEvent, render } from "@testing-library/vue";
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

  const handleMyClick = () => {
    return;
  };

  const renderItem = (item: ProductListItemProps) => (
    <div class="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md ProductListItem">
      {item.title}
    </div>
  );

  const spy = jest.fn();

  const testSetup = {
    slots: { default: "" },
    props: {
      headline: "Test headline",
      filters: testFilters,
      selectedFilters: ["news"],
      handleItemClick: handleMyClick,
      handleFilterChange: filterChange,
      renderItem: spy,
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
    },
  };

  it("renders as many items as provided", async () => {
    render(ListSection, testSetup);
    expect(spy).toBeCalledTimes(3);
  });

  it("renders the provided headline", async () => {
    const { container } = render(ListSection, testSetup);
    expect(container.getElementsByTagName("h1").item(0)?.innerHTML).toEqual(
      "Test headline",
    );
  });

  it("renders all filter buttons", async () => {
    const { container } = render(ListSection, testSetup);
    expect(container.querySelectorAll(".Button").length).toBe(6);
  });

  it("calls handleFilterChange callback on (filter) button click", async () => {
    const spy = jest.fn();
    const spySetup = testSetup;
    testSetup.props.handleFilterChange = spy;
    const { container } = render(ListSection, spySetup);
    const aButton = container.querySelector(".Button");
    if (aButton) {
      await fireEvent(aButton, new Event("click"));
      expect(spy).toHaveBeenCalled();
    } else {
      fail("No (filter) button found");
    }
  });

  it("renders passed content as default content", () => {
    const content = "This is my test";
    const contentSetup = testSetup;
    contentSetup.slots.default = content;
    const { getByText } = render(ListSection, testSetup);
    expect(getByText(content)).toBeTruthy();
  });
});
