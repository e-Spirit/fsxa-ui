import Component from "vue-class-component";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { NewsTeaserSectionProps } from "@/types/sections";
import FSXANewsTeaserItem from "@/components/FSXANewsTeaserItem";
import { Prop } from "vue-property-decorator";
import "./style.css";
import FSXAHeadline from "@/components/FSXAHeadline";
import FSXAContainer from "@/components/FSXAContainer";
import FSXARow from "@/components/FSXARow";
import FSXACol from "@/components/FSXACol";
// eslint-disable-next-line
const ImageSrc = require("./../../../assets/dots.png");

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
    if (this.items.length < 3) return null;
    return (
      <div
        class="py-12 md:py-16 lg:py-20"
        style={{ background: `url(${ImageSrc})` }}
      >
        <FSXAContainer>
          <FSXAHeadline as="h2" class="text-4xl uppercase font-bold mb-8">
            {this.headline}
          </FSXAHeadline>
          <div class="NewsTeaserSection--Separator" />
          <FSXARow>
            <FSXACol width="12" lg_width="6">
              <div class="w-full h-64 mb-4 md:mb-12">
                <FSXANewsTeaserItem
                  title={this.items[0].title}
                  date={this.items[0].date}
                  description={this.items[0].description}
                  handleClick={() => this.handleItemClick(this.items[0])}
                  image={this.items[0].image}
                />
              </div>
              <div class="w-full h-64">
                <FSXANewsTeaserItem
                  title={this.items[1].title}
                  date={this.items[1].date}
                  description={this.items[1].description}
                  handleClick={() => this.handleItemClick(this.items[1])}
                  image={this.items[1].image}
                />
              </div>
            </FSXACol>
            <FSXACol width="12" lg_width="6">
              <FSXANewsTeaserItem
                title={this.items[2].title}
                date={this.items[2].date}
                description={this.items[2].description}
                handleClick={() => this.handleItemClick(this.items[2])}
                image={this.items[2].image}
                latest
              />
            </FSXACol>
          </FSXARow>
        </FSXAContainer>
      </div>
    );
  }
}
export default NewsTeaserSection;
