import { fireEvent, render, getByTestId } from "@testing-library/vue";
import TeaserSection from "..";

describe("components/TeaserSections", () => {
  const headlineTest = "test123";
  const kickerTest = "this is my test";
  const textTest = "tagline";
  const buttonText = "button";

  it("checks if passed content exists", () => {
    const { getByTestId } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        kicker: kickerTest,
        text: textTest,
        buttonText: buttonText,
      },
    });
    expect(getByTestId("teasersection-button")).toBeTruthy();
    expect(getByTestId("teasersection-headline")).toBeTruthy();
    expect(getByTestId("teasersection-kicker")).toBeTruthy();
    expect(getByTestId("teasersection-text")).toBeTruthy();
  });

  it("calls handleClick callback on click", async () => {
    const spy = jest.fn();
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
    await fireEvent(button, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });

  it("consumes the specified image", async () => {
    const imageSource = "my test image";
    const { container } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        kicker: kickerTest,
        text: textTest,
        buttonText: buttonText,
        image: { src: imageSource },
      },
    });
    // image cannot be identified by src because of lazy loading - so we just check if there is an image:
    expect(container.querySelector(".Image")?.innerHTML).toContain("img");
  });

  it("should use scopedSlots to replace the default rendering of headline, kicker and text", () => {
    const { getByTestId } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        text: textTest,
        kicker: kickerTest,
      },
      scopedSlots: {
        headline: `<h1 data-testid="scoped-slot-headline">{{props.headline}}</h1>`,
        text: `<p data-testid="scoped-slot-text">{{props.text}}</p>`,
        kicker: `<span data-testid="scoped-slot-kicker">{{props.kicker}}</span>`,
      },
    });
    const scopedSlotHeadline = getByTestId("scoped-slot-headline");
    const scopedSlotText = getByTestId("scoped-slot-text");
    const scopedSlotKicker = getByTestId("scoped-slot-kicker");

    expect(() => getByTestId("teasersection-button")).toThrow();
    expect(() => getByTestId("teasersection-headline")).toThrow();
    expect(() => getByTestId("teasersection-kicker")).toThrow();

    expect(scopedSlotHeadline.nodeName).toBe("H1");
    expect(scopedSlotText.nodeName).toBe("P");
    expect(scopedSlotKicker.nodeName).toBe("SPAN");
  });
});
