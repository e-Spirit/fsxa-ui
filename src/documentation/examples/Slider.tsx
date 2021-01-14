import Vue from "vue";
import Component from "vue-class-component";

import Slider from "@/components/Slider";
import { Button, Headline, Paragraph } from "@/components";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="w-full h-64">
        <Slider
          scopedSlots={{
            controls: params => {
              return this.$scopedSlots.controls ? (
                this.$scopedSlots.controls(params)
              ) : (
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mr-4 mb-4 space-x-4 flex flex-row">
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
          }}
          initialSlideIndex={0}
          visibleElements={2}
          infinite
          animateSlideTransition
          slides={[
            {
              render: () => (
                <div class="bg-red-500 w-full h-full flex flex-col justify-center items-center">
                  <Headline as="h1" size="lg">
                    Headline
                  </Headline>
                  <Paragraph>With some text</Paragraph>
                </div>
              ),
            },
            {
              render: () => (
                <div class="bg-teal-500 w-full h-full flex justify-center items-center">
                  Some Content
                </div>
              ),
            },
            {
              render: () => (
                <div class="bg-blue-500 w-full h-full flex justify-center items-center">
                  Another content
                </div>
              ),
            },
          ]}
        />
      </div>
    );
  }
}
