import { render } from "@testing-library/vue";
import Counter from "./../";

describe("components/Counter", () => {
  it("should render counter with both properties, value and label, in excluse html elements", () => {
    const counterValue = "23";
    const counterLabel = "my counter";
    const { getByText } = render(Counter, {
      props: {
        value: counterValue,
        label: counterLabel,
      },
    });
    const counterLabelDiv = getByText(counterLabel);
    const counterValueDiv = getByText(counterValue);
    expect(counterLabelDiv).toBeTruthy();
    expect(counterValueDiv).toBeTruthy();
  });
});
