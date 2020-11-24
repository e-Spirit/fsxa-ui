import Vue from "vue";
import Component from "vue-class-component";

import ListSection from "@/components/Sections/ListSection";

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
    url: "#",
  },
  {
    title: "Product 2",
    description: "p2 description",
    price: "9.99 €",
    image: {
      src:
        "https://images.pexels.com/photos/1068349/pexels-photo-1068349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "#",
  },
  {
    title: "Product 3",
    description: "p3 description",
    image: {
      src:
        "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    url: "#",
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
    url: "#",
  },
];

const filters = [
  [
    {
      key: "news",
      value: "News",
    },
    {
      key: "events",
      value: "Events",
    },
    {
      key: "business",
      value: "Business",
    },
  ],
  [
    {
      key: "usa",
      value: "USA",
    },
    {
      key: "europe",
      value: "Europe",
    },
    {
      key: "asia",
      value: "Asia",
    },
  ],
];

@Component
export default class App extends Vue {
  selectedFilters: string[] = [];

  render() {
    return (
      <ListSection
        headline="Custom Item - Example 2"
        items={items}
        filters={filters}
        selectedFilters={this.selectedFilters}
        handleFilterChange={selectedFilters =>
          (this.selectedFilters = selectedFilters)
        }
        renderItem={item => (
          <div class="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md">
            {item.title}
          </div>
        )}
      />
    );
  }
}
