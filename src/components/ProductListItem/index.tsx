import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Headline from "@/components/Headline";
import Image from "@/components/Image";

import "./style.css";
import { ProductListItemProps } from "@/types/components";

@Component({
  name: "ProductListItem",
})
class ProductListItem extends BaseComponent<ProductListItemProps> {
  @Prop({ required: true }) title!: ProductListItemProps["title"];
  @Prop({ required: false }) description: ProductListItemProps["description"];
  @Prop({ required: false }) price: ProductListItemProps["price"];
  @Prop({ required: true }) image!: ProductListItemProps["image"];
  @Prop({ required: true }) url!: ProductListItemProps["url"];
  @Prop({ required: true }) handleClick!: ProductListItemProps["handleClick"];

  render() {
    return (
      <div
        class={`ProductListItem ui-w-full ui-h-full ui-border-gray-200 ui-border-0 ui-relative`}
      >
        <Image
          class="ui-w-full ui-h-full ui-m-0 ui-border-0"
          src={this.image.src}
          resolutions={this.image.resolutions}
          lazy={true}
          sizes={this.image.sizes}
        />
        <a
          href={`${this.url}`}
          onClick={event => {
            event.preventDefault();
            this.handleClick();
          }}
        >
          <div class="ProductListItem--InfoBox ui-bg-black ui-text-gray-100 ui-absolute ui-inset-0 ui-opacity-0 hover:ui-opacity-80">
            <Headline as="h3" class="ui-mt-12 ui-ml-8 ui-mr-4" size="sm">
              {this.title}
            </Headline>
            {this.description ? (
              <div class="ui-ml-8 ui-mr-4 ui-text-sm">{this.description}</div>
            ) : (
              ""
            )}
            {this.price ? (
              <div class="ui-ml-8 ui-mr-4 ui-mt-2">{this.price}</div>
            ) : (
              ""
            )}
          </div>
        </a>
      </div>
    );
  }
}
export default ProductListItem;
