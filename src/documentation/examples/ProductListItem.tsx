import Vue from "vue";
import Component from "vue-class-component";
import ProductListItem from "@/components/ProductListItem";

const product = {
  title: "Product 1",
  description:
    "The D1R7-TR4P cleaning robot helps you keeping your house free of dirt. It's low height and flexible design means no space will be left out.",
  price: "$99",
  image: {
    src:
      "https://images.pexels.com/photos/4013157/pexels-photo-4013157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  url: "#",
};

const handleClick = (item: any) => {
  console.log("Item click... ", item);
};

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="flex items-center justify-center">
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <ProductListItem
            title={product.title}
            description={product.description}
            price={product.price}
            image={{
              type: "image",
              ...product.image,
            }}
            url={product.url}
            handleClick={handleClick.bind(null, product)}
          />
        </div>
      </div>
    );
  }
}
