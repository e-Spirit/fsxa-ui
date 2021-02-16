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
  InterestingFactsSectionSlots,
} from "@/types/sections";

@Component({
  name: "InterestingFactsSection",
})
class InterestingFactsSection extends BaseComponent<
  InterestingFactsSectionProps,
  {},
  InterestingFactsSectionSlots
> {
  @Prop({ required: true })
  headline!: InterestingFactsSectionProps["headline"];
  @Prop({ required: true }) text!: InterestingFactsSectionProps["text"];
  @Prop()
  tagline!: InterestingFactsSectionProps["tagline"];
  @Prop()
  counters!: InterestingFactsSectionProps["counters"];
  @Prop() backgroundImage: InterestingFactsSectionProps["backgroundImage"];

  render() {
    return (
      <div class="InterestingFactsSection ui-py-12 md:ui-py-16 lg:ui-py-20 ui-text-white">
        {this.backgroundImage && (
          <Image
            class="InterestingFactsSection--BackgroundImage"
            darken={75}
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
                    class="ui-text-highlight ui-leading-none"
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
            {this.counters && this.counters.length > 0 ? (
              <LayoutItem width="full" lg={{ width: "6/12" }}>
                <Layout wrap>
                  {this.counters.map((counter, index) => (
                    <LayoutItem class="ui-mt-20 lg:ui-mt-32">
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
            ) : null}
          </Layout>
        </Container>
      </div>
    );
  }
}
export default InterestingFactsSection;
