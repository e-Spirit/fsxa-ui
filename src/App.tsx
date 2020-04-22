import { TsxComponent } from "./types";
import Button from "./components/Button";
import { Component } from "vue-property-decorator";

@Component
class App extends TsxComponent {
  render() {
    return (
      <div class="container">
        <Button size="lg" variant="default">
          Mit Inhalt
        </Button>
      </div>
    );
  }
}
export default App;
