import {
  render,
  fireEvent,
  getByText,
  getAllByTestId,
} from "@testing-library/vue";
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
    expect(image.classList.contains("border")).toBeFalsy;
    // expect(getAllByTestId(image, "veil").length).toEqual(0); // does not work -> workaround follows:
    expect(image.innerHTML).toContain("<img"); // make sure we actually have an <img> tag inside our image div
    expect(image.innerHTML).not.toContain("absolute"); // veil divs have class absolute
  });

  it("should be followed by 'veil' div with class 'opacity-75', if initialized with the respective property", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        opacity: 75,
      },
    });
    const veilDiv = getByTestId("veil");
    expect(veilDiv.classList.contains("opacity-75")).toBeTruthy;
    const image = getByTestId("imageDiv");
    expect(image.innerHTML).toContain("absolute"); // veil divs have class absolute (opposite of previous test)
    expect(image.classList.contains("border")).toBeFalsy;
  });

  it("should have the border class when the border property is set", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        border: true,
      },
    });
    const image = getByTestId("imageDiv");
    expect(image.classList.contains("border")).toBeTruthy;
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
    expect(imgTag.classList.contains("zoom")).toBeTruthy;
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

  it("should do 'something' with dimensions specified", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        lazy: true,
      },
    });
    const image = getByTestId("imageDiv");
    // ToDo: what can we expect here?
  });
});
