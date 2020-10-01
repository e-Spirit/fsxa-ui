import BaseComponent from "@/components/BaseComponent";
import Container from "@/components/Container";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import Layout, { LayoutItem } from "@/components/Layout";
import { FooterProps } from "@/types/components";

@Component({
  name: "Footer",
})
class Footer extends BaseComponent<FooterProps> {
  @Prop({ required: true }) copyright!: FooterProps["copyright"];
  @Prop({ required: true }) links!: FooterProps["links"];
  @Prop({ required: true }) handleClick!: FooterProps["handleClick"];

  render() {
    return (
      <div class="w-full h-64 bg-gray-100 flex items-center text-xs fixed bottom-0 left-0">
        <Container horizontalPadding verticalPadding={false} fluid>
          <Layout>
            <LayoutItem
              width="full"
              md={{ width: "1/3" }}
              class="flex justify-center lg:justify-start items-center"
            >
              {this.$slots.default}
            </LayoutItem>
            <LayoutItem
              width="full"
              md={{ width: "1/3" }}
              class="flex justify-center items-center"
            >
              © {this.copyright}
            </LayoutItem>
            <LayoutItem
              width="full"
              md={{ width: "1/3" }}
              class="flex justify-center lg:justify-end items-center"
            >
              <ul>
                {this.links.map(link => (
                  <li class="FSXAFooter--LinkWrapper">
                    <a
                      data-testid={`footer-${link.referenceId}`}
                      href="#"
                      class={`FSXAFooter--Link ${
                        link.isActive ? "active" : ""
                      }`}
                      onClick={(event: MouseEvent) => {
                        event.preventDefault();
                        this.handleClick(link);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default Footer;
