import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Container from "@/components/Container";

import "./style.css";

export const PORTAL_ID = "devMode-Overlay";

@Component
export class FSXADevInfoTarget extends BaseComponent {
  render() {
    return (
      <portal-target
        name={PORTAL_ID}
        class="ui-absolute ui-top-0 ui-left-0 ui-w-full ui-h-full ui-pointer-events-none"
      />
    );
  }
}

export interface FSXADevInfoProps {
  headline: string;
  devModeHint: string;
  content?: JSX.Element;
  isOverlay?: boolean;
}
@Component
class FSXADevInfo extends BaseComponent<FSXADevInfoProps> {
  @Prop({ required: true }) headline!: FSXADevInfoProps["headline"];
  @Prop({ required: true }) devModeHint!: FSXADevInfoProps["devModeHint"];
  @Prop() content: FSXADevInfoProps["content"];
  @Prop() isOverlay: FSXADevInfoProps["isOverlay"];

  isOpen = false;

  renderContent(onClose?: () => void) {
    return (
      <div class="ui-w-full ui-h-full ui-border-gray-700 ui-rounded-lg ui-relative ui-border ui-overflow-hidden ui-flex ui-flex-col ui-z-0">
        <div class="ui-text-xl ui-bg-white ui-p-5 ui-shadow-md ui-relative ui-z-10 ui-flex-grow-0 ui-flex ui-items-center ui-justify-between">
          {this.headline}
          {onClose && (
            <a
              class="ui-cursor-pointer ui-text-gray-500 ui-rounded-full hover:ui-bg-gray-300 ui-w-8 ui-h-8 hover:ui-text-gray-900 ui-flex ui-justify-center ui-items-center ui-flex-shrink-0"
              onClick={onClose}
            >
              <i class="fas fa-times" />
            </a>
          )}
        </div>
        <div class="ui-overflow-x-hidden ui-overflow-y-auto ui-p-5 ui-bg-gray-100 ui-relative ui-flex-1">
          <div class="ui-text-sm ui-mb-2">{this.$slots.default}</div>
          <div class="ui-text-xs ui-px-3 ui-py-1 ui-bg-gray-300 ui-rounded-lg ui-w-auto ui-inline-block ui-mt-2">
            <i class="fas fa-info ui-inline-block ui-mr-2" />
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
        <div class="DevInfo--Backdrop ui-z-20">
          <Container class="DevInfo--OverlayContent">
            {this.renderContent(() => (this.isOpen = false))}
          </Container>
        </div>
      </portal>
    ) : (
      <div
        class="ui-rounded-full ui-bg-gray-800 ui-absolute ui-top-0 ui-right-0 ui-mt-2 ui-mr-2 ui-flex ui-w-8 ui-h-8 ui-items-center ui-justify-center ui-text-white ui-cursor-pointer hover:ui-bg-gray-300 hover:ui-text-gray-900"
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
      <div class="ui-w-full ui-bg-gray-200 ui-py-10">
        <Container>{this.renderContent()}</Container>
      </div>
    );
  }
}
export default FSXADevInfo;
