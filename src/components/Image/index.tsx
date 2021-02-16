import BaseComponent from "../BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import throttle from "lodash.throttle";
import { checkPassedValue } from "../utils/PropertyChecker/PropertyChecker";

import "./style.css";
import { ImageProps } from "@/types/fsxa-ui";

const opacityClasses = {
  0: "ui-opacity-0",
  25: "ui-opacity-25",
  40: "ui-opacity-40",
  50: "ui-opacity-50",
  75: "ui-opacity-75",
  80: "ui-opacity-80",
};

const validDarkenValues = [0, 25, 40, 50, 75, 80];

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
  @Prop() alt!: ImageProps["alt"];
  @Prop() resolutions: ImageProps["resolutions"];
  @Prop() sizes: ImageProps["sizes"];
  @Prop({ required: false }) lazy!: ImageProps["lazy"];
  @Prop({ required: false }) zoom!: ImageProps["zoom"];
  @Prop({ required: false }) darken!: ImageProps["darken"];
  @Prop({ required: false }) previewId!: ImageProps["previewId"];

  throttledLazyLoadHandler: any;
  loaded = false;

  constructor() {
    super();
    this.throttledLazyLoadHandler = throttle(this.lazyLoadImage, 150);
  }

  mounted() {
    checkPassedValue(this.$el, validDarkenValues, this.darken, "darken");
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
        class={`Image ui-w-full ui-h-full ui-overflow-hidden`}
        data-previewid={this.previewId}
        data-testid="imageDiv"
      >
        <div class="ui-w-full ui-h-full ui-overflow-hidden ui-relative">
          <img
            alt={this.alt ? this.alt : ""}
            src={!this.lazy || this.loaded ? this.src : ""}
            srcset={this.srcset}
            sizes={this.sizes}
            class={`${
              this.zoom ? "zoom" : ""
            } ui-w-full ui-h-full ui-object-cover ui-object-center`}
          />
          {this.darken && (
            <div
              class={`ui-absolute ui-top-0 ui-left-0 ui-w-full ui-h-full ui-pointer-events-none ui-bg-black ${
                opacityClasses[this.darken]
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
