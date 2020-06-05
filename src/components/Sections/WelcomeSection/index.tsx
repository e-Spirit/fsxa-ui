import Component from "vue-class-component";
import "./style.css";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import FSXARichText from "@/components/FSXARichText";
import FSXAButton from "@/components/FSXAButton";
import FSXAImage from "@/components/FSXAImage";
import { Prop } from "vue-property-decorator";
import { WelcomeSectionProps } from "@/types/sections";

@Component({
  name: "WelcomeSection",
})
class WelcomeSection extends FSXABaseComponent<WelcomeSectionProps> {
  @Prop({ required: true }) headline!: WelcomeSectionProps["headline"];
  @Prop({ required: true })
  jumboHeadline!: WelcomeSectionProps["jumboHeadline"];
  @Prop({ required: true }) kicker!: WelcomeSectionProps["kicker"];
  @Prop({ required: true }) text!: WelcomeSectionProps["text"];
  @Prop() image: WelcomeSectionProps["image"];

  render() {
    return (
      <div class="w-full pt-6 md:pt-12 lg:pt-24 pb-24 md:pb-12 lg:pb-24 bg-gray-100 text-black">
        <div class="container mx-auto flex flex-col md:flex-row px-4 md:px-6 lg:px-8 sm:items-center">
          <div class="md:w-5/12 px-4">
            <span class="uppercase font-light text-2xl lg:text-3xl">
              {this.kicker}
            </span>
            <FSXARichText
              class="text-3xl lg:text-4xl font-semibold mt-2 lg:mt-5 mb-3 lg:mb-6"
              text={this.headline}
            />
            <FSXARichText class="text-xs mb-6" text={this.text} />
            <FSXAButton
              variant="animated"
              handleClick={() => console.log("Clicked")}
            >
              Read More
            </FSXAButton>
          </div>
          <div class="md:w-7/12 px-4 mt-16 md:mt-0">
            {this.image ? (
              <div class="WelcomeSection--ImageWrapper">
                <FSXAImage
                  data-preview-id={this.image.previewId}
                  src={this.image.src}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default WelcomeSection;
