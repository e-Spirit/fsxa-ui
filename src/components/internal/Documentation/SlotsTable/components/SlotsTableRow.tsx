import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";

export interface SlotsTableRowProps {
  value: string;
  prop: string;
  required: boolean;
}
@Component({
  name: "SlotsTableRow",
})
class SlotsTableRow extends BaseComponent<SlotsTableRowProps> {
  @Prop({ required: true }) value!: SlotsTableRowProps["value"];
  @Prop({ required: false }) prop!: SlotsTableRowProps["prop"];
  @Prop() required!: SlotsTableRowProps["required"];

  render() {
    return (
      <tr>
        <td>
          {this.required ? (
            <span title="required" class="prop-value-req">
              {this.value}
            </span>
          ) : (
            <span class="prop-value">{this.value}</span>
          )}
        </td>
        <td>{this.prop}</td>
        <td>{this.$slots.default}</td>
      </tr>
    );
  }
}
export default SlotsTableRow;
