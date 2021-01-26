import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Image from "@/components/Image";
import Headline from "@/components/Headline";

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
      <div
        data-testid="newsteaseritem-latest"
        class={`NewsTeaserItem ${this.latest ? "is-latest" : ""}`}
      >
        {this.image && (
          <Image
            class="ui-absolute ui-left-0 ui-top-0 ui-w-full"
            src={this.image.src}
            previewId={this.image.previewId}
            opacity="40"
          />
        )}
        <div class="NewsTeaserItem--InfoBox md:ui-ml-0 md:ui-mt-10 md:ui--mr-10">
          <div class="NewsTeaserItem--Date" data-testid="newsteaseritem-date">
            <span>{this.date}</span>
          </div>
          <Headline
            as="h3"
            class="NewsTeaserItem--Title"
            size="sm"
            data-testid="newsteaseritem-title"
          >
            {this.title}
          </Headline>
          <div
            class="NewsTeaserItem--Description"
            data-testid="newsteaseritem-description"
          >
            {this.description}
          </div>
          <a
            data-testid="newsteaseritem-click"
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
