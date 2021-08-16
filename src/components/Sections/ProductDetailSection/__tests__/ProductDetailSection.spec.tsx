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
  let spy: jest.SpyInstance;
  beforeEach(() => {
    spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });
  it("should render all elements", () => {
    const { container, getByTestId } = render(ProductDetailSection, {
      props: { ...componentProperties },
    });
    expect(container).toBeTruthy();
    expectToExist(container as HTMLElement, [
      "ProductDetail--Property--Headline",
      "ProductDetail--Price",
      "ProductDetail--Button",
      "ProductDetail--Image",
    ]);

    expectToExistNTimes(container as HTMLElement, [
      { key: "ProductDetail--Property--Headline", expectedInstanceCount: 2 },
      { key: "ProductDetail--Property--List", expectedInstanceCount: 2 },
    ]);

    expect(getByTestId(`ProductDetail--Headline`)?.textContent).toEqual(
      headline,
    );
    expect(getByTestId(`ProductDetail--Description`)?.textContent).toEqual(
      description,
    );
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
  });

  it("should render only elements passed to it", () => {
    const { headline, buttonText, description, price } = componentProperties;
    const { container, getByTestId } = render(ProductDetailSection, {
      props: { headline, buttonText, description, price },
    });
    expect(container).toBeTruthy();
    expectToExist(container as HTMLElement, [
      "ProductDetail--Price",
      "ProductDetail--Button",
    ]);
    expect(getByTestId(`ProductDetail--Headline`)?.textContent).toEqual(
      headline,
    );

    expectToBeNull(container as HTMLElement, [
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
