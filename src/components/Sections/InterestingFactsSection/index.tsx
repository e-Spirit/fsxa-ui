import BaseComponent from "@/components/BaseComponent";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import Image from "@/components/Image";
import RichText from "@/components/RichText";
import Counter from "@/components/Counter";
import Container from "@/components/Container";
import Headline from "@/components/Headline";
import Layout, { LayoutItem } from "@/components/Layout";
import Paragraph from "@/components/Paragraph";
import { InterestingFactsSectionProps } from "@/types/sections";

@Component({
  name: "InterestingFactsSection",
})
class InterestingFactsSection extends BaseComponent<
  InterestingFactsSectionProps
> {
  @Prop({ required: true as true })
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
            dimensions={this.backgroundImage.dimensions}
            src={this.backgroundImage.src}
          />
        )}
        <Container>
          <Layout wrap>
            <LayoutItem width="full" lg={{ width: "6/12" }}>
              <div class="InterestingFactsSection--Content">
                <Headline
                  as="span"
                  size="xl"
                  weight="light"
                  data-testid={"interestingfactssection-tagline"}
                >
                  {this.tagline}
                </Headline>
                <Headline
                  as="h2"
                  class="text-highlight leading-none"
                  size="xxl"
                  data-testid={"interestingfactssection-headline"}
                >
                  {this.headline}
                </Headline>
                <Paragraph
                  size="lg"
                  weight="light"
                  data-testid={"interestingfactssection-text"}
                >
                  <RichText content={this.text} />
                </Paragraph>
              </div>
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "6/12" }}>
              <Layout>
                {this.counters.map(counter => (
                  <LayoutItem width="full" class="mt-20 lg:mt-32">
                    <Counter value={counter.value} label={counter.label} />
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
