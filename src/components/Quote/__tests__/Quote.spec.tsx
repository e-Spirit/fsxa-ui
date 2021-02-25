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

describe("components/Quote ErrorHandling", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should throw error when 'side' is not available", async () => {
    expect(() =>
      render(Quote, {
        props: {
          side: "center",
        },
      }),
    ).toThrowError();
  });
});
