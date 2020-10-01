import { render, fireEvent, getByText } from "@testing-library/vue";
import Image from "./../";

const testImage = "https://vlado-do.de/about/browser_freedom_now.gif";

describe("components/Image", () => {
  it("should have the border class when the border property is set", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        border: true,
      },
    });
    const image = getByTestId("imageDiv");
    expect(image.getAttribute("class")).toContain("border");
  });

  it("should have no border class when the border property is not set", () => {
    const { getByTestId } = render(Image, {
      props: {
        src: testImage,
        border: true,
      },
    });
    const image = getByTestId("imageDiv");
    expect(image.getAttribute("class")).not.toContain("border");
  });
});
