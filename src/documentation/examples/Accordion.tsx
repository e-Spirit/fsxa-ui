import Vue from "vue";
import Component from "vue-class-component";
import { Accordion } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <div class="ui-m-2 ui-w-1/3">
          <Accordion dark={true} title="test title">
            test test test test
            <br />
            test line two
          </Accordion>
        </div>
      </div>
    );
  }
}
