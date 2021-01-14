import { render, fireEvent } from "@testing-library/vue";
import ImageSlider from "..";

const IMAGES_URLS = [
  "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
  "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
];

describe("components/ImageSlider", () => {
  it("renders passed images as image slider", () => {
    const { container, getByTestId } = render(ImageSlider, {
      props: {
        images: IMAGES_URLS.map(url => ({ src: url })),
      },
    });
    expect(container).toBeTruthy();
    IMAGES_URLS.forEach((image, index) => {
      const imageElement = getByTestId(`image-${index}`);
      expect(imageElement).toBeTruthy();
      const nativeImgElement = imageElement.querySelector("img");
      expect(nativeImgElement?.src).toEqual(image);
    });
    const buttonPrevSlide = getByTestId("button-prev-slide");
    expect(buttonPrevSlide).toBeTruthy();
    const buttonNextSlide = getByTestId("button-next-slide");
    expect(buttonNextSlide).toBeTruthy();
  });

  it("should switch the displayed image", async () => {
    const { getByTestId } = render(ImageSlider, {
      props: {
        images: IMAGES_URLS.map(url => ({ src: url })),
      },
    });
    const image = getByTestId("image-0");
    const imageContainer = image.parentElement;
    const imageContainerParent = imageContainer?.parentElement;
    expect(imageContainerParent).toBeTruthy();
    expect(imageContainerParent?.style.transform).toEqual("translateX(-0%)");
    const buttonNextSlide = getByTestId("button-next-slide");
    await fireEvent(buttonNextSlide, new Event("click"));
    expect(imageContainerParent?.style.transform).toEqual("translateX(-100%)");
    const buttonPrevSlide = getByTestId("button-prev-slide");
    await fireEvent(buttonPrevSlide, new Event("click"));
    expect(imageContainerParent?.style.transform).toEqual("translateX(-0%)");
  });

  it("should replace the default rendering of the image when the scopedSlot is being used", () => {
    const { getByTestId, container } = render(ImageSlider, {
      props: {
        images: IMAGES_URLS.map(url => ({ src: url })),
      },
      scopedSlots: {
        image: `<img class="scoped-slot-image" src="imageSrc" />`,
      },
    });
    expect(container).toBeTruthy();
    const scopedImages = container.querySelectorAll(`.scoped-slot-image`);
    expect(scopedImages.length).toBe(3);
    scopedImages.forEach((scopedImage, index) => {
      expect(scopedImage.nodeName).toBe("IMG");
      expect(() => getByTestId(`image-${index}`)).toThrow();
    });
  });
});
