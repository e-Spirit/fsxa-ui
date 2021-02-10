import Vue from "vue";
import Component from "vue-class-component";
import { Accordion } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <div class="ui-m-2 ui-w-1/3">
          <Accordion dark={true} title="Click on me to open">
            This is some example text.
          </Accordion>
          <Accordion open title="I am open by default">
            This is another example text.
          </Accordion>
        </div>
      </div>
    );
  }
}
