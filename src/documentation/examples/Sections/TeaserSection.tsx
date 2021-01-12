import Vue from "vue";
import Component from "vue-class-component";
import TeaserSection from "@/components/Sections/TeaserSection";
const imageSrc =
  "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

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
            type: "image",
            src: imageSrc,
            previewId: "1000",
          }}
        />
      </div>
    );
  }
}
