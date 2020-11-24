import { render, fireEvent, getByTestId } from "@testing-library/vue";
import NewsTeaserItem from "./../";
const title = "title test";
const date = "02.02.2020";
const description = "desc test";
describe("components/NewsTeaserItem", () => {
  it("calls handleClick callback on call", async () => {
    const spy = jest.fn();
    const { getByTestId } = render(NewsTeaserItem, {
      props: { title, date, description, handleClick: spy },
    });
    const readMore = getByTestId("newsteaseritem-click");
    await fireEvent(readMore!, new Event("click"));
    expect(spy).toHaveBeenCalled();
  });
  it("checks if passed content renders", () => {
    const { getByText } = render(NewsTeaserItem, {
      props: { title, date, description },
    });
    const titleTest = getByText(title);
    const dateTest = getByText(date);
    const descTest = getByText(description);
    expect(titleTest).toBeTruthy();
    expect(dateTest).toBeTruthy();
    expect(descTest).toBeTruthy();
  });
  it("checks if latest is working on true", () => {
    const { getByTestId } = render(NewsTeaserItem, {
      props: { title, date, description, latest: true },
    });
    const latestTest = getByTestId("newsteaseritem-latest");
    expect(latestTest!.classList.contains("is-latest")).toBe(true);
  });
});
