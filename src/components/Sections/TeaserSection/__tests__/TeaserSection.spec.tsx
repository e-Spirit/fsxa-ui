import { render, fireEvent } from "@testing-library/vue";
import TeaserSection from "..";

describe("components/TeaserSections", () => {
  it("checks if passed content exists", () => {
    const headlinetest = "test123";
    const kickertest = "this is my test";
    const texttest = "tagline";
    const buttontext = "button";
    const { container } = render(TeaserSection, {
      props: {
        headline: headlinetest,
        kicker: kickertest,
        text: texttest,
        buttonText: buttontext,
      },
    });
    const headline = container.querySelector(
      "[data-testid='teasersection-headline']",
    );
    const kicker = container.querySelector(
      "[data-testid='teasersection-kicker']",
    );
    const text = container.querySelector("[data-testid='teasersection-text']");
    const button = container.querySelector(
      "[data-testid='teasersection-button']",
    );
    expect(button).toBeTruthy();
    expect(headline).toBeTruthy();
    expect(kicker).toBeTruthy();
    expect(text).toBeTruthy();
  });
});
