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

  handleClick(
    slide: FullWidthSliderSectionSlide<MediaType>,
    slideIndex: number,
  ) {
    this.$emit("click", { slide, slideIndex });
  }

  renderSlide(
    slide: FullWidthSliderSectionSlide<MediaType>,
    slideIndex: number,
  ) {
    return (
      <div class="ui-w-full ui-h-full ui-bg-black ui-overflow-hidden ui-relative">
        <div class="FullWidthImageSliderSection--Media ui-w-full ui-h-full ui-transition-opacity ui-duration-250 ui-transform">
          {this.$scopedSlots.media ? (
            this.$scopedSlots.media(slide.media)
          ) : (
            <Image
              src={((slide.media as unknown) as ImageRef).src}
              resolutions={((slide.media as unknown) as ImageRef).resolutions}
              sizes={"100vw"}
            />
          )}
        </div>
        <div class="ui-absolute ui-w-full ui-h-full ui-top-0 ui-left-0 ui-pointer-events-none ui-bg-gradient-to-b ui-to-gray-900 ui-from-transparent ui-z-10"></div>
        <div class="ui-absolute ui-bottom-0 ui-left-0 FullWidthSliderSection--Content ui-ui-w-full ui-transform ui-transition-transform ui-translate-y-full ui-px-6 ui-pb-16 md:ui-px-12 md:ui-pb-12 lg:ui-px-16 ui-origin-top ui-duration-250 ui-text-white ui-z-20">
          <div class="FullWidthSliderSection--Title ui-block ui-transform ui-transition-transform ui-duration-250 ui-w-full ui-mb-2 md:ui-mb-4 lg:ui-mb-6">
            {this.$scopedSlots.title ? (
              this.$scopedSlots.title(slide.title)
            ) : (
              <div class="ui-font-extrabold ui-text-3xl lg:ui-text-4xl xl:ui-text-6xl ui-uppercase">
                {slide.title}
              </div>
            )}
          </div>
          <div class="ui-w-full ui-flex ui-items-start ui-justify-start ui-flex-col lg:ui-flex-row">
            <div class="FullWidthSliderSection--Teaser ui-duration-250 ui-transform ui-transition-transform ui-translate-y-32 ui-origin-top lg:ui-mr-5 ui-max-w-xl">
              {this.$scopedSlots.teaser ? (
                this.$scopedSlots.teaser(slide.teaser)
              ) : (
                <div class="ui-text-sm md:ui-text-base xl:ui-text-lg">
                  {slide.teaser}
                </div>
              )}
            </div>
            <div class="FullWidthSliderSection--CTA-Button ui-duration-250 ui-transform ui-transition-transform ui-translate-y-32 ui-origin-top ui-flex-shrink-0 ui-mt-3 md:ui-mt-0">
              {this.$scopedSlots.button ? (
                this.$scopedSlots.button({
                  content: slide.buttonContent,
                  onClick: () => this.handleClick(slide, slideIndex),
                })
              ) : (
                <Button
                  variant="inverted"
                  handleClick={() => this.handleClick(slide, slideIndex)}
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
          ? "md:ui-ml-8 lg:ui-ml-10 xl:ui-ml-12 ui-left-0"
          : "md:ui--ml-8 lg:ui--ml-10 xl:ui--ml-12 ui-left-0"
        : this.removeDefaultPadding
        ? "md:ui-mr-8 lg:ui-mr-10 xl:ui-mr-12 ui-right-0"
        : "md:ui--mr-8 lg:ui--mr-10 xl:ui--mr-12 ui-right-0";
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
            class="ui-w-10 ui-h-10 ui-absolute ui-top-1/2 ui-left-1/2 ui--mt-5 ui--ml-5 ui-z-10 ui-pointer-events-none"
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
          <div class="ui-opacity-0 group-hover:ui-opacity-100 ui-transition-opacity ui-w-32 lg:ui-w-40 xl:ui-w-48 ui-h-20 lg:ui-h-24 xl:ui-h-32 ui-absolute ui-left-0 ui--ml-8 lg:ui--ml-10 xl:ui--ml-12 ui--mt-2 xl:ui--mt-4 ui-max-w-none ui-duration-300 ui-pointer-events-none">
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
        class={`ui-hidden md:ui-block md:ui-w-16 md:ui-h-16 md:ui--mt-8 lg:ui-w-20 lg:ui-h-20 lg:ui--mt-10 xl:ui-w-24 xl:ui-h-24 xl:ui--mt-12 ui-absolute ui-top-1/2 ui-${positioning} ui-bg-white hover:ui-bg-black hover:ui-text-white ui-duration-300 ui-transform ui-transition-colors ui-group ui-pointer-events-auto`}
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
          <li class="ui-inline-block ui-px-1 ui-pointer-events-auto">
            <a
              class={`ui-block md:ui-hidden ui-w-5 ui-h-5 ui-rounded-full ui-border-white ui-border hover:ui-bg-white active:ui-bg-white ui-transition-colors ui-transform ui-duration-300 ${params.currentSlideIndex ===
                i && "ui-bg-white"}`}
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
      <div class="ui-w-full ui-absolute ui-left-0 ui-bottom-0 ui-mb-2 ui-z-10 ui-flex ui-justify-center">
        <ul>{slides}</ul>
      </div>
    );
  }

  render() {
    return (
      <div
        class={`ui-w-full ui-h-full ${
          this.removeDefaultPadding
            ? ""
            : "md:ui-px-16 lg:ui-px-20 xl:ui-px-24 "
        }`}
      >
        <Slider
          animate={false}
          initialSlideIndex={0}
          infinite
          slideCount={this.slides.length}
          handleSlideAnimation={async (type, { element }) => {
            const classToRemove =
              type === "animateIn"
                ? "FullWidthSliderSection--Slide--animate-out"
                : "FullWidthSliderSection--Slide--animate-in";
            const classToAdd =
              type === "animateIn"
                ? "FullWidthSliderSection--Slide--animate-in"
                : "FullWidthSliderSection--Slide--animate-out";
            if (!element.classList.contains(classToRemove)) {
              element.classList.add(classToRemove);
              await new Promise(resolve => window.setTimeout(resolve, 0));
            }
            element.classList.remove(classToRemove);
            element.classList.add(classToAdd);
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
                <div class="ui-pointer-events-none ui-w-full ui-h-full ui-absolute ui-top-0 ui-left-0">
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
            slide: ({ index }) => this.renderSlide(this.slides[index], index),
          }}
        />
      </div>
    );
  }
}
export default FullWidthSliderSection;
