import Vue from "vue";
import Component from "vue-class-component";
import { Sections } from "fsxa-ui";
import { ProductDetailItem } from "@/types/sections";

const description = "test";
const headline = "headline";
const price = "12";
const src =
  "https://enterprisedev.e-spirit.cloud/media/img/Bötzow-Brauerei_Gelände_1900.jpg";
const button = "test";
const categories: ProductDetailItem[] = [
  {
    id: "1",
    label: "test",
  },
  {
    id: "2",
    label: "test2",
  },
];
const compatibility: ProductDetailItem[] = [
  {
    id: "1",
    label: "test",
  },
  {
    id: "2",
    label: "test2",
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
          image={{ src: src, dimensions: { width: 22, height: 22 } }}
          compatibility={compatibility}
          categories={categories}
        ></Sections.ProductDetailSection>
      </div>
    );
  }
}
