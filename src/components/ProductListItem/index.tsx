import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Headline from "@/components/Headline";
import RichText from "@/components/RichText";

import "./style.css";
import { ProductListItemProps } from "@/types/components";

@Component({
  name: "FSXAProductListItem",
})
class ProductListItem extends BaseComponent<ProductListItemProps> {
  @Prop({ required: true }) title!: ProductListItemProps["title"];
  @Prop({ required: true }) description!: ProductListItemProps["description"];
  @Prop({ required: true }) price!: ProductListItemProps["price"];
  @Prop() image: ProductListItemProps["image"];
  @Prop() handleClick: ProductListItemProps["handleClick"];

  render() {
    return (
      <div class={`ProductListItem`}>
        <img src={this.image?.src} />
        <div class="ProductListItem--InfoBox line-amiation">
          <Headline as="h3" class="ProductListItem--Title" size="sm">
            {this.title}
          </Headline>
          <RichText
            class="ProductListItem--Description"
            content={this.description}
          />
          <div class="ProductListItem--Price">{this.price}</div>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
