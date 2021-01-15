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

const isInViewport = (element: Element, preloadMultiplier = 1.1) => {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top < window.innerHeight * preloadMultiplier &&
    bounding.bottom > 0 &&
    bounding.left < window.innerWidth * preloadMultiplier &&
    bounding.right > 0
  );
};

@Component({
  name: "ImageComp",
})
class Image extends BaseComponent<ImageProps> {
  @Prop({ required: true }) src!: ImageProps["src"];
  @Prop() resolutions: ImageProps["resolutions"];
  @Prop() sizes: ImageProps["sizes"];
  @Prop({ required: false }) lazy!: ImageProps["lazy"];
  @Prop({ required: false }) border!: ImageProps["border"];
  @Prop({ required: false }) zoom!: ImageProps["zoom"];
  @Prop({ required: false }) opacity!: ImageProps["opacity"];
  @Prop({ required: false }) previewId!: ImageProps["previewId"];

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

  get isClient() {
    return typeof window !== "undefined";
  }

  get srcset() {
    if (!this.resolutions) return undefined;
    return Object.values(this.resolutions)
      .map(
        resolution =>
          `${resolution.url} ${resolution.width}w ${resolution.height}h`,
      )
      .join(", ");
  }

  render() {
    return (
      <div
        class={`Image w-full h-full ${this.border ? "border" : ""}`}
        data-previewid={this.previewId}
        data-testid="imageDiv"
      >
        <div class="w-full h-full overflow-hidden relative">
          <img
            src={!this.lazy || this.loaded ? this.src : ""}
            srcset={this.srcset}
            sizes={this.sizes}
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
