import { NewsDetailProps } from "@/types/fsxa-ui";
import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import {
  BaseComponent,
  Headline,
  Paragraph,
  Image,
  Button,
  Container,
  Layout,
  LayoutItem,
} from "@/components";

@Component({
  name: "NewsDetail",
})
class NewsDetail extends BaseComponent<NewsDetailProps> {
  @Prop({ required: true }) headline!: NewsDetailProps["headline"];
  @Prop({ required: false }) teaser!: NewsDetailProps["teaser"];
  @Prop({ required: true }) image!: NewsDetailProps["image"];
  @Prop({ required: false }) date!: NewsDetailProps["date"];
  @Prop({ required: false }) author!: NewsDetailProps["author"];
  @Prop({ required: false }) tags!: NewsDetailProps["tags"];
  @Prop({ required: false })
  handleReturnClick!: NewsDetailProps["handleReturnClick"];
  @Prop({ required: false })
  handleTagClick!: NewsDetailProps["handleTagClick"];
  @Prop({ required: false })
  returnText!: NewsDetailProps["returnText"];
  @Prop({ required: false }) socialText!: NewsDetailProps["socialText"];

  render() {
    return (
      <Container class="NewsDetail">
        <Headline as="h1" size="md">
          {this.headline}
        </Headline>
        {this.teaser && <Paragraph size="md">{this.teaser}</Paragraph>}
        <Image class="my-2" src={this.image.src} />
        {(this.date || this.author) && (
          <div class="text-sm">
            {this.date && new Date(this.date).toLocaleDateString()}
            {this.author && <span class="text-gray-600"> | {this.author}</span>}
          </div>
        )}
        <Paragraph size="md">{this.$slots.default}</Paragraph>
        <Layout>
          <LayoutItem
            width="full"
            lg={{ width: "1/2" }}
            class="mx-auto lg:mx-0"
          >
            {this.tags && this.tags.length > 0 && (
              <div>
                <Headline
                  as="h5"
                  size="md"
                  class="mx-auto lg:mx-0 text-center lg:text-left"
                >
                  TAGS
                </Headline>
                <div>
                  {this.tags.map(value => {
                    return (
                      <Button
                        variant="tag"
                        class="mr-4 mt-2"
                        handleClick={() => {
                          this.handleTagClick && this.handleTagClick(value);
                        }}
                      >
                        {value.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
            {this.returnText && (
              <Button
                variant="tag"
                class="return-newsroom-btn"
                handleClick={this.handleReturnClick}
              >
                {this.returnText}
              </Button>
            )}
          </LayoutItem>
          <LayoutItem
            width="full"
            lg={{ width: "1/2" }}
            class="mx-auto lg:mx-0"
          >
            {this.socialText && (
              <Headline
                as="h5"
                size="md"
                class="mx-auto lg:mx-px text-center lg:text-left"
              >
                {this.socialText}
              </Headline>
            )}
            <div class="mx-auto lg:mx-px">
              <Button variant="tag" class="mr-2 border border-black">
                <i class="fab fa-facebook-f" />
              </Button>
              <Button variant="tag" class="mx-2 border border-black">
                <i class="fab fa-twitter" />
              </Button>
              <Button variant="tag" class="mx-2 border border-black">
                <span class="fa fa-rss" />
              </Button>
              <Button variant="tag" class="mx-2 border border-black">
                <span class="fab fa-youtube" />
              </Button>
              <Button variant="tag" class="ml-2 border border-black">
                <i class="fab fa-instagram" />
              </Button>
            </div>
          </LayoutItem>
        </Layout>
      </Container>
    );
  }
}
export default NewsDetail;
