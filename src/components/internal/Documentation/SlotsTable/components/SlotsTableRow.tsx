import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";

export interface SlotsTableRowProps {
  value: string;
}
@Component({
  name: "SlotsTableRow",
})
class SlotsTableRow extends BaseComponent<SlotsTableRowProps> {
  @Prop({ required: true }) value!: SlotsTableRowProps["value"];
  render() {
    return (
      <tr>
        <td>
          <span class={`py-1 px-2 "bg-gray-200" w-auto rounded-lg text-sm`}>
            {this.value}
          </span>
        </td>
        <td>{this.$slots.default}</td>
      </tr>
    );
  }
}
export default SlotsTableRow;
