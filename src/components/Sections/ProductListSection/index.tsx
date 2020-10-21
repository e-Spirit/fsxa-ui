import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import Headline from "@/components/Headline";
import { ProductListSectionProps } from "@/types/sections";
import { ProductListItemProps } from "@/types/components";

@Component({
  name: "ProductListSection",
})
class ProductListSection extends BaseComponent<ProductListSectionProps> {
  @Prop({ required: true }) headline!: ProductListSectionProps["headline"];
  @Prop({ required: true }) items!: ProductListSectionProps["items"];

  renderItem(item: ProductListItemProps) {
    return (
      <li>
        Item: {item.title}, {item.description}
      </li>
    );
  }

  render() {
    console.log("items: ", this.items);

    return (
      <div class="py-12 md:py-16 lg:py-20">
        <Headline size="xl">{this.headline}</Headline>
        <ul>{this.items.map(item => this.renderItem(item))}</ul>
      </div>
    );
  }
}

export default ProductListSection;
