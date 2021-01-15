import { ProductProperty } from "@/types/sections";
import { fireEvent, render } from "@testing-library/vue";
import ProductDetailSection from "./../";

const handleClick = () => {
  /* this function literally does nothing */
};
const description =
  "The Smart Door Lock SRT-456 is a mechanical look which can be unlocked with a PIN or your smartphone. In addition you can use the camera with integrated face recognition to allow only certain people to unlock the door.";
const headline = "Smart Door Lock SRT-456";
const price = "$ 239 (RLP)";
const src1 = "image_1_src";
const src2 = "image_2_src";
const buttonText = "search specialized dealer";

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
    title: "Compatibility",
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
  Compatibility: `<ul class="list-disc px-10 py-4"><li>Google Home</li><li>Amazon Alexa</li><li>Bosch Smart Home</li></ul>`,
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
      "ProductDetail--Headline",
      "ProductDetail--Description",
      "ProductDetail--Price",
      "ProductDetail--Button",
    ]);

    expectToExistNTimes(container, [
      // Since the ProductDetailSection displays only one image at a time, the expected instance count decreased from 2 to 1
      { key: "ProductDetail--Image", expectedInstanceCount: 1 },
      { key: "ProductDetail--Property--Headline", expectedInstanceCount: 2 },
      { key: "ProductDetail--Property--List", expectedInstanceCount: 2 },
      { key: "ProductDetail--Accordion", expectedInstanceCount: 3 },
    ]);

    expect(
      container.querySelector(`.ProductDetail--Headline`)?.textContent,
    ).toEqual(headline);
    expect(
      container.querySelector(`.ProductDetail--Description`)?.textContent,
    ).toEqual(description);
    expect(
      container.querySelector(`.ProductDetail--Price`)?.textContent,
    ).toEqual(price);
    expect(
      container.querySelector(`.ProductDetail--Button`)?.textContent,
    ).toEqual(buttonText);

    container
      .querySelectorAll(`.ProductDetail--Property--Headline`)
      .forEach((headline, index) => {
        expect(headline.textContent).toEqual(propertyList[index].title);
      });

    const propertyNodes = container.querySelectorAll(
      `.ProductDetail--Property--List`,
    );
    expect(propertyNodes[0].textContent).toEqual("Door Locks");
    expect(propertyNodes[1].textContent).toEqual(
      "Google HomeAmazon AlexaBosch Smart Home",
    );

    const accordionNodes = container.querySelectorAll(
      `.ProductDetail--Accordion`,
    );
    expect(accordionNodes[0].textContent).toEqual(
      "Deliverymechanical lockcamera with integrated face recognitionwireless numpadoperation manual",
    );
    expect(accordionNodes[1].textContent).toEqual(
      "Installation instructionsFix it at the door. Ready.",
    );
    expect(accordionNodes[2].textContent).toEqual(
      "CompatibilityGoogle HomeAmazon AlexaBosch Smart Home",
    );
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

  it("calls handleButtonClick callback on click", async () => {
    const spy = jest.fn();
    const { getByText } = render(ProductDetailSection, {
      props: {
        handleButtonClick: spy,
        headline,
        buttonText,
        description,
        price,
      },
    });
    const button = getByText(buttonText);
    await fireEvent(button, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
});
