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
      <div class="ui-text-white ui-mt-2 ui-mb-12 ui-flex ui-items-center ui-justify-center ui-flex-col">
        <div class="ui-text-highlight ui-font-bold ui-text-4xl ui-mb-2">
          {this.value}
        </div>
        <div class="ui-flex ui-items-center ui-mb-5">
          <div class="Counter--Separator" />
        </div>
        <div class="ui-uppercase ui-text-xs ui-w-full ui-text-center">
          {this.label}
        </div>
      </div>
    );
  }
}
export default Counter;
