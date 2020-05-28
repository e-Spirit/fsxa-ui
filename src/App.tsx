import * as tsx from "vue-tsx-support";
import { Component } from "vue-property-decorator";

@Component
class App extends tsx.Component<{}> {
  render() {
    return <div>App</div>;
  }
}
export default App;
