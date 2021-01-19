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
  @Prop({ required: true }) breadcrumbs!: HeaderSectionProps["breadcrumbs"];
  @Prop() backgroundImage: HeaderSectionProps["backgroundImage"];
  @Prop() handleItemClick: HeaderSectionProps["handleItemClick"];

  render() {
    return (
      <div class="w-full relative text-white">
        {this.$scopedSlots.backgroundImage
          ? this.$scopedSlots.backgroundImage(this.backgroundImage)
          : this.backgroundImage && (
              <Image
                src={this.backgroundImage.src}
                resolutions={this.backgroundImage?.resolutions}
                data-preview-id={this.backgroundImage?.previewId}
                data-testid="HeaderSection--BackgroundImage"
                class="absolute top-0 left-0 w-full h-full"
                opacity="80"
              />
            )}

        <Container class="py-20">
          <div class="flex flex-grow items-center justify-center md:justify-start mb-4">
            <div class="relative pl-8 w-64 sm:w-auto">
              <div class="HeaderSection--Box absolute top-0 left-0 w-64 sm:w-48 h-full border-8 border-r-0 border-white" />
              <h1 class="antialiased my-20 text-lg uppercase tracking-wide relative w-full break-words overflow-hidden">
                {this.title}
              </h1>
            </div>
          </div>
          {this.$scopedSlots.breadcrumbs ? (
            this.$scopedSlots.breadcrumbs(this.breadcrumbs)
          ) : (
            <Breadcrumbs
              class="hidden sm:block"
              items={this.breadcrumbs}
              handleItemClick={this.handleItemClick}
              data-testid={"HeaderSection-Breadcrumbs"}
            />
          )}
        </Container>
      </div>
    );
  }
}
export default HeaderSection;
