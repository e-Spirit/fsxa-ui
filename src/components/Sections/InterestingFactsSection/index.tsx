import FSXABaseComponent from "@/components/FSXABaseComponent";
import { InterestingFactsSectionProps } from "@/types/sections";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import FSXAImage from "@/components/FSXAImage";
import FSXARichText from "@/components/FSXARichText";
import FSXACounter from "@/components/FSXACounter";
import FSXAContainer from "@/components/FSXAContainer";

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
    console.log("InterestingFactsSection Props", this.$props);
    return (
      <div class="InterestingFactsSection">
        {this.backgroundImage && (
          <FSXAImage
            class="InterestingFactsSection--BackgroundImage"
            opacity="80"
            src={this.backgroundImage}
          />
        )}
        <FSXAContainer>
          <div class="w-full flex flex-col items-center lg:flex-row relative">
            <div class="w-full lg:w-1/2 px-4">
              <div class="InterestingFactsSection--Content">
                <span class="font-light text-4xl">{this.tagline}</span>
                <h2 class="text-highlight text-5xl font-bold leading-none mt-6 mb-5">
                  {this.headline}
                </h2>
                <FSXARichText
                  text={this.text}
                  class="text-lg font-light mb-6 text-white"
                />
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 flex mt-16 lg:mt-0">
              {this.counters.map(counter => (
                <div
                  class="flex-1 flex-grow"
                  data-preview-id={counter.previewId}
                >
                  <FSXACounter value={counter.value} label={counter.label} />
                </div>
              ))}
            </div>
          </div>
        </FSXAContainer>
      </div>
    );
  }
}
export default InterestingFactsSection;
