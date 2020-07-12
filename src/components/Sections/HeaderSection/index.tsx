import BaseComponent from "@/components/BaseComponent";
import Image from "@/components/Image";
import { Component, Prop } from "vue-property-decorator";
import Container from "@/components/Container";
import "./style.css";
import Breadcrumbs from "./Breadcrumbs";
import { HeaderSectionProps } from "@/types/sections";

@Component({
  name: "HeaderSection",
})
class HeaderSection extends BaseComponent<HeaderSectionProps> {
  @Prop({ required: true }) title!: HeaderSectionProps["title"];
  @Prop({ required: true }) breadcrumbs!: HeaderSectionProps["breadcrumbs"];
  @Prop() backgroundImage: HeaderSectionProps["backgroundImage"];
  @Prop() handleItemClick: HeaderSectionProps["handleItemClick"];

  render() {
    return (
      <div class="HeaderSection">
        {this.backgroundImage && (
          <Image
            src={this.backgroundImage.src}
            dimensions={this.backgroundImage?.dimensions}
            data-preview-id={this.backgroundImage?.previewId}
            class="HeaderSection--BackgroundImage"
            opacity="80"
          />
        )}
        <Container class="py-20">
          <div class="HeaderSection--HeadlineWrapper">
            <h2>{this.title}</h2>
          </div>
          <Breadcrumbs
            items={this.breadcrumbs}
            handleItemClick={this.handleItemClick}
          />
        </Container>
      </div>
    );
  }
}
export default HeaderSection;
