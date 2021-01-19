import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import { ProductDetailSectionProps } from "@/types/sections";
import { LayoutItem } from "@/components/Layout";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import "./style.css";
import Accordion from "@/components/Accordion";
import ImageSlider from "@/components/ImageSlider";
@Component({
  name: "ProductDetailSection",
})
class ProductDetailSection extends BaseComponent<ProductDetailSectionProps> {
  @Prop({ required: true })
  headline!: ProductDetailSectionProps["headline"];
  @Prop()
  buttonText!: ProductDetailSectionProps["buttonText"];
  @Prop()
  propertyList!: ProductDetailSectionProps["propertyList"];
  @Prop({ required: true })
  description!: ProductDetailSectionProps["description"];
  @Prop({ required: true })
  price!: ProductDetailSectionProps["price"];
  @Prop()
  images!: ProductDetailSectionProps["images"];
  @Prop()
  foldableContentList!: ProductDetailSectionProps["foldableContentList"];
  @Prop()
  handleButtonClick: ProductDetailSectionProps["handleButtonClick"];

  render() {
    return (
      <div class="w-full bg-gray-100">
        <Container>
          <Layout wrap>
            {this.images != null && this.images.length > 0 && (
              <LayoutItem width="full" lg={{ width: "1/2" }}>
                <div class="ProductDetail--ImageBorder h-auto">
                  <ImageSlider
                    class="ProductDetail--Image"
                    images={this.images}
                  />
                </div>
              </LayoutItem>
            )}
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              class="ProductDetail--ProductDetail border-black"
            >
              <div class="ProductDetail--Content px-5 py-6 bg-white lg:bg-transparent shadow lg:shadow-none">
                <Headline
                  data-testid="ProductDetail--Headline"
                  class="leading-10"
                  as="h1"
                  size="xl"
                  weight="bold"
                >
                  {this.headline}
                </Headline>
                <Paragraph data-testid="ProductDetail--Description" size="sm">
                  {this.description}
                </Paragraph>
                <div class="w-full pt-4">
                  <Paragraph
                    size="lg"
                    weight="bold"
                    class="ProductDetail--Price text-3xl"
                  >
                    {this.price}
                  </Paragraph>
                  <Layout wrap>
                    {this.propertyList &&
                      this.propertyList.length > 0 &&
                      this.propertyList
                        .filter(Boolean)
                        .map(({ title, properties }) => (
                          <LayoutItem width="full" md={{ width: "1/2" }}>
                            <Headline
                              class="ProductDetail--Property--Headline"
                              as="h4"
                              size="xs"
                              weight="bold"
                            >
                              {title}
                            </Headline>
                            <ul class="list-disc ProductDetail--Property--List text-sm">
                              {properties.map(({ id, name: propName }) => (
                                <li class="ml-6" key={id} data-testid={id}>
                                  {propName}
                                </li>
                              ))}
                            </ul>
                          </LayoutItem>
                        ))}
                    {this.foldableContentList != null && (
                      <LayoutItem width="full">
                        {Object.keys(this.foldableContentList).map(key => (
                          <Accordion
                            dark={true}
                            title={key}
                            key={key}
                            class="ProductDetail--Accordion"
                          >
                            {this.foldableContentList
                              ? this.foldableContentList[key]
                              : ""}
                          </Accordion>
                        ))}
                      </LayoutItem>
                    )}
                    {this.buttonText && (
                      <div class="w-full flex-initial flex justify-center">
                        <Button
                          variant="default"
                          class="ProductDetail--Button self-center p-2 px-2 sm:p-4 sm:pl-6 md:px-8 md:py-5"
                          handleClick={() =>
                            this.handleButtonClick && this.handleButtonClick()
                          }
                        >
                          {this.buttonText}
                        </Button>
                      </div>
                    )}
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
