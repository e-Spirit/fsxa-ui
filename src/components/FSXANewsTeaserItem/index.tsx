import FSXABaseComponent from "../FSXABaseComponent";
import Component from "vue-class-component";
import "./style.css";
import { Prop } from "vue-property-decorator";
import FSXAImage from "../FSXAImage";
import FSXAHeadline from "../FSXAHeadline";
import FSXARichText from "../FSXARichText";
import { FSXANewsTeaserItemProps } from "@/types/components";

@Component({
  name: "FSXANewsTeaserItem",
})
class FSXANewsTeaserItem extends FSXABaseComponent<FSXANewsTeaserItemProps> {
  @Prop({ required: true }) title!: FSXANewsTeaserItemProps["title"];
  @Prop({ required: true }) date!: FSXANewsTeaserItemProps["date"];
  @Prop({ required: true })
  description!: FSXANewsTeaserItemProps["description"];
  @Prop() image: FSXANewsTeaserItemProps["image"];
  @Prop() handleClick: FSXANewsTeaserItemProps["handleClick"];
  @Prop({ default: false }) latest!: FSXANewsTeaserItemProps["latest"];

  render() {
    return (
      <div class={`FSXANewsTeaserItem ${this.latest ? "is-latest" : ""}`}>
        <FSXAImage
          class="absolute left-0 top-0 w-full"
          src={this.image?.src}
          data-preview-id={this.image?.previewId}
          opacity="40"
        />
        <div class="FSXANewsTeaserItem--InfoBox md:ml-0 md:mt-10 md:-mr-10">
          <div class="FSXANewsTeaserItem--Date">
            <span>{this.date}</span>
          </div>
          <FSXAHeadline as="h3" class="FSXANewsTeaserItem--Title">
            {this.title}
          </FSXAHeadline>
          <FSXARichText
            class="FSXANewsTeaserItem--Description"
            text={this.description}
          />
          <a
            href="#"
            class="FSXANewsTeaserItem--ReadMore"
            onClick={event => {
              event.preventDefault();
              this.handleClick && this.handleClick();
            }}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
export default FSXANewsTeaserItem;
