import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import Headline from "@/components/Headline";
import { ProductListSectionProps } from "@/types/sections";
import { ProductListItemProps } from "@/types/components";
import ProductListItem from "@/components/ProductListItem";

@Component({
  name: "ProductListSection",
})
class ProductListSection extends BaseComponent<ProductListSectionProps> {
  @Prop({ required: true }) headline!: ProductListSectionProps["headline"];
  @Prop({ required: true }) items!: ProductListSectionProps["items"];

  renderItem(item: ProductListItemProps) {
    return (
      <ProductListItem
        title={item.title}
        description={item.description}
        price={item.price}
      />
    );
  }

  render() {
    console.log("items: ", this.items);

    return (
      <div class="py-12 md:py-16 lg:py-20">
        <Headline size="xl">{this.headline}</Headline>
        {this.items.map(item => this.renderItem(item))}
        <div style="clear:both;"></div>
      </div>
    );
  }
}

export default ProductListSection;
