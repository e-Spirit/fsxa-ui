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
    category: "robots",
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
    category: "numbers",
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
    category: "numbers",
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
    category: "great",
  },
];

const filters = [
  [
    {
      key: "robots",
      value: "Robots",
    },
    {
      key: "great",
      value: "Great Products",
    },
    {
      key: "numbers",
      value: "Product Numbers",
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
        scopedSlots={{
          item: item => (
            <div class="ui-w-full ui-h-64 ui-bg-gray-200 ui-flex ui-items-center ui-justify-center ui-rounded-md">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ),
          headline: headline => <h1 class="ui-text-espirit">{headline}</h1>,
          filter: filter => (
            <button
              onClick={() => filter.handleClick(filter.key)}
              class={filter.selected ? "ui-bg-blue-300" : ""}
            >
              {filter.value}
            </button>
          ),
        }}
      />
    );
  }
}
