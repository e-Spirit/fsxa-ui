import BaseComponent from "@/components/BaseComponent";
import ResponsiveButton from "@/components/internal/Documentation/ResponsiveButton";
import { iframeResizer } from "iframe-resizer";
import { Component, Prop } from "vue-property-decorator";
import "vue-tsx-support/enable-check";
interface ComponentIFrameProps {
  filename: string;
  dark?: boolean;
}

type possibleWidths =
  | "ui-max-w-screen-xs"
  | "ui-max-w-screen-sm"
  | "ui-max-w-screen-md"
  | "ui-max-w-screen-lg"
  | "ui-max-w-screen-xl"
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
    const resizer = this.$refs.iframe as HTMLElement;
    if (iframe.contentWindow) {
      iframe.style.height =
        iframe.contentWindow.document.documentElement.scrollHeight + "px";
      resizer.style.height = iframe.style.height;
    } else {
      iframe.style.height = "100px";
    }
    iframeResizer(
      {
        heightCalculationMethod: "lowestElement",
      },
      iframe,
    );
  }

  pressedButtonIndex = 4;

  iframeWidth: possibleWidths = "";

  buttonSettings: { width: possibleWidths; iconClass: string }[] = [
    { width: "ui-max-w-screen-xs", iconClass: "fas fa-mobile-alt" },
    { width: "ui-max-w-screen-sm", iconClass: "fas fa-tablet-alt" },
    {
      width: "ui-max-w-screen-md",
      iconClass: "fas fa-tablet-alt fa-rotate-90",
    },
    { width: "ui-max-w-screen-lg", iconClass: "fas fa-laptop" },
    { width: "", iconClass: "fas fa-tv" },
  ];

  render() {
    return (
      <div class="ui-bg-gray-400">
        <div
          class={`ui-flex ui-space-x-2 ui-justify-start ui-pb-2 ${
            this.dark ? "ui-bg-black" : "ui-bg-white"
          } ui-text-xl`}
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
        <div class="ui-bg-gray-400 ui-h-full">
          <div class="ui-w-full ui-flex ui-flex-row">
            <iframe
              src={`/#/raw-component/${this.parsedFilename}`}
              scrolling="yes"
              width="100%"
              class={`ui-mx-auto ${this.dark ? "ui-bg-black" : "ui-bg-white"} ${
                this.iframeWidth
              }`}
              ref="iframe"
              onLoad={this.resizeFrame}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentIFrame;
