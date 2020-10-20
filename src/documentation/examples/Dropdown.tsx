import Vue from "vue";
import Component from "vue-class-component";

import { Dropdown } from "fsxa-ui";
import { Option } from "@/types/components";

const testOptions: Option[] = [
  { key: "opt1", label: "Option_1", path: "path1" },
  { key: "opt2", label: "Option_2", path: "path2" },
];

const handleClick = (item: Option) => {
  console.log(item.label);
};

@Component
export default class App extends Vue {
  currentItem: any = null;

  render() {
    return (
      <div class="space-x-5 ml-32 mb-48">
        <Dropdown
          value="opt2"
          options={testOptions}
          handleChange={handleClick}
        />
      </div>
    );
  }
}
