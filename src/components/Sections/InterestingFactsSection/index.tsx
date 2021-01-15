import BaseComponent from "@/components/BaseComponent";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import Image from "@/components/Image";
import Counter from "@/components/Counter";
import Container from "@/components/Container";
import Headline from "@/components/Headline";
import Layout, { LayoutItem } from "@/components/Layout";
import Paragraph from "@/components/Paragraph";
import {
  InterestingFactsSectionProps,
  InterestingFactsSectionEvents,
  InterestingFactsSectionSlots,
} from "@/types/sections";

@Component({
  name: "InterestingFactsSection",
})
class InterestingFactsSection extends BaseComponent<
  InterestingFactsSectionProps,
  InterestingFactsSectionEvents,
  InterestingFactsSectionSlots
> {
  @Prop({ required: true })
  headline!: InterestingFactsSectionProps["headline"];
  @Prop({ required: true }) text!: InterestingFactsSectionProps["text"];
  @Prop({ required: true })
  tagline!: InterestingFactsSectionProps["tagline"];
  @Prop({ required: true })
  counters!: InterestingFactsSectionProps["counters"];
  @Prop() backgroundImage: InterestingFactsSectionProps["backgroundImage"];

  render() {
    return (
      <div class="InterestingFactsSection py-12 md:py-16 lg:py-20 text-white">
        {this.backgroundImage && (
          <Image
            class="InterestingFactsSection--BackgroundImage"
            opacity="80"
            data-preview-id={this.backgroundImage.previewId}
            src={this.backgroundImage.src}
            resolutions={this.backgroundImage.resolutions}
            sizes="100vw"
          />
        )}
        <Container>
          <Layout wrap>
            <LayoutItem width="full" lg={{ width: "6/12" }}>
              <div class="InterestingFactsSection--Content">
                {this.$scopedSlots.tagline ? (
                  this.$scopedSlots.tagline(this.tagline)
                ) : (
                  <Headline
                    as="span"
                    size="xl"
                    weight="light"
                    data-testid={"interestingfactssection-tagline"}
                  >
                    {this.tagline}
                  </Headline>
                )}
                {this.$scopedSlots.headline ? (
                  this.$scopedSlots.headline(this.headline)
                ) : (
                  <Headline
                    as="h2"
                    class="text-highlight leading-none"
                    size="xxl"
                    data-testid={"interestingfactssection-headline"}
                  >
                    {this.headline}
                  </Headline>
                )}

                {this.$scopedSlots.text ? (
                  this.$scopedSlots.text(this.text)
                ) : (
                  <Paragraph
                    size="lg"
                    weight="light"
                    data-testid={"interestingfactssection-text"}
                  >
                    {this.text}
                  </Paragraph>
                )}
              </div>
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "6/12" }}>
              <Layout>
                {this.counters.map((counter, index) => (
                  <LayoutItem width="full" class="mt-20 lg:mt-32">
                    {this.$scopedSlots.counter ? (
                      this.$scopedSlots.counter(counter)
                    ) : (
                      <Counter
                        value={counter.value}
                        label={counter.label}
                        data-testid={`interestingfactssection-counter-${index}`}
                      />
                    )}
                  </LayoutItem>
                ))}
              </Layout>
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default InterestingFactsSection;
