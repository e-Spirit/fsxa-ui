import { TsxComponent } from "@/types";
import { Prop, Component } from "vue-property-decorator";

export interface SelectInputProps<T> {
  options: T[];
  label: string;
  value: T | undefined;
  handleChange: (value: T | undefined) => void;
}
@Component({
  name: "SelectInput"
})
class SelectInput<T> extends TsxComponent<SelectInputProps<T>> {
  @Prop({ required: true, type: Function }) handleChange!: SelectInputProps<
    T
  >["handleChange"];
  @Prop({ required: true }) value!: SelectInputProps<T>["value"];
  @Prop({ required: true }) options!: SelectInputProps<T>["options"];
  @Prop({ required: true }) label!: SelectInputProps<T>["label"];

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
