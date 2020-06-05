import FSXABaseComponent from "./FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  name: "FSXAContainer",
})
class FSXAContainer extends FSXABaseComponent {
  @Prop({ required: true }) width!: string;
  render() {
    return (
      <div class="container px-4 md:px-10 lg:px-16 mx-auto">
        {this.$slots.default}
      </div>
    );
  }
}
export default FSXAContainer;
