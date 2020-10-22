import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Image from "@/components/Image";
import Headline from "@/components/Headline";
import RichText from "@/components/RichText";

import "./style.css";
import { ProductListItemProps } from "@/types/components";
import Layout from "../Layout";

@Component({
  name: "FSXAProductListItem",
})
class ProductListItem extends BaseComponent<ProductListItemProps> {
  @Prop({ required: true }) title!: ProductListItemProps["title"];
  @Prop({ required: true }) description!: ProductListItemProps["description"];
  @Prop({ required: true }) price!: ProductListItemProps["price"];

  // @Prop() image: ProductListItemProps["image"];

  render() {
    return (
      <div class={`ProductListItem`}>
        <div class="ProductListItem--InfoBox">
          <Headline as="h3" class="ProductListItem--Title" size="sm">
            {this.title}
          </Headline>
          <RichText
            class="ProductListItem--Description"
            content={this.description}
          />
          <b>{this.price}</b>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
