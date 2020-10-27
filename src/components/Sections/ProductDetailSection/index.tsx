import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import { ProductDetailSectionProps } from "@/types/sections";
import { LayoutItem } from "@/components/Layout";
import Image from "@/components/Image";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import RichText from "@/components/RichText";
@Component({
  name: "ProductDetailSection",
})
class ProductDetailSection extends BaseComponent<ProductDetailSectionProps> {
  @Prop({ required: true }) headline!: ProductDetailSectionProps["headline"];
  @Prop({ required: true })
  buttonText!: ProductDetailSectionProps["buttonText"];
  @Prop({ required: false })
  categories!: ProductDetailSectionProps["categories"];
  @Prop({ required: false })
  compatibility!: ProductDetailSectionProps["compatibility"];
  @Prop({ required: true })
  description!: ProductDetailSectionProps["description"];
  @Prop({ required: true }) price!: ProductDetailSectionProps["price"];
  @Prop({ required: true }) image!: ProductDetailSectionProps["image"];

  render() {
    return (
      <div class="py-12 md:py-16 lg:py-20">
        <Container>
          <Layout wrap>
            <LayoutItem width="full" lg={{ width: "1/3" }}>
              <div class="w-full h-64 mb-4 md:mb-12">
                <Image src={this.image!.src}></Image>
              </div>
            </LayoutItem>
            <LayoutItem width="full" lg={{ width: "2/3" }}>
              <div class="w-full h-64">
                <Headline as="h2" size="lg">
                  {this.headline}
                </Headline>
                <Paragraph>{this.description}</Paragraph>
                <RichText content={this.price}></RichText>

                <Button variant="animated">{this.buttonText}</Button>
              </div>
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default ProductDetailSection;
