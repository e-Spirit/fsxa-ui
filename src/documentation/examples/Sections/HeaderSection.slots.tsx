import Vue from "vue";
import Component from "vue-class-component";

import HeaderSection from "@/components/Sections/HeaderSection";
import { Image } from "@/components";

const imageSrc =
  "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <HeaderSection
          backgroundImage={{
            type: "image",
            src: imageSrc,
          }}
          title="test two - a headline for the example with slots"
          breadcrumbs={[]}
          handleItemClick={() => {
            return;
          }}
          scopedSlots={{
            title: title => (
              <h2 class="ui-my-20 ui-italic ui-text-lg ui-tracking-wide ui-relative">
                {title}
              </h2>
            ),
            backgroundImage: ({ src }) => (
              <Image
                src={src}
                class="ui-absolute ui-top-0 ui-left-0 ui-w-full ui-h-full"
                opacity="40"
              />
            ),
            breadcrumbs: () => <div>my own breadcrumbs alternative</div>,
          }}
        ></HeaderSection>
      </div>
    );
  }
}
