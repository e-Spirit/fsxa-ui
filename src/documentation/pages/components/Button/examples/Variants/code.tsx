import Vue from "vue";
import Component from "vue-class-component";

import { FSXAButton } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        <FSXAButton variant="default">Default</FSXAButton>
        <FSXAButton variant="animated">Animated</FSXAButton>
        <FSXAButton variant="inverted">Inverted</FSXAButton>
        <FSXAButton variant="tag">Tag</FSXAButton>
      </div>
    );
  }
}
