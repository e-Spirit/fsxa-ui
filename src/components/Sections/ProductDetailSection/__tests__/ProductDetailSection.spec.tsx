import { render, fireEvent } from "@testing-library/vue";
import ProductDetailSection from "./../";

describe("components/sections/ProductDetailSection", () => {
  it("passes content into its components");
  const { container } = render(ProductDetailSection, {
    props: {
      categories: [
        {
          id: "1",
          label: "Door Locks",
        },
      ],
      compatibilities: [
        {
          id: "1",
          label: "Google Home",
        },
        {
          id: "2",
          label: "Amazon Alexa",
        },
        {
          id: "3",
          label: "Bosch Smart Home",
        },
      ],
      headline: "",
      buttonText: "",
      description: "",
      price: "",
      image: "",
      compatibilitiyHeadline: "",
      categoryHeadline: "",
    },
  });
});
