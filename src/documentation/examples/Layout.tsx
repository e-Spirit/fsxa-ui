import Vue from "vue";
import Component from "vue-class-component";

import Layout from "@/components/Layout";
import LayoutItem from "@/components/Layout/LayoutItem";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-px24 ui-w-full" style="height: 500px">
        <Layout>
          <LayoutItem>This is a test</LayoutItem>
        </Layout>
      </div>
    );
  }
}
