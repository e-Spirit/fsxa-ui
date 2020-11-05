import Vue from "vue";
import Component from "vue-class-component";

import ProductListSection from "@/components/Sections/ProductListSection";
import { Loader } from "@/components";

const headline = "ProductList (Custom Loader) Example Headline";

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
          handleItemClick={() => console.log("return something else")}
        >
          <div class="w-full h-64 relative flex justify-center items-center">
            <Loader />
          </div>
        </ProductListSection>
      </div>
    );
  }
}
