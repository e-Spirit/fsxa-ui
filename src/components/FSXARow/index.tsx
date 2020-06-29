import Component from "vue-class-component";
import "./style.css";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { Prop } from "vue-property-decorator";
import { FSXARowProps } from "@/types/components";

@Component({
  name: "FSXARow",
})
class FSXARow extends FSXABaseComponent<FSXARowProps> {
  @Prop() reverse: FSXARowProps["reverse"];
  render() {
    console.log(this.$parent);
    return (
      <div
        class={`FSXARow ${
          this.reverse ? "reverse" : ""
        } grid grid-cols-12 -m-2 md:-m-4 lg:-m-6`}
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default FSXARow;
