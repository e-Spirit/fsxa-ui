import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

export interface PropsTableRowProps {
  value: string;
  description: string;
  required?: boolean;
}
@Component({
  name: "PropsTableRow",
})
class PropsTableRow extends FSXABaseComponent<PropsTableRowProps> {
  @Prop({ required: true }) value!: PropsTableRowProps["value"];
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
        <td>{this.$slots.default}</td>
      </tr>
    );
  }
}
export default PropsTableRow;
