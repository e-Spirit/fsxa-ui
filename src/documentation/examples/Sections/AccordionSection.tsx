import Vue from "vue";
import Component from "vue-class-component";

import { Sections } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <div class="m-2 max-w-lg">
          <Sections.AccordionSection
            dark={false}
            title={"This title is optional"}
            items={[
              {
                title: "This title is not optional",
                text: "This text is also not optional.",
              },
              {
                title: "When one accordion opens",
                text: "Another one closes.",
              },
              {
                title: "You can add as many Accordions as you want",
                text:
                  "And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. ",
              },
            ]}
          />
        </div>
        <div class="m-2 max-w-xl">
          <Sections.AccordionSection
            dark={true}
            items={[
              {
                title: "This is a dark accordion section",
                text: "And as you can see it has no title",
              },
              {
                title:
                  "The width of the Accordion depends on the width of the container",
                text:
                  "And the overflow is hidden. So choose your words carefully.",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
