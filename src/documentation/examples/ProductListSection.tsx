import Vue from "vue";
import Component from "vue-class-component";

import ProductListSection from "@/components/Sections/ProductListSection";

const headline = "ProductList Example Headline";

const items = [
  {
    title: "Product 1",
    description: "p1 description",
    price: 99,
    image: {
      src:
        "https://enterprisedev.e-spirit.cloud/smartlivingglobal/media/images/product-images/Vacuum-cleaner-robot-black_product_teaser.jpg",
    },
  },
  {
    title: "Product 2",
    description: "p2 description",
    price: 9.99,
    image: {
      src:
        "https://enterprisedev.e-spirit.cloud/smartlivingglobal/media/images/product-images/smart-door-lock-round_product_teaser.jpg",
    },
  },
  {
    title: "Product 3",
    description: "p3 description",
    image: {
      src:
        "https://enterprisedev.e-spirit.cloud/smartlivingglobal/media/images/product-images/test_speaker_2_product_teaser.jpg",
    },
  },
  {
    title: "Product 4",
    description: "p4 is a great product",
    price: 999,
    image: {
      src:
        "https://enterprisedev.e-spirit.cloud/smartlivingglobal/media/images/product-images/WLAN-powerplug_product_teaser.jpg",
    },
  },
];

@Component
export default class App extends Vue {
  currentItem: any = null;

  render() {
    return (
      <div>
        <ProductListSection
          headline={headline}
          items={items}
        ></ProductListSection>
      </div>
    );
  }
}
