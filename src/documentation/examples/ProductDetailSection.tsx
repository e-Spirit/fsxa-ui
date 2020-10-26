import Vue from "vue";
import Component from "vue-class-component";

import ProductDetailSection from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5 mb-10 ml-64">
        <ProductDetailSection></ProductDetailSection>
      </div>
    );
  }
}
