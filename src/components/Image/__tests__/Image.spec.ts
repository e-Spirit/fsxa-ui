import { render } from "@testing-library/vue";
import Image from "./../";

const testImage = "[image location]";

describe("components/Image", () => {
  it("should have no border class and no 'veil' div when border and opacity properties are not set", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
      },
    });
    const image = getByTestId("imageDiv");
    expect(image.classList.contains("border")).toBe(false);
    expect(() => getByTestId("veil")).toThrow();
  });

  // ToDo: relying too much on internal structure, remove test?
  it("should be followed by 'veil' div with class 'opacity-75', if initialized with the respective property", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        opacity: 75,
      },
    });
    const veilDiv = getByTestId("veil");
    expect(veilDiv.classList.contains("ui-opacity-75")).toBe(true);
  });

  it("should have an img tag with class 'zoom' when the zoom property is set", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        zoom: true,
      },
    });
    const image = getByTestId("imageDiv");
    const imgTag = image.getElementsByTagName("img").item(0);
    if (imgTag == null) {
      fail("img tag not found");
    }
    expect(imgTag.getAttribute("src")).toEqual(testImage);
    expect(imgTag.classList.contains("zoom")).toBe(true);
  });

  it("should not have the src attribute filled when the lazy property is set to true", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        lazy: true,
      },
    });
    const image = getByTestId("imageDiv");
    const imgTag = image.getElementsByTagName("img").item(0);
    if (imgTag == null) {
      fail("img tag not found");
    }
    expect(imgTag.getAttribute("src")).toEqual("");
  });
});
