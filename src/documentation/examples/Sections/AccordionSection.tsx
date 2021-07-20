import Vue from "vue";
import Component from "vue-class-component";

import { Sections } from "fsxa-ui";
import { LineSeparator } from "@/components";

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <div class="ui-m-2 ui-max-w-lg">
          <Sections.AccordionSection
            dark={false}
            title={"This title (together with the separator line) is optional"}
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
                title: "You can add as many Accordions as you want.",
                text: "And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be. And this text can be as long as you want it to be.",
              },
            ]}
          />
        </div>

        <LineSeparator></LineSeparator>

        <div class="ui-m-2 ui-max-w-xl">
          <Sections.AccordionSection
            dark={true}
            title={"A dark accordion section"}
            items={[
              {
                title:
                  "The width of the Accordion depends on the width of the container, the title does not break...",
                text: "And the overflow is hidden. So choose your words carefully. (The expanded text can be longer, as seen in the previous example).",
              },
              {
                title: "By using brackets...",
                text: (
                  <div>
                    You can also include <i>HTML</i> markup.
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
