import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import Headline from "@/components/Headline";
import { ListSectionProps, ListSectionSlots } from "@/types/sections";
import Button from "@/components/Button";

@Component({
  name: "ListSection",
})
class ListSection<Item = any> extends BaseComponent<
  ListSectionProps<Item>,
  {},
  ListSectionSlots<Item>
> {
  @Prop() headline!: ListSectionProps<Item>["headline"];
  @Prop({ required: true }) items!: ListSectionProps<Item>["items"];
  @Prop()
  selectedFilters: ListSectionProps<Item>["selectedFilters"];
  @Prop() filters: ListSectionProps<Item>["filters"];
  @Prop()
  handleFilterChange: ListSectionProps<Item>["handleFilterChange"];

  handleFilterClick(key: string) {
    if (!this.selectedFilters || !this.handleFilterChange || !this.filters)
      return;
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
      <div class="py-12 md:py-16 lg:py-20 ListSection w-full">
        {this.$scopedSlots.headline && this.headline ? (
          this.$scopedSlots.headline(this.headline)
        ) : this.headline ? (
          <div>
            <Headline size="xl">{this.headline}</Headline>
            <div class="ListSection--Separator" />
          </div>
        ) : null}
        {this.filters
          ? this.filters.map(filterList => (
              <div class="space-x-1 mb-3">
                {filterList.map(filter =>
                  this.$scopedSlots.filter ? (
                    this.$scopedSlots.filter({
                      ...filter,
                      selected: (this.selectedFilters || []).includes(
                        filter.key,
                      ),
                      handleClick: this.handleFilterClick,
                    })
                  ) : (
                    <Button
                      variant={
                        (this.selectedFilters || []).includes(filter.key)
                          ? "tag-selected"
                          : "tag"
                      }
                      handleClick={() => this.handleFilterClick(filter.key)}
                    >
                      {filter.value}
                    </Button>
                  ),
                )}
              </div>
            ))
          : null}
        {this.$slots.default ? (
          this.$slots.default
        ) : (
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {this.items.map(item => this.$scopedSlots.item(item))}
          </div>
        )}
      </div>
    );
  }
}

export default ListSection;
