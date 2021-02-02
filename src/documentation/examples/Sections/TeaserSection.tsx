import Vue from "vue";
import Component from "vue-class-component";
import TeaserSection from "@/components/Sections/TeaserSection";
const imageSrc =
  "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <TeaserSection
          headline="Peace of Mind"
          kicker="Home Security"
          text="A security solution from Smart Living provides you peace of mind with industry leading whole-home protection. Our affordable solutions that provide a simple start and grow with you. Life is easier because your home security system will interface with your existing smart home adding secure and intelligent interactions to fully enhance your comfort while you're home & safe and keep you at ease when you are away. Prepare for the unexpected with industry leading brands and the choice of the experts."
          buttonText="see more"
          onButtonClick={() => {
            return;
          }}
          tagline="Security Solution"
          media={{
            type: "image",
            src: imageSrc,
            previewId: "1000",
            alt: "Security Solution",
          }}
        />
      </div>
    );
  }
}
