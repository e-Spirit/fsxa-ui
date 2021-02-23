import Vue from "vue";
import Component from "vue-class-component";
import Headline from "@/components/Headline";

import { Sections } from "fsxa-ui";
import { VideoSectionProps } from "@/types/fsxa-ui";

const playerProps: VideoSectionProps["parameters"] = [
  { param: "rel", value: "0" },
  { param: "modestbranding", value: "1" },
  { param: "start", value: "55" },
];

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Headline>Very simple video section</Headline>
        <Sections.VideoSection youtubeId="4TnUEtHe34k" />

        <Sections.VideoSection
          youtubeId="4TnUEtHe34k"
          title="Parameterized video section"
          width={500}
          parameters={playerProps}
        />

        <Sections.VideoSection
          youtubeId="4TnUEtHe34k"
          title="Bigger video section, without controls"
          description="(The width of 500 results in a height of 281.25 - no problem for today's relevant browsers)"
          width={800}
          parameters={[{ param: "controls", value: "0" }]}
        />

        <Sections.VideoSection
          youtubeId="4TnUEtHe34k"
          title="Acpect ratio 5:4 video section"
          width={500}
          height={400}
        />
      </div>
    );
  }
}
