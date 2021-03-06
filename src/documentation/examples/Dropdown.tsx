import Vue from "vue";
import Component from "vue-class-component";

import { Dropdown } from "fsxa-ui";
import { Option } from "@/types/components";

const testOptions: Option[] = [
  { key: "opt1", label: "Option 1", path: "path1" },
  { key: "opt2", label: "Option 2", path: "path2" },
  { key: "opt3", label: "Another option", path: "path3" },
  { key: "opt4", label: "2 + 2", path: "path4" },
];

const handleClick = (item: Option) => {
  console.log(item.label);
};

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5 ui-ml-32 ui-mb-48">
        <Dropdown
          value="opt2"
          options={testOptions}
          handleChange={handleClick}
        />
      </div>
    );
  }
}
