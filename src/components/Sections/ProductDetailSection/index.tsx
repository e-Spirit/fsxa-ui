import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import { ProductDetailItem, ProductDetailSectionProps } from "@/types/sections";
import { LayoutItem } from "@/components/Layout";
import Image from "@/components/Image";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import "./style.css";
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
  compatibilities!: ProductDetailSectionProps["compatibilities"];
  @Prop({ required: true })
  description!: ProductDetailSectionProps["description"];
  @Prop({ required: true }) price!: ProductDetailSectionProps["price"];
  @Prop({ required: true }) image!: ProductDetailSectionProps["image"];
  @Prop({ required: true })
  compatibilityHeadline!: ProductDetailSectionProps["compatibilityHeadline"];
  @Prop({ required: true })
  categoryHeadline!: ProductDetailSectionProps["categoryHeadline"];

  renderItem(item: ProductDetailItem) {
    return (
      <li class="ml-6" data-testid={item.id}>
        {item.label}
      </li>
    );
  }

  render() {
    return (
      <div class="py-12 md:py-16 lg:py-20">
        <Container>
          <Layout wrap>
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              class="mb-16 lg:mb-0"
            >
              <div class="w-full h-64 mb-4 md:mb-12 pr-8">
                <Image border={true} zoom={true} src={this.image!.src}></Image>
              </div>
            </LayoutItem>
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              class="ProductDetail--ProductDetail border-black "
            >
              <div class="pr-4 pl-4">
                <Headline as="h1" size="xl" weight="bold">
                  {this.headline}
                </Headline>
                <Paragraph>{this.description}</Paragraph>
                <div class="w-full pt-4 ">
                  <Paragraph size="lg" weight="bold" class="text-3xl">
                    {this.price}
                  </Paragraph>
                  <Layout wrap>
                    <LayoutItem width="1/2">
                      <Headline as="h4" size="sm" weight="light">
                        {this.categoryHeadline}
                      </Headline>
                      <ul class="list-disc">
                        {this.categories!.map(item => this.renderItem(item))}
                      </ul>
                    </LayoutItem>
                    <LayoutItem width="1/2">
                      <Headline as="h4" size="sm" weight="light">
                        {this.compatibilityHeadline}
                      </Headline>
                      <ul class="list-disc">
                        {this.compatibilities!.map(item =>
                          this.renderItem(item),
                        )}
                      </ul>
                    </LayoutItem>
                    <Button variant="animated" class="self-center">
                      {this.buttonText}
                    </Button>
                  </Layout>
                </div>
              </div>
            </LayoutItem>
          </Layout>
        </Container>
      </div>
    );
  }
}
export default ProductDetailSection;
