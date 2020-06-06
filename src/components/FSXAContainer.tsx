import FSXABaseComponent from "./FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { FSXAContainerProps } from "@/types/fsxa-ui";

@Component({
  name: "FSXAContainer",
})
class FSXAContainer extends FSXABaseComponent<FSXAContainerProps> {
  @Prop({ default: false }) paddingOnly!: string;
  render() {
    return (
      <div
        class={`${
          !this.paddingOnly ? "container" : "w-full"
        } px-6 md:px-10 lg:px-12 mx-auto relative`}
      >
        {this.$slots.default}
      </div>
    );
  }
}
export default FSXAContainer;
