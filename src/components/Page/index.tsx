import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Container from "@/components/Container";

import "./style.css";
import { PageProps } from "@/types/components";

@Component({
  name: "Page",
})
class Page extends BaseComponent<PageProps> {
  @Prop() logo: PageProps["logo"];
  @Prop({ required: true })
  renderNavigation!: PageProps["renderNavigation"];
  @Prop({ required: true }) renderFooter!: PageProps["renderFooter"];

  render() {
    return (
      <div class="Page">
        <div class="Page--Header">
          <div class="Page--Header--Inner">
            <Container
              horizontalPadding
              verticalPadding={false}
              fluid
              class="flex"
            >
              <div class="flex-1">
                {this.logo ? <img src={this.logo.src} /> : null}
              </div>
              <div class="flex-grow-0 pr-0 lg:pr-20">
                {this.renderNavigation()}
              </div>
            </Container>
          </div>
        </div>
        <div class="Page--Content">{this.$slots.default}</div>
        <div class="Page--Footer">{this.renderFooter()}</div>
      </div>
    );
  }
}
export default Page;
