import { render } from "@testing-library/vue";
import VideoSection from "..";

const dummyId = "N0tRe4lYTID";
const testYtUrl = "http://not-a-real-url.org/player/";

describe("components/sections/video-section", () => {
  it("renders an iframe with the expected src attribute", () => {
    const { getByTestId } = render(VideoSection, {
      props: {
        youtubeId: dummyId,
        youtubeUrl: testYtUrl,
      },
    });
    const videoSection = getByTestId("fsxa-video-section");
    expect(videoSection?.querySelector("iframe")?.getAttribute("src")).toEqual(
      `${testYtUrl}${dummyId}`,
    );
  });

  it("processes width attribute and calculates height", () => {
    const { getByTestId } = render(VideoSection, {
      props: {
        youtubeId: dummyId,
        width: 500,
      },
    });
    const videoSection = getByTestId("fsxa-video-section");
    expect(
      videoSection?.querySelector("iframe")?.getAttribute("height"),
    ).toEqual("281.25");
  });

  it("concatenates parameters correctly", () => {
    const { getByTestId } = render(VideoSection, {
      props: {
        youtubeId: dummyId,
        parameters: [
          { param: "p1", value: "v1" },
          { param: "p2", value: "v2" },
          { param: "p3", value: "v3" },
        ],
      },
    });
    const videoSection = getByTestId("fsxa-video-section");
    expect(
      videoSection?.querySelector("iframe")?.getAttribute("src"),
    ).toContain(`/${dummyId}?p1=v1&p2=v2&p3=v3`);
  });

  it("displays a title when provided", () => {
    const testTitle = "my youtube test section test title";
    const { getByTestId } = render(VideoSection, {
      props: {
        youtubeId: dummyId,
        title: testTitle,
      },
    });
    const videoSection = getByTestId("fsxa-video-section");
    expect(videoSection.innerHTML).toContain(testTitle);
  });

  it("accepts a YouTube URL not ending with a slash", () => {
    const playerUrlWithoutSlash = "http://no-player";
    const { getByTestId } = render(VideoSection, {
      props: {
        youtubeId: dummyId,
        youtubeUrl: playerUrlWithoutSlash,
      },
    });
    const videoSection = getByTestId("fsxa-video-section");
    expect(videoSection?.querySelector("iframe")?.getAttribute("src")).toEqual(
      `${playerUrlWithoutSlash}/${dummyId}`,
    );
  });
});
