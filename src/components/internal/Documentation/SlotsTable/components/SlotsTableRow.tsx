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
            title={this.required ? "required" : ""}
            class={`${
              this.required ? " ui-bg-gray-900 ui-text-white" : "ui-bg-gray-200"
            } ui-py-1 ui-px-2 ui-w-auto ui-rounded-lg ui-text-sm`}
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
