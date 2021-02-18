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
  @Prop({ required: false, default: "none" })
  default!: PropsTableRowProps["default"];
  @Prop() required: PropsTableRowProps["required"];
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
        <td>
          <span class="ui-py-1 ui-px-2 ui-w-auto ui-rounded-lg ui-text-sm ui-bg-gray-200">
            {this.type}
          </span>
        </td>
        <td>{this.$slots.default}</td>
        <td>
          {this.default ? (
            <span
              class={`ui-py-1 ui-px-2 ui-w-auto ui-rounded-lg ui-text-sm ui-bg-gray-200 ${
                this.default === "none" ? "ui-text-gray-400" : ""
              }`}
            >
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
