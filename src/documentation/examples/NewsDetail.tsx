import { SocialElement } from "@/types/fsxa-ui";
import { NewsDetail, Quote } from "fsxa-ui";
import Vue from "vue";
import Component from "vue-class-component";

const tags = [{ label: "Mobility" }, { label: "Technology" }];
const image = {
  src: "https://enterprisedev.e-spirit.cloud/media/img/Bötzow-Brauerei_Gelände_1900.jpg",
};
@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <NewsDetail
          headline="Futuring Human Mobility: Preparing the future for human mobility"
          teaser="Berlin has „a special intensity“ says architect David Chipperfield at the opening of the exhibition „Futuring Human Mobility“ at the Bötzow site."
          image={image}
          date={new Date(2020, 0, 18).toLocaleDateString()}
          author="Max Mustermann"
          tags={tags}
          handleTagClick={(tag) => console.log("clicked: " + tag.label)}
          handleReturnClick={() => console.log("return")}
          returnText="Return"
          social={{
            handleSocialClick: (socialItem: SocialElement) =>
              alert(socialItem.title),
            title: "Social Media",
            items: [
              {
                title: "Facebook",
                id: 1,
              },
              {
                title: "Twitter",
                id: 2,
              },
              {
                title: "Instagram",
                id: 3,
              },
            ],
          }}
        >
          <div>
            <p>
              On Thursday evening, star architect David Chipperfield, publisher
              Gerhard Steidl, science journalist Rangar Yogeshwar and
              Tagesspiegel editor-in-chief Lorenz Maroldt looked into the
              distant future together with Otto Bocks managing director Prof.
              Hans Georg Näder. They met for the opening of the exhibition „The
              Future of Human Mobility“ at the Bötzow Brewery in Prenzlauer
              Berg.
            </p>
            <Quote>
              The chimney is decorated in pink letters with the slogan
              „Futuring“ by the artist duo Eva and Adele. It points to the
              current headquarters of Otto Bock, one of the market leaders in
              medical technology.
            </Quote>
            <p>
              Otto Bock was founded 100 years ago in Berlin and today employs
              7000 people. The company’s goal is to give people back their
              complete mobility. According to Prof. Näder, however, the
              anniversary is not meant to be the usual review of what has been
              achieved, but rather to look into the future and to show visions
              for human mobility. Especially with regard to artificial
              intelligence. The result is a major work entitled „Futuring Human
              Mobility“ and a matching exhibition. This can be seen until March
              and is intended to attract more people to the Bötzow site. Due to
              extensive restoration work, these have recently become rather
              quiet.
            </p>
            <Quote side="right">
              Prof. Näder first discovered the old brewery on a full moon night,
              coming from Soho House. He is an entrepreneur in the third
              generation and always thinks positively. And he sees digital
              transformation as a great opportunity for mankind.
            </Quote>
          </div>
        </NewsDetail>
      </div>
    );
  }
}
