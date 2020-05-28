import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";
import { CounterProps } from "@/types/counter";
import BaseComponent from "../BaseComponent";

@Component({
  name: "Counter"
})
class Counter extends BaseComponent<CounterProps> {
  @Prop({ required: true }) value!: CounterProps["value"];
  @Prop({ required: true }) label!: CounterProps["label"];
  render() {
    return (
      <div class="text-white mb-12 flex items-center justify-center flex-col">
        <div class="text-highlight font-bold text-4xl mb-2">{this.value}</div>
        <div class="Counter--Separator-Wrapper">
          <div class="Counter--Separator" />
        </div>
        <div class="uppercase text-xs w-full text-center">{this.label}</div>
      </div>
    );
  }
}
export default Counter;
