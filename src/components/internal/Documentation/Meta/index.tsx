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
      <div class="ui-p-10 ui--mt-10 ui--mx-10">
        <h1 class="ui-text-espirit ui-font-bold ui-mb-0 ui-page-headline ui-text-2xl">
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
