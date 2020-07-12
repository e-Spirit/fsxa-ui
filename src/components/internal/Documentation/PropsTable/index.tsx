import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import "./style.css";
import PropsTableRow from "./components/PropsTableRow";

@Component({ name: "PropsTable" })
class PropsTable extends BaseComponent {
  static Row = PropsTableRow;

  render() {
    return (
      <table class="PropsTable">
        <thead>
          <tr class="PropsTable--Header">
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody class="PropsTable--Body">{this.$slots.default}</tbody>
      </table>
    );
  }
}
export default PropsTable;
