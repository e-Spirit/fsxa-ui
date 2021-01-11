import Vue from "vue";
import Component from "vue-class-component";

import { Container } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Container>Container</Container>
        <Container fluid>Container fluid</Container>
        <Container verticalPadding={false}>
          Container without vertical padding
        </Container>
        <Container horizontalPadding={false}>
          Container without horizontal padding
        </Container>
      </div>
    );
  }
}
