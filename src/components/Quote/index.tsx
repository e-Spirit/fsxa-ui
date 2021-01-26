import { BaseComponent, Container, Layout } from "@/components";
import { QuoteProps } from "@/types/fsxa-ui";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";

@Component({
  name: "FSXAQuote",
})
class FSXAQuote extends BaseComponent<QuoteProps> {
  @Prop({ required: false, default: "left" }) side!: QuoteProps["side"];

  render() {
    return (
      <Container class="Quote">
        <Layout class={`direction direction--${this.side}`}>
          <div>
            <span class="Quote--quote ui-text-gray-800 ui-text-4xl ui-mr-10 ui-inline-block ui-w-1/4 fas" />
          </div>
          <div class="ui-pt-2 ui-w-3/4">{this.$slots.default}</div>
        </Layout>
      </Container>
    );
  }
}
export default FSXAQuote;
