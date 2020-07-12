import Vue from "vue";
import Component from "vue-class-component";

import { Quote } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Quote>This is a quote!</Quote>
        <Quote side="right">This is a quote!</Quote>
      </div>
    );
  }
}
