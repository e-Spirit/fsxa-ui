import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import "./style.css";
import PropsTableRow from "./components/PropsTableRow";
import { Headline } from "@/components";

@Component({ name: "PropsTable" })
class PropsTable extends BaseComponent {
  static Row = PropsTableRow;

  render() {
    return (
      <div>
        <Headline as="h3" size="md" weight="light">
          Props
        </Headline>
        <table class="PropsTable">
          <thead>
            <tr class="PropsTable--Header">
              <th>Prop</th>
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
