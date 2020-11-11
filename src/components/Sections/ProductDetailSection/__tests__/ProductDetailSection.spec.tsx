import { ProductProperty } from "@/types/sections";
import { render } from "@testing-library/vue";
import ProductDetailSection from "./../";

const handleClick = () => {
  /* this function literally does nothing */
};
const description =
  "The Smart Door Lock SRT-456 is a mechanical look which can be unlocked with a PIN or your smartphone. In addition you can use the camera with integrated face recognition to allow only certain people to unlock the door.";
const headline = "Smart Door Lock SRT-456";
const price = "$ 239 (RLP)";
const src1 =
  "https://enterprisedev.e-spirit.cloud/media/img/Bötzow-Brauerei_Gelände_1900.jpg";
const src2 =
  "https://enterprisedev.e-spirit.cloud/smartlivingglobal/Images/Product-Images/Smart-door-lock-round_product_teaser.jpg";
const buttonText = "search specialized Dealer";

const propertyList: ProductProperty[] = [
  {
    title: "Categories",
    properties: [
      {
        id: "1",
        name: "Door Locks",
      },
    ],
  },
  {
    title: "Compatibilities",
    properties: [
      {
        id: "1",
        name: "Google Home",
      },
      {
        id: "2",
        name: "Amazon Alexa",
      },
      {
        id: "3",
        name: "Bosch Smart Home",
      },
    ],
  },
];

const foldableContentList: Record<string, string> = {
  Delivery: `<ul class="list-disc px-10 py-4"><li>mechanical lock</li><li>camera with integrated face recognition</li><li>wireless numpad</li><li>operation manual</li></ul>`,
  "Installation instructions": "<p>Fix it at the door. Ready.</p>",
  Compatibilities: `<ul class="list-disc px-10 py-4"><li>Google Home</li><li>Amazon Alexa</li><li>Bosch Smart Home</li></ul>`,
};

const componentProperties = {
  description,
  headline,
  price,
  buttonText,
  handleButtonClick: handleClick,
  images: [
    { src: src1, dimensions: { width: 5, height: 2 } },
    { src: src2, dimensions: { width: 5, height: 2 } },
  ],
  propertyList,
  foldableContentList,
};

const expectToExist = (container: HTMLElement, elements: string[]) => {
  elements
    .map(item => container.querySelector(`.${item}`))
    .forEach(node => expect(node).toBeInstanceOf(HTMLElement));
};

const expectToBeNull = (container: HTMLElement, elements: string[]) => {
  elements
    .map(item => container.querySelector(`.${item}`))
    .forEach(node => expect(node).toBeNull());
};

const expectToExistNTimes = (
  container: HTMLElement,
  elements: Array<{ key: string; expectedInstanceCount: number }>,
) => {
  elements
    .map(item => ({
      ...item,
      instances: container.querySelectorAll(`.${item.key}`),
    }))
    .forEach(({ instances, expectedInstanceCount }) =>
      expect(instances.length).toBe(expectedInstanceCount),
    );
};

describe("components/sections/ProductDetailSection", () => {
  it("should render all elements", () => {
    const { container } = render(ProductDetailSection, {
      props: { ...componentProperties },
    });
    expect(container).toBeTruthy();
    expectToExist(container, [
      "ProductDetail--Image",
      "ProductDetail--Headline",
      "ProductDetail--Description",
      "ProductDetail--Price",
      "ProductDetail--Button",
    ]);

    expectToExistNTimes(container, [
      { key: "ProductDetail--Property--Headline", expectedInstanceCount: 2 },
      { key: "ProductDetail--Property--List", expectedInstanceCount: 2 },
      { key: "ProductDetail--Accordion", expectedInstanceCount: 3 },
    ]);
  });

  it("should render only elements passed to it", () => {
    const { headline, buttonText, description, price } = componentProperties;
    const { container } = render(ProductDetailSection, {
      props: { headline, buttonText, description, price },
    });
    expect(container).toBeTruthy();
    expectToExist(container, [
      "ProductDetail--Headline",
      "ProductDetail--Description",
      "ProductDetail--Price",
      "ProductDetail--Button",
    ]);

    expectToBeNull(container, [
      "ProductDetail--Image",
      "ProductDetail--Property--Headline",
      "ProductDetail--Property--List",
      "ProductDetail--Accordion",
    ]);
  });
});
