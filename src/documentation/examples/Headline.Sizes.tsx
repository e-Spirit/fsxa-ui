import Vue from "vue";
import Component from "vue-class-component";

import { Headline } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Headline as="span" size="sm">
          SM FSXAHeadline
        </Headline>
        <Headline as="span" size="md">
          MD FSXAHeadline
        </Headline>
        <Headline as="span" size="lg">
          LG FSXAHeadline
        </Headline>
        <Headline as="span" size="xl">
          XL FSXAHeadline
        </Headline>
        <Headline as="span" size="xxl">
          XXL FSXAHeadline
        </Headline>
      </div>
    );
  }
}
