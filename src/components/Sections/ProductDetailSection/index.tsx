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
import "./style.css";
import Accordion from "@/components/Accordion";
import { ImageRef } from "@/types/components";
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

  renderImage(image: ImageRef) {
    return (
      <div class="w-full mb-2 md:mb-6 lg:mb-16 xl:mb-56 pr-20">
        <Image
          border={true}
          zoom={true}
          class="ProductDetail--Image"
          src={image.src}
        ></Image>
      </div>
    );
  }

  render() {
    return (
      <div class="py-12 md:py-16 lg:py-20">
        <Container>
          <Layout wrap>
            {this.images != null && this.images.length > 0 && (
              <LayoutItem
                width="full"
                lg={{ width: "1/2" }}
                class="mb-16 lg:mb-0"
              >
                {/* ToDo: show all images in Slider.
                 * For now randomly choose one of the provided images:
                 */}
                {this.renderImage(
                  this.images[
                    Math.floor(Math.random() * Math.floor(this.images.length))
                  ],
                )}
              </LayoutItem>
            )}
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              class="ProductDetail--ProductDetail border-black "
            >
              <div class="pr-4 pl-4">
                <Headline
                  class="ProductDetail--Headline"
                  as="h1"
                  size="xl"
                  weight="bold"
                >
                  {this.headline}
                </Headline>
                <Paragraph class="ProductDetail--Description">
                  {this.description}
                </Paragraph>
                <div class="w-full pt-4 ">
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
                              size="sm"
                              weight="light"
                            >
                              {title}
                            </Headline>
                            <ul class="list-disc ProductDetail--Property--List">
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
                            <RichText
                              content={
                                this.foldableContentList
                                  ? this.foldableContentList[key]
                                  : ""
                              }
                            />
                          </Accordion>
                        ))}
                      </LayoutItem>
                    )}
                    {this.buttonText && (
                      <div class="w-full flex-initial flex justify-end md:pr-10 sm:pr-6">
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
