import { Prop, Component } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

export interface SelectInputProps {
  options: string[];
  label: string;
  value?: string;
  handleChange: (value?: string) => void;
}
@Component({
  name: "SelectInput"
})
class SelectInput extends BaseComponent<SelectInputProps> {
  @Prop({ required: true, type: Function })
  handleChange!: SelectInputProps["handleChange"];
  @Prop({ required: true }) value!: SelectInputProps["value"];
  @Prop({ required: true }) options!: SelectInputProps["options"];
  @Prop({ required: true }) label!: SelectInputProps["label"];

  render() {
    return (
      <div class="w-full flex items-center text-sm flex-wrap mb-2">
        <p class="w-full lg:w-32 text-xs">{this.label}</p>
        <select
          class="text-gray-900 block appearance-none flex-1 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event: any) =>
            this.handleChange(event.target.value || undefined)
          }
          value={this.value}
        >
          <option value=""></option>
          {this.options.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}
export default SelectInput;
