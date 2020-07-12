import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import Headline from "@/components/Headline";
import Layout, { LayoutItem } from "@/components/Layout";
import NewsTeaserItem from "@/components/NewsTeaserItem";
import Container from "@/components/Container";
import { NewsTeaserSectionProps } from "@/types/sections";
// eslint-disable-next-line
const ImageSrc = require("./../../../assets/dots.png");

@Component({
  name: "NewsTeaserSection",
})
class NewsTeaserSection extends BaseComponent<NewsTeaserSectionProps> {
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
        <Container>
          <Headline as="h2" size="lg">
            {this.headline}
          </Headline>
          <div class="NewsTeaserSection--Separator" />
          <Layout wrap>
            <LayoutItem width="full" lg={{ width: "1/2" }}>
              <div class="w-full h-64 mb-4 md:mb-12">
                <NewsTeaserItem
                  title={this.items[0].title}
                  date={this.items[0].date}
                  description={this.items[0].description}
                  handleClick={() => this.handleItemClick(this.items[0])}
                  image={this.items[0].image}
                />
              </div>
              <div class="w-full h-64">
                <NewsTeaserItem
                  title={this.items[1].title}
                  date={this.items[1].date}
                  description={this.items[1].description}
                  handleClick={() => this.handleItemClick(this.items[1])}
                  image={this.items[1].image}
                />
              </div>
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "1/2" }}>
              <NewsTeaserItem
                title={this.items[2].title}
                date={this.items[2].date}
                description={this.items[2].description}
                handleClick={() => this.handleItemClick(this.items[2])}
                image={this.items[2].image}
                latest
              />
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default NewsTeaserSection;
