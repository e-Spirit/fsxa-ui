import { Component, Prop, Watch } from "vue-property-decorator";
import BaseComponent from "../BaseComponent";

export interface PageHeaderProps {
  fullscreen?: boolean;
}
@Component({
  name: "PageHeader",
})
class PageHeader extends BaseComponent<
  PageHeaderProps,
  {
    onOverlayClick: { test: string };
  },
  {
    overlay: {};
  }
> {
  @Prop({ default: false }) fullscreen!: PageHeaderProps["fullscreen"];

  @Watch("fullscreen")
  watchFullscreen(nextVal: boolean) {
    if (nextVal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  beforeDestroy() {
    document.body.classList.remove("overflow-hidden");
  }

  render() {
    const overlayContent =
      this.$scopedSlots.overlay && this.$scopedSlots.overlay({});
    return (
      <div
        class={`fixed top-0 left-0 w-full shadow-md flex flex-col ${
          this.fullscreen ? "h-screen" : ""
        }`}
      >
        {this.$slots.default}
        {overlayContent ? (
          <div
            class="w-full bg-gray-900 bg-opacity-80 flex-grow overflow-hidden"
            onClick={event => {
              event.preventDefault();
              event.stopImmediatePropagation();
              this.$emit("overlayClick");
            }}
          >
            {overlayContent}
          </div>
        ) : null}
      </div>
    );
  }
}
export default PageHeader;
