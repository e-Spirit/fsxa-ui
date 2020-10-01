import { fireEvent, render } from "@testing-library/vue";
import TeaserSection from "..";

describe("components/TeaserSections", () => {
  it("checks if passed content exists", () => {
    const headlineTest = "test123";
    const kickerTest = "this is my test";
    const textTest = "tagline";
    const buttonText = "button";
    const { getByTestId } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        kicker: kickerTest,
        text: textTest,
        buttonText: buttonText,
      },
    });
    const headline = getByTestId("teasersection-headline");
    const kicker = getByTestId("teasersection-kicker");
    const text = getByTestId("teasersection-text");
    const button = getByTestId("teasersection-button");
    expect(button).toBeTruthy();
    expect(headline).toBeTruthy();
    expect(kicker).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
    const headlineTest = "test123";
    const kickerTest = "this is my test";
    const textTest = "tagline";
    const buttonText = "button";

    const { getByTestId } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        kicker: kickerTest,
        text: textTest,
        buttonText: buttonText,
        handleButtonClick: spy,
      },
    });
    const button = getByTestId("teasersection-button");
    await fireEvent(button!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
});
