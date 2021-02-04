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
          headline="test"
          kicker="kicker"
          text="test1"
          buttonText="click me"
          tagline="text"
          onButtonClick={() => {
            return;
          }}
          media={{
            type: "image",
            src: imageSrc,
            previewId: "1000",
          }}
          scopedSlots={{
            kicker: txt => (
              <h3 class="Headline ui-italic" data-testid="teasersection-kicker">
                {txt}
              </h3>
            ),
            headline: txt => (
              <h1 class="Headline ui-italic ui-leading-none">{txt}</h1>
            ),
            text: txt => (
              <div>
                <b>Introduction: </b>
                {txt}
              </div>
            ),
            button: txt => <div class="ui-mt-6">Don't... {txt}!</div>,
            media: imageRef => (
              <img src={imageRef.src} alt="Alternative text" />
            ),
          }}
        />
      </div>
    );
  }
}
