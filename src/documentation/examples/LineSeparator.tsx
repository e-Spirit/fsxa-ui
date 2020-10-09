import Vue from "vue";
import Component from "vue-class-component";

import { LineSeparator } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-y-4">
        <LineSeparator />
        <LineSeparator height="1" />
        <LineSeparator height="2" />
        <LineSeparator height="4" />
        <LineSeparator side="right" />
        <LineSeparator width="4" />
        <LineSeparator width="8" />
        <LineSeparator width="16" />
        <LineSeparator side="right" width="32" />
        <LineSeparator width="32" />
        <LineSeparator side="right" width="64" />
        <LineSeparator width="64" />
        <LineSeparator width="full" />
        <LineSeparator
          width="8"
          sm_width="full"
          md_width="64"
          lg_width="32"
          xl_width="16"
        />
      </div>
    );
  }
}
