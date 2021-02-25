import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import "./style.css";
import { Headline } from "@/components";

@Component({ name: "SlotsTable" })
class SlotsTable extends BaseComponent {
  render() {
    return (
      <div>
        <Headline as="h3" size="md" weight="light">
          Slots
        </Headline>
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
      </div>
    );
  }
}
export default SlotsTable;
