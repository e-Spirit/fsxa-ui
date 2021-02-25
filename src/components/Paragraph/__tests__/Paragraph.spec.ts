import { render } from "@testing-library/vue";
import Paragraph from "./../";

describe("components/Paragraph", () => {
  it("renders passed content as paragraph content", () => {
    const content = "This is my test for paragraph";
    const { getByText } = render(Paragraph, {
      slots: { default: content },
    });
    const paragraphText = getByText(content);
    expect(paragraphText).toBeTruthy();
  });
  it("check the paragraph properties", () => {
    const content = "This is my test for paragraph";
    const size = "lg";
    const weight = "bold";
    const { container } = render(Paragraph, {
      slots: { default: content },
      props: {
        size,
        weight,
      },
    });
    const propsTest = container.querySelector(
      `.ui-text-${size}.ui-font-${weight}`,
    );
    expect(propsTest).toBeTruthy();
  });
});

describe("components/Paragraph ErrorHandling", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should throw error when 'size' is not available", async () => {
    expect(() =>
      render(Paragraph, {
        props: {
          size: "2xl",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'weigth' is not available", async () => {
    expect(() =>
      render(Paragraph, {
        props: {
          weight: "thin",
        },
      }),
    ).toThrowError();
  });
});
