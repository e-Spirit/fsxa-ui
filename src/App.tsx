import { Component } from "vue-property-decorator";
import Vue from "vue";
import FSXAButton from "./components/FSXAButton";

@Component
class App extends Vue {
  render() {
    return <FSXAButton variant="animated" />;
  }
}
export default App;
