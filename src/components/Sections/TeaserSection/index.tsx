import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Container from "@/components/Container";
import Layout, { LayoutItem } from "@/components/Layout";
import Headline from "@/components/Headline";
import RichText from "@/components/RichText";
import Button from "@/components/Button";
import Image from "@/components/Image";
import { TeaserSectionProps } from "@/types/sections";

@Component({
  name: "TeaserSection",
})
class TeaserSection extends BaseComponent<
  TeaserSectionProps,
  {},
  {
    headline?: string;
    kicker?: string;
    text?: string;
  }
> {
  @Prop({ required: true }) headline!: TeaserSectionProps["headline"];
  @Prop({ required: true }) kicker!: TeaserSectionProps["kicker"];
  @Prop({ required: true }) text!: TeaserSectionProps["text"];
  @Prop({ required: false }) buttonText: TeaserSectionProps["buttonText"];
  @Prop({ required: false })
  handleButtonClick: TeaserSectionProps["handleButtonClick"];
  @Prop({ required: false })
  image: TeaserSectionProps["image"];

  render() {
    return (
      <div class="w-full bg-gray-100 text-black">
        <Container>
          <Layout wrap>
            <LayoutItem width="full" lg={{ width: "5/12" }}>
              {this.$scopedSlots.kicker ? (
                this.$scopedSlots.kicker(this.kicker)
              ) : (
                <Headline
                  as="h3"
                  size="lg"
                  weight="light"
                  data-testid={"teasersection-kicker"}
                >
                  {this.kicker}
                </Headline>
              )}
              {this.$scopedSlots.headline ? (
                this.$scopedSlots.headline(this.headline)
              ) : (
                <Headline size="xl" data-testid={"teasersection-headline"}>
                  <RichText content={this.headline} inline />
                </Headline>
              )}
              {this.$scopedSlots.text ? (
                this.$scopedSlots.text(this.text)
              ) : (
                <RichText
                  class="text-sm"
                  data-testid={"teasersection-text"}
                  content={this.text}
                />
              )}
              {this.buttonText && (
                <Button
                  data-testid={"teasersection-button"}
                  variant="animated"
                  handleClick={() =>
                    this.handleButtonClick && this.handleButtonClick()
                  }
                >
                  {this.buttonText}
                </Button>
              )}
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "7/12" }}>
              {this.image && (
                <Image
                  src={this.image.src}
                  dimensions={this.image.dimensions}
                  data-preview-id={this.image.previewId}
                  lazy
                  border
                  zoom
                />
              )}
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default TeaserSection;
