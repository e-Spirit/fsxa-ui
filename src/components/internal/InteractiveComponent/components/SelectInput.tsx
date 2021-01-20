import { Prop, Component } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

export interface SelectInputProps {
  options: string[];
  label: string;
  value?: string;
  handleChange: (value?: string) => void;
}
@Component({
  name: "SelectInput",
})
class SelectInput extends BaseComponent<SelectInputProps> {
  @Prop({ required: true, type: Function })
  handleChange!: SelectInputProps["handleChange"];
  @Prop({ required: true }) value!: SelectInputProps["value"];
  @Prop({ required: true }) options!: SelectInputProps["options"];
  @Prop({ required: true }) label!: SelectInputProps["label"];

  render() {
    return (
      <div class="ui-w-full ui-flex ui-items-center ui-text-sm ui-flex-wrap ui-mb-2">
        <p class="ui-w-full lg:ui-w-32 ui-text-xs">{this.label}</p>
        <select
          class="ui-text-gray-900 ui-block ui-appearance-none ui-flex-1 ui-bg-white ui-border ui-border-gray-400 hover:ui-border-gray-500 ui-px-4 ui-py-2 ui-pr-8 ui-rounded ui-shadow ui-leading-tight focus:ui-outline-none focus:ui-shadow-outline"
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
