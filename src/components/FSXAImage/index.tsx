import { Prop, Component } from "vue-property-decorator";
import FSXABaseComponent from "@/components/FSXABaseComponent";
import { FSXAImageProps } from "@/types/components";

@Component({
  name: "FSXAImage",
})
class FSXAImage extends FSXABaseComponent<FSXAImageProps> {
  @Prop() src!: FSXAImageProps["src"];
  @Prop({ default: "0" }) opacity: FSXAImageProps["opacity"];
  @Prop({ default: false }) zoom: FSXAImageProps["zoom"];

  render() {
    const imageClassnames = ["w-full min-h-full object-cover"];
    if (this.zoom)
      imageClassnames.push(
        "transform transition-transform duration-10000 hover:scale-150",
      );
    return (
      <div class="w-full h-full overflow-hidden">
        {this.src ? (
          <img class={imageClassnames.join(" ")} src={this.src} />
        ) : null}
        <div
          class={`absolute top-0 left-0 w-full h-full pointer-events-none bg-black opacity-${this.opacity}`}
        />
      </div>
    );
  }
}
export default FSXAImage;
