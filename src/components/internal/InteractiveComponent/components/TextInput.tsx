import { Prop, Component } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";

export interface TextInputProps {
  value: string;
  label: string;
  handleChange: (value: string) => void;
}
@Component({
  name: "TextInput",
})
class TextInput extends BaseComponent<TextInputProps> {
  @Prop({ required: true, type: Function })
  handleChange!: TextInputProps["handleChange"];
  @Prop({ required: true }) value!: TextInputProps["value"];
  @Prop({ required: true }) label!: TextInputProps["label"];

  render() {
    return (
      <div class="ui-w-full ui-flex ui-items-center ui-text-sm ui-flex-wrap ui-mb-2">
        <p class="ui-w-full lg:w-32 text-xs">{this.label}</p>
        <input
          type="text"
          class="ui-text-gray-900 ui-block ui-appearance-none ui-flex-1 ui-bg-white ui-border ui-border-gray-400 hover:ui-border-gray-500 ui-px-4 ui-py-2 ui-rounded ui-shadow ui-leading-tight focus:ui-outline-none focus:ui-shadow-outline"
          onInput={(event: any) =>
            this.handleChange(event.target.value as string)
          }
          value={this.value}
        />
      </div>
    );
  }
}
export default TextInput;
