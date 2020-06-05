import FSXABaseComponent from "./FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

export interface FSXAColProps {
  width: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
}
@Component({
  name: "FSXACol",
})
class FSXACol extends FSXABaseComponent<FSXAColProps> {
  @Prop({ required: true }) width!: string;
  render() {
    return <div class={`w-${this.width}/12`}>{this.$slots.default}</div>;
  }
}
export default FSXACol;
