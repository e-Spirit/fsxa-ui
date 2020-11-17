import { fireEvent, render } from "@testing-library/vue";
import ProductListSection from "..";

describe("components/ProductListSection", () => {
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

  const testSetup = {
    slots: { default: "" },
    props: {
      headline: "Test headline",
      filters: testFilters,
      selectedFilters: ["news"],
      handleItemClick: handleMyClick,
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
    },
  };

  it("renders as many items as provided", async () => {
    const { container } = render(ProductListSection, testSetup);
    const productListItems = container.querySelectorAll(".ProductListItem");
    expect(productListItems.length).toBe(testSetup.props.items.length);
  });

  it("renders the provided headline", async () => {
    const { container } = render(ProductListSection, testSetup);
    expect(container.getElementsByTagName("h1").item(0)?.innerHTML).toEqual(
      "Test headline",
    );
  });

  it("renders all filter buttons", async () => {
    const { container } = render(ProductListSection, testSetup);
    expect(container.querySelectorAll(".Button").length).toBe(6);
  });

  it("calls handleFilterChange callback on (filter) button click", async () => {
    const spy = jest.fn();
    const spySetup = testSetup;
    testSetup.props.handleFilterChange = spy;
    const { container } = render(ProductListSection, spySetup);
    const aButton = container.querySelector(".Button");
    if (aButton) {
      await fireEvent(aButton, new Event("click"));
      expect(spy).toHaveBeenCalled();
    } else {
      fail("No (filter) button found");
    }
  });

  it("calls handleItemClick callback on item click", async () => {
    const spy = jest.fn();
    const spySetup = testSetup;
    testSetup.props.handleItemClick = spy;
    const { container } = render(ProductListSection, spySetup);
    const aProduct = container.querySelector(".ProductListItem");
    const productLink = aProduct?.getElementsByTagName("a").item(0);
    if (productLink) {
      await fireEvent(productLink, new Event("click"));
      expect(spy).toHaveBeenCalled();
    } else {
      fail("Could not find ProductListItem with a link tag");
    }
  });

  it("renders passed content as default content", () => {
    const content = "This is my test";
    const contentSetup = testSetup;
    contentSetup.slots.default = content;
    const { getByText } = render(ProductListSection, testSetup);
    expect(getByText(content)).toBeTruthy();
  });
});
