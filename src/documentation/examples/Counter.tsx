import Vue from "vue";
import Component from "vue-class-component";

import { Counter } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <Counter label="Counter" value={123} />
      </div>
    );
  }
}
