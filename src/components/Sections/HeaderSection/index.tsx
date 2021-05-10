import BaseComponent from "@/components/BaseComponent";
import Image from "@/components/Image";
import { Component, Prop } from "vue-property-decorator";
import Container from "@/components/Container";
import "./style.css";
import Breadcrumbs from "./Breadcrumbs";
import {
  HeaderSectionEvents,
  HeaderSectionProps,
  HeaderSectionSlots,
} from "@/types/sections";

@Component({
  name: "HeaderSection",
})
class HeaderSection extends BaseComponent<
  HeaderSectionProps,
  HeaderSectionEvents,
  HeaderSectionSlots
> {
  @Prop({ required: true }) title!: HeaderSectionProps["title"];
  @Prop() breadcrumbs: HeaderSectionProps["breadcrumbs"];
  @Prop() backgroundImage: HeaderSectionProps["backgroundImage"];
  @Prop() handleItemClick: HeaderSectionProps["handleItemClick"];

  render() {
    return (
      <div class="ui-w-full ui-relative ui-text-white ui-text-left">
        {this.$scopedSlots.backgroundImage
          ? this.$scopedSlots.backgroundImage(this.backgroundImage)
          : this.backgroundImage && (
              <Image
                src={this.backgroundImage.src}
                resolutions={this.backgroundImage?.resolutions}
                data-preview-id={this.backgroundImage?.previewId}
                data-testid="HeaderSection--BackgroundImage"
                class="ui-absolute ui-top-0 ui-left-0 ui-w-full ui-h-full"
                darken="80"
              />
            )}

        <Container class="ui-py-20">
          <div class="ui-flex ui-flex-grow ui-items-center ui-justify-center md:ui-justify-start ui-mb-4">
            <div class="ui-relative ui-w-64 sm:ui-w-auto">
              {this.$scopedSlots.title ? (
                this.$scopedSlots.title(this.title)
              ) : (
                <div>
                  <div class="HeaderSection--Box ui-absolute ui-top-0 ui-left-0 ui-w-64 sm:ui-w-48 ui-h-full ui-border-8 ui-border-r-0 ui-border-white" />
                  <h1 class="ui-antialiased ui-my-20 ui-pl-8 ui-text-lg ui-uppercase ui-tracking-wide ui-relative ui-w-full ui-break-words ui-overflow-hidden">
                    {this.title}
                  </h1>
                </div>
              )}
            </div>
          </div>
          {this.$scopedSlots.breadcrumbs ? (
            this.$scopedSlots.breadcrumbs(this.breadcrumbs)
          ) : this.breadcrumbs ? (
            <Breadcrumbs
              class="ui-hidden sm:ui-block"
              items={this.breadcrumbs}
              handleItemClick={this.handleItemClick}
              data-testid={"HeaderSection-Breadcrumbs"}
            />
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}
export default HeaderSection;
