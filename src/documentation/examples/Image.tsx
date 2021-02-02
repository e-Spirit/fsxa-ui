import Vue from "vue";
import Component from "vue-class-component";

import { Image } from "fsxa-ui";

const imageSrc =
  "https://enterpriseprod.e-spirit.cloud/smartliving/media/images/Content/Couple-with-tablet-2_welcome_slider.jpg";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-w-full lg:ui-w-2/3 lg:ui-mx-auto">
        <Image src={imageSrc} darken={0} zoom={true} />
        <Image src={imageSrc} darken={40} zoom={false} />
        <Image src={imageSrc} darken={80} zoom={true} />
      </div>
    );
  }
}
