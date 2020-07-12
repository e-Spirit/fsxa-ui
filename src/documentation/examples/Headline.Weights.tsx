import Vue from "vue";
import Component from "vue-class-component";

import { Headline } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Headline as="span" size="md">
          BOLD Headline
        </Headline>
        <Headline as="span" size="md" weight="light">
          LIGHT Headline
        </Headline>
      </div>
    );
  }
}
