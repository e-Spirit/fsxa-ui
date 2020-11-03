import Vue from "vue";
import Component from "vue-class-component";

import ProductListSection from "@/components/Sections/ProductListSection";
import { Loader } from "@/components";

const headline = "ProductList Example Headline";

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
      <div>
        <ProductListSection
          headline={headline}
          items={[]}
          filters={filters}
          handleFilterChange={selectedFilters =>
            (this.selectedFilters = selectedFilters)
          }
          selectedFilters={this.selectedFilters}
        >
          <div class="w-full h-64 relative flex justify-center items-center">
            <Loader />
          </div>
        </ProductListSection>
      </div>
    );
  }
}
