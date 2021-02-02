import Vue from "vue";
import Component from "vue-class-component";

import { Headline } from "fsxa-ui";

/* These headlines of different levels all look the
   same - but for accessability reasons indicating
   the heading's level may be useful */

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Headline as="h1" size="md">
          H1 Headline
        </Headline>
        <Headline as="h2" size="md">
          H2 Headline
        </Headline>
        <Headline as="h3" size="md">
          H3 Headline
        </Headline>
        <Headline as="h4" size="md">
          H4 Headline
        </Headline>
        <Headline as="h5" size="md">
          H5 Headline
        </Headline>
        <Headline as="span" size="md">
          SPAN Headline
        </Headline>
      </div>
    );
  }
}
