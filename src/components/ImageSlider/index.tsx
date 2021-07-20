import { ImageRef, ImageSliderProps, ImageSliderSlots } from "@/types/fsxa-ui";
import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "../BaseComponent";
import Image from "../Image";
import Slider from "../Slider";

@Component({ name: "ImageSlider" })
class ImageSlider<Type = any> extends BaseComponent<
  ImageSliderProps<Type>,
  unknown,
  ImageSliderSlots<Type>
> {
  @Prop({ default: true }) animate: ImageSliderProps<Type>["animate"];
  @Prop({ required: true }) images!: ImageSliderProps<Type>["images"];

  renderImage(image: Type, index: number) {
    if (this.$scopedSlots.image) {
      return this.$scopedSlots.image({ image });
    }
    const typedImage = image as any as ImageRef;
    return <Image data-testid={`image-${index}`} {...typedImage} />;
  }

  render() {
    return (
      <Slider
        infinite
        animate={this.animate}
        initialSlideIndex={0}
        animateSlideTransition
        slideCount={this.images.length}
        scopedSlots={{
          slide: ({ index }) => this.renderImage(this.images[index], index),
          controls: (params) => {
            return this.$scopedSlots.controls ? (
              this.$scopedSlots.controls(params)
            ) : this.images.length > 1 ? (
              <div class="ui-absolute ui-bottom-0 ui-right-0 ui-mr-4 ui-mb-4 lg:ui--mr-4 lg:ui-mb-4 ui-flex ui-flex-col">
                <a
                  href="#"
                  data-testid={`button-prev-slide`}
                  class={`${
                    params.prevSlideIndex !== null
                      ? `ui-bg-black ui-text-white`
                      : `ui-bg-gray-300 ui-text-gray-900`
                  } hover:ui-bg-opacity-90 ui-p-3`}
                  onClick={(event) => {
                    event.preventDefault();
                    params.prevSlideIndex !== null &&
                      params.showSlide(params.prevSlideIndex);
                  }}
                >
                  <svg
                    class="ui-w-3 ui-h-3"
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
                  data-testid={`button-next-slide`}
                  class={`${
                    params.nextSlideIndex !== null
                      ? `ui-bg-black ui-text-white`
                      : `ui-bg-gray-300 ui-text-gray-900`
                  } hover:ui-bg-opacity-90 ui-p-3`}
                  onClick={(event) => {
                    event.preventDefault();
                    params.nextSlideIndex !== null &&
                      params.showSlide(params.nextSlideIndex);
                  }}
                >
                  <svg
                    class="ui-w-3 ui-h-3"
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
            ) : null;
          },
        }}
      />
    );
  }
}
export default ImageSlider;
