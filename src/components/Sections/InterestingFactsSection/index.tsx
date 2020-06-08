import FSXABaseComponent from "@/components/FSXABaseComponent";
import { InterestingFactsSectionProps } from "@/types/sections";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import FSXAImage from "@/components/FSXAImage";
import FSXARichText from "@/components/FSXARichText";
import FSXACounter from "@/components/FSXACounter";
import FSXAContainer from "@/components/FSXAContainer";
import FSXARow from "@/components/FSXARow";
import FSXAHeadline from "@/components/FSXAHeadline";
import FSXACol from "@/components/FSXACol";
import { FSXAColWidths } from "@/types/fsxa-ui";

@Component({
  name: "InterestingFactsSection",
})
class InterestingFactsSection extends FSXABaseComponent<
  InterestingFactsSectionProps
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
      <div class="InterestingFactsSection py-12 md:py-16 lg:py-20">
        {this.backgroundImage && (
          <FSXAImage
            class="InterestingFactsSection--BackgroundImage"
            opacity="80"
            src={this.backgroundImage}
          />
        )}
        <FSXAContainer>
          <FSXARow>
            <FSXACol lg_width="6">
              <div class="InterestingFactsSection--Content">
                <FSXAHeadline as="span" size="xl" weight="light">
                  {this.tagline}
                </FSXAHeadline>
                <FSXAHeadline
                  as="h2"
                  class="text-highlight leading-none"
                  size="xxl"
                >
                  {this.headline}
                </FSXAHeadline>
                <FSXARichText
                  text={this.text}
                  class="text-lg font-light mb-6 text-white"
                />
              </div>
            </FSXACol>
            <FSXACol lg_width="6">
              <FSXARow>
                {this.counters.map(counter => (
                  <FSXACol
                    width={
                      (12 / this.counters.length).toString() as FSXAColWidths
                    }
                    class="mt-20 lg:mt-32"
                  >
                    <FSXACounter value={counter.value} label={counter.label} />
                  </FSXACol>
                ))}
              </FSXARow>
            </FSXACol>
          </FSXARow>
        </FSXAContainer>
      </div>
    );
  }
}
export default InterestingFactsSection;
