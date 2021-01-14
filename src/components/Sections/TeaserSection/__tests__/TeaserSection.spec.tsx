import { fireEvent, render } from "@testing-library/vue";
import TeaserSection from "..";

describe("components/TeaserSections", () => {
  const headline = "test123";
  const kicker = "this is my test";
  const text = "tagline";
  const buttonText = "button";
  const image =
    "https://images.pexels.com/photos/1068349/pexels-photo-1068349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

  it("checks if passed content exists", () => {
    const { getByTestId } = render(TeaserSection, {
      props: {
        headline,
        kicker,
        text,
        buttonText,
        image: { src: image },
      },
    });
    expect(getByTestId("teasersection-button")).toBeTruthy();
    expect(getByTestId("teasersection-headline")).toBeTruthy();
    expect(getByTestId("teasersection-kicker")).toBeTruthy();
    expect(getByTestId("teasersection-text")).toBeTruthy();
    expect(getByTestId("teasersection-image")).toBeTruthy();
  });

  it("emits an event on button click", async () => {
    const { getByTestId, emitted } = render(TeaserSection, {
      props: {
        headline,
        kicker,
        text,
        buttonText,
        image: { src: image },
      },
    });
    const button = getByTestId("teasersection-button");
    await fireEvent(button, new Event("click"));
    // Since we don't emit any value, emitted().click[0][0] is empty and has ne content
    // Therefore, we have to check the two-dimensional "click"-array for existence
    expect(emitted().click).toEqual([[]]);
  });

  it("should use scopedSlots to replace the default rendering of headline, kicker, text and button", async () => {
    const { getByTestId } = render(TeaserSection, {
      props: {
        headline: headline,
        text: text,
        kicker: kicker,
        buttonText: buttonText,
        image: { src: image },
      },
      scopedSlots: {
        headline: `<h1 data-testid="scoped-slot-headline">{{props.headline}}</h1>`,
        text: `<p data-testid="scoped-slot-text">{{props.text}}</p>`,
        kicker: `<span data-testid="scoped-slot-kicker">{{props.kicker}}</span>`,
        button: `<button data-testid="scoped-slot-button">{{props.buttonText}}</button>`,
        media: `<img src="{props.image}" data-testid="scoped-slot-image" />`,
      },
    });
    const scopedSlotHeadline = getByTestId("scoped-slot-headline");
    const scopedSlotText = getByTestId("scoped-slot-text");
    const scopedSlotKicker = getByTestId("scoped-slot-kicker");
    const scopedSlotButton = getByTestId("scoped-slot-button");
    const scopedSlotImage = getByTestId("scoped-slot-image");

    expect(() => getByTestId("teasersection-button")).toThrow();
    expect(() => getByTestId("teasersection-headline")).toThrow();
    expect(() => getByTestId("teasersection-kicker")).toThrow();
    expect(() => getByTestId("teasersection-button")).toThrow();
    expect(() => getByTestId("teasersection-image")).toThrow();

    expect(scopedSlotHeadline.nodeName).toBe("H1");
    expect(scopedSlotText.nodeName).toBe("P");
    expect(scopedSlotKicker.nodeName).toBe("SPAN");
    expect(scopedSlotButton.nodeName).toBe("BUTTON");
    expect(scopedSlotImage.nodeName).toBe("IMG");
  });
});
