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
  @Prop({ required: true }) description!: ProductListItemProps["description"];
  @Prop({ required: true }) price!: ProductListItemProps["price"];
  @Prop({ required: true }) image!: ProductListItemProps["image"];
  @Prop({ required: true }) url!: ProductListItemProps["url"];
  @Prop({ required: true }) handleClick!: ProductListItemProps["handleClick"];

  render() {
    return (
      <div class={`ProductListItem w-full border-gray-200 border-0 relative`}>
        <Image class="w-full h-full m-0 border-0" src={this.image.src} />
        <a
          href={`${this.url}`}
          onClick={event => {
            event.preventDefault();
            this.handleClick();
          }}
        >
          <div class="ProductListItem--InfoBox bg-black text-gray-100 absolute inset-0 opacity-0 line-animation hover:opacity-80">
            <Headline as="h3" class="mt-12 ml-8 mr-4" size="sm">
              {this.title}
            </Headline>
            <div class="ml-8 mr-4 text-sm">{this.description}</div>
            <div class="ml-8 mr-4 mt-2">{this.price}</div>
          </div>
        </a>
      </div>
    );
  }
}
export default ProductListItem;
