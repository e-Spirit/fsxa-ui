import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import "./style.css";
import PropsTableRow from "../PropsTable/components/PropsTableRow";

@Component({ name: "SlotsTable" })
class SlotsTable extends BaseComponent {
  static Row = PropsTableRow;

  render() {
    return (
      <table class="SlotsTable">
        <thead>
          <tr class="SlotsTable--Header">
            <th>Slot</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="SlotsTable--Body">{this.$slots.default}</tbody>
      </table>
    );
  }
}
export default SlotsTable;
