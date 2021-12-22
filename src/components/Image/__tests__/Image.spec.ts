import { render } from "@testing-library/vue";
import Image from "./../";

const testPreviewId = "[preview id]";
const testImage = "[image location]";
const testResolutions = {
  ORIGINAL: { url: "[image location ORIGINAL]", width: 678, height: 345 },
  landscape: { url: "[image location landscape]", width: 800, height: 480 },
  portrait: { url: "[image location portrait]", width: 480, height: 800 },
};

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
    it("should allow strings as long as they're an allowed opacity class", () => {
      const { getByTestId } = render(Image, {
        props: {
          src: testImage,
          darken: "75",
        },
      });
      const veilDiv = getByTestId("veil");
      expect(veilDiv.classList.contains("ui-opacity-75")).toBe(true);
    });
    it("should throw an error if the darken prop does not have one of the preset values", () => {
      //it should suffice to use shallowMount here, as the validation happens in the mount hook but for some reason shallow mount
      //didn't accept the options object

      // we mock the console.error method to avoid logs when running the test
      const spy = jest.spyOn(console, "error");
      spy.mockImplementation(() => null);

      expect(() =>
        render(Image, {
          props: {
            src: testImage,
            darken: 1,
          },
        }),
      ).toThrow();

      spy.mockRestore();
    });
  });

  it("should have an img tag with multiple resolutions and a 'data-tpp-context-image-resolution' attribute", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        resolutions: testResolutions,
        previewId: testPreviewId,
      },
    });
    const imageContainer = getByTestId("imageDiv");

    expect(
      imageContainer.getAttribute("data-tpp-context-image-resolution"),
    ).toEqual(Object.keys(testResolutions).join(","));
  });
});
