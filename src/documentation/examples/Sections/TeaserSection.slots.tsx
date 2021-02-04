import Vue from "vue";
import Component from "vue-class-component";
import TeaserSection from "@/components/Sections/TeaserSection";
import { LineSeparator, Button } from "@/components";
const imageSrc =
  "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

@Component
export default class App extends Vue {
  render() {
    return (
      <TeaserSection
        headline="PEACE OF MIND"
        kicker="HOME SECURITY"
        text="A SECURITY SOLUTION FROM SMART LIVING PROIVIDES YOU PEACE OF MIND WITH INDUSTRY LEADING WHOLE-HOME PROTECTION. OUR AFFORDABLE SOLUTIONS THAT PROVIDE A SIMPLE START AND GROW WITH YOU.LIFE IS EASIER BECAUSE YOUR HOME SECURITY SYSTEM WILL INTERFACE WITH YOUR EXISTING SMART HOME ADDING SECURE AND INTELLIGENT INTERACTIONS TO FULLY ENHANCE YOUR COMFORT WHILE YOU'RE HOME & SAFE AND KEEP YOU AT EASE WHEN YOU ARE AWAY.PREPARE FOR THE UNEXPECTED WITH INDUSTRY LEADING BRANDS AND THE CHOICE OF THE EXPERTS."
        buttonText="MORE INFO"
        tagline="Security"
        onButtonClick={() => {
          return;
        }}
        media={{
          type: "image",
          src: imageSrc,
          previewId: "1000",
          alt: "Security Solution",
        }}
        scopedSlots={{
          kicker: kicker => (
            <div>
              <h3 class="ui-text-3xl ui-font-hairline ">{kicker}</h3>
              <LineSeparator height="1" />
            </div>
          ),
          headline: headline => {
            const [firstWord, ...rest] = headline.split(" ");
            return (
              <h1 class="ui-text-3xl">
                <span class="ui-text-highlight">{firstWord}</span>{" "}
                {rest.join(" ")}
              </h1>
            );
          },
          text: text => (
            <div class="md:ui-border-l-8 md:ui-pl-4 ui-border-gray-300">
              {text}
            </div>
          ),
          tagline: tagline => (
            <div class="ui-text-3xl ui-font-hairline ui-text-right ui-tracking-widest ui-text-gray-700">
              {tagline}
            </div>
          ),
          button: buttonText => <Button class="ui-mt-6">{buttonText}!</Button>,
          media: imageRef => <img src={imageRef.src} alt={imageRef.alt} />,
        }}
      />
    );
  }
}
