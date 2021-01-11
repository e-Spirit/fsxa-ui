import { ImageRef, ImageSliderProps, ImageSliderSlots } from "@/types/fsxa-ui";
import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "../BaseComponent";
import Image from "../Image";
import Slider from "../Slider";

@Component({ name: "ImageSlider" })
class ImageSlider<Type = any> extends BaseComponent<
  ImageSliderProps<Type>,
  {},
  ImageSliderSlots<Type>
> {
  @Prop({ required: true }) images!: ImageSliderProps<Type>["images"];

  renderImage(image: Type) {
    if (this.$scopedSlots.image) {
      return this.$scopedSlots.image({ image });
    }
    const typedImage = (image as any) as ImageRef;
    return <Image props={{ ...typedImage }} />;
  }

  render() {
    return (
      <Slider
        infinite
        animate
        initialSlideIndex={0}
        animateSlideTransition
        scopedSlots={{
          controls: params => {
            return this.$scopedSlots.controls ? (
              this.$scopedSlots.controls(params)
            ) : (
              <div class="absolute bottom-0 right-0 -mr-4 mb-4 flex flex-col">
                <a
                  href="#"
                  class={`${
                    params.prevSlideIndex !== null
                      ? `bg-black text-white`
                      : `bg-gray-300 text-gray-900`
                  } hover:bg-opacity-90 p-3`}
                  onClick={event => {
                    event.preventDefault();
                    params.prevSlideIndex !== null &&
                      params.showSlide(params.prevSlideIndex);
                  }}
                >
                  <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class={`${
                    params.nextSlideIndex !== null
                      ? `bg-black text-white`
                      : `bg-gray-300 text-gray-900`
                  } hover:bg-opacity-90 p-3`}
                  onClick={event => {
                    event.preventDefault();
                    params.nextSlideIndex !== null &&
                      params.showSlide(params.nextSlideIndex);
                  }}
                >
                  <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            );
          },
        }}
        slides={this.images.map((slide: any) => ({
          render: () => this.renderImage(slide),
        }))}
      />
    );
  }
}
export default ImageSlider;
