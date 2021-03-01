import BaseComponent from "@/components/BaseComponent";
import LineSeparator from "@/components/LineSeparator";
import Headline from "@/components/Headline";
import { VideoSectionProps } from "@/types/sections";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "VideoSection",
})
class VideoSection extends BaseComponent<VideoSectionProps> {
  @Prop({ required: true }) youtubeId!: VideoSectionProps["youtubeId"];
  @Prop() width: VideoSectionProps["width"];
  @Prop() height: VideoSectionProps["height"];
  @Prop() title: VideoSectionProps["title"];
  @Prop() description: VideoSectionProps["description"];
  @Prop() parameters: VideoSectionProps["parameters"];
  @Prop() youtubeUrl: VideoSectionProps["youtubeUrl"];

  properties() {
    return this.parameters
      ? this.parameters.reduce(
          (resultStr, item, index) =>
            `${resultStr}${index > 0 ? "&" : ""}${item.param}=${item.value}`,
          "?",
        )
      : "";
  }

  render() {
    const videoWidth = this.width ? this.width : 560;
    const url = this.youtubeUrl
      ? this.youtubeUrl.endsWith("/")
        ? this.youtubeUrl
        : this.youtubeUrl + "/"
      : "https://www.youtube-nocookie.com/embed/";
    return (
      <div
        data-testid="fsxa-video-section"
        class="ui-relative md:ui-mx-8 ui-mt-4 md:ui-mt-0 lg:ui-pl-0"
      >
        {this.title && <Headline>{this.title}</Headline>}
        {this.title && <LineSeparator />}
        <iframe
          class="ui-m-auto"
          width={videoWidth}
          height={this.height ? this.height : (videoWidth / 16) * 9}
          src={`${url}${this.youtubeId}${this.properties()}`}
          frameborder="0"
          allowfullscreen
        />
        {this.description && (
          <div class="ui-text-center ui-m-3">{this.description}</div>
        )}
      </div>
    );
  }
}
export default VideoSection;
