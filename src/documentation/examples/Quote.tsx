import Vue from "vue";
import Component from "vue-class-component";

import { Quote } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-y-2">
        <Quote>
          <div class="ui-text-lg">
            Earth provides enough to satisfy every man's need but not for every
            man's greed.
          </div>
          <div class="ui-mt-1">
            <i>Mahatma Gandhi</i>
          </div>
        </Quote>
        <Quote side="right">
          <div class="ui-text-lg">
            Generations to come, it may well be, will scarce believe that such a
            man as this one ever in flesh and blood walked upon this Earth.
          </div>
          <div class="ui-mt-1">
            <i>Albert Einstein on Gandhi</i>
          </div>
        </Quote>
      </div>
    );
  }
}
