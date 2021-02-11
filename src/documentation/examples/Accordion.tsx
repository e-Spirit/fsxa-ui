import Vue from "vue";
import Component from "vue-class-component";
import { Accordion } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <div class="ui-m-2 ui-w-1/3">
          <Accordion dark={true} title="test accordion">
            This is not a musical instrument
            <br />
            but a <i>gui</i> element
          </Accordion>
        </div>
      </div>
    );
  }
}
