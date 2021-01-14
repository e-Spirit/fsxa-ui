import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Container from "@/components/Container";
import Layout, { LayoutItem } from "@/components/Layout";
import Headline from "@/components/Headline";
import RichText from "@/components/RichText";
import Button from "@/components/Button";
import Image from "@/components/Image";
import {
  TeaserSectionEventsWithOn,
  TeaserSectionProps,
  TeaserSectionSlots,
} from "@/types/sections";

@Component({
  name: "TeaserSection",
})
class TeaserSection extends BaseComponent<
  TeaserSectionProps,
  TeaserSectionEventsWithOn,
  TeaserSectionSlots
> {
  @Prop({ required: true }) headline!: TeaserSectionProps["headline"];
  @Prop({ required: true }) kicker!: TeaserSectionProps["kicker"];
  @Prop({ required: true }) text!: TeaserSectionProps["text"];
  @Prop({ required: false }) buttonText: TeaserSectionProps["buttonText"];
  @Prop({ required: false }) image: TeaserSectionProps["image"];

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
              {this.$scopedSlots.button
                ? this.$scopedSlots.button(this.buttonText)
                : this.buttonText && (
                    <Button
                      data-testid={"teasersection-button"}
                      variant="animated"
                      handleClick={() => this.$emit("click")}
                    >
                      {this.buttonText}
                    </Button>
                  )}
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "7/12" }}>
              {this.$scopedSlots.media
                ? this.$scopedSlots.media(this.image)
                : this.image && (
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
