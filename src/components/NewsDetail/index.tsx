import {
  BaseComponent,
  Button,
  Container,
  Headline,
  Image,
  Layout,
  LayoutItem,
  Paragraph,
} from "@/components";
import { NewsDetailProps, NewsDetailSlots } from "@/types/fsxa-ui";
import { Component, Prop } from "vue-property-decorator";
@Component({
  name: "NewsDetail",
})
class NewsDetail extends BaseComponent<
  NewsDetailProps,
  unknown,
  NewsDetailSlots
> {
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
  @Prop({ required: false }) social!: NewsDetailProps["social"];

  render() {
    return (
      <Container class="NewsDetail">
        <Headline as="h1" size="md">
          {this.headline}
        </Headline>
        {this.teaser && <Paragraph size="md">{this.teaser}</Paragraph>}
        <Image class="ui-my-2" {...this.image} />
        {(this.date || this.author) && (
          <div class="ui-text-sm">
            {this.date && <span>{this.date}</span>}
            {this.author && (
              <span class="ui-text-gray-600"> | {this.author}</span>
            )}
          </div>
        )}
        <Paragraph size="md">{this.$slots.default}</Paragraph>
        <Layout>
          <LayoutItem
            width="full"
            lg={{ width: "1/2" }}
            class="ui-mx-auto lg:ui-mx-0"
          >
            {this.tags && this.tags.length > 0 && (
              <div>
                <Headline
                  as="h5"
                  size="md"
                  class="lg:ui-mx-0 lg:ui-ml-4 ui-text-left"
                >
                  TAGS
                </Headline>
                <div>
                  {this.tags.map((value) => {
                    return (
                      <Button
                        variant="tag"
                        class="ui-mr-4 ui-mt-2"
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
                class="ui-font-light ui-mt-2 ui-text-base ui-tracking-widest"
                handleClick={this.handleReturnClick}
              >
                {this.returnText}
              </Button>
            )}
          </LayoutItem>
          {this.$scopedSlots.social && this.social ? (
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              class="ui-mx-auto lg:ui-mx-0"
            >
              {this.$scopedSlots.social(this.social)}
            </LayoutItem>
          ) : (
            <LayoutItem
              width="full"
              lg={{ width: "1/2" }}
              class="ui-mx-auto lg:ui-mx-0 ui-flex"
            >
              {this.social?.title && (
                <Headline
                  as="h5"
                  size="md"
                  class="ui-mx-auto lg:ui-mx-px ui-text-center md:ui-text-right"
                >
                  {this.social.title}
                </Headline>
              )}
              <div class="ui-mx-auto lg:ui-mx-px ui-flex ui-space-y-2 md:ui-space-y-0 ui-flex-col md:ui-flex-row ui-justify-end">
                {this.social?.items && this.social?.items?.length > 0
                  ? this.social.items.map((item) => (
                      <div class="ui-mx-auto md:ui-mx-0">
                        <Button
                          variant="tag"
                          class="ui-mr-2 ui-border ui-border-black"
                          handleClick={() => {
                            if (this.social?.handleSocialClick)
                              this.social.handleSocialClick(item);
                          }}
                        >
                          {item.title ? item.title : null}
                        </Button>
                      </div>
                    ))
                  : null}
              </div>
            </LayoutItem>
          )}
        </Layout>
      </Container>
    );
  }
}
export default NewsDetail;
