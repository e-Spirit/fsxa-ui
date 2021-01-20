import "vue-tsx-support/enable-check";
import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import ResponsiveButton from "@/components/internal/Documentation/ResponsiveButton";

interface ComponentIFrameProps {
  filename: string;
  dark?: boolean;
}

type possibleWidths =
  | "max-w-screen-xs"
  | "max-w-screen-sm"
  | "max-w-screen-md"
  | "max-w-screen-lg"
  | "max-w-screen-xl"
  | "";

@Component({
  name: "ComponentIFrame",
})
class ComponentIFrame extends BaseComponent<ComponentIFrameProps> {
  @Prop({ required: true }) filename!: ComponentIFrameProps["filename"];
  @Prop({ default: false }) dark!: ComponentIFrameProps["dark"];

  parsedFilename = this.filename.replace(".tsx", "").replace(".", "-");

  resizeFrame() {
    const iframe = this.$refs.iframe as HTMLIFrameElement;
    if (iframe.contentWindow) {
      iframe.style.height =
        iframe.contentWindow.document.documentElement.scrollHeight + "px";
    } else {
      iframe.style.height = "100px";
    }
  }

  pressedButtonIndex = 4;

  iframeWidth: possibleWidths = "";

  buttonSettings: { width: possibleWidths; iconClass: string }[] = [
    { width: "max-w-screen-xs", iconClass: "fas fa-mobile-alt" },
    { width: "max-w-screen-sm", iconClass: "fas fa-tablet-alt" },
    { width: "max-w-screen-md", iconClass: "fas fa-tablet-alt fa-rotate-90" },
    { width: "max-w-screen-lg", iconClass: "fas fa-laptop" },
    { width: "", iconClass: "fas fa-tv" },
  ];

  render() {
    return (
      <div class="bg-gray-400">
        <div
          class={`flex space-x-4 justify-center ${
            this.dark ? "bg-black" : "bg-white"
          } text-xl`}
        >
          {this.buttonSettings.map((button, index) => {
            return (
              <ResponsiveButton
                dark={this.dark}
                pressed={this.pressedButtonIndex === index}
                handleOnClick={() => {
                  this.pressedButtonIndex = index;
                  this.iframeWidth = button.width;
                }}
              >
                <i class={button.iconClass} />
              </ResponsiveButton>
            );
          })}
        </div>
        <iframe
          src={`/#/raw-component/${this.parsedFilename}`}
          scrolling="yes"
          width="100%"
          class={`mx-auto ${this.dark ? "bg-black" : "bg-white"} ${
            this.iframeWidth
          }`}
          ref="iframe"
          onLoad={this.resizeFrame}
        />
      </div>
    );
  }
}

export default ComponentIFrame;
