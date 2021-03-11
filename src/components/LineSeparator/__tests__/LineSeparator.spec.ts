import { render } from "@testing-library/vue";
import LineSeparator from "./../";

describe("components/LineSeparator", () => {
  it("renders the correct default", () => {
    const { getByTestId } = render(LineSeparator);
    const separator = getByTestId("separator-test");
    expect(separator.classList.contains("ui-w-16")).toBeTruthy();
    expect(separator.classList.contains("ui-h-2")).toBeTruthy();
  });
  it("renders with different properties", () => {
    const height = "1";
    const side = "right";
    const width = "8";
    const { getByTestId } = render(LineSeparator, {
      props: {
        height,
        width,
        side,
      },
    });
    const separator = getByTestId("separator-test");
    const flex = getByTestId("flex-test");
    expect(separator.classList.contains("ui-h-1")).toBeTruthy();
    expect(flex.classList.contains("ui-flex-row-reverse")).toBeTruthy();
    expect(separator.classList.contains("ui-w-8")).toBeTruthy();
  });
  it("checks if the component is rendered for different devices correctly", () => {
    const width = "8";
    const sm_width = "full";
    const md_width = "64";
    const lg_width = "32";
    const xl_width = "16";

    const { getByTestId } = render(LineSeparator, {
      props: {
        width,
        sm_width,
        md_width,
        lg_width,
        xl_width,
      },
    });
    const separator = getByTestId("separator-test");
    expect(separator.classList.contains("ui-w-8")).toBeTruthy();
    expect(separator.classList.contains("sm:ui-w-full")).toBeTruthy();
    expect(separator.classList.contains("md:ui-w-64")).toBeTruthy();
    expect(separator.classList.contains("lg:ui-w-32")).toBeTruthy();
    expect(separator.classList.contains("xl:ui-w-16")).toBeTruthy();
  });
});

describe("components/LineSeparator ErrorHandling", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should throw error when 'width' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          width: "2",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'sm_width' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          sm_width: "2",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'md_width' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          md_width: "2",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'lg_width' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          lg_width: "2",
        },
      }),
    ).toThrowError();
  });

  it("should throw error when 'xl_width' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          xl_width: "2",
        },
      }),
    ).toThrowError();
  });
  it("should throw error when 'height' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          height: "5",
        },
      }),
    ).toThrowError();
  });
  it("should throw error when 'side' is not available", async () => {
    expect(() =>
      render(LineSeparator, {
        props: {
          side: "center",
        },
      }),
    ).toThrowError();
  });
});
