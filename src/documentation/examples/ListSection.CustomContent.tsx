import Vue from "vue";
import Component from "vue-class-component";

import ListSection from "@/components/Sections/ListSection";
import { Loader } from "@/components";

const headline = "List (Custom Loader) Example Headline";

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
        <ListSection
          headline={headline}
          items={[]}
          renderItem={_ => null}
          filters={filters}
          handleFilterChange={selectedFilters =>
            (this.selectedFilters = selectedFilters)
          }
          selectedFilters={this.selectedFilters}
        >
          <div class="w-full h-64 relative flex justify-center items-center">
            <Loader />
          </div>
        </ListSection>
      </div>
    );
  }
}
