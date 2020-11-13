import "vue-tsx-support/enable-check";
import { Component, Prop } from "vue-property-decorator";
import { BaseComponent } from "fsxa-ui";
import ResponsiveButton from "@/components/internal/Documentation/ResponsiveButton";

interface ComponentIFrameProps {
  filename: string;
  dark?: boolean;
}

@Component({
  name: "ComponentIFrame",
})
class ComponentIFrame extends BaseComponent<ComponentIFrameProps> {
  @Prop({ required: true }) filename!: ComponentIFrameProps["filename"];
  @Prop() dark!: ComponentIFrameProps["dark"];

  parsedFilename = this.filename.replace(".tsx", "").replace(".", "-");

  resizeFrame() {
    const iframe = this.$refs.iframe as HTMLIFrameElement;
    iframe.style.height =
      iframe.contentWindow!.document.documentElement.scrollHeight + 50 + "px";
  }

  pressedButtonIndex = 4;

  iframeWidth:
    | "max-w-screen-xs"
    | "max-w-screen-sm"
    | "max-w-screen-md"
    | "max-w-screen-lg"
    | "max-w-screen-xl"
    | "" = "";

  render() {
    return (
      <div class="bg-gray-400">
        <div
          class={`flex space-x-4 justify-center ${
            this.dark ? "bg-black" : "bg-white"
          } text-xl`}
        >
          <ResponsiveButton
            dark={this.dark}
            pressed={this.pressedButtonIndex === 0}
            handleOnClick={() => {
              this.pressedButtonIndex = 0;
              this.iframeWidth = "max-w-screen-xs";
            }}
          >
            <i class="fas fa-mobile-alt" />
          </ResponsiveButton>
          <ResponsiveButton
            dark={this.dark}
            pressed={this.pressedButtonIndex === 1}
            handleOnClick={() => {
              this.pressedButtonIndex = 1;
              this.iframeWidth = "max-w-screen-sm";
            }}
          >
            <i class="fas fa-tablet-alt" />
          </ResponsiveButton>
          <ResponsiveButton
            dark={this.dark}
            pressed={this.pressedButtonIndex === 2}
            handleOnClick={() => {
              this.pressedButtonIndex = 2;
              this.iframeWidth = "max-w-screen-md";
            }}
          >
            <i class="fas fa-tablet-alt fa-rotate-90" />
          </ResponsiveButton>
          <ResponsiveButton
            dark={this.dark}
            pressed={this.pressedButtonIndex === 3}
            handleOnClick={() => {
              this.pressedButtonIndex = 3;
              this.iframeWidth = "max-w-screen-lg";
            }}
          >
            <i class="fas fa-laptop" />
          </ResponsiveButton>
          <ResponsiveButton
            dark={this.dark}
            pressed={this.pressedButtonIndex === 4}
            handleOnClick={() => {
              this.pressedButtonIndex = 4;
              this.iframeWidth = "";
            }}
          >
            <i class="fas fa-tv" />
          </ResponsiveButton>
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
