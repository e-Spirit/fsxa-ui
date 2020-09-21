import Vue from "vue";
import Component from "vue-class-component";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";

const text =
  "Trees get lonely too, so we'll give him a little friend. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. No worries. No cares. Just float and wait for the wind to blow you around. La- da- da- da- dah. Just be happy.";
const counter = [
  {
    value: 12,
    label: "test",
  },
  {
    value: 222,
    label: "test2",
  },
];
const imageSrc =
  "https://enterpriseprod.e-spirit.cloud/smartliving/media/images/Content/Couple-with-tablet-2_welcome_slider.jpg";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        <InterestingFactsSection
          headline="test"
          text={text}
          tagline="123"
          counters={counter}
          backgroundImage={{
            src: imageSrc,
            dimensions: { width: 400, height: 400 },
            previewId: "1000",
          }}
        />
      </div>
    );
  }
}
