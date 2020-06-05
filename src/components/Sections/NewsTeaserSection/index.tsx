import Component from "vue-class-component";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { NewsTeaserSectionProps } from "@/types/sections";
import FSXANewsTeaserItem from "@/components/FSXANewsTeaserItem";
import { Prop } from "vue-property-decorator";
import "./style.css";
import FSXAHeadline from "@/components/FSXAHeadline";
import FSXAContainer from "@/components/FSXAContainer";

@Component({
  name: "NewsTeaserSection",
})
class NewsTeaserSection extends FSXABaseComponent<NewsTeaserSectionProps> {
  @Prop({ required: true }) headline!: NewsTeaserSectionProps["headline"];
  @Prop({ required: true }) items!: NewsTeaserSectionProps["items"];
  @Prop({ required: true })
  handleItemClick!: NewsTeaserSectionProps["handleItemClick"];

  render() {
    // loop over first 3 items
    return (
      <div class="NewsTeaserSection">
        <FSXAContainer>
          <FSXAHeadline as="h2" class="text-4xl uppercase font-bold mb-8">
            {this.headline}
          </FSXAHeadline>
          <div class="NewsTeaserSection--Separator" />
          <div class="w-full flex space-x-8 space-x-reverse flex-col lg:flex-row-reverse py-10">
            <div class="w-full lg:w-1/2">
              <FSXANewsTeaserItem
                props={{
                  ...this.items[0],
                  handleClick: () => this.handleItemClick(this.items[0]),
                }}
                latest
              />
            </div>
            <div class="w-full lg:w-1/2 space-y-8 mt-24 lg:mt-0">
              <div class="w-full" style={{ height: "250px" }}>
                <FSXANewsTeaserItem
                  props={{
                    ...this.items[1],
                    handleClick: () => this.handleItemClick(this.items[0]),
                  }}
                />
              </div>
              <div class="w-full" style={{ height: "250px" }}>
                <FSXANewsTeaserItem
                  props={{
                    ...this.items[2],
                    handleClick: () => this.handleItemClick(this.items[0]),
                  }}
                />
              </div>
            </div>
          </div>
        </FSXAContainer>
      </div>
    );
  }
}
export default NewsTeaserSection;
