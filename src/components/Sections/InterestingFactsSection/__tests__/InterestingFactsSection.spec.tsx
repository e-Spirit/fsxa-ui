import { render } from "@testing-library/vue";
import InterestingFactsSection from "..";

describe("components/InterestingFactsSection", () => {
  it("checks if content will be passed", () => {
    const content = "this is my headline";
    const textcontent = "this is my text";
    const testtagline = "testtag";
    const { container } = render(InterestingFactsSection, {
      props: {
        headline: content,
        text: textcontent,
        tagline: testtagline,
        counters: [
          {
            value: 200,
            label: "test",
          },
          {
            value: 2000,
            label: "test1",
          },
        ],
      },
    });
    const headline = container.querySelector(
      ".InterestingFactsSection--Content [data-testid='interestingfactssection-headline']",
    );
    const text = container.querySelector(
      ".InterestingFactsSection--Content [data-testid='interestingfactssection-text']",
    );
    const tagline = container.querySelector(
      ".InterestingFactsSection--Content [data-testid='interestingfactssection-tagline']",
    );
    expect(headline).toBeTruthy();
    expect(text).toBeTruthy();
    expect(tagline).toBeTruthy();
  });
});
