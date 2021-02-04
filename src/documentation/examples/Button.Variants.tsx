import Vue from "vue";
import Component from "vue-class-component";

import { Button } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <Button>Default</Button>
        <Button variant="animated">Animated</Button>
        <Button variant="inverted">Inverted</Button>
        <Button variant="tag">Tag</Button>
        <Button variant="tag-selected">Selected Tag</Button>
      </div>
    );
  }
}
