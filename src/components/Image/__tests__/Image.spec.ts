import { render } from "@testing-library/vue";
import Image from "./../";

const testImage = "[image location]";

describe("components/Image", () => {
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

  describe("given a darken prop", () => {
    // ToDo: relying too much on internal structure, remove test?
    it("should be followed by 'veil' div with class 'opacity-75'", () => {
      const { getByTestId } = render(Image, {
        props: {
          src: testImage,
          darken: 75,
        },
      });
      const veilDiv = getByTestId("veil");
      expect(veilDiv.classList.contains("ui-opacity-75")).toBe(true);
    });
    it("should throw an error if the darken prop does not have one of the preset values", () => {
      //it should suffice to use shallowMount here, as the validation happens in the mount hook but for some reason shallow mount
      //didn't accept the options object
      expect(() =>
        render(Image, {
          props: {
            src: testImage,
            darken: 1,
          },
        }),
      ).toThrow();
    });
  });
});
