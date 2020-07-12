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
            <span class="text-gray-800 text-4xl mr-10 inline-block quote w-1/4" />
          </div>
          <div class="pt-2 w-3/4">{this.$slots.default}</div>
        </Layout>
      </Container>
    );
  }
}
export default FSXAQuote;
