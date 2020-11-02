import ProductListItem from "@/components/ProductListItem";
import { render } from "@testing-library/vue";

describe("components/ProductListItem", () => {
  const testItem = {
    title: "Product 1",
    description:
      "The D1R7-TR4P cleaning robot helps you keeping your house free of dirt. It's low height and flexible design means no space will be left out.",
    price: "$99",
    image: {
      src:
        "https://images.pexels.com/photos/4013157/pexels-photo-4013157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "https://www.pexels.com/photo/blue-and-yellow-robot-toy-4013157/",
  };

  const testSetup = {
    slots: { default: "Content" },
    props: testItem,
  };

  it("renders the provided item's title in an h3 tag", async () => {
    const { container } = render(ProductListItem, testSetup);
    expect(container.getElementsByTagName("h3").item(0)?.innerHTML).toEqual(
      testItem.title,
    );
  });

  it("contains the image", async () => {
    const { container } = render(ProductListItem, testSetup);
    expect(container.getElementsByTagName("img").item(0)?.src).toEqual(
      testItem.image.src,
    );
  });

  it("contains price and description (somehow)", async () => {
    const { container } = render(ProductListItem, testSetup);
    expect(container.innerHTML).toContain(testItem.description);
    expect(container.innerHTML).toContain(testItem.price);
  });
});
