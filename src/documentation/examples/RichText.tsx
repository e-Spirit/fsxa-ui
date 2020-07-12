import Vue from "vue";
import Component from "vue-class-component";

import { RichText } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        <RichText content="This is a RichText." />
      </div>
    );
  }
}
