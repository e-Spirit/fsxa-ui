import * as tsx from "vue-tsx-support";
import Button from "./components/Button";
import { Component } from "vue-property-decorator";
import ButtonDocs from "./documentation/ButtonDocs";

@Component
class App extends tsx.Component<{}> {
  render() {
    return (
      <div class="container">
        <ButtonDocs />
      </div>
    );
  }
}
export default App;
