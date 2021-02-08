import Vue from "vue";
import Component from "vue-class-component";
import { Sections } from "fsxa-ui";
import { Accordion } from "@/components";
import { ProductProperty } from "@/types/sections";

const description =
  "The Smart Door Lock SRT-456 is a mechanical look which can be unlocked with a PIN or your smartphone. In addition you can use the camera with integrated face recognition to allow only certain people to unlock the door.";
const headline = "Smart Door Lock SRT-456";
const price = "$ 239 (RLP)";
const src1 =
  "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const src2 =
  "https://images.pexels.com/photos/259832/pexels-photo-259832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const button = "search specialized dealer";

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
    title: "Compatibility",
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

function handleClick() {
  console.log("Button clicked!");
}

@Component
export default class App extends Vue {
  render() {
    return (
      <Sections.ProductDetailSection
        description={description}
        headline={headline}
        price={price}
        handleButtonClick={handleClick}
        buttonText={button}
        images={[
          { src: src1, type: "image" },
          { src: src2, type: "image" },
        ]}
        propertyList={propertyList}
        scopedSlots={{
          additionalContent: () => (
            <div class="ui-mx-auto ui-w-full ui-px-6 ui-mb-4">
              <Accordion dark title="Delivery">
                <ul class="ui-list-disc ui-px-10 ui-py-4">
                  <li>mechanical lock</li>
                  <li>camera with integrated face recognition</li>
                  <li>wireless numpad</li>
                  <li>operation manual</li>
                </ul>
              </Accordion>
              <Accordion dark title="Compatibility">
                <ul class="ui-list-disc ui-px-10 ui-py-4">
                  <li>Google Home</li>
                  <li>Amazon Alexa</li>
                  <li>Bosch Smart Home</li>
                </ul>
              </Accordion>
            </div>
          ),
        }}
      />
    );
  }
}
