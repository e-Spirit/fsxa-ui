import Vue from "vue";
import Component from "vue-class-component";

import ImageSlider from "@/components/ImageSlider";

const imageOne =
  "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80";

const imageTwo =
  "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <ImageSlider images={[{ src: imageOne }, { src: imageTwo }]} />
      </div>
    );
  }
}
