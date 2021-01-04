import BaseComponent from "../BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import throttle from "lodash.throttle";

import "./style.css";
import { ImageProps } from "@/types/fsxa-ui";

const opacityClasses = {
  0: "opacity-0",
  25: "opacity-25",
  40: "opacity-40",
  50: "opacity-50",
  75: "opacity-75",
  80: "opacity-80",
};

const isInViewport = (element: Element, preloadMulitplier = 1.1) => {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top < window.innerHeight * preloadMulitplier &&
    bounding.bottom > 0 &&
    bounding.left < window.innerWidth * preloadMulitplier &&
    bounding.right > 0
  );
};

@Component({
  name: "ImageComp",
})
class Image extends BaseComponent<ImageProps> {
  @Prop({ required: true }) src!: ImageProps["src"];
  @Prop({ required: false }) dimensions: ImageProps["dimensions"];
  @Prop({ required: false }) lazy!: ImageProps["lazy"];
  @Prop({ required: false }) border!: ImageProps["border"];
  @Prop({ required: false }) zoom!: ImageProps["zoom"];
  @Prop({ required: false }) opacity!: ImageProps["opacity"];

  throttledLazyLoadHandler: any;
  loaded = false;

  constructor() {
    super();
    this.throttledLazyLoadHandler = throttle(this.lazyLoadImage, 150);
  }

  mounted() {
    if (this.lazy) {
      // initially call handler to ensure that already visible images will be loaded too
      this.lazyLoadImage();
      document.addEventListener("scroll", this.throttledLazyLoadHandler);
      window.addEventListener("resize", this.throttledLazyLoadHandler);
      window.addEventListener(
        "orientationchange",
        this.throttledLazyLoadHandler,
      );
    }
  }

  beforeDestroy() {
    if (this.lazy) {
      document.removeEventListener("scroll", this.throttledLazyLoadHandler);
      window.removeEventListener("resize", this.throttledLazyLoadHandler);
      window.removeEventListener(
        "orientationchange",
        this.throttledLazyLoadHandler,
      );
    }
  }

  lazyLoadImage() {
    // immediately return if this.loaded is already set to true
    if (this.loaded) return;
    if (isInViewport(this.$el)) {
      this.loaded = true;
    }
  }

  render() {
    //TODO: use this ratio somehow
    // const ratio = this.dimensions
    //   ? this.dimensions.width / this.dimensions.height
    //   : null;
    return (
      <div
        class={`Image w-full ${this.border ? "border" : ""}`}
        data-testid="imageDiv"
      >
        <div class="w-full h-full overflow-hidden relative">
          <img
            src={!this.lazy || this.loaded ? this.src : ""}
            class={`${
              this.zoom ? "zoom" : ""
            } w-full h-full object-cover object-center`}
          />
          {this.opacity && (
            <div
              class={`absolute top-0 left-0 w-full h-full pointer-events-none bg-black ${
                opacityClasses[this.opacity]
              }`}
              data-testid="veil"
            />
          )}
        </div>
      </div>
    );
  }
}
export default Image;
