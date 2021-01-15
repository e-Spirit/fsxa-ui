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
      <div class="HeaderSection">
        {this.$scopedSlots.backgroundImage
          ? this.$scopedSlots.backgroundImage(this.backgroundImage)
          : this.backgroundImage && (
              <Image
                src={this.backgroundImage.src}
                resolutions={this.backgroundImage?.resolutions}
                data-preview-id={this.backgroundImage?.previewId}
                data-testid="HeaderSection--BackgroundImage"
                class="HeaderSection--BackgroundImage"
                opacity="80"
              />
            )}

        <Container class="py-20">
          <div class="HeaderSection--HeadlineWrapper">
            <h2>{this.title}</h2>
          </div>
          {this.$scopedSlots.breadcrumbs ? (
            this.$scopedSlots.breadcrumbs(this.breadcrumbs)
          ) : (
            <Breadcrumbs
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
