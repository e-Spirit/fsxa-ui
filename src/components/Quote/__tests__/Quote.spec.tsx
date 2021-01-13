import { render } from "@testing-library/vue";
import Quote from "./../";

describe("components/Quote", () => {
  it("checks left side", () => {
    const { container } = render(Quote, {
      props: {
        side: "left",
      },
    });
    const side = container.querySelector(".direction");
    if (side == null) {
      fail(".direction container not found");
    } else {
      expect(side.classList.contains("direction--left")).toBe(true);
    }
  });
  it("checks right side", () => {
    const { container } = render(Quote, {
      props: {
        side: "right",
      },
    });
    const side = container.querySelector(".direction");
    if (side == null) {
      fail(".direction container not found");
    } else {
      expect(side.classList.contains("direction--right")).toBe(true);
    }
  });
});
