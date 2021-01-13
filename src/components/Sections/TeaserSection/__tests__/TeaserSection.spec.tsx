import { fireEvent, render } from "@testing-library/vue";
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

  it("emits an event on button click", async () => {
    const { getByTestId, emitted } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        kicker: kickerTest,
        text: textTest,
        buttonText: buttonText,
      },
    });
    const button = getByTestId("teasersection-button");
    await fireEvent(button, new Event("click"));
    // Since we don't emit any value, emitted().click[0][0] is empty and has ne content
    // Therefore, we have to check the two-dimensional "click"-array for existence
    expect(emitted().click).toEqual([[]]);
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

  it("should use scopedSlots to replace the default rendering of headline, kicker, text and button", async () => {
    const { getByTestId } = render(TeaserSection, {
      props: {
        headline: headlineTest,
        text: textTest,
        kicker: kickerTest,
        buttonText: buttonText,
      },
      scopedSlots: {
        headline: `<h1 data-testid="scoped-slot-headline">{{props.headline}}</h1>`,
        text: `<p data-testid="scoped-slot-text">{{props.text}}</p>`,
        kicker: `<span data-testid="scoped-slot-kicker">{{props.kicker}}</span>`,
        button: `<button data-testid="scoped-slot-button">{{props.buttonText}}</button>`,
      },
    });
    const scopedSlotHeadline = getByTestId("scoped-slot-headline");
    const scopedSlotText = getByTestId("scoped-slot-text");
    const scopedSlotKicker = getByTestId("scoped-slot-kicker");
    const scopedSlotButton = getByTestId("scoped-slot-button");

    expect(() => getByTestId("teasersection-button")).toThrow();
    expect(() => getByTestId("teasersection-headline")).toThrow();
    expect(() => getByTestId("teasersection-kicker")).toThrow();
    expect(() => getByTestId("teasersection-button")).toThrow();

    expect(scopedSlotHeadline.nodeName).toBe("H1");
    expect(scopedSlotText.nodeName).toBe("P");
    expect(scopedSlotKicker.nodeName).toBe("SPAN");
    expect(scopedSlotButton.nodeName).toBe("BUTTON");
  });
});
