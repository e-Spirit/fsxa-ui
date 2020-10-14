import Vue from "vue";
import Component from "vue-class-component";

import { Sections } from "fsxa-ui";

@Component
export default class App extends Vue {
  render() {
    return (
      <div style="border:1px solid black; width:600px;">
        <Sections.AccordeonSection
          dark={true}
          items={[
            {
              title:
                "A very long title text with some lorem ipsum that is even longer when i add more words",
              text:
                "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            },
            {
              title: "Two",
              text: "The second accordeon",
            },
          ]}
        />
      </div>
    );
  }
}
