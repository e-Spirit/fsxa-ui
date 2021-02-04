import { SliderSlots, SliderProps } from "@/types/fsxa-ui";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import BaseComponent from "../BaseComponent";

const defaultAnimation = () => {
  return Promise.resolve();
};
@Component({
  name: "Slider",
})
class Slider extends BaseComponent<SliderProps, {}, SliderSlots> {
  @Prop({ default: false })
  animateSlideTransition!: SliderProps["animateSlideTransition"];
  @Prop({ required: true }) slideCount!: SliderProps["slideCount"];
  @Prop({ required: false })
  handleSlideAnimation: SliderProps["handleSlideAnimation"];
  @Prop({ default: 1 }) visibleElements!: SliderProps["visibleElements"];
  @Prop({ default: false }) infinite!: SliderProps["infinite"];
  @Prop({ default: false }) animate!: SliderProps["animate"];
  @Prop({ default: 10000 }) animationDelay!: SliderProps["animationDelay"];
  @Prop({ default: 0 })
  initialSlideIndex!: SliderProps["initialSlideIndex"];

  currentSlideIndex = this.initialSlideIndex!;
  nextSlideIndexToShow: number | null = null;

  animationTimeout: number | null = null;

  renderSlideWrapper(index: number) {
    const widthClasses: Record<number, string> = {
      1: "ui-w-full",
      2: "ui-w-1/2",
      3: "ui-w-1/3",
      4: "ui-w-1/4",
      5: "ui-w-1/5",
    };
    const currentWidthClass = widthClasses[this.visibleElements!];
    return (
      <div
        class={`${currentWidthClass ||
          "ui-w-full"} ui-h-full ui-flex ui-items-center ui-justify-center ui-flex-shrink-0`}
        ref={`slide_${index}`}
        data-testid="slide-wrapper"
      >
        {this.$scopedSlots.slide({
          index,
          params: {
            currentSlideIndex: this.currentSlideIndex,
            prevSlideIndex: this.prevSlideIndex,
            nextSlideIndex: this.nextSlideIndex,
            showSlide: index => (this.nextSlideIndexToShow = index),
          },
        })}
      </div>
    );
  }

  mounted() {
    this.animateIn();
  }

  beforeDestroy() {
    if (this.animationTimeout) window.clearTimeout(this.animationTimeout);
  }

  @Watch("nextSlideIndexToShow")
  async animateOut(nextSlide: number) {
    // we will check if the currently displayed slide provides an animateOut() method
    // if that is the case --> we will invoke it and will wait for the promise to resolve

    if (this.animationTimeout) {
      window.clearTimeout(this.animationTimeout);
    }
    const animateOut = this.handleSlideAnimation || defaultAnimation;
    const slide = (this.$refs[`slide_${this.currentSlideIndex}`] as HTMLElement)
      ?.children[0];

    if (slide && animateOut) {
      await animateOut("animateOut", {
        element: slide,
        slideIndex: this.currentSlideIndex,
      });
    }
    this.currentSlideIndex = nextSlide;
  }

  @Watch("currentSlideIndex")
  async animateIn() {
    const animateIn = this.handleSlideAnimation || defaultAnimation;
    const slide = (this.$refs[`slide_${this.currentSlideIndex}`] as HTMLElement)
      ?.children[0];
    if (animateIn && slide) {
      await animateIn("animateIn", {
        element: slide,
        slideIndex: this.currentSlideIndex,
      });
    }
    if (this.animationTimeout) {
      window.clearTimeout(this.animationTimeout);
    }
    if (this.infinite && this.animate) {
      this.animationTimeout = window.setTimeout(
        () => this.animateOut(this.nextSlideIndex!),
        this.animationDelay,
      );
    }
  }

  get prevSlideIndex(): number | null {
    if (this.currentSlideIndex === 0) {
      return this.infinite ? this.slideCount - 1 : null;
    }
    return this.currentSlideIndex - 1;
  }

  get nextSlideIndex(): number | null {
    if (this.currentSlideIndex === this.slideCount - 1) {
      return this.infinite ? 0 : null;
    }
    return this.currentSlideIndex + 1;
  }

  render() {
    const percentage = this.currentSlideIndex * (100 / this.visibleElements!);
    const slides = [];
    for (let i = 0; i < this.slideCount; i++) {
      slides.push(this.renderSlideWrapper(i));
    }
    return (
      <div class="ui-flex ui-relative ui-flex-col ui-h-full ui-w-full">
        <div class="ui-w-full ui-flex ui-overflow-hidden ui-h-full">
          <div
            class={`ui-w-full ui-flex ui-transform ${
              this.animateSlideTransition
                ? "ui-duration-250 ui-transition-transform"
                : ""
            }`}
            style={{ transform: `translateX(-${percentage}%)` }}
            data-testid="transform-wrapper"
          >
            {slides}
          </div>
        </div>
        {this.$scopedSlots.controls
          ? this.$scopedSlots.controls({
              currentSlideIndex: this.currentSlideIndex,
              prevSlideIndex: this.prevSlideIndex,
              nextSlideIndex: this.nextSlideIndex,
              showSlide: index => (this.nextSlideIndexToShow = index),
            })
          : null}
      </div>
    );
  }
}
export default Slider;
