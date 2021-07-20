import Vue from "vue";
import Component from "vue-class-component";

import Slider from "@/components/Slider";
import { Button, Headline, Paragraph } from "@/components";

@Component
export default class App extends Vue {
  renderSlide(index: number) {
    const slides: Record<string, JSX.Element> = {
      0: (
        <div class="ui-bg-red-500 ui-w-full ui-h-full ui-flex ui-flex-col ui-justify-center ui-items-center">
          <Headline as="h1" size="lg">
            Headline
          </Headline>
          <Paragraph size="lg">With some text</Paragraph>
        </div>
      ),
      1: (
        <div class="ui-bg-teal-500 ui-w-full ui-h-full ui-flex ui-justify-center ui-items-center">
          Some Content
        </div>
      ),
      2: (
        <div class="ui-bg-red-500 ui-w-full ui-h-full ui-flex ui-flex-col ui-justify-center ui-items-center">
          <Headline as="h1" size="lg">
            Headline
          </Headline>
          <Paragraph>With some text</Paragraph>
        </div>
      ),
    };
    return slides[index] || null;
  }

  render() {
    return (
      <div class="ui-w-full ui-h-64">
        <Slider
          scopedSlots={{
            controls: (params) => {
              return this.$scopedSlots.controls ? (
                this.$scopedSlots.controls(params)
              ) : (
                <div class="ui-absolute ui-bottom-0 ui-left-1/2 ui-transform ui--translate-x-1/2 ui--mr-4 ui-mb-4 ui-space-x-4 ui-flex ui-flex-row">
                  <Button
                    handleClick={() => {
                      params.prevSlideIndex !== null &&
                        params.showSlide(params.prevSlideIndex);
                    }}
                  >
                    <i class="fas fa-arrow-left"></i>
                  </Button>
                  <Button
                    handleClick={() => {
                      params.nextSlideIndex !== null &&
                        params.showSlide(params.nextSlideIndex);
                    }}
                  >
                    <i class="fas fa-arrow-right"></i>
                  </Button>
                </div>
              );
            },
            slide: ({ index }) => this.renderSlide(index),
          }}
          initialSlideIndex={0}
          slideCount={3}
          visibleElements={2}
          infinite
          animateSlideTransition
        />
      </div>
    );
  }
}
