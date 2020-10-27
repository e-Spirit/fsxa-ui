import Vue from "vue";
import Component from "vue-class-component";

import NewsTeaserSection from "@/components/Sections/NewsTeaserSection";

const headline = "NewsTeaserSection Example Headline";

const items = [
  {
    title:
      "Dynamic Yield and e-Spirit Expand Partnership for Fast and Easy Delivery of Personalized Digital Experiences",
    date: "2020-10-27",
    description: "n1 description",
  },
  {
    title:
      "e-Spirit Partnerships on the Rise Due to Demand for Rapid Delivery of Content-Driven Customer Experiences",
    date: "2020-07-08",
    description: "n2 description",
  },
  {
    title:
      "e-Spirit Partners with commercetools to Deliver Immersive E-Commerce Experiences",
    date: "18.05.2020",
    description: "n3 description",
  },
];

@Component
export default class App extends Vue {
  currentItem: any = null;

  render() {
    return (
      <div>
        <NewsTeaserSection
          headline={headline}
          items={items}
          handleItemClick={newsItem => {
            this.currentItem = newsItem;
          }}
        ></NewsTeaserSection>
      </div>
    );
  }
}
