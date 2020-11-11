import { Component } from "vue-property-decorator";
import Vue from "vue";
import { ProductProperty } from "@/types/sections";
import ProductDetailSection from "./components/Sections/ProductDetailSection";

const description =
  "The Smart Door Lock SRT-456 is a mechanical look which can be unlocked with a PIN or your smartphone. In addition you can use the camera with integrated face recognition to allow only certain people to unlock the door.";
const headline = "Smart Door Lock SRT-456";
const price = "$ 239 (RLP)";
const src1 =
  "https://enterprisedev.e-spirit.cloud/media/img/Bötzow-Brauerei_Gelände_1900.jpg";
const src2 =
  "https://enterprisedev.e-spirit.cloud/smartlivingglobal/Images/Product-Images/Smart-door-lock-round_product_teaser.jpg";
const button = "search specialized Dealer";

const propertyList: ProductProperty[] = [
  {
    title: "Categories",
    properties: [
      {
        id: "1",
        name: "Door Locks",
      },
    ],
  },
  {
    title: "Compatibilities",
    properties: [
      {
        id: "1",
        name: "Google Home",
      },
      {
        id: "2",
        name: "Amazon Alexa",
      },
      {
        id: "3",
        name: "Bosch Smart Home",
      },
    ],
  },
];

const foldableContentList: Record<string, string> = {
  Delivery: `<ul class="list-disc px-10 py-4"><li>mechanical lock</li><li>camera with integrated face recognition</li><li>wireless numpad</li><li>operation manual</li></ul>`,
  "Installation instructions": "<p>Fix it at the door. Ready.</p>",
  Compatibilities: `<ul class="list-disc px-10 py-4"><li>Google Home</li><li>Amazon Alexa</li><li>Bosch Smart Home</li></ul>`,
};

function handleClick() {
  console.log(`Clicked on `);
}

@Component
class App extends Vue {
  render() {
    return (
      <ProductDetailSection
        description={description}
        headline={headline}
        price={price}
        handleButtonClick={handleClick}
        buttonText={button}
        images={[
          { src: src1, dimensions: { width: 5, height: 2 } },
          { src: src2, dimensions: { width: 5, height: 2 } },
        ]}
        propertyList={propertyList}
        foldableContentList={foldableContentList}
      />
    );
  }
}
export default App;
