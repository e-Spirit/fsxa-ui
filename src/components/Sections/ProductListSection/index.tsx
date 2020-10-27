import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import Headline from "@/components/Headline";
import Layout from "@/components/Layout";
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
        image={item.image}
      />
    );
  }

  render() {
    console.log("items: ", this.items);

    return (
      <div class="py-12 md:py-16 lg:py-20 ProductListSection">
        <Headline size="xl">{this.headline}</Headline>
        <div class="ProductListSection--Separator" />
        <Layout wrap>{this.items.map(item => this.renderItem(item))}</Layout>
      </div>
    );
  }
}

export default ProductListSection;
