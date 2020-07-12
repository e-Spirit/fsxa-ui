import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";

export interface MetaProps {
  title: string;
  subtitle?: string;
}
@Component({
  name: "Meta",
})
class Meta extends BaseComponent<MetaProps> {
  @Prop({ required: true }) title!: MetaProps["title"];
  @Prop() subtitle: MetaProps["subtitle"];
  render() {
    return (
      <div class="p-10 -mt-10 -mx-10 bg-espirit text-white mb-10">
        <h1 class="text-2xl font-bold mb-0 page-headline">{this.title}</h1>
        {this.subtitle ? (
          <span class="block mt-2 text-sm">{this.subtitle}</span>
        ) : null}
      </div>
    );
  }
}
export default Meta;
