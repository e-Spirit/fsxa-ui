import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import "./style.css";
import PropsTableRow from "./components/PropsTableRow";
import { Headline } from "@/components";

@Component({ name: "PropsTable" })
class PropsTable extends BaseComponent {
  static Row = PropsTableRow;

  renderLegend() {
    return (
      <p class="ui-text-xs ui-float-right">
        <span class="ui-bg-gray-900 ui-text-white ui-py-1 ui-px-2 ui-mx-1 ui-w-auto ui-rounded-lg">
          required
        </span>
        <span class="ui-bg-gray-200 ui-py-1 ui-px-2 ui-mx-1 ui-w-auto ui-rounded-lg">
          optional
        </span>
      </p>
    );
  }
  render() {
    return (
      <div>
        <div>
          <Headline as="h3" size="md" weight="light" class="ui-float-left">
            Props
          </Headline>
          {this.renderLegend()}
        </div>
        <table class="PropsTable">
          <thead>
            <tr class="PropsTable--Header">
              <th>Parameter</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody class="PropsTable--Body">{this.$slots.default}</tbody>
        </table>
      </div>
    );
  }
}
export default PropsTable;
