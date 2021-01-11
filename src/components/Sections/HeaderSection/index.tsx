import BaseComponent from "@/components/BaseComponent";
import Image from "@/components/Image";
import { Component, Prop } from "vue-property-decorator";
import Container from "@/components/Container";
import "./style.css";
import Breadcrumbs from "./Breadcrumbs";
import { Breadcrumb, HeaderSectionProps } from "@/types/sections";
import { ImageProps } from "@/types/components";

@Component({
  name: "HeaderSection",
})
class HeaderSection extends BaseComponent<
  HeaderSectionProps,
  {},
  {
    backgroundImage?: ImageProps;
    breadcrumbs?: Breadcrumb[];
  }
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
                dimensions={this.backgroundImage?.dimensions}
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
