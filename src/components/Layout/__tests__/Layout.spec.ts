import { render } from "@testing-library/vue";
import Layout from "../.";

describe("components/Layout", () => {
  it("renders the component responsive", () => {
    const { getByTestId } = render(Layout);
    const layoutTest = getByTestId("layout-test");
    expect(layoutTest.classList.contains("sm"));
    expect(layoutTest.classList.contains("md"));
    expect(layoutTest.classList.contains("lg"));
    expect(layoutTest.classList.contains("xl"));
  });
});
