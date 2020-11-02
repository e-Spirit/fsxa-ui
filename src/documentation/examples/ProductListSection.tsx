import Vue from "vue";
import Component from "vue-class-component";

import ProductListSection from "@/components/Sections/ProductListSection";

const headline = "ProductList Example Headline";

const items = [
  {
    title: "Product 1",
    description:
      "The D1R7-TR4P cleaning robot helps you keeping your house free of dirt. It's low height and flexible design means no space will be left out.",
    price: "$99",
    image: {
      src:
        "https://images.pexels.com/photos/4013157/pexels-photo-4013157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "https://www.pexels.com/photo/blue-and-yellow-robot-toy-4013157/",
  },
  {
    title: "Product 2",
    description: "p2 description",
    price: "9.99 €",
    image: {
      src:
        "https://images.pexels.com/photos/1068349/pexels-photo-1068349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "http://e-spirit.com",
  },
  {
    title: "Product 3",
    description: "p3 description",
    image: {
      src:
        "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "http://e-spirit.com",
    price: "free",
  },
  {
    title: "Product 4 - This has a longer name",
    description: "p4 is a great product",
    price: "999",
    image: {
      src:
        "https://images.pexels.com/photos/1269930/pexels-photo-1269930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "http://e-spirit.com",
  },
];

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <ProductListSection headline={headline} items={items} />
      </div>
    );
  }
}
