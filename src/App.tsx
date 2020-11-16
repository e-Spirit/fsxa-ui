import { Component } from "vue-property-decorator";
import Vue from "vue";
import Documentation from "./documentation";
@Component
class App extends Vue {
  render() {
    return <Documentation />;
  }
}
export default App;
