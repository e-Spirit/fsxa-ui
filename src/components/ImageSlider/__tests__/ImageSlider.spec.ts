import { render, fireEvent } from "@testing-library/vue";
import ImageSlider from "..";

const IMAGES = [
  "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
  "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
];

describe("components/ImageSlider", () => {
  it("renders passed images as image slider", () => {
    const { container, getByTestId } = render(ImageSlider, {
      props: {
        images: IMAGES.map(url => ({ src: url })),
      },
    });
    expect(container).toBeTruthy();
    IMAGES.forEach((image, index) => {
      const imageElement = getByTestId(`image-${index}`);
      expect(imageElement).toBeTruthy();
      const nativeImgElement = imageElement.querySelector("img");
      expect(nativeImgElement?.src).toEqual(image);
    });
    const buttonPrevSlide = getByTestId("button-prev-slide");
    const buttonNextSlide = getByTestId("button-next-slide");
    expect(buttonPrevSlide).toBeTruthy();
    expect(buttonNextSlide).toBeTruthy();
  });
});
