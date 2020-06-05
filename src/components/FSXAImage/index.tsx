import { Prop, Component } from "vue-property-decorator";
import FSXABaseComponent from "../FSXABaseComponent";
import { FSXAImageProps } from "@/types/components";

@Component({
  name: "FSXAImage",
})
class FSXAImage extends FSXABaseComponent<FSXAImageProps> {
  @Prop({ required: true }) src!: FSXAImageProps["src"];
  @Prop({ default: "0" }) opacity: FSXAImageProps["opacity"];
  render() {
    return (
      <div class="w-full h-full overflow-hidden">
        <img class="w-full min-h-full object-cover" src={this.src} />
        <div
          class={`absolute top-0 left-0 w-full h-full pointer-events-none bg-black opacity-${this.opacity}`}
        />
      </div>
    );
  }
}
export default FSXAImage;
