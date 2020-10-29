import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";

export interface PropsTableRowProps {
  value: string;
  type: string;
  default?: string;
  required?: boolean;
}
@Component({
  name: "PropsTableRow",
})
class PropsTableRow extends BaseComponent<PropsTableRowProps> {
  @Prop({ required: true }) value!: PropsTableRowProps["value"];
  @Prop({ required: true }) type!: PropsTableRowProps["type"];
  @Prop({ required: false, default: "" })
  default!: PropsTableRowProps["default"];
  @Prop() required: PropsTableRowProps["required"];
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
        <td>
          <span class="py-1 px-2 w-auto rounded-lg text-sm bg-gray-200">
            {this.type}
          </span>
        </td>
        <td>{this.$slots.default}</td>
        <td>
          {this.default ? (
            <span class="py-1 px-2 w-auto rounded-lg text-sm bg-gray-200">
              {this.default}
            </span>
          ) : (
            ""
          )}
        </td>
      </tr>
    );
  }
}
export default PropsTableRow;
