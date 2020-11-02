import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Headline from "@/components/Headline";
import RichText from "@/components/RichText";
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
  @Prop() image!: ProductListItemProps["image"];
  @Prop() url: ProductListItemProps["url"];

  render() {
    return (
      <div class={`ProductListItem w-full border-gray-200 border-0 relative`}>
        <Image class="w-full m-0 border-0" src={this.image.src} />
        <a href={`${this.url}`}>
          <div class="ProductListItem--InfoBox line-amiation">
            <Headline as="h3" class="mt-12 ml-8 mr-4" size="sm">
              {this.title}
            </Headline>
            <RichText class="ml-8 mr-4 text-sm" content={this.description} />
            <div class="ml-8 mr-4">{this.price}</div>
          </div>
        </a>
      </div>
    );
  }
}
export default ProductListItem;
