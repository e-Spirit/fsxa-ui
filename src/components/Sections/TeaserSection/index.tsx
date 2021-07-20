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
import "./style.css";

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
  @Prop({ required: false }) tagline?: TeaserSectionProps["tagline"];
  @Prop({ required: false }) buttonText?: TeaserSectionProps["buttonText"];
  @Prop({ required: false }) media?: TeaserSectionProps["media"];

  renderMedia() {
    if (this.$scopedSlots.media) {
      if (this.media) {
        return this.$scopedSlots.media(this.media);
      }
    }
    const typedImage = this.media as any as ImageRef;
    return (
      <div class="teasersection-media ui-relative md:ui-mx-8 ui-mt-4 md:ui-mt-0 lg:ui-pl-0">
        <Image
          data-testid={"teasersection-media"}
          src={typedImage.src}
          alt={typedImage.alt}
          resolutions={typedImage.resolutions}
          sizes={`(min-width: ${this.breakpoints.lg}) calc(100vw / 12 * 7), 100vw`}
          data-preview-id={typedImage.previewId}
          lazy
          border
          zoom
        />
      </div>
    );
  }

  render() {
    return (
      <div class="ui-w-full ui-bg-gray-100 ui-text-black">
        <Container>
          <Layout wrap>
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              xl={{ width: "5/12" }}
            >
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
                  <div class="ui-inline">{this.headline}</div>
                </Headline>
              )}
              {this.$scopedSlots.text ? (
                this.$scopedSlots.text(this.text)
              ) : (
                <div
                  class="ui-text-sm ui-uppercase md:ui-pr-6 lg:ui-pr-8"
                  data-testid="teasersection-text"
                >
                  {this.text}
                </div>
              )}
              {this.$scopedSlots.button && this.buttonText
                ? this.$scopedSlots.button(this.buttonText)
                : this.buttonText && (
                    <Button
                      class="ui-my-2 lg:ui-my-3"
                      data-testid={"teasersection-button"}
                      variant="animated"
                      handleClick={() => this.$emit("buttonClick")}
                    >
                      {this.buttonText}
                    </Button>
                  )}
            </LayoutItem>
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              xl={{ width: "7/12" }}
            >
              {this.media && this.renderMedia()}
              {this.$scopedSlots.tagline && this.tagline ? (
                this.$scopedSlots.tagline(this.tagline)
              ) : this.tagline ? (
                <div class="ui-mt-10 ui-text-2xl  md:ui-text-6xl ui-text-gray-400 ui-text-right ui-border-black ui-border-r-8 ui-pr-4 ui--ml-20 ui-uppercase">
                  {this.tagline}
                </div>
              ) : null}
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default TeaserSection;
