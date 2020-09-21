import Vue from "vue";
import Component from "vue-class-component";
import TeaserSection from "@/components/Sections/TeaserSection";
const imageSrc =
  "https://enterpriseprod.e-spirit.cloud/smartliving/media/images/Content/Couple-with-tablet-2_welcome_slider.jpg";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        <TeaserSection
          headline="test"
          kicker="kicker"
          text="test1"
          buttonText="click me"
          handleButtonClick={() => {
            return;
          }}
          tagline="text"
          image={{
            src: imageSrc,
            dimensions: { width: 400, height: 400 },
            previewId: "1000",
          }}
        />
      </div>
    );
  }
}
