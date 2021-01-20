import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";

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
          <span
            class={`py-1 px-2 ${
              this.required ? "bg-gray-900 text-white" : "bg-gray-200"
            } w-auto rounded-lg text-sm`}
          >
            {this.value}
          </span>
        </td>
        <td>{this.prop}</td>
        <td>{this.$slots.default}</td>
      </tr>
    );
  }
}
export default SlotsTableRow;
