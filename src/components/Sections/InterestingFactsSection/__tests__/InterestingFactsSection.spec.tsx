import { render, getByTestId } from "@testing-library/vue";
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
  it("should replace the default rendering of headline, text, tagline and counters props when the scopedSlots are being used", async () => {
    const { getByTestId } = render(InterestingFactsSection, {
      props: {
        headline: content,
        text: textContent,
        tagline: testTagline,
        counters: testCounters,
      },
      scopedSlots: {
        headline: `<h1 data-testid="scoped-slot-headline">{{props.headline}}</h1>`,
        text: `<p data-testid="scoped-slot-text">{{props.text}}</p>`,
        tagline: `<span data-testid="scoped-slot-tagline">{{props.tagline}}</span>`,
        counters: `<div data-testid="scoped-slot-counters">{{props.counters}}</div>`,
      },
    });
    const scopedSlotHeadline = getByTestId("scoped-slot-headline");
    const scopedSlotTagline = getByTestId("scoped-slot-tagline");
    const scopedSlotText = getByTestId("scoped-slot-text");
    const scopedSlotCounters = getByTestId("scoped-slot-counters");

    expect(() => getByTestId("interestingfactssection-headline")).toThrow();
    expect(() => getByTestId("interestingfactssection-tagline")).toThrow();
    expect(() => getByTestId("interestingfactssection-text")).toThrow();
    testCounters.forEach((c, index) => {
      expect(() =>
        getByTestId(`interestingfactssection-counter-${index}`),
      ).toThrow();
    });

    expect(scopedSlotHeadline.nodeName).toBe("H1");
    expect(scopedSlotTagline.nodeName).toBe("SPAN");
    expect(scopedSlotText.nodeName).toBe("P");
    expect(scopedSlotCounters.nodeName).toBe("DIV");
  });
});
