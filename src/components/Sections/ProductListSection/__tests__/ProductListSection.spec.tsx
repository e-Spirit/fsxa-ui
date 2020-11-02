import { render } from "@testing-library/vue";
import ProductListSection from "..";

describe("components/ProductListSection", () => {
  const testSetup = {
    slots: { default: "Content" },
    props: {
      headline: "Test headline",
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
          url:
            "https://www.pexels.com/photo/blue-and-yellow-robot-toy-4013157/",
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
    const productListSection = container.querySelector(".ProductListSection");
    expect(productListSection?.childNodes.length).toBe(
      testSetup.props.items.length,
    );
  });

  it("renders the provided headline", async () => {
    const { container } = render(ProductListSection, testSetup);
    expect(container.getElementsByTagName("h1").item(0)?.innerHTML).toEqual(
      "Test headline",
    );
  });
});
