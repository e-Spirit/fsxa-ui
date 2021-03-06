import Vue from "vue";
import Component from "vue-class-component";

import { Headline } from "fsxa-ui";

const handleClick = () => {
  console.log("headline click");
};

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Headline as="h1" size="md" uppercase={false} handleClick={handleClick}>
          H1 HEADLINE - clickable
        </Headline>
      </div>
    );
  }
}
