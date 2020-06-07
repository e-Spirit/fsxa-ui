import Component from "vue-class-component";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { HeaderSectionProps } from "@/types/sections";
import FSXAImage from "@/components/FSXAImage";
import { Prop } from "vue-property-decorator";
import FSXAContainer from "@/components/FSXAContainer";
import "./style.css";
import FSXABreadcrumbs from "@/components/FSXABreadcrumbs";

@Component({
  name: "HeaderSection",
})
class HeaderSection extends FSXABaseComponent<HeaderSectionProps> {
  @Prop({ required: true }) title!: HeaderSectionProps["title"];
  @Prop({ required: true }) breadcrumbs!: HeaderSectionProps["breadcrumbs"];
  @Prop() backgroundImage: HeaderSectionProps["backgroundImage"];
  @Prop() handleItemClick: HeaderSectionProps["handleItemClick"];

  render() {
    return (
      <div class="HeaderSection">
        <FSXAImage
          src={this.backgroundImage}
          class="HeaderSection--BackgroundImage"
          opacity="80"
        />
        <FSXAContainer class="py-20">
          <div class="HeaderSection--HeadlineWrapper">
            <h2>{this.title}</h2>
          </div>
          <FSXABreadcrumbs
            items={this.breadcrumbs}
            handleItemClick={this.handleItemClick}
          />
        </FSXAContainer>
      </div>
    );
  }
}
export default HeaderSection;
