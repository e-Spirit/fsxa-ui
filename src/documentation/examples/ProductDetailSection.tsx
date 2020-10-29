import Vue from "vue";
import Component from "vue-class-component";
import { Sections } from "fsxa-ui";
import { ProductDetailItem } from "@/types/sections";

const description =
  "The Smart Door Lock SRT-456 is a mechanical look which can be unlocked with a PIN or your smartphone. In addition you can use the camera with integrated face recognition to allow only certain people to unlock the door.";
const headline = "Smart Door Lock SRT-456";
const price = "$ 239 (RLP)";
const src =
  "https://enterprisedev.e-spirit.cloud/media/img/Bötzow-Brauerei_Gelände_1900.jpg";
const button = "search spezialized Dealer";
const headline2 = "Categories";
const headline3 = "Compatibilities";

const categories: ProductDetailItem[] = [
  {
    id: "1",
    label: "Door Locks",
  },
];
const compatibility: ProductDetailItem[] = [
  {
    id: "1",
    label: "Google Home",
  },
  {
    id: "2",
    label: "Amazon Alexa",
  },
  {
    id: "3",
    label: "Bosch Smart Home",
  },
];

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5 mb-10 ml-16">
        <Sections.ProductDetailSection
          description={description}
          headline={headline}
          price={price}
          buttonText={button}
          image={{ src: src, dimensions: { width: 5, height: 2 } }}
          compatibilities={compatibility}
          categories={categories}
          compatibilityHeadline={headline3}
          categoryHeadline={headline2}
        ></Sections.ProductDetailSection>
      </div>
    );
  }
}
