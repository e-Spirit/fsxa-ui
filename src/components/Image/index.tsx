import { Prop, Component } from "vue-property-decorator";
import { FSXAImageProps } from "@/types/image";
import BaseComponent from "../BaseComponent";

@Component({
  name: "FSXAImage"
})
class FSXAImage extends BaseComponent<FSXAImageProps> {
  @Prop({ required: true }) src!: FSXAImageProps["src"];
  @Prop({ default: null }) previewId!: FSXAImageProps["previewId"];
  render() {
    return (
      <div class="w-full h-full" data-preview-id={this.previewId}>
        <img src={this.src} />
      </div>
    );
  }
}
export default FSXAImage;
