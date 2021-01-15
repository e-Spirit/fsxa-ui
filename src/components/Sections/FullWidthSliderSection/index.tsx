import BaseComponent from "@/components/BaseComponent";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Slider from "@/components/Slider";
import { isImageRef } from "@/components/utils/image";
import { ImageRef, SliderControlParams } from "@/types/fsxa-ui";
import {
  FullWidthSliderSectionEventsWithOn,
  FullWidthSliderSectionProps,
  FullWidthSliderSectionSlide,
  FullWidthSliderSectionSlots,
} from "@/types/sections";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";

@Component({
  name: "FullWidthSliderSection",
})
class FullWidthSliderSection<MediaType = ImageRef> extends BaseComponent<
  FullWidthSliderSectionProps<MediaType>,
  FullWidthSliderSectionEventsWithOn<MediaType>,
  FullWidthSliderSectionSlots<MediaType>
> {
  @Prop({ required: true }) slides!: FullWidthSliderSectionProps<
    MediaType
  >["slides"];

  @Prop({ default: false }) removeDefaultPadding: FullWidthSliderSectionProps<
    MediaType
  >["removeDefaultPadding"];

  handleClick(slide: FullWidthSliderSectionSlide<MediaType>) {
    this.$emit("click", slide);
  }

  renderSlide(slide: FullWidthSliderSectionSlide<MediaType>) {
    return (
      <div class="w-full h-full bg-black overflow-hidden relative">
        {this.$scopedSlots.media ? (
          this.$scopedSlots.media(slide.media)
        ) : (
          <Image
            class="transition-opacity duration-250 transform"
            src={((slide.media as unknown) as ImageRef).src}
            resolutions={((slide.media as unknown) as ImageRef).resolutions}
            sizes={"100vw"}
          />
        )}
        <div class="absolute w-full h-full top-0 left-0 pointer-events-none bg-gradient-to-b to-gray-900 from-transparent z-10"></div>
        <div class="absolute bottom-0 left-0 FullWidthSliderSection--Content w-full transform transition-transform translate-y-full px-6 pb-16 md:px-12 md:pb-12 lg:px-16 origin-top duration-250 text-white z-20">
          <div class="FullWidthSliderSection--Title block transform transition-transform duration-250 w-full mb-2 md:mb-4 lg:mb-6">
            {this.$scopedSlots.title ? (
              this.$scopedSlots.title(slide.title)
            ) : (
              <div class="font-extrabold text-3xl lg:text-4xl xl:text-6xl uppercase">
                {slide.title}
              </div>
            )}
          </div>
          <div class="w-full flex items-start justify-start flex-col lg:flex-row">
            <div class="FullWidthSliderSection--Teaser duration-250 transform transition-transform translate-y-32 origin-top lg:mr-5 max-w-xl">
              {this.$scopedSlots.teaser ? (
                this.$scopedSlots.teaser(slide.teaser)
              ) : (
                <div class="text-sm md:text-base xl:text-lg">
                  {slide.teaser}
                </div>
              )}
            </div>
            <div class="FullWidthSliderSection--CTA-Button duration-250 transform transition-transform translate-y-32 origin-top flex-shrink-0 mt-3 md:mt-0">
              {this.$scopedSlots.button ? (
                this.$scopedSlots.button({
                  content: slide.buttonContent,
                  onClick: () => this.handleClick(slide),
                })
              ) : (
                <Button
                  variant="inverted"
                  handleClick={() => this.handleClick(slide)}
                >
                  {slide.buttonContent}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderArrowButton(
    position: "left" | "right",
    slideNumber: number | null,
    media: MediaType | null,
    handleClick: () => void,
  ) {
    if (this.$scopedSlots.arrowButton) {
      return this.$scopedSlots.arrowButton({
        media,
        slideNumber,
        position,
      });
    }
    const positioning =
      position === "left"
        ? this.removeDefaultPadding
          ? "md:ml-8 lg:ml-10 xl:ml-12 left-0"
          : "md:-ml-8 lg:-ml-10 xl:-ml-12 left-0"
        : this.removeDefaultPadding
        ? "md:mr-8 lg:mr-10 xl:mr-12 right-0"
        : "md:-mr-8 lg:-mr-10 xl:-mr-12 right-0";
    let arrowButtonContent = null;
    if (this.$scopedSlots.arrowButtonContent) {
      arrowButtonContent = this.$scopedSlots.arrowButtonContent({
        media,
        slideNumber,
        position,
      });
    } else {
      if (!isImageRef(media)) {
        throw new Error(
          "You have to provide a media object that matches the ImageRef interface. If you want to add custom objects you have to provide your own arrowButton or arrowButtonContent slot",
        );
      }
      arrowButtonContent = (
        <div>
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
          <div class="opacity-0 group-hover:opacity-100 transition-opacity w-32 lg:w-40 xl:w-48 h-20 lg:h-24 xl:h-32 absolute left-0 -ml-8 lg:-ml-10 xl:-ml-12 -mt-2 xl:-mt-4 max-w-none duration-300 pointer-events-none">
            <Image
              src={media.src}
              resolutions={media.resolutions}
              previewId={media.previewId}
              sizes={media.sizes}
            />
          </div>
        </div>
      );
    }
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
        {arrowButtonContent}
      </a>
    );
  }

  renderStepper(params: SliderControlParams) {
    const slides = [];
    for (let i = 0; i < this.slides.length; i++) {
      slides.push(
        this.$scopedSlots.stepperStep ? (
          this.$scopedSlots.stepperStep({
            ...params,
            index: i,
            slide: this.slides[i],
          })
        ) : (
          <li class="inline-block px-1 pointer-events-auto">
            <a
              class={`block md:hidden w-5 h-5 rounded-full border-white border hover:bg-white active:bg-white transition-colors transform duration-300 ${params.currentSlideIndex ===
                i && "bg-white"}`}
              href="#"
              onClick={event => {
                event.preventDefault();
                params.showSlide(i);
              }}
            ></a>
          </li>
        ),
      );
    }
    return this.$scopedSlots.stepper ? (
      this.$scopedSlots.stepper({
        ...params,
        slides: this.slides,
      })
    ) : (
      <div class="w-full absolute left-0 bottom-0 mb-2 z-10 flex justify-center">
        <ul>{slides}</ul>
      </div>
    );
  }

  render() {
    return (
      <div
        class={`w-full h-full ${
          this.removeDefaultPadding
            ? ""
            : "md:px-16 md:pb-16 lg:px-20 lg:pb-20 xl:px-24 xl:pb-24"
        }`}
      >
        <Slider
          animate={false}
          initialSlideIndex={0}
          infinite
          slideCount={this.slides.length}
          onSlideAnimation={async (type, { element }) => {
            if (type === "animateIn") {
              element.classList.remove(
                "FullWidthSliderSection--Slide--animate-out",
              );
              element.classList.add(
                "FullWidthSliderSection--Slide--animate-in",
              );
            } else {
              element.classList.remove(
                "FullWidthSliderSection--Slide--animate-in",
              );
              element.classList.add(
                "FullWidthSliderSection--Slide--animate-out",
              );
            }
            // we will resolve after 750 ms so the slider component will wait until the animation is finished
            return new Promise(resolve => {
              window.setTimeout(resolve, 750);
            });
          }}
          scopedSlots={{
            controls: params => {
              return this.$scopedSlots.controls ? (
                this.$scopedSlots.controls(params)
              ) : (
                <div class="pointer-events-none w-full h-full absolute top-0 left-0">
                  {this.renderArrowButton(
                    "left",
                    params.prevSlideIndex,
                    this.slides[params.prevSlideIndex!].media,
                    () => params.showSlide(params.prevSlideIndex!),
                  )}
                  {this.renderArrowButton(
                    "right",
                    params.nextSlideIndex,
                    this.slides[params.nextSlideIndex!].media,
                    () => params.showSlide(params.nextSlideIndex!),
                  )}
                  {this.renderStepper(params)}
                </div>
              );
            },
            slide: ({ index }) => this.renderSlide(this.slides[index]),
          }}
        />
      </div>
    );
  }
}
export default FullWidthSliderSection;
