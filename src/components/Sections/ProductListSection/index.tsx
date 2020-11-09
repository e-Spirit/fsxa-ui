import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import Headline from "@/components/Headline";
import { ProductListSectionProps } from "@/types/sections";
import ProductListItem from "@/components/ProductListItem";
import Button from "@/components/Button";

@Component({
  name: "ProductListSection",
})
class ProductListSection extends BaseComponent<ProductListSectionProps> {
  @Prop({ required: true }) headline!: ProductListSectionProps["headline"];
  @Prop({ required: true }) items!: ProductListSectionProps["items"];
  @Prop({ required: true })
  selectedFilters!: ProductListSectionProps["selectedFilters"];
  @Prop({ required: true }) filters!: ProductListSectionProps["filters"];
  @Prop({ required: true })
  handleFilterChange!: ProductListSectionProps["handleFilterChange"];
  @Prop({ required: true })
  handleItemClick!: ProductListSectionProps["handleItemClick"];

  handleFilterClick(key: string) {
    const index = this.selectedFilters.indexOf(key);
    if (index !== -1) {
      const newFilters = this.selectedFilters.slice(0);
      newFilters.splice(index, 1);
      this.handleFilterChange(newFilters);
    } else {
      this.handleFilterChange([...this.selectedFilters, key]);
    }
  }

  render() {
    return (
      <div class="py-12 md:py-16 lg:py-20 ProductListSection w-full">
        <Headline size="xl">{this.headline}</Headline>
        <div class="ProductListSection--Separator" />
        {this.filters &&
          this.filters.map(filterList => (
            <div class="space-x-1 mb-3">
              {filterList.map(filter => (
                <Button
                  variant={
                    this.selectedFilters.includes(filter.key)
                      ? "tag-selected"
                      : "tag"
                  }
                  handleClick={() => this.handleFilterClick(filter.key)}
                >
                  {filter.value}
                </Button>
              ))}
            </div>
          ))}
        {this.$slots.default ? (
          this.$slots.default
        ) : (
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {this.items.map(item => (
              <ProductListItem
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                url={item.url}
                handleClick={this.handleItemClick.bind(this, item)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ProductListSection;
