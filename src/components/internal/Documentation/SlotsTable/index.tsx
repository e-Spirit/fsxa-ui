import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import "./style.css";

@Component({ name: "SlotsTable" })
class SlotsTable extends BaseComponent {
  render() {
    return (
      <table class="SlotsTable">
        <thead>
          <tr class="SlotsTable--Header">
            <th>Slot</th>
            <th>Props</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="SlotsTable--Body">{this.$slots.default}</tbody>
      </table>
    );
  }
}
export default SlotsTable;
