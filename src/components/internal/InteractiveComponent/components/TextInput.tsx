import { Prop, Component } from "vue-property-decorator";
import FSXABaseComponent from "@/components/FSXABaseComponent";

export interface TextInputProps {
  value: string;
  label: string;
  handleChange: (value: string) => void;
}
@Component({
  name: "TextInput",
})
class TextInput<T> extends FSXABaseComponent<TextInputProps> {
  @Prop({ required: true, type: Function })
  handleChange!: TextInputProps["handleChange"];
  @Prop({ required: true }) value!: TextInputProps["value"];
  @Prop({ required: true }) label!: TextInputProps["label"];

  render() {
    return (
      <div class="w-full flex items-center text-sm flex-wrap mb-2">
        <p class="w-full lg:w-32 text-xs">{this.label}</p>
        <input
          type="text"
          class="text-gray-900 block appearance-none flex-1 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
