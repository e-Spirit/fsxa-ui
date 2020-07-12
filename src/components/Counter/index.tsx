import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import BaseComponent from "@/components/BaseComponent";

export interface CounterProps {
  value: number;
  label: string;
}
@Component({
  name: "Counter",
})
class Counter extends BaseComponent<CounterProps> {
  @Prop({ required: true }) value!: CounterProps["value"];
  @Prop({ required: true }) label!: CounterProps["label"];
  render() {
    return (
      <div class="text-white mt-2 mb-12 flex items-center justify-center flex-col">
        <div class="text-highlight font-bold text-4xl mb-2">{this.value}</div>
        <div class="flex items-center mb-5">
          <div class="Counter--Separator" />
        </div>
        <div class="uppercase text-xs w-full text-center">{this.label}</div>
      </div>
    );
  }
}
export default Counter;
