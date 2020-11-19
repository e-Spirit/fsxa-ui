import BaseComponent from "@/components/BaseComponent";
import Button from "@/components/Button";
import Image from "@/components/Image";
import RichText from "@/components/RichText";
import Slider from "@/components/Slider";
import {
  FullWidthImageSliderSectionProps,
  FullWidthImageSliderSectionSlide,
} from "@/types/sections";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";

@Component({
  name: "FullWidthImageSliderSection",
})
class FullWidthImageSliderSection extends BaseComponent<
  FullWidthImageSliderSectionProps
> {
  @Prop({ required: true }) slides!: FullWidthImageSliderSectionProps["slides"];

  renderSlide(slide: FullWidthImageSliderSectionSlide) {
    return (
      <div class="w-full h-full bg-black overflow-hidden relative">
        <Image
          class="transition-opacity duration-250 transform"
          src={slide.image.SMALL.url}
          resolutions={slide.image}
          sizes={"100vw"}
          gradient={true}
        />
        <div class="absolute w-full h-full top-0 left-0 pointer-events-none z-0 bg-gradient-to-b to-gray-900 from-transparent"></div>
        <div class="absolute bottom-0 left-0 Content w-full transform transition-transform translate-y-full px-6 pb-16 md:px-12 md:pb-12 lg:px-16 origin-top duration-250 text-white">
          <RichText
            content={slide.title}
            inline
            class="Title font-extrabold text-3xl lg:text-4xl xl:text-6xl uppercase block transform transition-transform duration-250 w-full mb-2 md:mb-4 lg:mb-6"
          />
          <div class="w-full flex items-start justify-start flex-col lg:flex-row">
            <RichText
              class="text-sm md:text-base xl:text-lg Description duration-250 max-w-xl transform transition-transform translate-y-32 origin-top lg:mr-5"
              content={slide.description}
            />
            <Button
              class="CTA-Button duration-250 transform transition-transform translate-y-32 origin-top flex-shrink-0"
              variant="inverted"
            >
              {slide.buttonText}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  renderArrowButton(
    position: "left" | "right",
    imgUrl: string,
    handleClick: () => void,
  ) {
    const positioning =
      position === "left"
        ? "md:-ml-8 lg:-ml-10 xl:-ml-12 left-0"
        : "md:-mr-8 lg:-mr-10 xl:-mr-12 right-0";
    return (
      <a
        key={position}
        href="#"
        class={`hidden md:block md:w-16 md:h-16 md:-mt-8 lg:w-20 lg:h-20 lg:-mt-10 xl:w-24 xl:h-24 xl:-mt-12 absolute top-1/2 ${positioning} bg-white hover:bg-black hover:text-white duration-300 transform transition-colors group pointer-events-auto`}
        onClick={event => {
          event.preventDefault();
          handleClick();
        }}
      >
        <svg
          class="w-10 h-10 absolute top-1/2 left-1/2 -mt-5 -ml-5 z-10 pointer-events-none"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d={
              position === "left"
                ? "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                : "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            }
            clip-rule="evenodd"
          ></path>
          ) : ()
        </svg>
        <img
          class="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-32 lg:w-40 xl:w-48 h-20 lg:h-24 xl:h-32 absolute left-0 -ml-8 lg:-ml-10 xl:-ml-12 -mt-2 xl:-mt-4 object-cover max-w-none duration-300"
          src={imgUrl}
        />
      </a>
    );
  }

  renderStepper(
    slideCount: number,
    currentSlide: number,
    requestSlideChange: (slide: number) => void,
  ) {
    const slides = [];
    for (let i = 0; i < slideCount; i++) {
      slides.push(
        <li class="inline-block px-1 pointer-events-auto">
          <a
            class={`block md:hidden w-5 h-5 rounded-full border-white border hover:bg-white active:bg-white transition-colors transform duration-300 ${currentSlide ===
              i && "bg-white"}`}
            href="#"
            onClick={event => {
              event.preventDefault();
              requestSlideChange(i);
            }}
          ></a>
        </li>,
      );
    }
    return (
      <div class="w-full absolute left-0 bottom-0 mb-2 z-10 flex justify-center">
        <ul>{slides}</ul>
      </div>
    );
  }

  render() {
    return (
      <div class="w-full h-full md:px-16 md:pb-16 lg:px-20 lg:pb-20 xl:px-24 xl:pb-24">
        <Slider
          animate={false}
          initialSlideIndex={0}
          infinite
          slides={this.slides.map(slide => ({
            animateIn: element => {
              element.classList.remove(
                "FullWidthImageSliderSection--Slide--animate-out",
              );
              element.classList.add(
                "FullWidthImageSliderSection--Slide--animate-in",
              );
              // we will resolve after 750 ms so the slider component will wait until the animation is finished
              return new Promise(resolve => {
                window.setTimeout(resolve, 750);
              });
            },
            animateOut: element => {
              element.classList.remove(
                "FullWidthImageSliderSection--Slide--animate-in",
              );
              element.classList.add(
                "FullWidthImageSliderSection--Slide--animate-out",
              );
              // we will resolve after 750 ms so the slider component will wait until the animation is finished
              return new Promise(resolve => {
                window.setTimeout(resolve, 750);
              });
            },
            render: () => this.renderSlide(slide),
          }))}
          renderControls={params => {
            return (
              <div class="pointer-events-none w-full h-full absolute top-0 left-0">
                {this.renderArrowButton(
                  "left",
                  this.slides[params.prevSlideIndex!].image.SMALL.url,
                  () => params.showSlide(params.prevSlideIndex!),
                )}
                {this.renderArrowButton(
                  "right",
                  this.slides[params.nextSlideIndex!].image.SMALL.url,
                  () => params.showSlide(params.nextSlideIndex!),
                )}
                {this.renderStepper(
                  this.slides.length,
                  params.currentSlideIndex,
                  params.showSlide,
                )}
              </div>
            );
          }}
        />
      </div>
    );
  }
}
export default FullWidthImageSliderSection;
