import { render } from "@testing-library/vue";
import InterestingFactsSection from "..";

describe("components/InterestingFactsSection", () => {
  it("checks if content will be passed", () => {
    const content = "this is my headline";
    const textContent = "this is my text";
    const testTagline = "testtag";
    const { getByTestId } = render(InterestingFactsSection, {
      props: {
        headline: content,
        text: textContent,
        tagline: testTagline,
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
    const headline = getByTestId("interestingfactssection-headline");
    const text = getByTestId("interestingfactssection-text");
    const tagline = getByTestId("interestingfactssection-tagline");
    expect(headline).toBeTruthy();
    expect(text).toBeTruthy();
    expect(tagline).toBeTruthy();
  });
});
