import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import "./style.css";
import { PropsTableProps } from "@/types/internal";
import PropsTableRow from "./components/PropsTableRow";

@Component({ name: "PropsTable" })
class PropsTable extends FSXABaseComponent {
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
