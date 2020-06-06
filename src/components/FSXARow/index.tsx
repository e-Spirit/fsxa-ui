import Component from "vue-class-component";
import "./style.css";
import FSXABaseComponent from "../FSXABaseComponent";
import { Prop } from "vue-property-decorator";

export interface FSXARowProps {
  reverse?: boolean;
}

@Component({
  name: "FSXARow",
})
class FSXARow extends FSXABaseComponent<FSXARowProps> {
  @Prop() reverse: FSXARowProps["reverse"];
  render() {
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
