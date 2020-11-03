import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

export interface Slide<Data = any> {
  previewId: string;
  identifier: string;
  data: Data;
}
export interface SliderProps<SlideData = any> {
  slides: Slide<SlideData>[];
}
@Component({
  name: "Slider",
})
class Slider extends BaseComponent<SliderProps> {
  @Prop({ required: true }) slides!: SliderProps["slides"];

  wrapperWidth = 0;
  currentSlide = 0;
  animationTimeout: number | null = null;

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.startAnimation();
  }

  startAnimation() {
    this.clearAnimation();
    this.animationTimeout = window.setTimeout(() => {
      this.currentSlide =
        this.currentSlide + 1 > this.slides.length - 1
          ? 0
          : this.currentSlide + 1;
      this.startAnimation();
    }, 10000);
  }

  clearAnimation() {
    if (this.animationTimeout) window.clearTimeout(this.animationTimeout);
  }

  beforeDestroy() {
    this.clearAnimation();
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.wrapperWidth = (this.$refs.wrapper as HTMLDivElement).clientWidth;
  }

  get trackWidth() {
    return this.wrapperWidth * this.slides.length;
  }

  renderSlide(slide: Slide) {
    return (
      <div class="inline-block" style={{ width: `${this.wrapperWidth}px` }}>
        {slide.previewId}
      </div>
    );
  }

  render() {
    return (
      <div class="w-full h-full relative" ref="wrapper">
        <div class="w-full overflow-hidden h-full relative">
          {this.wrapperWidth !== 0 ? (
            <div
              class="absolute top-0 transition-all duration-1000"
              style={{
                left: `${this.currentSlide * this.wrapperWidth * -1}px`,
                width: `${this.trackWidth}px`,
              }}
            >
              {this.slides.map(this.renderSlide)}
            </div>
          ) : null}
        </div>
        <div class="absolute left-0 top-1/2 -mt-10 -ml-10 h-20 bg-gray-300 w-20"></div>
        <div class="absolute right-0 top-1/2 -mt-10 -mr-10 h-20 bg-gray-300 w-20"></div>
      </div>
    );
  }
}
export default Slider;
