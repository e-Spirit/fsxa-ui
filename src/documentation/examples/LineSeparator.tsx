import Vue from "vue";
import Component from "vue-class-component";

import { LineSeparator } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-y-4">
        <div>Default LineSeparator:</div>
        <LineSeparator />
        <div>LineSeparator height 1, 2, and 4:</div>
        <LineSeparator height="1" />
        <LineSeparator height="2" />
        <LineSeparator height="4" />
        <div>LineSeparator on the right:</div>
        <LineSeparator side="right" />
        <div>LineSeparator width 4 - 64:</div>
        <LineSeparator width="4" />
        <LineSeparator width="8" />
        <LineSeparator width="16" />
        <LineSeparator width="32" />
        <LineSeparator width="64" />
        <div>Two LineSeparators (widht 32 and width 64) on the right:</div>
        <LineSeparator side="right" width="32" />
        <LineSeparator side="right" width="64" />
        <div>Full width LineSeparator:</div>
        <LineSeparator width="full" />
        <div>LineSeparator with breakpoints:</div>
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
