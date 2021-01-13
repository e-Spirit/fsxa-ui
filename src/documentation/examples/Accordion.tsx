import Vue from "vue";
import Component from "vue-class-component";
import { Accordion } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <div class="m-2 w-1/3">
          <Accordion dark={true} title="test title">
            test test test test
          </Accordion>
        </div>
      </div>
    );
  }
}
