import Vue from "vue";
import Component from "vue-class-component";

import { Image } from "@/components";
import ImageSlider from "@/components/ImageSlider";

const imageOne =
  "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80";

const imageTwo =
  "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-px-24 ui-w-full" style="height: 400px">
        <ImageSlider<Image>
          images={[{ src: imageOne }, { src: imageTwo }]}
          scopedSlots={{
            image: (props: any) => (
              <Image
                src={props.image.src}
                style="border:#CCC 0.5rem inset;transform: rotate(11deg);"
                {...props.image}
              />
            ),
          }}
        />
      </div>
    );
  }
}
