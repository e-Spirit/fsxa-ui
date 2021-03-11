import Vue from "vue";
import Component from "vue-class-component";

import { Container } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Container class="ui-bg-pink-300">Container</Container>
        <Container fluid class="ui-bg-gray-300">
          Container fluid
        </Container>
        <Container class="ui-bg-gray-600" verticalPadding={false}>
          Container without vertical padding
        </Container>
        <Container horizontalPadding={false} class="ui-bg-pink-600">
          Container without horizontal padding
        </Container>
      </div>
    );
  }
}
