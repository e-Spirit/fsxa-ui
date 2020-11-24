import { render } from "@testing-library/vue";
import InterestingFactsSection from "..";

describe("components/InterestingFactsSection", () => {
  const content = "this is my headline";
  const textContent = "this is my text";
  const testTagline = "testtag";
  const testCounters = [
    {
      value: 200,
      label: "test",
    },
    {
      value: 2000,
      label: "test1",
    },
  ];
  it("checks if content will be passed", () => {
    const { getByTestId } = render(InterestingFactsSection, {
      props: {
        headline: content,
        text: textContent,
        tagline: testTagline,
        counters: testCounters,
      },
    });
    const headline = getByTestId("interestingfactssection-headline");
    const text = getByTestId("interestingfactssection-text");
    const tagline = getByTestId("interestingfactssection-tagline");
    expect(headline.innerHTML).toEqual(expect.stringContaining(content));
    expect(text.innerHTML).toEqual(expect.stringContaining(textContent));
    expect(tagline.innerHTML).toEqual(expect.stringContaining(testTagline));
  });

  it("consumes the specified image", async () => {
    const imageSource = "my test image";
    const imagePreviewId = "42";
    const testImage = { src: imageSource, previewId: imagePreviewId };
    const { container } = render(InterestingFactsSection, {
      props: {
        headline: content,
        text: textContent,
        tagline: testTagline,
        counters: testCounters,
        backgroundImage: testImage,
      },
    });
    const backgroundImage = container.querySelector(
      ".InterestingFactsSection--BackgroundImage",
    );
    expect(backgroundImage?.getAttribute("data-preview-id")).toBe(
      imagePreviewId,
    );
  });
});
