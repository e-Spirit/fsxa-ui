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
      <div class="ui-p-10 ui--mt-10 ui--mx-10 ui-bg-espirit ui-text-white ui-mb-10">
        <h1 class="ui-text-2xl ui-font-bold ui-mb-0 ui-page-headline">
          {this.title}
        </h1>
        {this.subtitle ? (
          <span class="ui-block ui-mt-2 ui-text-sm">{this.subtitle}</span>
        ) : null}
      </div>
    );
  }
}
export default Meta;
