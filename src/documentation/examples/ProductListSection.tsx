import Vue from "vue";
import Component from "vue-class-component";

import ProductListSection from "@/components/Sections/ProductListSection";

const headline = "ProductList Example Headline";
const items = [
  { title: "Product 1", description: "p1 description", price: 99 },
  { title: "Product 2", description: "p2 description", price: 9.99 },
  { title: "Product 3", description: "p3 description" },
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
