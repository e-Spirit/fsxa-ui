import { Component, Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import Container from "@/components/Container";
import Layout, { LayoutItem } from "@/components/Layout";
import Headline from "@/components/Headline";
import Button from "@/components/Button";
import Image from "@/components/Image";
import {
  TeaserSectionEventsWithOn,
  TeaserSectionProps,
  TeaserSectionSlots,
} from "@/types/sections";
import { ImageRef } from "@/types/fsxa-ui";

@Component({
  name: "TeaserSection",
})
class TeaserSection<MediaType = ImageRef> extends BaseComponent<
  TeaserSectionProps<MediaType>,
  TeaserSectionEventsWithOn,
  TeaserSectionSlots<MediaType>
> {
  @Prop({ required: true }) headline!: TeaserSectionProps<
    MediaType
  >["headline"];
  @Prop({ required: true }) kicker!: TeaserSectionProps<MediaType>["kicker"];
  @Prop({ required: true }) text!: TeaserSectionProps<MediaType>["text"];
  @Prop({ required: false }) buttonText: TeaserSectionProps<
    MediaType
  >["buttonText"];
  @Prop({ required: false }) media: TeaserSectionProps<MediaType>["media"];

  renderMedia() {
    if (this.$scopedSlots.media) {
      return this.$scopedSlots.media(this.media);
    }
    const typedImage = (this.media as any) as ImageRef;
    return (
      <Image
        data-testid={"teasersection-media"}
        src={typedImage.src}
        resolutions={typedImage.resolutions}
        sizes={`(min-width: ${this.breakpoints.lg}) calc(100vw / 12 * 7), 100vw`}
        data-preview-id={typedImage.previewId}
        lazy
        border
        zoom
      />
    );
  }

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
                  <div class="inline">{this.headline}</div>
                </Headline>
              )}
              {this.$scopedSlots.text ? (
                this.$scopedSlots.text(this.text)
              ) : (
                <div class="text-sm" data-testid="teasersection-text">
                  {this.text}
                </div>
              )}
              {this.$scopedSlots.button
                ? this.$scopedSlots.button(this.buttonText)
                : this.buttonText && (
                    <Button
                      data-testid={"teasersection-button"}
                      variant="animated"
                      handleClick={() => this.$emit("buttonClick")}
                    >
                      {this.buttonText}
                    </Button>
                  )}
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "7/12" }}>
              {this.media && this.renderMedia()}
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default TeaserSection;
