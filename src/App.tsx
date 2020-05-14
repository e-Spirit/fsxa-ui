import { TsxComponent } from "./types";
import Button from "./components/Button";
import { Component } from "vue-property-decorator";
import ButtonDocs from "./documentation/ButtonDocs";

@Component
class App extends TsxComponent {
  render() {
    return (
      <div class="container">
        <ButtonDocs />
      </div>
    );
  }
}
export default App;
