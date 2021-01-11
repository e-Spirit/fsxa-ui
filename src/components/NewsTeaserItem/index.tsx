import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Image from "@/components/Image";
import Headline from "@/components/Headline";
import RichText from "@/components/RichText";

import "./style.css";
import { NewsTeaserItemProps } from "@/types/components";

@Component({
  name: "FSXANewsTeaserItem",
})
class NewsTeaserItem extends BaseComponent<NewsTeaserItemProps> {
  @Prop({ required: true }) title!: NewsTeaserItemProps["title"];
  @Prop({ required: true }) date!: NewsTeaserItemProps["date"];
  @Prop({ required: true })
  description!: NewsTeaserItemProps["description"];
  @Prop() image: NewsTeaserItemProps["image"];
  @Prop() handleClick: NewsTeaserItemProps["handleClick"];
  @Prop({ default: false }) latest!: NewsTeaserItemProps["latest"];

  render() {
    return (
      <div class={`NewsTeaserItem ${this.latest ? "is-latest" : ""}`}>
        {this.image && (
          <Image
            class="absolute left-0 top-0 w-full"
            src={this.image.src}
            previewId={this.image.previewId}
            opacity="40"
          />
        )}
        <div class="NewsTeaserItem--InfoBox md:ml-0 md:mt-10 md:-mr-10">
          <div class="NewsTeaserItem--Date">
            <span>{this.date}</span>
          </div>
          <Headline as="h3" class="NewsTeaserItem--Title" size="sm">
            {this.title}
          </Headline>
          <RichText
            class="NewsTeaserItem--Description"
            content={this.description}
          />
          <a
            href="#"
            class="NewsTeaserItem--ReadMore"
            onClick={(event: MouseEvent) => {
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
export default NewsTeaserItem;
