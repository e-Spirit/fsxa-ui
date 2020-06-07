import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { FSXACounterProps } from "@/types/components";

@Component({
  name: "FSXACounter",
})
class FSXACounter extends FSXABaseComponent<FSXACounterProps> {
  @Prop({ required: true }) value!: FSXACounterProps["value"];
  @Prop({ required: true }) label!: FSXACounterProps["label"];
  render() {
    return (
      <div class="text-white mt-2 mb-12 flex items-center justify-center flex-col">
        <div class="text-highlight font-bold text-4xl mb-2">{this.value}</div>
        <div class="FSXACounter--Separator-Wrapper">
          <div class="FSXACounter--Separator" />
        </div>
        <div class="uppercase text-xs w-full text-center">{this.label}</div>
      </div>
    );
  }
}
export default FSXACounter;
