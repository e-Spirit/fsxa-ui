import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Container from "@/components/Container";

import "./style.css";
import { DevInfoProps } from "@/types/internal";

export const PORTAL_ID = "devMode-Overlay";

@Component
export class DevInfoTarget extends BaseComponent {
  render() {
    return (
      <portal-target
        name={PORTAL_ID}
        class="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    );
  }
}

@Component
class DevInfo extends BaseComponent<DevInfoProps> {
  @Prop({ required: true }) headline!: DevInfoProps["headline"];
  @Prop({ required: true }) devModeHint!: DevInfoProps["devModeHint"];
  @Prop() content: DevInfoProps["content"];
  @Prop() isOverlay: DevInfoProps["isOverlay"];

  isOpen = false;

  renderContent(onClose?: () => void) {
    return (
      <div class="w-full h-full border-gray-700 rounded-lg relative border overflow-hidden flex flex-col z-0 DevInfo--Content">
        <div class="text-xl bg-white p-5 shadow-md relative z-10 flex-grow-0 flex items-center justify-between">
          {this.headline}
          {onClose && (
            <a
              class="cursor-pointer text-gray-500 rounded-full hover:bg-gray-300 w-8 h-8 hover:text-gray-900 flex justify-center items-center flex-shrink-0"
              onClick={onClose}
            >
              <i class="fas fa-times" />
            </a>
          )}
        </div>
        <div class="overflow-x-hidden overflow-y-auto p-5 bg-gray-100 relative flex-1">
          <div class="text-sm mb-2">{this.$slots.default}</div>
          <div class="text-xs px-3 py-1 bg-gray-300 rounded-lg w-auto inline-block mt-2">
            <i class="fas fa-info inline-block mr-2" />
            {this.devModeHint}
          </div>
        </div>
      </div>
    );
  }

  updated() {
    if (this.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  beforeDestroy() {
    document.body.style.overflow = "auto";
  }

  renderOverlay() {
    return this.isOpen ? (
      <portal to={PORTAL_ID}>
        <div class="DevInfo--Backdrop z-20">
          <Container class="DevInfo--OverlayContent" verticalPadding={false}>
            {this.renderContent(() => (this.isOpen = false))}
          </Container>
        </div>
      </portal>
    ) : (
      <div
        class="rounded-full bg-gray-800 absolute top-0 right-0 mt-2 mr-2 flex w-8 h-8 items-center justify-center text-white cursor-pointer hover:bg-gray-300 hover:text-gray-900"
        onClick={() => (this.isOpen = true)}
      >
        <i class="fas fa-question" />
      </div>
    );
  }

  render() {
    // TODO: Link to documentation - page DevMode
    return this.isOverlay ? (
      this.renderOverlay()
    ) : (
      <div class="w-full bg-gray-200 py-10">
        <Container verticalPadding={false}>{this.renderContent()}</Container>
      </div>
    );
  }
}
export default DevInfo;
